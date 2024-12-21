// src/components/layout/Header/Header.jsx
import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">OM CASTINGS</div>
            <nav className="header__nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
