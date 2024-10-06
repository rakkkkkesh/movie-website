import React from 'react';
import '../Styles/PrivacyPolicy.css';
import NavbarComponent from './NavbarComponent';

const PrivacyPolicy = ({ isDarkMode }) => {
  return (
    <>
    <NavbarComponent/>
    <div className={`privacy-policy-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className={`privacy-policy-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Privacy Policy
      </h2>
      <p className={`privacy-policy-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        At our Movie Website, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your information.
      </p>
      <h3 className={`sub-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Information We Collect
      </h3>
      <p className={`privacy-policy-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        We may collect personal information when you visit our site, including your name, email address, and browsing behavior.
      </p>
      <h3 className={`sub-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        How We Use Your Information
      </h3>
      <p className={`privacy-policy-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Your information helps us to improve our website, personalize your experience, and send periodic emails regarding updates and promotions.
      </p>
      <h3 className={`sub-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Data Protection
      </h3>
      <p className={`privacy-policy-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        We implement various security measures to maintain the safety of your personal information. However, no method of transmission over the internet is completely secure.
      </p>
      <h3 className={`sub-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Third-Party Disclosure
      </h3>
      <p className={`privacy-policy-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except to provide services you have requested.
      </p>
      <h3 className={`sub-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Changes to This Policy
      </h3>
      <p className={`privacy-policy-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        We may update this Privacy Policy periodically. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account.
      </p>
      <h3 className={`sub-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Contact Us
      </h3>
      <p className={`privacy-policy-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@moviewebsite.com">support@moviewebsite.com</a>.
      </p>
      <div className={`privacy-policy-footer ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        <p>© 2024 Movie Website. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
