import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

import SearchBox from './search'

const handleValue = jest.fn();

describe('render a searchbox', () => {
  let result
  beforeEach(() => {
    
    result = render(
      <ThemeProvider theme={theme}>
        <SearchBox labelText = "search by label" getValue = "test" className = "search" getValue = {handleValue} />
      </ThemeProvider>
    )
  })

  it('should have label', () => {
    const { container } = result
    expect(container.querySelector('label')).toBeTruthy()
  })

  it('should have label text', () => {
    const { getByLabelText } = result
    expect(getByLabelText('search by label')).toBeTruthy()
  })

  it('should have input', () => {
    const { container } = result
    expect(container.querySelector('input')).toBeTruthy()
  })

  it('should have input type equal to text', () => {
    const { container } = result
    expect(container.querySelector('input')).toHaveAttribute('type', 'text')
  })

  it('input should have onChange handler', () => {
    const { container } = result
    const getInput = container.querySelector('input[name="search"]')
    fireEvent.change(getInput, { target: { value: '' } })
  })

  it('should have search value onSubmit', () => {
    const { container } = result;
    fireEvent.click(container.querySelector('button'));
    expect(handleValue).toHaveBeenCalled();
  })
})
