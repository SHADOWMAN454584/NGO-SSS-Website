import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Replace the placeholder values below with your real EmailJS credentials.
// See setup instructions in the README or follow the steps Copilot provided.
const EMAILJS_SERVICE_ID  = 'service_eal20vk';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_wwa1oal';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YTkqio45e2L9f07WR';   // e.g. 'xxxxxxxxxxxxxxxxxxx'
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

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
    setLoading(true);
    setError('');

    const now = new Date();
    const templateParams = {
      name:       formData.name,
      from_email: formData.email,
      phone:      formData.phone || 'Not provided',
      subject:    formData.subject,
      message:    formData.message,
      time:       now.toLocaleString('en-IN', {
                    weekday: 'long',
                    year:    'numeric',
                    month:   'long',
                    day:     'numeric',
                    hour:    '2-digit',
                    minute:  '2-digit',
                    hour12:  true,
                  }),
      to_email:   'psoham2017@gmail.com',
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((err) => {
        setLoading(false);
        setError('Failed to send message. Please try again or email us directly.');
        console.error('EmailJS error:', err);
      });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Bhagirath, Dahisar (E), Mumbai 400068</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>
                +91 98927 02063
                +91 95949 00346
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>selflessservingsociety@gmail.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📸</div>
              <h3>Follow Us</h3>
              <p>Stay connected with us on Instagram</p>
              <a
                href="https://www.instagram.com/selfless_serving_society_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-badge"
              >
                <span className="instagram-at">@</span>selfless_serving_society_
              </a>
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

              {error && (
                <div className="error-message">
                  <div className="error-icon">⚠</div>
                  <p>{error}</p>
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
                      placeholder="Your Email"
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
                      placeholder="Your Number"
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

                <button
                  type="submit"
                  className="btn btn-primary btn-large"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
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

      {/* Donation Section */}
      <section className="section donation-section">
        <div className="container">
          <h2 className="section-heading centered">💛 Why Partner with Selfless Serving Society?</h2>

          {/* Why Partner Cards */}
          <div className="donation-why-grid">
            <div className="donation-why-card">
              <div className="donation-why-icon">🌟</div>
              <h3>Transparency</h3>
              <p>Over 95% of all funds directly support on-ground initiatives, ensuring your contribution creates real change.</p>
            </div>
            <div className="donation-why-card">
              <div className="donation-why-icon">🤝</div>
              <h3>Community-Centric Approach</h3>
              <p>Work alongside a passionate network of volunteers, partners, and beneficiaries dedicated to social transformation.</p>
            </div>
            <div className="donation-why-card">
              <div className="donation-why-icon">📈</div>
              <h3>Tangible Impact</h3>
              <p>Every contribution leads to measurable improvements in health, education, and livelihoods.</p>
            </div>
          </div>

          {/* Ways to Contribute */}
          <div className="donation-contribute-block">
            <h2 className="donation-sub-heading">🎁 Ways You Can Contribute</h2>
            <p className="donation-sub-desc">You can support us by donating:</p>
            <div className="donation-items-grid">
              {[
                { icon: '👕', label: 'Old Clothes' },
                { icon: '♻️', label: 'Plastic (for recycling initiatives)' },
                { icon: '💻', label: 'E-Waste' },
                { icon: '🍚', label: 'Dry Food' },
                { icon: '💰', label: 'Monetary Support' },
              ].map((item) => (
                <div className="donation-item-chip" key={item.label}>
                  <span className="donation-item-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <p className="donation-tagline">Every donation—big or small—helps us serve communities better.</p>
          </div>

          {/* Tax Benefits */}
          <div className="donation-tax-block">
            <h2 className="donation-sub-heading">🏦 Maximize Your Impact with Tax Benefits</h2>
            <p className="donation-sub-desc">Selfless Serving Society complies with all statutory guidelines.</p>
            <div className="donation-tax-grid">
              <div className="donation-tax-card highlight-card">
                <p className="tax-check">✅ Donations are eligible for tax deductions under <strong>Section 80G</strong> and <strong>CSR-1</strong>.</p>
                <h4>Eligible Donors:</h4>
                <ul className="tax-list">
                  <li>Individuals</li>
                  <li>Companies</li>
                  <li>Firms</li>
                </ul>
              </div>
              <div className="donation-tax-card">
                <h4>💰 Benefits Include:</h4>
                <ul className="tax-list">
                  <li>Contributions of <strong>₹2,000 or more</strong> via Cheque, Demand Draft, or Electronic Transfer</li>
                  <li>Deductions ranging from <strong>50% to 100%</strong> (as per Section 80G guidelines)</li>
                </ul>
                <p className="tax-note">⚠️ <strong>Note:</strong> Donations in-kind or cash exceeding ₹2,000 are not eligible for deduction.</p>
              </div>
            </div>
          </div>

          {/* How to Donate */}
          <div className="donation-how-block">
            <h2 className="donation-sub-heading">💳 How to Donate</h2>
            <div className="donation-methods-grid">
              <div className="donation-method-card">
                <div className="donation-method-badge">1️⃣</div>
                <h3>NEFT / Bank Transfer</h3>
                <table className="bank-details-table">
                  <tbody>
                    <tr><td>Account Name</td><td><strong>SELFLESS SERVING SOCIETY</strong></td></tr>
                    <tr><td>Account Number</td><td><strong>50200107953797</strong></td></tr>
                    <tr><td>IFSC Code</td><td><strong>HDFC0000443</strong></td></tr>
                    <tr><td>Bank &amp; Branch</td><td><strong>HDFC Bank, Anand Nagar, Dahisar, Mumbai</strong></td></tr>
                  </tbody>
                </table>
                <p className="donation-method-note">
                  📩 After transferring, please email your donation details to&nbsp;
                  <a href="mailto:selflessservingsociety@gmail.com" className="donation-email-link">
                    selflessservingsociety@gmail.com
                  </a>
                  &nbsp;for receipt generation.
                </p>
              </div>

              <div className="donation-method-card">
                <div className="donation-method-badge">2️⃣</div>
                <h3>Cheque Donation</h3>
                <table className="bank-details-table">
                  <tbody>
                    <tr><td>Payable To</td><td><strong>SELFLESS SERVING SOCIETY</strong></td></tr>
                    <tr><td>Payable At</td><td><strong>Mumbai</strong></td></tr>
                  </tbody>
                </table>
                <p className="donation-method-note" style={{ marginTop: '1rem' }}>
                  Send the cheque to our office address along with:
                </p>
                <ul className="cheque-details-list">
                  <li>Full Name</li>
                  <li>Phone Number</li>
                  <li>Email Address</li>
                  <li>PAN Number <em>(mandatory for donations above ₹9,999)</em></li>
                  <li>Postal Address <em>(for receipt delivery)</em></li>
                </ul>
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
