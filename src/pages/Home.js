import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sssLogo from '../assets/images/Logo.svg';
import './Home.css';

// Import hero images (add your images to src/assets/home hero image/)
// Uncomment these lines and add your actual image files
import heroImage1 from '../assets/home hero image/image1.jpg';
// import heroImage2 from '../assets/home hero image/image2.jpg';
// import heroImage3 from '../assets/home hero image/image3.jpg';

// Placeholder images array - replace with your actual images
const heroImages = [
  heroImage1,
  // heroImage2,
  // heroImage3,
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % heroImages.length;
      return newIndex;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    // Intersection Observer for animations
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

  return (
    <div className="home">
      {/* Merged Hero + Navbar Section */}
      <section className="hero">
        {/* Background Image Slider */}
        {heroImages.length > 0 && (
          <div className="hero-background-slider">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        )}

        <div className="hero-overlay"></div>

        {/* Navigation Arrows - moved outside slider */}
        {heroImages.length > 0 && (
          <>
            <button className="hero-arrow hero-arrow-left" onClick={prevImage}>
              ‹
            </button>
            <button className="hero-arrow hero-arrow-right" onClick={nextImage}>
              ›
            </button>

            {/* Image Indicators */}
            <div className="hero-indicators">
              {heroImages.map((_, index) => (
                <span
                  key={index}
                  className={`hero-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
          </>
        )}
        
        {/* Integrated Navbar in Hero */}
        <div className="hero-navbar">
          <div className="hero-navbar-container">
            <Link to="/" className="hero-navbar-logo">
              Selfless <span className="logo-highlight">Serving Society</span>
            </Link>
            
            {/* Hamburger Menu Icon for Mobile */}
            <div 
              className={`hero-menu-icon ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <ul className={`hero-nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <li className="hero-nav-item">
                <Link to="/" className="hero-nav-link active" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              </li>
              <li className="hero-nav-item">
                <Link to="/about" className="hero-nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              </li>
              <li className="hero-nav-item">
                <Link to="/what-we-do" className="hero-nav-link" onClick={() => setMobileMenuOpen(false)}>What We Do</Link>
              </li>
              <li className="hero-nav-item">
                <Link to="/case-studies" className="hero-nav-link" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
              </li>
              <li className="hero-nav-item">
                <Link to="/contact" className="hero-nav-link hero-nav-link-button" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title fade-in">
            Helping People, Changing Lives            
          </h1>          
          {/* <p className="hero-subtitle">
            Empowering Communities Through Health, Hygiene, Education, and Compassionate Change for a Dignified Future
          </p> */}
          
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down </span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="section-grid">
            <div className="section-image slide-up">
              <div className="image-placeholder">
                <img src={sssLogo} alt="SSS Logo" className="image-icon" />
              </div>
            </div>
            <div className="section-content">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text">
                Selfless Serving Society was founded by a group of compassionate individuals united by a simple yet profound belief — that awareness of basic health and hygiene has the power to transform lives and uplift entire communities. In many underserved regions, limited access to essential health supplies, minimal exposure to hygienic practices, and the absence of regular outreach efforts allow preventable illnesses to silently persist — often affecting women, children, and the elderly the most.
              </p>
              <p className="section-text">
                We are a non-governmental, non-profit organisation dedicated to closing this gap. Through outreach programs, workshops, seminars, talks, and distribution of health-related products, we strive to empower people with knowledge, tools, and habits that help them live healthier, more dignified lives.
              </p>
              <Link to="/About" className="btn btn-link">
                Learn About Us →
              </Link>
            
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="featured-work">
        <div className="container">
          <h2 className="section-title centered">Our Impact Areas</h2>
          <p className="section-subtitle centered">
            Making a difference across multiple sectors
          </p>
          
          <div className="work-grid">
            <div className="work-card slide-up">
              <div className="work-icon">📚</div>
              <h3>Education</h3>
              <p>Empowered 20 rural girls in Gujarat through tailoring training, helping them gain confidence, skills, and financial independence.</p>
              <Link to="/case-studies#case-study-3" className="work-card-link">Read Case Study →</Link>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Promoted menstrual hygiene and wellness by distributing essential hygiene kits to adolescent girls in marginalized communities.</p>
              <Link to="/case-studies#case-study-4" className="work-card-link">Read Case Study →</Link>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">🌱</div>
              <h3>Environment</h3>
              <p>Collected 31 kg of clothes under the KAPAAD Project, promoting recycling, zero-waste practices, and sustainable living.</p>
              <Link to="/case-studies#case-study-2" className="work-card-link">Read Case Study →</Link>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">💼</div>
              <h3>Livelihood</h3>
              <p>Created livelihood opportunities for 50+ tribal women and differently-abled artisans through handcrafted product sales and exhibitions.</p>
              <Link to="/case-studies#case-study-1" className="work-card-link">Read Case Study →</Link>
            </div>
          </div>

          <div className="centered">
            <Link to="/case-studies" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-text">
              Your support can transform lives. Join us in our mission to create lasting change.
            </p>
            <div className="cta-buttons">
              <Link to="/partner" className="btn btn-primary-inverse">Become a Partner</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
