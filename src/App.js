import React, { useReducer } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalContextProvider } from './store/context'
import { Reducer, initialState } from './store/reducer'
import Layout from './components/organism/Layout'
import Wrapper from './components/Wrapper/wrapper'
import theme from './theme'

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <ThemeProvider theme={theme}>
      <GlobalContextProvider data={{ state, dispatch }}>
        <Layout>
          <Wrapper className="container" />
        </Layout>
      </GlobalContextProvider>
    </ThemeProvider>
  )
}

export default App
