// src/components/ui/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ title, content, image }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="card__image" />}
            <div className="card__body">
                <h3 className="card__title">{title}</h3>
                <p className="card__content">{content}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
};

Card.defaultProps = {
    image: null,
};

export default Card;