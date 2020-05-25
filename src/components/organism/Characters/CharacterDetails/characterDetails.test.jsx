import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../../theme'

import CharacterDetails from './characterDetails'

const characterDetails = {
  id: '1',
  gender: 'female',
  name: 'test',
  species: 'animal',
  status: 'alive',
  image: '',
  origin: {
      name: 'test',
  },
  location: {
      name: 'india'
  },
  created: '2 year ago',
}

describe('render a component', () => {
  let result

  beforeEach(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <CharacterDetails
          characterDetails={characterDetails}
          className="character-details"
        />
      </ThemeProvider>
    )
  })

  it('should render className correctly', () => {
    const { container } = result
    expect(container.querySelector('.character-details')).toBeTruthy()
  })

  it('should have figure element', () => {
    const { container } = result
    expect(container.querySelector('figure')).toBeTruthy()
  })

  it('should have figcaption element', () => {
    const { container } = result
    expect(container.querySelector('figcaption')).toBeTruthy()
  })
})

let compoundComponent
describe('should have compound component', () => {
  beforeEach(() => {
    compoundComponent = render(
      <ThemeProvider theme={theme}>
        <CharacterDetails
          characterDetails={characterDetails}
          className="character-details"
        >
          <CharacterDetails.Demographics
            status={characterDetails.status}
            species={characterDetails.species}
            gender={characterDetails.gender}
            origin={characterDetails.origin.name}
            location={characterDetails.location.name}
          />
        </CharacterDetails>
      </ThemeProvider>
    )
  })

  it('should have demographic component', () => {
    const { container } = compoundComponent
    expect(
      container.querySelector('.character-details__demographic')
    ).toBeTruthy()
  })

  
})
