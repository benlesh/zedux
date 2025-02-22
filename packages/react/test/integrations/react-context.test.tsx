import {
  atom,
  AtomInstanceProvider,
  useAtomConsumer,
  useAtomInstance,
  useAtomValue,
} from '@zedux/react'
import React, { Component } from 'react'
import { renderInEcosystem } from '../utils/renderInEcosystem'
import { ecosystem } from '../utils/ecosystem'
import { act } from '@testing-library/react'
import { mockConsole } from '../utils/console'

describe('React context', () => {
  test('a provided atom instance can be consumed dynamically anywhere', async () => {
    const atom1 = atom('1', (param: string) => param)
    let counter = 0

    function Grandchild() {
      const val = useAtomValue(useAtomConsumer(atom1, true))

      return <div data-testid={counter++}>{val}</div>
    }

    function Child() {
      return <Grandchild />
    }

    function Test() {
      const instance1 = useAtomInstance(atom1, ['a'])
      const instance2 = useAtomInstance(atom1, ['b'])

      return (
        <>
          <AtomInstanceProvider instance={instance1}>
            <Child />
          </AtomInstanceProvider>
          <AtomInstanceProvider instance={instance2}>
            <Child />
          </AtomInstanceProvider>
        </>
      )
    }

    const { findByTestId } = renderInEcosystem(<Test />)

    const div1 = await findByTestId('0')
    const div2 = await findByTestId('1')

    expect(div1.innerHTML).toBe('a')
    expect(div2.innerHTML).toBe('b')
  })

  test('multiple instances can be provided at once', async () => {
    const atom1 = atom('1', (param: string) => param)
    const atom2 = atom('2', (param: string) => param)
    let counter = 0

    function Child() {
      const val1 = useAtomValue(useAtomConsumer(atom1, true))
      const val2 = useAtomValue(useAtomConsumer(atom2, ['c']))

      return (
        <div data-testid={counter++}>
          {val1}
          {val2}
        </div>
      )
    }

    function Test() {
      const instance1 = useAtomInstance(atom1, ['a'])
      const instance2 = useAtomInstance(atom2, ['b'])

      return (
        <>
          <AtomInstanceProvider instances={[instance1, instance2]}>
            <Child />
          </AtomInstanceProvider>
        </>
      )
    }

    const { findByTestId } = renderInEcosystem(<Test />)

    const div1 = await findByTestId('0')

    expect(div1.innerHTML).toBe('ab')
  })

  test('an instance must be provided', async () => {
    const atom1 = atom('1', (param: string) => param)
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})

    function Child() {
      const val = useAtomValue(useAtomConsumer(atom1, true))

      return <div data-testid="0">{val}</div>
    }

    function Test() {
      return (
        <>
          {/** @ts-expect-error missing prop */}
          <AtomInstanceProvider>
            <Child />
          </AtomInstanceProvider>
        </>
      )
    }

    class Boundary extends Component<any, { error: string }> {
      constructor(props: any) {
        super(props)
        this.state = { error: '' }
      }

      static getDerivedStateFromError(error: Error) {
        return { error: error.message }
      }

      render() {
        if (this.state.error) {
          // You can render any custom fallback UI
          return <div data-testid="1">{this.state.error}</div>
        }

        return this.props.children
      }
    }

    const { findByTestId } = renderInEcosystem(
      <Boundary>
        <Test />
      </Boundary>
    )

    const div = await findByTestId('1')

    expect(div.innerHTML).toMatch(/AtomInstanceProvider.*requires.*prop/i)
    expect(spy).toHaveBeenCalledTimes(3)

    spy.mockReset()
  })

  test('useAtomConsumer() can be given default params that are used if no instance was provided', async () => {
    jest.useFakeTimers()
    const atom1 = atom('1', (id: string) => id)

    function Test() {
      const instance = useAtomConsumer(atom1, ['a'])
      const val = useAtomValue(instance)

      return <div data-testid="text">{val}</div>
    }

    const { findByTestId } = renderInEcosystem(<Test />)

    const div = await findByTestId('text')

    expect(div.innerHTML).toBe('a')

    act(() => {
      ecosystem.getInstance(atom1, ['a']).setState('aa')
      jest.runAllTimers()
    })

    expect(div.innerHTML).toBe('aa')
  })

  test('useAtomConsumer() logs an error if a Destroyed instance was provided', async () => {
    jest.useFakeTimers()
    const mock = mockConsole('error')
    const atom1 = atom('1', (id: string) => id)

    function Child() {
      const instance = useAtomConsumer(atom1, true)
      const val = useAtomValue(instance)

      return <div data-testid="text">{val}</div>
    }

    function Parent() {
      // useAtomInstance will naturally update the reference on force-destroy
      const instance = ecosystem.getInstance(atom1, ['a'])

      return (
        <AtomInstanceProvider instance={instance}>
          <Child />
        </AtomInstanceProvider>
      )
    }

    const { findByTestId } = renderInEcosystem(<Parent />)

    const div = await findByTestId('text')

    expect(div.innerHTML).toBe('a')
    expect(mock).not.toHaveBeenCalled()

    act(() => {
      ecosystem.getInstance(atom1, ['a']).destroy(true)
      jest.runAllTimers()
    })

    expect(div.innerHTML).toBe('a')
    expect(mock).toHaveBeenCalledWith(
      expect.stringMatching(/a destroyed atom instance was provided/i)
    )
  })

  test('useAtomConsumer() throws an error if 2nd param is true and no instance was provided', async () => {
    jest.useFakeTimers()
    const mock = mockConsole('error')
    const atom1 = atom('1', (id: string) => id)

    function Test() {
      const instance = useAtomConsumer(atom1, true)
      const val = useAtomValue(instance)

      return <div data-testid="text">{val}</div>
    }

    const pattern = /no atom instance was provided/i

    expect(() => renderInEcosystem(<Test />)).toThrowError(pattern)
    expect(mock).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        message: expect.stringMatching(pattern),
      })
    )
  })
})
