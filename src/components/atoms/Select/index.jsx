import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ selectList, SelectOption }) => {
  return (
    selectList.length > 0 && (
      <select onChange={SelectOption}>
        {selectList?.map((item) => {
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
    )
  )
}

Select.propTypes = {
    selectList: PropTypes.array.isRequired
}

export default Select


