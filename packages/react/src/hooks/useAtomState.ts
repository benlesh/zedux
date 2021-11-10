import { Settable } from '@zedux/core'
import { AtomBase, AtomInstance, AtomInstanceBase } from '../classes'
import { AtomInstanceStateType, AtomParamsType, AtomStateType } from '../types'
import { useAtomInstanceDynamic } from './useAtomInstanceDynamic'

export const useAtomState: {
  <A extends AtomBase<any, [], any>>(atom: A): [
    AtomStateType<A>,
    (settable: Settable<AtomStateType<A>>) => AtomStateType<A>
  ]

  <A extends AtomBase<any, [...any], any>>(
    atom: A,
    params: AtomParamsType<A>
  ): [
    AtomStateType<A>,
    (settable: Settable<AtomStateType<A>>) => AtomStateType<A>
  ]

  <AI extends AtomInstanceBase<any, [...any], any>>(instance: AI): [
    AtomInstanceStateType<AI>,
    (settable: Settable<AtomInstanceStateType<AI>>) => AtomInstanceStateType<AI>
  ]
} = <A extends AtomBase<any, [...any], any>>(
  atom: A,
  params?: AtomParamsType<A>
): [
  AtomStateType<A>,
  (settable: Settable<AtomStateType<A>>) => AtomStateType<A>
] => {
  const instance = useAtomInstanceDynamic(
    atom,
    params as AtomParamsType<A>
  ) as AtomInstance<AtomStateType<A>, any, any>

  return [instance.store.getState(), instance.setState]
}