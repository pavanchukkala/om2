import React from 'react';
import 'server/src/pages/About/AboutPage.scss';

const AboutPage = () => {
    return (
        <div className="aboutpage">
            {/* Hero Section */}
            <section className="aboutpage__hero">
                <div className="aboutpage__hero-text">
                    <h1 className="aboutpage__hero-title">Welcome to OM CASTINGS</h1>
                    <p className="aboutpage__hero-subtitle">Delivering Precision, Innovation, and Excellence</p>
                    <button className="aboutpage__cta-button">Learn More</button>
                </div>
            </section>

            {/* Mission Section */}
            <section className="aboutpage__section aboutpage__mission">
                <h2 className="aboutpage__subtitle">Our Mission</h2>
                <p className="aboutpage__text">
                    At OM CASTINGS, we strive to be leaders in delivering high-quality casting solutions
                    that meet the unique needs of our clients. Our commitment to precision, innovation, and
                    customer satisfaction sets us apart in the industry.
                </p>
                <div className="aboutpage__mission-image">
                    <img src="/path-to-image/mission.jpg" alt="Our Mission" />
                </div>
            </section>

            {/* Our Team Section */}
            <section className="aboutpage__section aboutpage__team">
                <h2 className="aboutpage__subtitle">Meet Our Team</h2>
                <div className="aboutpage__team-content">
                    <p className="aboutpage__text">
                        Our team is made up of experienced professionals with a passion for innovation,
                        precision, and quality. We work collaboratively to ensure that every project exceeds expectations.
                    </p>
                    <div className="aboutpage__team-members">
                        <div className="aboutpage__team-member">
                            <img src="/path-to-image/team1.jpg" alt="Team Member 1" />
                            <h3 className="aboutpage__team-member-name">John Doe</h3>
                            <p className="aboutpage__team-member-role">Lead Engineer</p>
                        </div>
                        <div className="aboutpage__team-member">
                            <img src="/path-to-image/team2.jpg" alt="Team Member 2" />
                            <h3 className="aboutpage__team-member-name">Jane Smith</h3>
                            <p className="aboutpage__team-member-role">Project Manager</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="aboutpage__section aboutpage__contact">
                <h2 className="aboutpage__subtitle">Contact Us</h2>
                <p className="aboutpage__text">
                    Interested in learning more or collaborating with us? We're here to help. Reach out to us,
                    and we'll be happy to assist you.
                </p>
                <button className="aboutpage__cta-button">Get in Touch</button>
            </section>

            {/* Footer Section */}
            <footer className="aboutpage__footer">
                <p className="aboutpage__footer-text">
                    © 2024 OM CASTINGS | All Rights Reserved
                </p>
            </footer>
        </div>
    );
};

export default AboutPage;
