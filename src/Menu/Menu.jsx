import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import barImage from '../assets/Frame 38.jpg';
import steakImage from '../assets/Frame 38 (1).jpg';
import cocktailImage from '../assets/Frame 38 (2).jpg';
import riceImage from '../assets/Rice.jpg';


const Menu = () => {
    return (
        <section className="menu-section">
            <div className="menu-container">
                <h2 className="menu-heading">Menu</h2>

                <div className="menu-cards">
                    {/* Card 1 */}
                    <div className="menu-card">
                        <div className="menu-card-image">
                            <img src={barImage} alt="Unwind in style" />
                        </div>
                        <div className="menu-card-content">
                            <h3 className="menu-card-title">Unwind in Style</h3>
                            <p className="menu-card-description">
                                At Whot Restaurant & Lounge, every menu is specially crafted to stir your senses.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="menu-card">
                        <div className="menu-card-image">
                            <img src={riceImage} alt="Every Bite Speaks" />
                        </div>
                        <div className="menu-card-content">
                            <h3 className="menu-card-title">Every Bite Speaks</h3>
                            <p className="menu-card-description">
                                Every bite of joy is an indulgence in everything that's wonderfully made!
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="menu-card">
                        <div className="menu-card-image">
                            <img src={cocktailImage} alt="Drink, Dine, Relax" />
                        </div>
                        <div className="menu-card-content">
                            <h3 className="menu-card-title">Drink, Dine, Relax</h3>
                            <p className="menu-card-description">
                                Whether you are dining or sipping your favourite cocktail, every sip speaks to your palette.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="menu-btn-container">
                    <Link to="/menu" className="menu-btn">
                        Check our Menu
                        <span className="menu-btn-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000000" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z" />
                        </svg></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Menu;