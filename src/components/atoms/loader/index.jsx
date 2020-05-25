import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';
import styles from './loader.style'


const Loader = ({className, children}) => {
    return (
    <div className={className}>{children}</div>
    )
}

Loader.defaultProps = {
    className: 'loader',
}

Loader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default styled(Loader)`
  ${styles};
`;