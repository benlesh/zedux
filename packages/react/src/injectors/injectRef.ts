import {
  MutableRefObject,
  PartialAtomInstance,
  RefObject,
} from '@zedux/react/types'
import { createInjector } from '../factories'
import { prefix } from '../utils'

export const injectRef: {
  <T>(initialVal: T): MutableRefObject<T>
  <T>(initialVal: T | null): RefObject<T>
  <T = undefined>(): MutableRefObject<T | undefined>
} = createInjector(
  'injectRef',
  <T>(instance: PartialAtomInstance, initialVal?: T) => ({
    result: { current: initialVal as T },
    type: `${prefix}/ref`,
  })
)
