import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Heading from '../../atoms/Heading'
import Input from '../../atoms/Input'
import styles from './filterList.style';

const FilterList = ({ className, filterList, title, getSelectedFilter }) => {
  
  const handleChange = (e) => {
    if (e.target.checked) getSelectedFilter(e.target.value, null)
    else getSelectedFilter(null, e.target.value)
  }
  return (
    <div className={`filter-list ${className}`}>
      {title && <Heading headingtype="h2">{title}</Heading>}

      {filterList.length > 0 && (
        <ul>
          {filterList?.map((item) => {
            return (
              <li key={item} className="filter-list__item">
                <label key={item} htmlFor={item}>
                  <Input
                    type="checkbox"
                    value={item}
                    name={item}
                    onChange={handleChange}
                    id={item}
                  />
                  {item}
                </label>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

FilterList.propTypes = {
  className: PropTypes.string,
  filterList: PropTypes.array.isRequired,
  title: PropTypes.string,
}

FilterList.defaultProps = {
  title: '',
  className: '',
}

export default styled(FilterList)`
  ${styles}
`;
