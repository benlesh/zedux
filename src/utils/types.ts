import { Reducer, Store } from '@src/types'
import { HierarchyType } from './general'

export interface DiffNode {
  children?: DiffTree
  destroy?: () => void
  reducer?: Reducer
  store?: Store
  type: HierarchyType
}

export interface DiffTree {
  [key: string]: DiffNode
}
