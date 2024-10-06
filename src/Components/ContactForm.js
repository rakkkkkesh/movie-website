import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import '../Styles/ContactForm.css';

export default function ContactForm({ searchMovies, isDarkMode, toggleDarkMode }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
    <NavbarComponent
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    
  />
    <div className={`contact-form-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Form id="form" className={`text-center ${isDarkMode ? 'dark-mode' : ''}`} onSubmit={handleSubmit}>
        <h2 className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Contact Us</h2>
        {submitted && <Alert variant="success" className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Thank you for your message!</Alert>}

        <Form.Group className={`mb-3 group ${isDarkMode ? 'text-light' : 'text-dark'}`} controlId="formBasicName">
          <Form.Label className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={isDarkMode ? 'bg-dark text-light' : ''}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={isDarkMode ? 'bg-dark text-light' : ''}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className={isDarkMode ? 'bg-dark text-light' : ''}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={isDarkMode ? 'bg-dark text-light' : ''}
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Send
        </Button>
      </Form>
    </div>
    </>
  );
}
