import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link
        const subject = encodeURIComponent('Reservation Request');
        const body = encodeURIComponent(
            `First Name: ${formData.firstName}\n` +
            `Last Name: ${formData.lastName}\n` +
            `Phone Number: ${formData.phoneNumber}\n` +
            `Email Address: ${formData.emailAddress}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href = `mailto:info@whot.ca?subject=${subject}&body=${body}`;

        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAddress: '',
            message: ''
        });
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Reservation Form */}
                <div className="reservation-form-container">
                    <div className="reservation-header">
                        <h3 className="reservation-subtitle">Reservations</h3>
                        <h2 className="reservation-title">
                            Make your reservations for that special moment and experience luxury with fun at Whot Restaurant & Lounge
                        </h2>
                    </div>

                    <form className="reservation-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Type here..."
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Type here..."
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Type here..."
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAddress">Email Address</label>
                                <input
                                    type="email"
                                    id="emailAddress"
                                    name="emailAddress"
                                    placeholder="Type here..."
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Type here..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="reserve-btn">
                            Reserve Now
                            <span className="reserve-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24">
                                <path fill="#000000" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z" />
                            </svg></span>
                        </button>
                    </form>
                </div>

                {/* Open Days */}
                <div className="open-days-section">
                    <h2 className="open-days-title">Open Days</h2>
                    <div className="open-days-cards">
                        <div className="day-card">
                            <p className="day-name">TUESDAYS &<br />WEDNESDAYS</p>
                            <p className="day-time">2pm to 10pm</p>
                        </div>
                        <div className="day-card">
                            <p className="day-name">THURSDAYS TO<br />SATURDAYS</p>
                            <p className="day-time">2pm to 3am</p>
                        </div>
                        <div className="day-card">
                            <p className="day-name">Sundays</p>
                            <p className="day-time">4pm to 3am</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;