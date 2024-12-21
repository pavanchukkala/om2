// src/components/ui/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ label, onClick, type = 'button', variant = 'primary', disabled = false }) => {
    return (
        <button 
            className={`button button--${variant}`} 
            onClick={onClick} 
            type={type} 
            disabled={disabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    variant: 'primary',
    disabled: false,
};

export default Button;