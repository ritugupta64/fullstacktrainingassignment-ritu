import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

import Tags from '.'

const handleClose = jest.fn()

let result
describe('Tags Component', () => {
  beforeEach(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <Tags
          tags={[
            { category: 'gender', name: 'male' },
            { category: 'gender', name: 'female' },
          ]}
          getCloseItem={handleClose}
        />
      </ThemeProvider>
    )
  })

  it('button length should be 2', () => {
    const { container } = result

    expect(container.querySelectorAll('button')).toHaveLength(2)
  })

  it('Should return close item correctly', () => {
    const { container } = result

    fireEvent.click(container.querySelector('button'))

    expect(handleClose).toHaveBeenCalled()
  })
})
