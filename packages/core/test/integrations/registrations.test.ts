import { Action, ActionChain, createStore, internalTypes } from '@zedux/core'
import { createMockReducer } from '../utils'

describe('registrations', () => {
  describe('subscriptions', () => {
    test('all subscribers are notified of a state update', () => {
      const store = createStore()
      const subscribers = Array(20)
        .join(' ')
        .split(' ')
        .map(() => jest.fn())

      subscribers.forEach(subscriber => store.subscribe(subscriber))

      store.setState(() => 'a')

      subscribers.forEach(subscriber =>
        expect(subscriber).toHaveBeenCalledWith('a', undefined, {
          payload: 'a',
          type: internalTypes.hydrate,
        })
      )
    })

    test('observer-style subscribers are notified of a state update', () => {
      const store = createStore()
      const observer = { next: jest.fn() }

      store.subscribe(observer)

      store.setState('a')

      expect(observer.next).toHaveBeenCalledWith('a', undefined, {
        payload: 'a',
        type: internalTypes.hydrate,
      })
      expect(observer.next).toHaveBeenCalledTimes(1)
    })

    test('subscribers can be added or removed whenever', () => {
      const store = createStore()

      const subscriber1 = jest.fn()
      let subscription1 = store.subscribe(subscriber1)

      const subscriber2 = jest.fn()
      const subscription2 = store.subscribe(subscriber2)

      subscription1.unsubscribe()
      subscription1.unsubscribe() // does nothing
      subscription1.unsubscribe() // does nothing

      const subscriber3 = jest.fn()
      const subscription3 = store.subscribe(subscriber3)

      store.setState(() => 'a')

      expect(subscriber1).not.toHaveBeenCalled()
      expect(subscriber2).toHaveBeenCalledWith('a', undefined, {
        payload: 'a',
        type: internalTypes.hydrate,
      })
      expect(subscriber3).toHaveBeenCalledWith('a', undefined, {
        payload: 'a',
        type: internalTypes.hydrate,
      })

      subscription2.unsubscribe()

      subscription1 = store.subscribe(subscriber1)

      store.setState(() => 'b')

      expect(subscriber1).toHaveBeenCalledWith('b', 'a', {
        payload: 'b',
        type: internalTypes.hydrate,
      })
      expect(subscriber2).toHaveBeenLastCalledWith('a', undefined, {
        payload: 'a',
        type: internalTypes.hydrate,
      })
      expect(subscriber3).toHaveBeenLastCalledWith('b', 'a', {
        payload: 'b',
        type: internalTypes.hydrate,
      })

      subscription3.unsubscribe()

      const subscriber4 = jest.fn()

      // subscribe inside a subscriber
      const subscriber5 = jest.fn(() => store.subscribe(subscriber4))
      store.subscribe(subscriber5)

      store.setState(() => 'c')

      expect(subscriber1).toHaveBeenLastCalledWith('c', 'b', {
        payload: 'c',
        type: internalTypes.hydrate,
      })
      expect(subscriber2).toHaveBeenLastCalledWith('a', undefined, {
        payload: 'a',
        type: internalTypes.hydrate,
      })
      expect(subscriber3).toHaveBeenLastCalledWith('b', 'a', {
        payload: 'b',
        type: internalTypes.hydrate,
      })
      expect(subscriber4).not.toHaveBeenCalled()
      expect(subscriber5).toHaveBeenCalledWith('c', 'b', {
        payload: 'c',
        type: internalTypes.hydrate,
      })

      subscription1.unsubscribe()

      store.setState(() => 'd')

      expect(subscriber1).toHaveBeenLastCalledWith('c', 'b', {
        payload: 'c',
        type: internalTypes.hydrate,
      })
      expect(subscriber2).toHaveBeenLastCalledWith('a', undefined, {
        payload: 'a',
        type: internalTypes.hydrate,
      })
      expect(subscriber3).toHaveBeenLastCalledWith('b', 'a', {
        payload: 'b',
        type: internalTypes.hydrate,
      })
      expect(subscriber4).toHaveBeenCalledWith('d', 'c', {
        payload: 'd',
        type: internalTypes.hydrate,
      })
      expect(subscriber5).toHaveBeenLastCalledWith('d', 'c', {
        payload: 'd',
        type: internalTypes.hydrate,
      })
    })

    test('a parent store unsubscribes from a removed child store', () => {
      const parent = createStore()
      const child = createStore()

      parent.use({
        a: createMockReducer(1),
        b: {
          c: {
            d: child,
            e: createMockReducer(2),
          },
        },
      })
      parent.use(null)

      const subscriber = jest.fn()
      parent.subscribe(subscriber)

      child.setState(() => 'a')

      expect(subscriber).not.toHaveBeenCalled()
    })
  })

  describe('error subscribers', () => {
    test('all error subscribers are notified of an error', () => {
      const err = new Error('a')
      const store = createStore((state = 0) => {
        if (state > 0) throw err

        return state + 1
      }, 0)
      const errorSubscribers = Array(20)
        .fill(null)
        .map(() => jest.fn())

      errorSubscribers.forEach(error => store.subscribe({ error }))

      try {
        store.dispatch({ type: 'b' })
      } catch (err) {}

      errorSubscribers.forEach(errorSubscriber => {
        expect(errorSubscriber).toHaveBeenCalledTimes(1)
        expect(errorSubscriber).toHaveBeenLastCalledWith(err)
      })
    })

    test('the same error that is sent to error subscribers is thrown from the dispatch', () => {
      const error1 = new Error('a')
      const reducer = (state = 0) => {
        if (state > 0) throw error1

        return state + 1
      }

      const store = createStore(reducer)
      const errorSubscriber = jest.fn()

      store.subscribe({ error: errorSubscriber })

      let error: unknown = undefined
      try {
        store.dispatch({ type: 'b' })
      } catch (err) {
        error = err
      }

      expect(errorSubscriber).toHaveBeenCalledWith(error)
    })

    test('an error in a child store reducer notifies both child and parent error subscribers', () => {
      const error1 = new Error('a')
      const reducer = (state = 0) => {
        if (state > 1) throw error1

        return state + 1
      }

      const child = createStore(reducer)
      const parent = createStore({
        b: child,
      })
      const childErrorSubscriber = jest.fn()
      const parentErrorSubscriber = jest.fn()

      child.subscribe({ error: childErrorSubscriber })
      parent.subscribe({ error: parentErrorSubscriber })

      let error: unknown = undefined
      try {
        parent.dispatch({ type: 'c' })
      } catch (err) {
        error = err
      }

      expect(childErrorSubscriber).toHaveBeenCalledWith(error)
      expect(parentErrorSubscriber).toHaveBeenCalledWith(error)
    })
  })

  describe('effects subscribers', () => {
    test('all effects subscribers are notified of an action', () => {
      const action = { type: 'a' }
      const store = createStore()
      const effectsSubscribers = Array(20)
        .fill(null)
        .map(() => jest.fn())

      effectsSubscribers.forEach(effects => store.subscribe({ effects }))

      store.dispatch(action)

      effectsSubscribers.forEach(effectsSubscriber => {
        expect(effectsSubscriber).toHaveBeenCalledTimes(1)

        expect(effectsSubscriber).toHaveBeenLastCalledWith(
          expect.objectContaining({ action })
        )
      })
    })

    test('all upstream effects subscribers are notified of an error', () => {
      const error1 = new Error('a')
      const reducer = (state = 0) => {
        if (state > 1) throw error1

        return state + 1
      }
      const parent = createStore()
      const child = createStore()
      const grandchild = createStore()

      parent.use(
        child.use({
          grandchild,
          reducer,
        })
      )

      const parentEffectsSubscriber = jest.fn()
      const childEffectsSubscriber = jest.fn()
      const grandchildEffectsSubscriber = jest.fn()

      parent.subscribe({ effects: parentEffectsSubscriber })
      child.subscribe({ effects: childEffectsSubscriber })
      grandchild.subscribe({ effects: grandchildEffectsSubscriber })

      try {
        parent.dispatch({ type: 'c' })
      } catch (err) {}

      expect(parentEffectsSubscriber).toHaveBeenCalledTimes(1)
      expect(childEffectsSubscriber).toHaveBeenCalledTimes(1)
      expect(grandchildEffectsSubscriber).toHaveBeenCalledTimes(1)

      expect(parentEffectsSubscriber).toHaveBeenLastCalledWith(
        expect.objectContaining({
          error: error1,
        })
      )
      expect(childEffectsSubscriber).toHaveBeenLastCalledWith(
        expect.objectContaining({
          error: error1,
        })
      )
      expect(grandchildEffectsSubscriber).toHaveBeenLastCalledWith(
        expect.objectContaining({
          error: undefined,
        })
      )
    })

    test('all upstream effects subscribers are notified of all downstream actions', () => {
      const reducer = () => 1

      const parent = createStore()
      const child = createStore()
      const grandchild = createStore()

      parent.use(child.use({ grandchild, reducer }))

      const parentEffectsSubscriber = jest.fn()
      const childEffectsSubscriber = jest.fn()
      const grandchildEffectsSubscriber = jest.fn()

      const action: Action = {
        type: 'c',
      }
      const delegateAction: ActionChain = {
        metaType: internalTypes.delegate,
        metaData: [],
        payload: action,
      }
      const inheritAction: ActionChain = {
        metaType: internalTypes.inherit,
        payload: action,
      }

      parent.subscribe({ effects: parentEffectsSubscriber })
      child.subscribe({ effects: childEffectsSubscriber })
      grandchild.subscribe({ effects: grandchildEffectsSubscriber })

      child.dispatch({ type: 'c' })

      expect(parentEffectsSubscriber).toHaveBeenCalledTimes(1)
      expect(childEffectsSubscriber).toHaveBeenCalledTimes(1)
      expect(grandchildEffectsSubscriber).toHaveBeenCalledTimes(1)
      expect(parentEffectsSubscriber).toHaveBeenLastCalledWith(
        expect.objectContaining({
          action: delegateAction,
        })
      )
      expect(childEffectsSubscriber).toHaveBeenLastCalledWith(
        expect.objectContaining({
          action,
        })
      )
      expect(grandchildEffectsSubscriber).toHaveBeenLastCalledWith(
        expect.objectContaining({
          action: inheritAction,
        })
      )
    })

    test('a parent store unregisters its child store effects subscribers', () => {
      const parent = createStore()
      const child = createStore()

      parent.use({
        a: createMockReducer(1),
        b: {
          c: {
            d: child,
            e: createMockReducer(2),
          },
        },
      })

      const effectsSubscriber = jest.fn()
      parent.subscribe({ effects: effectsSubscriber })

      child.setState(() => 'a')

      expect(effectsSubscriber).toHaveBeenCalledTimes(1)
      expect(effectsSubscriber).toHaveBeenLastCalledWith(
        expect.objectContaining({
          action: {
            metaType: internalTypes.delegate,
            metaData: ['b', 'c', 'd'],
            payload: {
              type: internalTypes.hydrate,
              payload: 'a',
            },
          },
        })
      )

      parent.use(null)
      child.setState(() => 'b')

      expect(effectsSubscriber).toHaveBeenCalledTimes(1)
    })
  })
})
