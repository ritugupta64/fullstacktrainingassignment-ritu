import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

import Loader from '.'

describe('render a Loader', () => {
  let result
  beforeEach(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <Loader className="loader" headingtype="h2">
          Loading...
        </Loader>
      </ThemeProvider>
    )
  })

  it('should have Loader Element', () => {
    const { container } = result
    expect(container.querySelector('div.loader')).toBeTruthy()
  })
})
