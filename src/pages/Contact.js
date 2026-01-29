import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // In production, replace this with actual API call
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in">Contact Us</h1>
          <p className="page-subtitle fade-in">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="info-card ">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Hope Street<br />City, State 12345<br />Country</p>
            </div>
            <div className="info-card ">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>info@selflessserving.org<br />support@selflessserving.org</p>
            </div>
            <div className="info-card ">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567<br />Mon-Fri: 9AM - 6PM</p>
            </div>
            <div className="info-card ">
              <div className="info-icon">🌐</div>
              <h3>Follow Us</h3>
              <p>@selflessserving on social media<br />Stay connected with us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-content">
              <h2 className="section-heading">Send Us a Message</h2>
              <p className="section-description">
                Have a question or want to get involved? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <p>Thank you for reaching out! We'll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Donation Information</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>

            <div className="form-image slide-up">
              <div className="image-box">
                <div className="contact-illustration">
                  <div className="illustration-icon">💬</div>
                  <h3>Let's Connect</h3>
                  <p>We're here to answer your questions and help you make a difference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <p>Map Location</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-heading centered">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item ">
              <h3>How can I volunteer?</h3>
              <p>
                You can apply through our contact form by selecting "Volunteer Opportunities" 
                or email us directly at volunteer@selflessserving.org. We'll match your skills with 
                our current needs.
              </p>
            </div>
            <div className="faq-item ">
              <h3>Are donations tax-deductible?</h3>
              <p>
                Yes, we are a registered nonprofit organization, and all donations are 
                tax-deductible. You'll receive a receipt for your records.
              </p>
            </div>
            <div className="faq-item ">
              <h3>How do you use donations?</h3>
              <p>
                We allocate funds directly to our programs with minimal overhead. We publish 
                annual reports detailing our financial transparency and impact metrics.
              </p>
            </div>
            <div className="faq-item ">
              <h3>Can I visit your projects?</h3>
              <p>
                Absolutely! We welcome visits to our project sites. Contact us to schedule 
                a visit, and we'll arrange a tour with our team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
