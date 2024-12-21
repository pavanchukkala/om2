// src/components/ui/Modal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ isOpen, title, children, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal__overlay" onClick={onClose}></div>
            <div className="modal__content">
                <button className="modal__close" onClick={onClose}>&times;</button>
                {title && <h2 className="modal__title">{title}</h2>}
                <div className="modal__body">{children}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;