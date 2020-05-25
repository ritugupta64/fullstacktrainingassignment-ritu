import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

import Layout from '.'

describe('render a Layout', () => {
  let result
  beforeEach(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <Layout>
           text goes here
        </Layout>
      </ThemeProvider>
    )
  })

  it('should have main element', () => {
    const { container } = result
    expect(container.querySelector('main')).toBeTruthy()
  })

})
