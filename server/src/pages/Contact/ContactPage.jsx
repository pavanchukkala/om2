// src/pages/Contact/ContactPage.jsx
import React, { useState } from 'react';
import 'server/src/pages/Contact/ContactPage.scss';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) errors.message = 'Message is required';
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setSubmitted(true);
        // Simulate a submission (e.g., API call)
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="contactpage">
            <h1 className="contactpage__title">Contact Us</h1>
            {submitted ? (
                <p className="contactpage__success">Thank you for reaching out! We will get back to you soon.</p>
            ) : (
                <form className="contactpage__form" onSubmit={handleSubmit}>
                    <label className="contactpage__label">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="contactpage__input"
                        />
                        {errors.name && <span className="contactpage__error">{errors.name}</span>}
                    </label>
                    <label className="contactpage__label">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="contactpage__input"
                        />
                        {errors.email && <span className="contactpage__error">{errors.email}</span>}
                    </label>
                    <label className="contactpage__label">
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="contactpage__textarea"
                        />
                        {errors.message && <span className="contactpage__error">{errors.message}</span>}
                    </label>
                    <button type="submit" className="contactpage__button">Submit</button>
                </form>
            )}
        </div>
    );
};

export default ContactPage;
