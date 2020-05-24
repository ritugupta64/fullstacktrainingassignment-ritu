import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import styles from './button.style'


const Button = ({className, type, onClick, disabled, children }) => {
    return React.createElement('button', {
        type,
        disabled,
        className,
        onClick
    }, children)
}

Button.defaultProps = {
    type: 'button',
    disabled: false,
    className: '',
    onClick: () => {}
}

Button.propTypes = {
    children: PropTypes.node.isRequired, 
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
}

export default styled(Button)`
  ${styles};
`;