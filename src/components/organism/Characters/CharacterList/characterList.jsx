import React from 'react'
import CharacterDetails from '../CharacterDetails/characterDetails'

const CharacterList = ({ characterList }) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
  return (
    <div style={style}>
      {characterList?.map((item, index) => {
        return <CharacterDetails characterDetails={item} key={index} className="character-details" />
      })}
    </div>
  )
}

export default CharacterList
