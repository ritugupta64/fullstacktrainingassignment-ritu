import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';
import styles from './heading.style'

const Heading = ({children, className, headingtype}) => {
    const HeadingElement = headingtype
    return <HeadingElement headingtype = {headingtype ? headingtype : 'h1'} className={className}>
        {children}
    </HeadingElement>
}

Heading.propTypes = {
    headingtype: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.elementType,
        PropTypes.array,
        PropTypes.object,
      ]).isRequired,
      className: PropTypes.string
}

Heading.defaultProps = {
    headingtype: 'h1',
    className: 'heading'
}

export default styled(Heading)`
  ${styles};
`;