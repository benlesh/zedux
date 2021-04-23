import { createStore } from '@zedux/core'
import {
  AsyncState,
  AsyncStatus,
  MutationAtom,
  MutationAtomInstance,
} from '@zedux/react/types'
import { EvaluationTargetType, EvaluationType } from '@zedux/react/utils'
import { asyncMachine, cancel, reset } from '@zedux/react/utils/asyncMachine'
import React, { FC } from 'react'
import { createAtomInstanceInternals } from '../createAtomInstanceInternals'

export const createMutationInstance = <
  State,
  Params extends [],
  MutationParams extends any[]
>(
  appId: string,
  atom: MutationAtom<State, MutationParams>,
  keyHash: string,
  params: Params,
  destroy: () => void
) => {
  let mutateRef: MutationAtomInstance<State, MutationParams>['mutate'] = () =>
    undefined as any

  const evaluate = () => {
    const mutate = atom.value()

    if (typeof mutate !== 'function') {
      throw new TypeError('Zedux - Mutation factory must return a function')
    }

    mutateRef = mutate

    return mutationInstance.store
  }

  const internals = createAtomInstanceInternals(
    appId,
    atom,
    keyHash,
    params,
    evaluate,
    destroy
  )

  const Provider: FC = ({ children }) => {
    const context = atom.getReactContext()

    return (
      <context.Provider value={mutationInstance}>{children}</context.Provider>
    )
  }

  const mutationInstance: MutationAtomInstance<State, MutationParams> = {
    cancel: () => mutationInstance.store.dispatch(cancel()),
    invalidate: () =>
      internals.scheduleEvaluation({
        operation: 'invalidate()',
        targetType: EvaluationTargetType.Injector,
        type: EvaluationType.CacheInvalidated,
      }),
    internals,
    mutate: (...params: MutationParams) => mutateRef(...params),
    Provider,
    reset: () => mutationInstance.store.dispatch(reset()),
    store: createStore<AsyncState<State>>(
      { status: asyncMachine },
      { data: undefined, error: undefined, status: AsyncStatus.Idle }
    ),
  }

  return mutationInstance
}