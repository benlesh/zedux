import { atom } from '@zedux/react'
import { api } from '@zedux/react/factories/api'
import { ion } from '@zedux/react/factories/ion'
import React, { useState } from 'react'

const otherAtom = atom('other', () => 'hello')

const testAtom = ion(
  'test',
  ({ get }) => {
    const other = get(otherAtom)
    const setOther = otherAtom.injectSetState()

    return api(other).setExports({
      doStuff: (newVal: string) => {
        const result = setOther(newVal)
        return [other, result] as const
      },
    })
  },
  { ttl: 0 }
)

function Child() {
  const test = testAtom.useValue()
  const { doStuff } = testAtom.useExports()
  let prev = undefined
  let next = test

  return (
    <div>
      <div>
        {test} prev: {prev} next: {next}
      </div>
      <button
        onClick={() => {
          ;[prev, next] = doStuff('yoo')
        }}
      >
        click me!
      </button>
    </div>
  )
}

function Greeting() {
  const [view, setView] = useState(true)

  return (
    <>
      {view ? <div>the first view!</div> : <Child />}
      <button onClick={() => setView(curr => !curr)}>change view</button>
    </>
  )
}