import { InjectorDeps } from '../types'
import { haveDepsChanged, split } from '../utils'
import { InjectorType, MemoInjectorDescriptor } from '../utils/types'

export const injectMemo = <State = any>(
  factory: () => State,
  deps?: InjectorDeps
) => {
  const { memoizedVal } = split<MemoInjectorDescriptor<State>>(
    'injectMemo',
    InjectorType.Memo,
    () => ({
      type: InjectorType.Memo,
      deps: deps,
      memoizedVal: factory(),
    }),
    prevDescriptor => {
      const depsHaveChanged = haveDepsChanged(prevDescriptor.deps, deps)

      const memoizedVal = depsHaveChanged
        ? factory()
        : prevDescriptor.memoizedVal

      prevDescriptor.deps = deps
      prevDescriptor.memoizedVal = memoizedVal

      return prevDescriptor
    }
  )

  return memoizedVal
}