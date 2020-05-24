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
            {id} - created {timeStampConvertor(new Date(created))}
          </span>
        </figcaption>
      </figure>
      <div className={`${className}__demographic`}>
        <p><strong>Status</strong> {status}</p>
        <p><strong>Species</strong> {species}</p>
        <p><strong>Gender</strong> {gender}</p>
        <p><strong>Origin</strong> {origin.name}</p>
        <p><strong>Last location</strong> {location.name}</p>
      </div>
    </article>
  )
}

export default styled(CharacterDetails)`
  ${styles};
`
