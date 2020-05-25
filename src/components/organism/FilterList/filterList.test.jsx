import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

import FilterList from './filterList'

let result
const getSelectedValue = jest.fn()

const filterList = ['male', 'female']

describe('render a FilterList component', () => {
  beforeEach(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <FilterList
          className="filter-list"
          filterList={filterList}
          title="filters"
          getSelectedFilter={getSelectedValue}
        />
      </ThemeProvider>
    )
  })

  it('should have className', () => {
    const { container } = result
    expect(container.querySelector('.filter-list')).toBeTruthy()
  })

  it('should have title', () => {
    const { container } = result
    expect(container.querySelector('h2').textContent).toEqual('filters')
  })

  it('filter list length should be greaterthan zero', () => {
    const { container } = result
    expect(container.querySelectorAll('input')).toHaveLength(2)
  })

  it('should have 2 label', () => {
    const { container } = result
    expect(container.querySelectorAll('label')).toHaveLength(2)
  })

  it('should have 2 label', () => {
    const { container } = result
    expect(container.querySelectorAll('label')[0].textContent).toEqual('male')
  })

  it('getSelectedValue should be called', () => {
    const { container } = result
    fireEvent.click(container.querySelector('input'));
    expect(getSelectedValue).toHaveBeenCalled();
  })
})
