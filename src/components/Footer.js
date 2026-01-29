import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">Selfless <span>Serving Society</span></h3>
          <p className="footer-description">
            Making a difference in communities through compassion, dedication, and impactful initiatives.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page"><i className="social-icon">f</i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter profile"><i className="social-icon">X</i></a>
            <a href="https://www.instagram.com/selfless_serving_society_?utm_source=qr&igsh=ajZlZDA1ZHQ4NHEz" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile"><i className="social-icon">i</i></a>
            <a href="https://www.linkedin.com/in/konica-lishoy-113ab2390" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page"><i className="social-icon">In</i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/what-we-do">Our Work</Link></li>
            <li><Link to="/contact">Partner With Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/contact">Volunteer</Link></li>
            <li><Link to="/partner">Donate</Link></li>
            <li><Link to="/partner">Corporate Partnership</Link></li>
            <li><Link to="/case-studies">Our Projects</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>📧 info@selflessserving.org</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 123 Hope Street, City</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Selfless Serving Society. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
