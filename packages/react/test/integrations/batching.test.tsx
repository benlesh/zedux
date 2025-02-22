import {
  api,
  atom,
  injectAtomGetters,
  injectRef,
  injectStore,
  internalTypes,
} from '@zedux/react'
import { ecosystem } from '../utils/ecosystem'

describe('batching', () => {
  test('exports batch updates by default', () => {
    const evaluations: number[] = []

    const atom1 = atom('1', () => {
      const store = injectStore(0)

      evaluations.push(store.getState())

      return api(store).setExports({
        update: () => {
          store.setState(1)
          store.setState(2)
        },
      })
    })

    const instance = ecosystem.getInstance(atom1)

    expect(evaluations).toEqual([0])

    instance.exports.update()

    expect(evaluations).toEqual([0, 2])
  })

  test('api(..., wrap: false) prevents exports from batching updates', () => {
    const evaluations: number[] = []

    const atom1 = atom('1', () => {
      const store = injectStore(0)

      evaluations.push(store.getState())

      return api(store, false).setExports({
        update: () => {
          store.setState(1)
          store.setState(2)
        },
      })
    })

    const instance = ecosystem.getInstance(atom1)

    expect(evaluations).toEqual([0])

    instance.exports.update()

    expect(evaluations).toEqual([0, 1, 2])
  })

  test('ecosystem.batch() batches updates', () => {
    const evaluations: number[] = []

    const atom1 = atom('1', () => {
      const { ecosystem } = injectAtomGetters()
      const store = injectStore(0)
      const batchRef = injectRef(() => {
        ecosystem.batch(() => {
          store.setState(1)
          store.setState(2)
        })
      })
      const noBatchRef = injectRef(() => {
        store.setState(1)
        store.setState(2)
      })

      evaluations.push(store.getState())

      return api(store).setExports({
        batchRef,
        noBatchRef,
      })
    })

    const instance = ecosystem.getInstance(atom1)

    expect(evaluations).toEqual([0])

    instance.exports.batchRef.current()

    expect(evaluations).toEqual([0, 2])

    instance.exports.noBatchRef.current()

    expect(evaluations).toEqual([0, 2, 1, 2])
  })

  test('internalTypes.batch batches the update with all other synchronously batched updates', () => {
    jest.useFakeTimers()

    const evaluations: number[] = []

    const atom1 = atom('1', () => {
      const store = injectStore(0)
      const batchAllRef = injectRef(() => {
        store.setState(1, internalTypes.batch)
        store.setState(2, internalTypes.batch)
      })
      const batchOneRef = injectRef(() => {
        store.setState(1, internalTypes.batch)
        store.setState(2)
      })
      const noBatchRef = injectRef(() => {
        store.setState(1)
        store.setState(2)
      })

      evaluations.push(store.getState())

      return api(store).setExports({
        batchAllRef,
        batchOneRef,
        noBatchRef,
      })
    })

    const instance = ecosystem.getInstance(atom1)

    expect(evaluations).toEqual([0])

    instance.exports.batchOneRef.current()

    expect(evaluations).toEqual([0, 2])

    instance.exports.noBatchRef.current()

    expect(evaluations).toEqual([0, 2, 1, 2])

    instance.exports.batchAllRef.current()

    expect(evaluations).toEqual([0, 2, 1, 2])

    jest.runAllTimers()

    expect(evaluations).toEqual([0, 2, 1, 2, 2])
  })
})
