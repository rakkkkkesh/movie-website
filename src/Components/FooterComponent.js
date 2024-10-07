import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FooterComponent.css'

const FooterComponent = () => {
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
            <li className="flistItem"><Link to="/">Home</Link></li>
            <li className="flistItem"><Link to="/about">About</Link></li>
            <li className="flistItem"><Link to="/contactform">Contact</Link></li>
            <li className="flistItem"><Link to="/privacypolicy">Privacy Policy</Link></li>
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
        <p className="ftext">© {new Date().getFullYear()} Movie Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
