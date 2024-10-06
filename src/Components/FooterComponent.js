import React from 'react';
import '../Styles/FooterComponent.css';

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="column">
                    <h4 className="heading">About Us</h4>
                    <p className="text">We are dedicated to providing the best movie experience.</p>
                </div>
                <div className="column">
                    <h4 className="heading">Quick Links</h4>
                    <ul className="list">
                        <li className="listItem"><a href="/">Home</a></li>
                        <li className="listItem"><a href="/about">About</a></li>
                        <li className="listItem"><a href="/contactform">Contact</a></li>
                        <li className="listItem"><a href="/privacypolicy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h4 className="heading">Follow Us</h4>
                    <div className="socialLinks">
                        <a href="https://facebook.com" className="socialLink">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com" className="socialLink">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://instagram.com" className="socialLink">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className="text">© {currentYear} Movie Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
