import React from 'react'
import CharacterDetails from '../CharacterDetails/characterDetails'

const CharacterList = ({ characterList }) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {characterList?.map((item, index) => {
        return <CharacterDetails characterDetails={item} key={index} className="character-details" />
      })}
    </div>
  )
}

export default CharacterList
