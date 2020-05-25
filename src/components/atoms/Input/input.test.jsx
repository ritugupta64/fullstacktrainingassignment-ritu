import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

import Input from '.'

describe('render a Input', () => {
  let result
  beforeEach(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <Input type = 'text' value='' className= '' name="test" onChange={() => 'input'} />
      </ThemeProvider>
    )
  })

  it('should have input element', () => {
    const { container } = result
    expect(container.querySelector('input')).toBeTruthy()
  })

  it('should have type attribute', () => {
    const { container } = result
    expect(container.querySelector('input')).toHaveAttribute('type', 'text')
  })

  it('should have value attribute', () => {
    const { container } = result
    expect(container.querySelector('input')).toHaveAttribute('name', 'test')
  })

  it('should have onChange function', () => {
    const { container } = result
    const getInput = container.querySelector('input[name="test"]')
    fireEvent.change(getInput, { target: { value: '' } })
  })
})
