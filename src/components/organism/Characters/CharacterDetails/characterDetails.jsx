import React from 'react'
import { timeStampConvertor } from '../../../../utilities'

import styled from 'styled-components'
import styles from './characterDetails.style'

const CharacterDetails = ({ characterDetails, className }) => {
  const {
    id,
    gender,
    name,
    species,
    status,
    image,
    origin,
    location,
    created,
  } = characterDetails

  return (
    <article className={className} key={id}>
      <figure className="character-details__image">
        <img src={image} alt={name} />
        <figcaption className="character-details__caption">
          <strong className="character-details__name">{name}</strong>
          <span className="character-details__id">
            id: {id} - created {timeStampConvertor(new Date(created))}
          </span>
        </figcaption>
      </figure>
      <CharacterDetails.Demographics
        status={status}
        species={species}
        gender={gender}
        origin={origin.name}
        location={location.name}
      />
    </article>
  )
}

const characterDemographics = ({
  status,
  species,
  gender,
  origin,
  location,
}) => {
  return (
    <section className="character-details__demographic">
      <p>
        <strong>STATUS</strong>{' '}
        <strong className="character-list__demographic--details">
          {status}
        </strong>
      </p>
      <p>
        <strong>SPECIES</strong>{' '}
        <strong className="character-list__demographic--details">
          {species}
        </strong>
      </p>
      <p>
        <strong>GENDER</strong>{' '}
        <strong className="character-list__demographic--details">
          {gender}
        </strong>
      </p>
      <p>
        <strong>ORIGIN</strong>{' '}
        <strong className="character-list__demographic--details">
          {origin}
        </strong>
      </p>
      <p>
        <strong>LAST LOCATION</strong>{' '}
        <strong className="character-list__demographic--details">
          {location}
        </strong>
      </p>
    </section>
  )
}

CharacterDetails.Demographics = characterDemographics

export default styled(CharacterDetails)`
  ${styles};
`
