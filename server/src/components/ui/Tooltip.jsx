// src/components/ui/Tooltip.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.scss';

const Tooltip = ({ text, position = 'top', children }) => {
    return (
        <div className="tooltip">
            {children}
            <span className={`tooltip__text tooltip__text--${position}`}>{text}</span>
        </div>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    children: PropTypes.node.isRequired,
};

export default Tooltip;
