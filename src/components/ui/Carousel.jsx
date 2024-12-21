// src/components/ui/Carousel.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Carousel.scss';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel">
            <button className="carousel__button carousel__button--prev" onClick={prevSlide}>&lt;</button>
            <div className="carousel__slide">{items[currentIndex]}</div>
            <button className="carousel__button carousel__button--next" onClick={nextSlide}>&gt;</button>
        </div>
    );
};

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carousel;