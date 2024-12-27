import React from 'react';
import 'server/src/pages/Home/HomePage.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="navbar__logo">OM CASTINGS</div>
                <ul className="navbar__links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero__content">
                    <h1 className="hero__title">High-Quality Excavator Bucket Teeth</h1>
                    <p className="hero__subtitle">Engineered to deliver unmatched durability and performance.</p>
                    <button className="hero__cta-button">Explore Products</button>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="products">
                <h2 className="products__title">Our Products</h2>
                <div className="products__list">
                    <div className="product">
                        <h3 className="product__name">Heavy Duty Tooth</h3>
                        <p className="product__description">
                            Designed for extreme performance in tough conditions.
                        </p>
                    </div>
                    <div className="product">
                        <h3 className="product__name">General Purpose Tooth</h3>
                        <p className="product__description">
                            Perfect balance of durability and flexibility.
                        </p>
                    </div>
                    <div className="product">
                        <h3 className="product__name">Rock Tooth</h3>
                        <p className="product__description">
                            Specialized for rocky terrains and high abrasion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 OM CASTINGS. All rights reserved.</p>
                <div className="footer__social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
