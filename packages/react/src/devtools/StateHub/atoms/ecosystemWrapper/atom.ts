import { metaTypes } from '@zedux/core'
import {
  api,
  atom,
  AtomExportsType,
  AtomInstanceType,
  Ecosystem,
  getEcosystem,
  injectAtomInstance,
  injectEcosystem,
  injectStore,
  Mod,
  ModAction,
  ModPayloadMap,
} from '@zedux/react'
import { LogEvent } from '../../types'
import { destroyedEcosystemWrapper } from '../destroyedEcosystemWrapper'
import { stateHub } from '../stateHub'
import { toasts } from '../toasts'

const handlers: {
  [K in Mod]: (params: {
    ownInstance: AtomInstanceType<typeof ecosystemWrapper>
    payload: ModPayloadMap[K]
    showToast: AtomExportsType<typeof toasts>['showToast']
    stateHubEcosystem: Ecosystem
    wrappedEcosystem: Ecosystem
  }) => void
} = {
  ecosystemDestroyed: ({
    ownInstance,
    showToast,
    stateHubEcosystem,
    wrappedEcosystem,
  }) => {
    const isCurrentEcosystem =
      wrappedEcosystem.ecosystemId ===
      stateHubEcosystem.get(stateHub).ecosystemId

    if (!isCurrentEcosystem) {
      showToast({
        description: `The ecosystem "${wrappedEcosystem.ecosystemId}" was destroyed`,
        title: 'Ecosystem Destroyed',
        type: 'info',
      })
      return
    }

    stateHubEcosystem
      .getInstance(destroyedEcosystemWrapper)
      .setState(ownInstance)
  },
  ecosystemWiped: ({ showToast, wrappedEcosystem }) => {
    showToast({
      description: `The ecosystem "${wrappedEcosystem.ecosystemId}" was wiped`,
      title: 'Ecosystem Wiped',
      type: 'info',
    })
  },
  edgeCreated: ({ ownInstance, wrappedEcosystem }) => {
    ownInstance.store.setStateDeep({
      instances: { ...wrappedEcosystem._instances },
    })
  },
  edgeRemoved: () => {},
  ghostEdgeCreated: () => {},
  ghostEdgeDestroyed: () => {},
  instanceActiveStateChanged: ({ ownInstance, wrappedEcosystem }) => {
    ownInstance.store.setStateDeep({
      instances: { ...wrappedEcosystem._instances },
    })
  },
  instanceStateChanged: ({ ownInstance }) => {
    ownInstance.store.setStateDeep(
      state => ({
        numUpdates: state.numUpdates + 1,
      }),
      metaTypes.SKIP_EVALUATION
    )
  },
}

const rand = btoa(Math.random().toString()).slice(3, 9)

/**
 * Ecosystems aren't reactive. They utilize mutation for performance's sake. But
 * we need to make many parts of an ecosystem essentially "reactive" for the
 * StateHub. That's this wrapper's job.
 *
 * The StateHub plugin feeds this wrapper the stream of mod actions from the
 * ecosystem. This wrapper translates those into state updates that will trigger
 * reactive UI changes throughout the StateHub.
 */
export const ecosystemWrapper = atom(
  'ecosystemWrapper',
  (ecosystemId: string) => {
    const { showToast } = injectAtomInstance(toasts).exports
    const stateHubEcosystem = injectEcosystem()

    // doesn't matter if this variable is recreated on a subsequent evaluation
    // 'cause the initial evaluation's useEffect captured the initial reference
    let idCounter = 0

    const store = injectStore<{
      instances: Ecosystem['_instances']
      log: LogEvent[]
      numUpdates: number
      timeRegistered: number
    }>({
      instances: getEcosystem(ecosystemId)?._instances || {},
      log: [],
      numUpdates: 0,
      timeRegistered: Date.now(),
    })

    const log = (action: ModAction) => {
      const event = {
        action,
        id: `${ecosystemId}-${idCounter++}-${rand}`,
        timestamp: Date.now(),
      }

      store.setState(
        state => ({
          ...state,
          log: [event, ...state.log],
        }),
        // this setState call would trigger an infinite state update loop
        // without this meta type:
        metaTypes.SKIP_EVALUATION
      )

      const wrappedEcosystem = getEcosystem(ecosystemId)
      if (!wrappedEcosystem) return

      const ownInstance = stateHubEcosystem.getInstance(ecosystemWrapper, [
        wrappedEcosystem.ecosystemId,
      ])

      handlers[action.type]({
        ownInstance,
        payload: action.payload as any,
        showToast,
        stateHubEcosystem,
        wrappedEcosystem,
      })
    }

    const subscribeTo = (
      actions: Mod[],
      callback: (action: ModAction) => void
    ) => {
      let isSubscribed = true
      const subscription = getEcosystem(ecosystemId)?.modsMessageBus.subscribe({
        effects: ({ action }) => {
          if (!actions.includes(action?.type as any)) return

          // set a timeout to allow Zedux to update (mutate) all its internal state before we re-read from it
          setTimeout(() => {
            if (isSubscribed) callback(action as any)
          })
        },
      })

      return () => {
        subscription?.unsubscribe()
        isSubscribed = false
      }
    }

    return api(store).setExports({
      getEcosystem: () => getEcosystem(ecosystemId),
      log,
      subscribeTo,
    })
  },
  { ttl: 0 }
)
