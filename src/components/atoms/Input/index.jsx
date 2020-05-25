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
  onKeyPress,
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
    onKeyPress,
  })
}

Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
  value:'',
  onKeyUp: () => {},
  onChange: () => {},
  id: '',
  onKeyPress: () => {},
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onKeyUp: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
}

export default styled(Input)`
  ${styles};
`;
