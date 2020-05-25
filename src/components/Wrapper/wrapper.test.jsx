import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { GlobalContextProvider } from '../../store/context'
import theme from '../../theme'

import Wrapper from './wrapper'

let result
const dispatch = jest.fn()

const initialState = {
  character: [],
}

afterEach(cleanup)

it('renders', () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <GlobalContextProvider data={{ state: initialState, dispatch }}>
        <Wrapper />
      </GlobalContextProvider>
    </ThemeProvider>
  )
  expect(asFragment()).toMatchSnapshot()
})
