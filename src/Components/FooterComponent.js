import React from 'react';
import '../Styles/FooterComponent.css';

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="fcontainer">
                <div className="fcolumn">
                    <h4 className="fheading">About Us</h4>
                    <p className="ftext">We are dedicated to providing the best movie experience.</p>
                </div>
                <div className="fcolumn">
                    <h4 className="fheading">Quick Links</h4>
                    <ul className="flist">
                        <li className="flistItem"><a href="/">Home</a></li>
                        <li className="flistItem"><a href="/about">About</a></li>
                        <li className="flistItem"><a href="/contactform">Contact</a></li>
                        <li className="flistItem"><a href="/privacypolicy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="fcolumn">
                    <h4 className="fheading">Follow Us</h4>
                    <div className="fsocialLinks">
                        <a href="https://facebook.com" className="fsocialLink">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com" className="fsocialLink">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://instagram.com" className="fsocialLink">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="fbottom">
                <p className="ftext">© {currentYear} Movie Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
