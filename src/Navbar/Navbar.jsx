import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Check if we're on the home page
    const isHomePage = location.pathname === '/';

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Determine navbar class based on page and scroll
    const getNavbarClass = () => {
        if (isHomePage && !isScrolled) {
            return 'navbar-transparent';
        }
        return 'navbar-solid';
    };

    return (
        <nav className={`navbar ${getNavbarClass()}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src={logo} alt="WHOT Restaurant & Lounge" className="logo-image" />
                </Link>

                {/* Hamburger Icon */}
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Navigation Menu */}
                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <Link to="/menu" className="navbar-link" onClick={closeMenu}>
                            Our Menu
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/reservations" className="navbar-link" onClick={closeMenu}>
                            Reservations
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;