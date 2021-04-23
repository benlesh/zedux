import { Context, createContext } from 'react'
import {
  injectAtomWithoutSubscription,
  injectAtomWithSubscription,
} from '../injectors'
import { getAtomInstance } from '../instance-helpers/getAtomInstance'
import {
  AsyncState,
  AsyncStatus,
  AtomType,
  Query,
  QueryAtom,
  QueryAtomInstance,
} from '../types'
import { EMPTY_CONTEXT, generateImplementationId, getKeyHash } from '../utils'
import { appCsContext, diContext } from '../utils/csContexts'

export const query = <State, Params extends any[]>(
  key: string,
  value: QueryAtom<State, Params>['value']
) => {
  let reactContext: Context<QueryAtomInstance<State, Params>>
  const getReactContext = () => {
    if (reactContext) return reactContext

    return (reactContext = createContext(EMPTY_CONTEXT as any))
  }

  const injectInstance = (...params: Params) =>
    injectAtomWithoutSubscription<
      AsyncState<State>,
      Params,
      QueryAtomInstance<State, Params>
    >(newAtom, params)

  const injectLazy = () => {
    const initialContext = diContext.consume()

    return (...params: Params) => {
      const newContext = appCsContext.consume(false)
      const { appId } = newContext || initialContext
      const keyHash = getKeyHash(appId, newAtom, params)

      return getAtomInstance<
        AsyncState<State>,
        Params,
        QueryAtomInstance<State, Params>
      >(appId, newAtom, keyHash, params)
    }
  }

  const injectQuery = (...params: Params) => {
    const instance = injectAtomWithSubscription<
      AsyncState<State>,
      Params,
      QueryAtomInstance<State, Params>
    >('injectQuery()', newAtom, params)

    const state = instance.internals.stateStore.getState()
    const query: Query<State, Params> = {
      data: state.data,
      error: state.error,
      instance,
      isError: state.status === AsyncStatus.Error,
      isIdle: state.status === AsyncStatus.Idle,
      isLoading: state.status === AsyncStatus.Loading,
      isSuccess: state.status === AsyncStatus.Success,
      status: state.status,
    }

    return query
  }

  const newAtom: QueryAtom<State, Params> = {
    getReactContext,
    injectInstance,
    injectLazy,
    injectQuery,
    // injectSelector,
    internalId: generateImplementationId(),
    key,
    // override,
    // useConsumer,
    // useInstance,
    // useLazy,
    // useQuery,
    // useSelector,
    type: AtomType.Query,
    value,
  } as any
}