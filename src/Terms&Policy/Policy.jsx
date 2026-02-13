import React from 'react';
import './Policy.css';

const PrivacyPolicy = () => {
    return (
        <section className="privacy-section">
            <div className="privacy-container">
                <h1 className="privacy-title">Privacy Policy</h1>
                <p className="privacy-date">Effective Date: 1st February, 2026</p>

                <p className="privacy-intro">
                    WHOT Restaurant & Lounge respects your privacy and is committed to protecting your
                    personal information. This Privacy Policy explains how we collect, use, and safeguard your
                    information.
                </p>

                {/* Section 1 */}
                <div className="privacy-section-content">
                    <h2 className="section-title">1. Information We Collect</h2>
                    <p className="section-text">We may collect the following information:</p>
                    <ul className="section-list">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Reservation or order details</li>
                        <li>Any information you voluntarily provide</li>
                    </ul>
                </div>

                {/* Section 2 */}
                <div className="privacy-section-content">
                    <h2 className="section-title">2. How We Use Your Information</h2>
                    <p className="section-text">We use your information to:</p>
                    <ul className="section-list">
                        <li>Process reservations and orders</li>
                        <li>Respond to enquires</li>
                        <li>Improve our services</li>
                        <li>Send updates or promotions (only if you opt in)</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div className="privacy-section-content">
                    <h2 className="section-title">3. Sharing of Information</h2>
                    <p className="section-text">
                        We do not sell or rent your personal information. We may share information with service
                        providers who assist in operating our business, subject to confidentiality obligations.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="privacy-section-content">
                    <h2 className="section-title">4. Data Security</h2>
                    <p className="section-text">
                        We take reasonable measures to protect your personal information from unauthorized access,
                        misuse, or disclosure.
                    </p>
                </div>

                {/* Section 5 */}
                <div className="privacy-section-content">
                    <h2 className="section-title">5. Cookies</h2>
                    <p className="section-text">
                        Our website may use cookies to enhance user experience and analyze website traffic. You can
                        choose to diable cookies through your browser settings.
                    </p>
                </div>

                {/* Section 6 */}
                <div className="privacy-section-content">
                    <h2 className="section-title">6. Your Rights</h2>
                    <p className="section-text">
                        You have the right to request access to, correction of, or deletion of your personal information.
                    </p>
                </div>

                {/* Section 7 */}
                <div className="privacy-section-content">
                    <h2 className="section-title">7. Changes to This Policy</h2>
                    <p className="section-text">
                        We may update this Privacy Policy from time to time. Updates will be posted on this page with a
                        revised effective date.
                    </p>
                </div>

                {/* Section 8 */}
                <div className="privacy-section-content">
                    <h2 className="section-title">8. Contact Us</h2>
                    <p className="section-text">If you have questions about this Privacy Policy, contact us:</p>
                    <p className="section-text">
                        WHOT Restaurant & Lounge, 7694 Islington Ave, Woodbridge, Ontario L4L 1W3, Canada<br />
                        Email: <a href="mailto:info@whot.ca" className="privacy-link">info@whot.ca</a>, Phone: <a href="tel:+19052660331" className="privacy-link">+1 905-266-0331</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;