import React from 'react'
import PropTypes from 'prop-types'

import '../../../styles/styles.scss'

const Layout = ({ children }) => {
  return <main className="container">{children}</main>
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default Layout

