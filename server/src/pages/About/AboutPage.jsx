// src/pages/About/AboutPage.jsx
import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
    return (
        <div className="aboutpage">
            <h1 className="aboutpage__title">About Us</h1>
            <section className="aboutpage__section">
                <h2 className="aboutpage__subtitle">Our Mission</h2>
                <p className="aboutpage__text">
                    At OM CASTINGS, our mission is to deliver high-quality casting solutions
                    that meet the unique needs of our clients across various industries.
                </p>
            </section>
            <section className="aboutpage__section">
                <h2 className="aboutpage__subtitle">Our Team</h2>
                <p className="aboutpage__text">
                    We are a team of experienced professionals dedicated to innovation,
                    precision, and customer satisfaction. Our experts work collaboratively
                    to ensure excellence in every project.
                </p>
            </section>
            <section className="aboutpage__section">
                <h2 className="aboutpage__subtitle">Contact Us</h2>
                <p className="aboutpage__text">
                    Want to learn more about what we do? Reach out to us, and we’ll be happy
                    to assist you.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;