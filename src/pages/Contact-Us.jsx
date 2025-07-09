import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Normally you’d send data to a server here
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help! Fill out the form and we'll get back to you shortly.</p>
      </div>
      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="How can we help you?"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {submitted && <p className="success-msg">Thanks for reaching out! We'll respond soon.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
