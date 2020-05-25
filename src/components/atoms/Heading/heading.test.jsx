import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

import Heading from '.'

describe('render a Heading', () => {
  let result
  beforeEach(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <Heading className="heading" headingtype="h2">
          h1 heading
        </Heading>
      </ThemeProvider>
    )
  })

  it('should have heading element', () => {
    const { container } = result
    expect(container.querySelector('h2')).toBeTruthy()
  })

  it('should have className attribute', () => {
    const { container } = result
    expect(container.querySelector('.heading')).toBeTruthy()
  })
})
