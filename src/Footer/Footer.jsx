import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-copyright">
                    <span className="copyright-symbol">©</span> {currentYear}. WHOT Restaurant & Lounge
                </div>

                <div className="footer-links">
                    <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                    <Link to="/terms-of-use" className="footer-link">Term of use</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;