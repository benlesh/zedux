import {
  ActionChain,
  createStore,
  isZeduxStore,
  metaTypes,
  Observable,
  removeAllMeta,
  Settable,
  Store,
  Subscription,
} from '@zedux/core'
import {
  ActiveState,
  AtomGetters,
  AtomInstanceType,
  AtomParamsType,
  AtomSelectorOrConfig,
  AtomValue,
  Cleanup,
  EdgeFlag,
  EvaluationReason,
  EvaluationTargetType,
  EvaluationType,
  GraphEdgeInfo,
  GraphEdgeSignal,
  PromiseState,
  PromiseStatus,
  StateType,
} from '@zedux/react/types'
import {
  InjectorDescriptor,
  InjectorType,
  is,
  JobType,
} from '@zedux/react/utils'
import { diContext } from '@zedux/react/utils/csContexts'
import {
  getErrorPromiseState,
  getInitialPromiseState,
  getSuccessPromiseState,
} from '@zedux/react/utils/promiseUtils'
import { Ecosystem } from '../Ecosystem'
import { AtomApi } from '../AtomApi'
import { AtomInstanceBase } from './AtomInstanceBase'
import { StandardAtomBase } from '../atoms/StandardAtomBase'
import { ZeduxPlugin } from '../ZeduxPlugin'

const getStateType = (val: any) => {
  if (isZeduxStore(val)) return StateType.Store

  return StateType.Value
}

const getStateStore = <State extends any = any>(
  factoryResult: AtomValue<State>
) => {
  const stateType = getStateType(factoryResult)

  const stateStore =
    stateType === StateType.Store
      ? (factoryResult as Store<State>)
      : createStore<State>()

  // define how we populate our store (doesn't apply to user-supplied stores)
  if (stateType === StateType.Value) {
    stateStore.setState(
      typeof factoryResult === 'function'
        ? () => factoryResult as State
        : (factoryResult as State)
    )
  }

  return [stateType, stateStore] as const
}

export class AtomInstance<
    State,
    Params extends any[],
    Exports extends Record<string, any>
  >
  extends AtomInstanceBase<
    State,
    Params,
    StandardAtomBase<State, Params, Exports>
  >
  implements AtomGetters {
  public api?: AtomApi<State, Exports>
  public exports: Exports
  public promise?: Promise<any>
  public store: Store<State>

  public _activeState = ActiveState.Initializing
  public _cancelDestruction?: Cleanup
  public _createdAt = Date.now()
  public _injectors?: InjectorDescriptor[]
  public _isEvaluating = false
  public _nextEvaluationReasons: EvaluationReason[] = []
  public _prevEvaluationReasons: EvaluationReason[] = []
  public _promiseError?: Error
  public _promiseStatus?: PromiseStatus
  public _stateType?: StateType

  private _bufferedUpdate?: {
    newState: State
    oldState?: State
    action: ActionChain
  }
  private _subscription?: Subscription

  constructor(
    public readonly ecosystem: Ecosystem,
    public readonly atom: StandardAtomBase<State, Params, Exports>,
    public readonly keyHash: string,
    public readonly params: Params
  ) {
    super()
    const factoryResult = this._doEvaluate()

    ;[this._stateType, this.store] = getStateStore(factoryResult)

    this._subscription = this.store.subscribe((newState, oldState, action) => {
      // buffer updates (with cache size of 1) if this instance is currently
      // evaluating
      if (this._isEvaluating) {
        this._bufferedUpdate = { newState, oldState, action }
        return
      }

      this._handleStateChange(newState, oldState, action)
    })

    // lol
    this.exports = (this as any).exports || undefined
    this._promiseStatus = (this as any)._promiseStatus ?? 'success'

    this.setActiveState(ActiveState.Active)
  }

  public dispatch = (action: ActionChain) => {
    const val = this.api?.dispatchInterceptors?.length
      ? this.api._interceptDispatch(action, (newAction: ActionChain) =>
          this.store.dispatch(newAction)
        )
      : this.store.dispatch(action)

    return val
  }

  public get<A extends StandardAtomBase<any, [...any], any>>(
    atomOrInstance: A | AtomInstanceBase<any, [], any>,
    params?: AtomParamsType<A>
  ): A extends StandardAtomBase<infer T, any, any> ? T : never {
    // TODO: check if the instance exists so we know if we create it here so we
    // can destroy it if the evaluate call errors (to prevent that memory leak)
    const instance = this.ecosystem.getInstance(
      atomOrInstance as A,
      params as AtomParamsType<A>
    )

    // when called outside evaluation, instance.get() is just an alias
    // for ecosystem.get()
    if (!this._isEvaluating) return instance.store.getState()

    // if get is called during evaluation, track the required atom instances so
    // we can add graph edges for them
    this.ecosystem._graph.addEdge(this.keyHash, instance.keyHash, 'get', 0)

    return instance.store.getState()
  }

  public getInstance<A extends StandardAtomBase<any, [...any], any>>(
    atomOrInstance: A,
    params?: AtomParamsType<A>,
    edgeInfo?: GraphEdgeInfo
  ): AtomInstanceType<A> {
    // TODO: check if the instance exists so we know if we create it here so we
    // can destroy it if the evaluate call errors (to prevent that memory leak)
    const instance = this.ecosystem.getInstance(
      atomOrInstance as A,
      params as AtomParamsType<A>
    )

    // when called outside evaluation, instance.getInstance() is just an alias
    // for ecosystem.getInstance()
    if (!this._isEvaluating) return instance

    // if getInstance is called during evaluation, track the required atom
    // instances so we can add graph edges for them
    this.ecosystem._graph.addEdge(
      this.keyHash,
      instance.keyHash,
      edgeInfo?.[1] || 'getInstance',
      edgeInfo?.[0] ?? EdgeFlag.Static
    )

    return instance
  }

  public select<T, Args extends any[]>(
    selectorOrConfig: AtomSelectorOrConfig<T, Args>,
    ...args: Args
  ): T {
    // when called outside evaluation, instance.select() is just an alias for
    // ecosystem.select()
    if (!this._isEvaluating) {
      return this.ecosystem.select(selectorOrConfig, ...args)
    }

    const cache = this.ecosystem._selectorCache.getCache(selectorOrConfig, args)

    this.ecosystem._graph.addEdge(this.keyHash, cache.cacheKey, 'select', 0)

    return cache.result as T
  }

  public setState = (settable: Settable<State>, meta?: any) => {
    const val = this.api?.setStateInterceptors?.length
      ? this.api._interceptSetState(settable, (newSettable: Settable<State>) =>
          this.store.setState(newSettable, meta)
        )
      : this.store.setState(settable, meta)

    return val
  }

  /**
   * Detach this atom instance from the ecosystem and clean up all graph edges
   * and other subscriptions/effects created by this atom instance.
   *
   * Destruction will bail out if this atom instance still has dependents. Pass
   * `true` to force-destroy the atom instance anyway.
   */
  public _destroy(force?: boolean) {
    if (this._activeState === ActiveState.Destroyed) return

    // If we're not force-destroying, don't destroy if there are dependents
    if (
      !force &&
      Object.keys(this.ecosystem._graph.nodes[this.keyHash]?.dependents || {})
        .length
    ) {
      return
    }

    this.setActiveState(ActiveState.Destroyed)

    if (this._nextEvaluationReasons.length) {
      this.ecosystem._scheduler.unscheduleJob(this.evaluationTask)
    }

    // Clean up effect injectors first, then everything else
    const nonEffectInjectors: InjectorDescriptor[] = []
    this._injectors?.forEach(injector => {
      if (injector.type !== InjectorType.Effect) {
        nonEffectInjectors.push(injector)
        return
      }
      injector.cleanup?.()
    })
    nonEffectInjectors.forEach(injector => {
      injector.cleanup?.()
    })

    this.ecosystem._graph.removeDependencies(this.keyHash)
    this._subscription?.unsubscribe()
    this.ecosystem._destroyAtomInstance(this.keyHash)
  }

  /**
   * When a standard atom instance's refCount hits 0 and a ttl is set, we set a
   * timeout to destroy this atom instance.
   */
  public _scheduleDestruction() {
    // the atom is already scheduled for destruction or destroyed
    if (this._activeState !== ActiveState.Active) return

    this.setActiveState(ActiveState.Stale)
    const { maxInstances } = this.atom

    if (maxInstances != null) {
      if (maxInstances === 0) return this._destroy()

      const currentCount = this.ecosystem.findInstances(this.atom).length

      if (currentCount > maxInstances) return this._destroy()
    }

    const ttl = this._getTtl()
    if (ttl == null || ttl === -1) return
    if (ttl === 0) return this._destroy()

    if (typeof ttl === 'number') {
      // ttl is > 0; schedule destruction
      const timeoutId = setTimeout(() => this._destroy(), ttl)

      // TODO: dispatch an action over stateStore for these mutations
      this._cancelDestruction = () => clearTimeout(timeoutId)

      return
    }

    if (typeof (ttl as Promise<any>).then === 'function') {
      let isCanceled = false
      ;(ttl as Promise<any>).then(() => {
        if (!isCanceled) this._destroy()
      })

      this._cancelDestruction = () => {
        isCanceled = true
      }

      return
    }

    // ttl is an observable; destroy as soon as it emits
    const subscription = (ttl as Observable).subscribe(() => this._destroy())

    this._cancelDestruction = () => subscription.unsubscribe()
  }

  public _scheduleEvaluation = (
    reason: EvaluationReason,
    flags = 0,
    shouldSetTimeout?: boolean
  ) => {
    // TODO: Any calls in this case probably indicate a memory leak on the
    // user's part. Notify them. TODO: Can we pause evaluations while
    // activeState is Stale (and should we just always evaluate once when
    // waking up a stale atom)?
    if (this._activeState === ActiveState.Destroyed) return

    this._nextEvaluationReasons.push(reason)

    if (this._nextEvaluationReasons.length > 1) return // job already scheduled

    this.ecosystem._scheduler.scheduleJob(
      {
        flags,
        keyHash: this.keyHash,
        task: this.evaluationTask,
        type: JobType.EvaluateAtom,
      },
      shouldSetTimeout
    )
  }

  // create small, memory-efficient bound function properties we can pass around
  public invalidate = (operation?: string, targetType?: EvaluationTargetType) =>
    this._invalidate(operation, targetType)

  private evaluate = () => this._evaluate()
  private evaluationTask = () => this._evaluationTask()

  private _doEvaluate(): AtomValue<State> {
    const newInjectors: InjectorDescriptor[] = []
    let newFactoryResult: AtomValue<State>
    this._isEvaluating = true
    this.ecosystem._graph.bufferUpdates(this.keyHash)

    try {
      newFactoryResult = diContext.provide(
        {
          injectors: newInjectors,
          instance: this,
        },
        this.evaluate
      )
    } catch (err) {
      newInjectors.forEach(injector => {
        injector.cleanup?.()
      })

      this.ecosystem._graph.destroyBuffer()

      throw err
    } finally {
      this._isEvaluating = false

      // even if evaluation errored, we need to update dependents if the store's
      // state changed
      if (this._bufferedUpdate) {
        this._handleStateChange(
          this._bufferedUpdate.newState,
          this._bufferedUpdate.oldState,
          this._bufferedUpdate.action
        )
        this._bufferedUpdate = undefined
      }

      this._prevEvaluationReasons = this._nextEvaluationReasons
      this._nextEvaluationReasons = []
    }

    this._injectors = newInjectors
    this.ecosystem._graph.flushUpdates()

    return newFactoryResult
  }

  /**
   * A standard atom's value can be one of:
   *
   * - A raw value
   * - A Zedux store
   * - A function that returns a raw value
   * - A function that returns a Zedux store
   * - A function that returns an AtomApi
   */
  private _evaluate() {
    const { _value } = this.atom

    if (typeof _value !== 'function') {
      return _value
    }

    try {
      const val = (_value as (
        ...params: Params
      ) => AtomValue<State> | AtomApi<State, Exports>)(...this.params)

      if (!is(val, AtomApi)) return val as AtomValue<State>

      this.api = val as AtomApi<State, Exports>

      // Exports can only be set on initial evaluation
      if (this._activeState === ActiveState.Initializing) {
        this.exports = this.api.exports as Exports
      }

      // if api.value is a promise, we ignore api.promise
      if (
        typeof ((this.api.value as unknown) as Promise<any>)?.then ===
        'function'
      ) {
        return this._setPromise(
          (this.api.value as unknown) as Promise<any>,
          true
        )
      } else if (this.api.promise) {
        this._setPromise(this.api.promise)
      }

      return this.api.value as AtomValue<State>
    } catch (err) {
      console.error(
        `Zedux: Error while evaluating atom "${this.atom.key}" with params:`,
        this.params,
        err
      )

      throw err
    }
  }

  private _evaluationTask() {
    const newFactoryResult = this._doEvaluate()

    const newStateType = getStateType(newFactoryResult)

    if (DEV && newStateType !== this._stateType) {
      throw new Error(
        `Zedux: atom factory for atom "${this.atom.key}" returned a different type than the previous evaluation. This can happen if the atom returned a store initially but then returned a non-store value on a later evaluation or vice versa`
      )
    }

    if (
      DEV &&
      newStateType === StateType.Store &&
      newFactoryResult !== this.store
    ) {
      throw new Error(
        `Zedux: atom factory for atom "${this.atom.key}" returned a different store. Did you mean to use \`injectStore()\`, or \`injectMemo()\`?`
      )
    }

    // there is no way to cause an evaluation loop when the StateType is Value
    if (newStateType === StateType.Value) {
      this.store.setState(
        typeof newFactoryResult === 'function'
          ? () => newFactoryResult as State
          : (newFactoryResult as State)
      )
    }
  }

  private _getTtl() {
    if (this.api?.ttl == null) {
      return this.atom.ttl != null ? this.atom.ttl : this.ecosystem.defaultTtl
    }

    // this atom instance set its own ttl
    const { ttl } = this.api

    return typeof ttl === 'function' ? ttl() : ttl
  }

  private _handleStateChange(
    newState: State,
    oldState: State | undefined,
    action: ActionChain
  ) {
    this.ecosystem._graph.scheduleDependents(
      this.keyHash,
      this._nextEvaluationReasons,
      newState,
      oldState,
      false
    )

    // Set the action's meta field to `metaTypes.SKIP_EVALUATION` to prevent
    // plugins from receiving it. The Zedux StateHub has to do this to prevent
    // infinite state update loops when inspecting the state of the StateHub
    // itself.
    if (
      this.ecosystem.mods.stateChanged &&
      removeAllMeta(action).meta !== metaTypes.SKIP_EVALUATION
    ) {
      this.ecosystem.modsMessageBus.dispatch(
        ZeduxPlugin.actions.stateChanged({
          action,
          instance: this,
          newState,
          oldState,
          reasons: this._nextEvaluationReasons,
        })
      )
    }

    // run the scheduler synchronously after any atom instance state update
    this.ecosystem._scheduler.flush()
  }

  private _invalidate(
    operation = 'invalidate',
    targetType = EvaluationTargetType.External
  ) {
    this._scheduleEvaluation(
      {
        operation,
        targetType,
        type: EvaluationType.CacheInvalidated,
      },
      0,
      false
    )

    // run the scheduler synchronously after invalidation
    this.ecosystem._scheduler.flush()
  }

  private _setPromise(promise: Promise<any>, isStateUpdater?: boolean) {
    if (promise === this.promise) return this.store.getState()

    this.promise = promise

    // since we're the first to chain off the returned promise, we don't need to
    // track the chained promise - it will run first, before React suspense's
    // `.then` on the thrown promise, for example
    promise
      .then(data => {
        this._promiseStatus = 'success'
        if (!isStateUpdater) return

        this.store.setState((getSuccessPromiseState(data) as unknown) as State)
      })
      .catch(error => {
        this._promiseStatus = 'error'
        this._promiseError = error
        if (!isStateUpdater) return

        this.store.setState((getErrorPromiseState(error) as unknown) as State)
      })

    const state: PromiseState<any> = getInitialPromiseState()
    this._promiseStatus = state.status

    this.ecosystem._graph.scheduleDependents(
      this.keyHash,
      this._nextEvaluationReasons,
      undefined,
      undefined,
      true,
      EvaluationType.PromiseChanged,
      GraphEdgeSignal.Updated,
      true
    )

    return (state as unknown) as State
  }
}