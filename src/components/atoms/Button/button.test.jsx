import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

import Button from '.'

describe('render a button', () => {
  let result
  beforeEach(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <Button type="button" type="text" className="button">
          Search button
        </Button>
      </ThemeProvider>
    )
  })

  it('should have button', () => {
    const { container } = result
    expect(container.querySelector('button')).toBeTruthy()
  })

  it('should have button type attribute', () => {
    const { container } = result
    expect(container.querySelector('button')).toHaveAttribute('type', 'text')
  })

  it('should have className attribute', () => {
    const { container } = result
    expect(container.querySelector('.button')).toBeTruthy()
  })

})
