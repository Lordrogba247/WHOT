import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Eat, Drink & Vibe</h1>
                <p className="hero-subtitle">
                    <em>At Whot Restaurant & Lounge, every menu is specially curated
                        <br />
                        to the next level, welcoming guests to unwind and indulge.</em>
                </p>
                <div className="hero-buttons">
                    <Link to="/reservations" className="hero-btn hero-btn-primary">
                        Reserve Now
                        <span className="btn-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#d4af37" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z" />
                        </svg></span>
                    </Link>
                    <Link to="/menu" className="hero-btn hero-btn-secondary">
                        Check our Menu
                        <span className="btn-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000000" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z" />
                        </svg></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;