import React, {
  ComponentProps,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styled, { css } from '@zedux/react/ssc'
import { XIcon } from './icons-raw'

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.alphas.white[1]};
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.alphas.secondary[3]};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: inherit;
  grid-column: 1;
  grid-row: 1;
  outline: none;
  padding: 1em 0.5em 0.5em;

  &:focus {
    background: ${({ theme }) => theme.colors.alphas.white[2]};
  }
`

const InputLabel = styled('label')`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  color: #777;
  cursor: pointer;
  font-size: 0.8em;
  left: 1em;
  padding: 1px 3px;
  position: absolute;
  text-transform: uppercase;
  transform: translateY(-50%);
`

const InputWithLabelWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

let idCounter = 0

export const InputWithLabel: FC<
  { label: string } & ComponentProps<typeof Input>
> = ({ label, ...props }) => {
  const inputId = `${label}-${idCounter++}`

  return (
    <InputWithLabelWrapper>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <Input id={inputId} {...props} />
    </InputWithLabelWrapper>
  )
}

const MultiSelectControl = styled.div`
  border-bottom: 3px solid ${({ theme }) => theme.colors.alphas.secondary[3]};
  display: flex;
  flex-flow: row wrap;
  padding: 0.3em 0;
`

const MultiSelectForm = styled('form')`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);
  position: relative;
`

const MultiSelectInput = styled.input`
  background: none;
  border: none;
  border-radius: 0;
  color: ${({ theme }) => theme.colors.white};
  flex: 1;
  font-size: inherit;
  min-width: 14em;
  outline: none;
  padding: 0.3em;
`

const MultiSelectList = styled.div`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.6);
  display: grid;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
`

const MultiSelectOption = styled.div<{
  isDisabled?: boolean
  isHighlighted?: boolean
}>`
  font-family: monospace;
  font-size: 0.9em;
  letter-spacing: -0.3px;
  padding: 0.5em;

  ${({ isDisabled }) =>
    isDisabled
      ? css`
          color: #888;
          font-size: 0.8em;
        `
      : css`
          cursor: pointer;

          &:hover {
            background: ${({ theme }) => theme.colors.alphas.white[1]};
          }
        `}

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background: ${({ theme }) => theme.colors.alphas.white[1]};
    `}
`

const MultiSelectSelection = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 1em;
  color: #555;
  column-gap: 0.2em;
  cursor: pointer;
  display: grid;
  font-family: monospace;
  font-size: 0.9em;
  grid-template-columns: auto auto;
  letter-spacing: -0.3px;
  margin: 0.2em;
  padding: 1px 4px;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.alphas.primary[5]};
  }
`

export const MultiSelect = ({
  emptyText,
  mode = 'enum',
  onDeselect,
  onSelect,
  options,
  placeholder = 'Filter...',
  selected,
}: {
  emptyText?: string
  mode?: 'custom' | 'either' | 'enum'
  onDeselect: (id: string) => void
  onSelect: (id: string) => void
  options?: Record<string, string>
  placeholder?: string
  selected: string[]
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const isBlurCanceled = useRef(false)
  const isRendered = useRef(true)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')

  useEffect(
    () => () => {
      isRendered.current = false
    },
    []
  )

  const cancelBlur = () => {
    isBlurCanceled.current = true

    setTimeout(() => {
      inputRef.current?.focus()
      isBlurCanceled.current = false
    })
  }

  const orderedOptions = useMemo(() => {
    if (!options) return []

    return Object.entries(options)
      .filter(([id]) => !selected.includes(id))
      .filter(([, val]) => val.toLowerCase().includes(text.toLowerCase()))
      .sort(([, aVal], [, bVal]) => aVal.localeCompare(bVal))
      .map(([id]) => id)
  }, [options, selected, text])

  const realHighlightedIndex = Math.min(
    highlightedIndex,
    orderedOptions.length - 1
  )

  return (
    <MultiSelectForm
      onSubmit={event => {
        event.preventDefault()

        if (options && realHighlightedIndex !== -1) {
          onSelect(options[orderedOptions[realHighlightedIndex]])
          setHighlightedIndex(-1)
          return
        }

        if (mode === 'enum') return

        onSelect(text)
        setText('')
      }}
    >
      <MultiSelectControl>
        {selected.map(id => (
          <MultiSelectSelection key={id} onClick={() => onDeselect(id)}>
            <XIcon />
            <span>{(options && options[id]) || id}</span>
          </MultiSelectSelection>
        ))}
        <MultiSelectInput
          onBlur={() => {
            if (!isBlurCanceled.current && isRendered.current) setIsOpen(false)
          }}
          onChange={event => setText(event.currentTarget.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={event => {
            if (event.key === 'ArrowDown') {
              event.preventDefault()
              setHighlightedIndex(index =>
                Math.min(orderedOptions.length - 1, index + 1)
              )
              return
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault()
              setHighlightedIndex(index => Math.max(0, index - 1))
              return
            }

            if (event.key === 'Escape') {
              inputRef.current?.blur()
              return
            }

            if (event.key === 'Backspace' && !text.length && selected.length) {
              onDeselect(selected.slice(-1)[0])
            }
          }}
          placeholder={placeholder}
          ref={inputRef}
          value={text}
        />
      </MultiSelectControl>
      {isOpen && options && (
        <MultiSelectList>
          {!orderedOptions.length && (
            <MultiSelectOption isDisabled onMouseDown={cancelBlur}>
              - {emptyText} -
            </MultiSelectOption>
          )}
          {orderedOptions.map((id, index) => (
            <MultiSelectOption
              isHighlighted={index === realHighlightedIndex}
              key={id}
              onClick={() => onSelect(id)}
              onMouseDown={cancelBlur}
            >
              {options[id]}
            </MultiSelectOption>
          ))}
        </MultiSelectList>
      )}
    </MultiSelectForm>
  )
}
