import React, { useState } from 'react'
import styled from 'styled-components';

import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

import styles from './searchbox.style'

const SearchBox = ({ labelText, getValue, className }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    getValue(value)
  }

  const handlingKeyBoard = (event) => {
    if(event.key === 'Enter'){
      handleSubmit()
    }
  }

  return (
    <div className={className}>
      {labelText && (
        <label htmlFor="search" className="search__label">
          {labelText}
        </label>
      )}
      <Input
        className="search__input"
        value={value}
        name="search"
        id="search"
        onChange={handleChange}
        onKeyPress={handlingKeyBoard}
      />
      <Button className="search__button" onClick={handleSubmit}>
        Search
      </Button>
    </div>
  )
}
export default styled(SearchBox)`
  ${styles};
`;
