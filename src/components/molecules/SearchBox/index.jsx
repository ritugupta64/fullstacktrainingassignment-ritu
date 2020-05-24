import React, {useState} from 'react'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

const SearchBox = ({labelText, getValue}) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        getValue(value);
      };

  return (
    <>
      {labelText && <label htmlFor="search">{labelText}</label>} 
      <Input value={value} name="search" id="search" onChange = {handleChange} />
      <Button onClick={handleSubmit}>Search</Button>
    </>
  )
}

export default SearchBox
