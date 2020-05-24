import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';
import styles from './input.style'

const Input = ({
  className,
  type,
  placeholder,
  name,
  id,
  value,
  onChange,
  onKeyUp,
}) => {
  return React.createElement('input', {
    type,
    className,
    placeholder,
    name,
    id,
    value,
    onChange,
    onKeyUp,
  })
}

Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
  value:'',
  onKeyUp: () => {},
  onChange: () => {},
  id: ''
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onKeyUp: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default styled(Input)`
  ${styles};
`;
