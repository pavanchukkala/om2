// src/pages/Home/HomePage.jsx
import React from 'react';
import HeroSection from '../../components/layout/HeroSection/HeroSection';
import Card from '../../components/ui/Card';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <HeroSection />
            <section className="homepage__features">
                <h2>Our Features</h2>
                <div className="homepage__cards">
                    <Card title="Quality Assurance" description="Ensuring top-notch quality in every product." />
                    <Card title="Timely Delivery" description="On-time delivery for every order." />
                    <Card title="Customer Support" description="24/7 support for our clients." />
                </div>
            </section>
        </div>
    );
};

export default HomePage;