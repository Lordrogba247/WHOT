import React from 'react';
import { Link } from 'react-router-dom';
import './Menus.css';

const Menus = () => {
    return (
        <section className="menus-section">
            <div className="menus-container">
                <h1 className="menus-main-title">MENU</h1>
                <p className="menus-subtitle">
                    Explore our menu to enjoy variety of mouthwatering dishes for your pleasure and satisfaction
                </p>

                {/* SOUP Section */}
                <div className="menu-category">
                    <h2 className="category-title">SOUP</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Cowfoot Peppersoup</span>
                            <span className="item-price">CAD$25.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Tilapia Fish Peppersoup</span>
                            <span className="item-price">CAD$25.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Catfish Peppersoup</span>
                            <span className="item-price">CAD$35.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Goat Meat Peppersoup</span>
                            <span className="item-price">CAD$24.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Turkey Peppersoup</span>
                            <span className="item-price">CAD$25.00</span>
                        </div>
                    </div>
                    <p className="category-note">
                        All Soups are freshly made with African Herbs & Spices<br />
                        <span className="note-highlight">All Extras such as Yam, Plantain and Potatoes attracts extra charge</span>
                    </p>
                </div>

                {/* APPETIZERS Section */}
                <div className="menu-category">
                    <h2 className="category-title">APPETIZERS</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Pesto Grilled Prawns</span>
                            <span className="item-price">CAD$25.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Chicken Wings</span>
                            <span className="item-price">CAD$20.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Smoked Turkey Bites</span>
                            <span className="item-price">CAD$20.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Gizzard & Fried Plantain (Gizdodo)</span>
                            <span className="item-price">CAD$20.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Stewed Beef/Goat</span>
                            <span className="item-price">CAD$20.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Peppered Snails</span>
                            <span className="item-price">CAD$35.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Nkwobi (Cowfeet)</span>
                            <span className="item-price">CAD$30.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Isi-Ewu (Goat Head)</span>
                            <span className="item-price">CAD$35.00</span>
                        </div>
                    </div>
                </div>

                {/* HANDHELDS Section */}
                <div className="menu-category">
                    <h2 className="category-title">HANDHELDS</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Chicken Club</span>
                            <span className="item-price">CAD$20.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Whot-A-Burger (6Oz Beef+Fries+more)</span>
                            <span className="item-price">CAD$20.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Chicken Burger</span>
                            <span className="item-price">CAD$18.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Beacon,Lettuce/Tomato Sandwich</span>
                            <span className="item-price">CAD$15.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Steak Sandwich</span>
                            <span className="item-price">CAD$30.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Chicken Fingers</span>
                            <span className="item-price">CAD$25.00</span>
                        </div>
                    </div>
                </div>

                {/* ENTREES Section */}
                <div className="menu-category">
                    <h2 className="category-title">ENTREES</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Jollof Rice</span>
                            <span className="item-price">CAD$15.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Fried Rice</span>
                            <span className="item-price">CAD$19.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Fully Loaded Jollof Rice</span>
                            <span className="item-price">CAD$25.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Jollof Linguine</span>
                            <span className="item-price">CAD$25.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Fried Yam & Smoked Turkey</span>
                            <span className="item-price">CAD$25.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Fried Yam & Tilapia</span>
                            <span className="item-price">CAD$30.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Fried Plantain & Tilapia</span>
                            <span className="item-price">CAD$28.00</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Steak & Fries</span>
                            <span className="item-price">CAD$35.00</span>
                        </div>
                    </div>
                </div>

                {/* WHOT-A-PLATTER Section */}
                <div className="menu-category">
                    <h2 className="category-title">WHOT-A-PLATTER</h2>
                    <div className="menu-items">
                        <div className="menu-item platter-item">
                            <span className="item-name">
                                Chicken wings, Suya Kebabs,<br />
                                Pesto Grilled Prawns,<br />
                                Yam Chips & Fried Plantain
                            </span>
                            <span className="item-price">CAD$60.00</span>
                        </div>
                    </div>
                </div>

                {/* CYO Section */}
                <div className="menu-category">
                    <h2 className="category-title">CYO</h2>
                    <div className="menu-items">
                        <div className="menu-item cyo-item">
                            <span className="item-name">Choose your own<br />meal</span>
                            <span className="item-price ask-server">Ask your Servers for details</span>
                        </div>
                    </div>
                </div>

                {/* SIDES/EXTRA Section */}
                <div className="menu-category">
                    <h2 className="category-title">SIDES/EXTRA</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Beef Suya</span>
                            <span className="item-price">CAD$29.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Ram Suya</span>
                            <span className="item-price">CAD$34.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Asun</span>
                            <span className="item-price">CAD$29.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Fried Whole Tilapia</span>
                            <span className="item-price">CAD$24.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Foil Grilled Tilapia</span>
                            <span className="item-price">CAD$29.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Grilled Catfish</span>
                            <span className="item-price">CAD$34.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Short Ribs</span>
                            <span className="item-price">CAD$24.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Yam Chips</span>
                            <span className="item-price">CAD$11.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">French Fries</span>
                            <span className="item-price">CAD$8.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Sweet Potato Fries</span>
                            <span className="item-price">CAD$9.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Fried Plantain</span>
                            <span className="item-price">CAD$6.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Poutine</span>
                            <span className="item-price">CAD$10.99</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">House Sauce</span>
                            <span className="item-price">CAD$4.99</span>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="menu-footer-note">
                    Tables of 6 or more are subject to a 15% Gratuity
                </p>

                {/* Reservation Button */}
                <Link to="/reservations" className="reservation-btn">
                    Make Reservations <svg className='rsv' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#d4af37" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z" />
                    </svg>
                </Link>
                <Link to="/reservations" className="reservation-btn rsv2" display="none">
                    Make Reservations <svg className='rsv' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#000000" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default Menus;