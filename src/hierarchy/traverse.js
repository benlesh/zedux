import { metaTypes } from '../api/constants'
import { STORE } from './general'
import { invalidDelegation } from '../utils/errors'
import { getMetaData, removeMeta } from '../utils/meta'


/**
  Delegates an action to a child store.

  Does nothing if the special DELEGATE meta node is not present
  in the action meta chain.

  This expects the `metaData` of the DELEGATE meta node to be
  an array containing a path of nodes describing the child store's
  location in the parent store's current hierarchy descriptor.

  Delegated actions will not be handled by the parent store at all.
*/
export function delegate(diffTree, action) {
  const subStorePath = getMetaData(action, metaTypes.DELEGATE)

  if (!subStorePath) return false

  const child = findChild(diffTree, subStorePath, invalidDelegation)

  if (child.type !== STORE) {
    throw new TypeError(invalidDelegation(subStorePath))
  }

  return child.store.dispatch(removeMeta(action, metaTypes.DELEGATE))
}


/**
  Finds a node in a diffTree given a node path (array of nodes).
*/
export function findChild(diffTree, nodePath, getErrorMessage) {
  for (let i = 0; i < nodePath.length; i++) {
    if (!diffTree.children) {
      throw new ReferenceError(getErrorMessage(nodePath))
    }

    const node = nodePath[i]
    diffTree = diffTree.children[node]

    if (!diffTree) {
      throw new ReferenceError(getErrorMessage(nodePath))
    }
  }

  return diffTree
}


/**
  Propagates a state change from a child store to a parent.

  Recursively finds the child store's node in the parent store's
  state tree and re-creates all the nodes down that path.

  #immutability
*/
export function propagateChange(
  currentState,
  subStorePath,
  newSubStoreState,
  hierarchyConfig
) {
  if (!subStorePath.length) return newSubStoreState

  const newNode = hierarchyConfig.clone(currentState)
  const nextNodeKey = subStorePath[0]

  return hierarchyConfig.set(newNode, nextNodeKey, propagateChange(
    currentState[nextNodeKey],
    subStorePath.slice(1),
    newSubStoreState,
    hierarchyConfig
  ))
}
