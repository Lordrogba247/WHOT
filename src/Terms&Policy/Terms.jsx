import React from 'react';
import './Terms.css';

const TermsOfUse = () => {
    return (
        <section className="terms-section">
            <div className="terms-container">
                <h1 className="terms-title">Term of Use</h1>
                <p className="terms-date">Effective Date: 1st February, 2026</p>

                <p className="terms-intro">
                    Welcome to WHOT Restaurant & Lounge ("we," "our," or "us"). These Terms of Use govern your access to and use of our website, services, and any online platforms operated by WHOT Restaurant & Lounge, located at 7694 Islington Ave, Woodbridge, Ontario L4L 1W3, Canada.
                </p>

                <p className="terms-intro">
                    By accessing or using our website or services, you agree to be bound by these Terms. If you do
                    not agree, please do not use our services.
                </p>

                {/* Section 1 */}
                <div className="terms-section-content">
                    <h2 className="section-title">1. Use of Website</h2>
                    <p className="section-text">You agree to use our website for lawful purposes only and in a way that does not infringe the rights of others or restrict their use of the website.</p>
                    <p className="section-text">You must not:</p>
                    <ul className="section-list">
                        <li>Attempt to gain unauthorized access to any part of the website</li>
                        <li>Use the website to transmit harmful or malicious code</li>
                        <li>Use the website for fraudulent purposes</li>
                    </ul>
                </div>

                {/* Section 2 */}
                <div className="terms-section-content">
                    <h2 className="section-title">2. Reservations and Orders</h2>
                    <p className="section-text">
                        All reservations, orders, or inquiries made through our website or contact channels are subject to availability and confirmation.
                    </p>
                    <p className="section-text">
                        We reserve the right to refuse or cancel any order or reservation at our discretion.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="terms-section-content">
                    <h2 className="section-title">3. Intellectual Property</h2>
                    <p className="section-text">
                        All content on this website, including text, images, logos, and graphics, is the property of WHOT
                        Restaurant & Lounge and is protected by intellectual property laws. You may not copy,
                        reproduce, distribute, or exploit any content without our written permission.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="terms-section-content">
                    <h2 className="section-title">4. Third-Party Links</h2>
                    <p className="section-text">
                        Our website may contain links to third-party websites. We are not responsible for the content,
                        policies, or practices of any third-party websites.
                    </p>
                </div>

                {/* Section 5 */}
                <div className="terms-section-content">
                    <h2 className="section-title">5. Limitation of Liability</h2>
                    <p className="section-text">
                        WHOT Restaurant & Lounge shall not be liable for any direct, indirect, incidental, or
                        consequential damages arising from your use of our website or services.
                    </p>
                </div>

                {/* Section 6 */}
                <div className="terms-section-content">
                    <h2 className="section-title">6. Changes to Terms</h2>
                    <p className="section-text">
                        We may update these Terms of Use at any time. Changes will be posted on this page with an
                        updated effective date.
                    </p>
                </div>

                {/* Section 7 */}
                <div className="terms-section-content">
                    <h2 className="section-title">7. Governing Law</h2>
                    <p className="section-text">
                        These Terms shall be governed by and interpreted in accordance with the laws of Ontario,
                        Canada.
                    </p>
                </div>

                {/* Section 8 */}
                <div className="terms-section-content">
                    <h2 className="section-title">8. Contact Us</h2>
                    <p className="section-text">If you have questions about these Terms of Use, please contact us:</p>
                    <p className="section-text">
                        WHOT Restaurant & Lounge, 7694 Islington Ave, Woodbridge, Ontario L4L 1W3, Canada<br />
                        Email: <a href="mailto:info@whot.ca" className="terms-link">info@whot.ca</a>, Phone: <a href="tel:+19052660331" className="terms-link">+1 905-266-0331</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TermsOfUse;