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
                Selfless Serving Society was born from a shared belief: basic health and hygiene knowledge can change lives and strengthen entire communities. In many underserved areas, lack of access to essential health supplies and minimal awareness of simple hygienic practices allow preventable illnesses to quietly impact families — especially women, children, and the elderly.

              </p>
              <p className="section-text">
                We are a non-governmental, non-profit organization committed to closing this gap. Through outreach programs, workshops, seminars, talks, and distribution of health products, we equip people with the knowledge and tools they need to live healthier, happier, and more dignified lives.
              </p>
              <Link to="/About" className="btn btn-link">
                Learn About Us →
              </Link>
            
            </div>
          </div>
        </div>
      </section>
      
      <section className="section team-section">
        <div className="container">
          <h2 className="section-heading centered">Our Pillars</h2>
          <p className="section-subheading centered">
            Dedicated leaders guiding our mission with expertise and compassion
          </p>
          <div className="team-grid">
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Konica Lishoy</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                KoNica Lishoy holds a diploma in Commercial Art. After working professionally, she took a break for motherhood. Her experience with the Teach for India project inspired her to support underprivileged children and women. After several years with an NGO, she founded the Selfless Serving Society, bringing her experience and compassion to its work.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo">👤</div>
              <h3>Nasreen Rishi Madaan</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Nasreen Rishi Madaan holds a Master’s degree in Economics and has a successful background in banking. As a Trustee of the Selfless Serving Society, she offers financial expertise and a compassionate perspective to its initiatives. A homemaker and mother of two, she actively supports the organisation’s mission to empower communities.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Sunita Fernandes</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Sunita Fernandes holds a Post Graduate Diploma in Human Resources and has nearly 20 years of experience across East Africa and India. As a Trustee, she brings her HR expertise and a people-centered approach to support the Society’s programs and operations.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Mamata Hulke John</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Mamata Hulke John holds degrees in Commerce, Physical Education, and Sports Management. A teacher turned entrepreneur with an interest in finance, she brings energy and a people-focused approach as a Trustee, contributing effectively to the organisation’s programs and initiatives.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Pooja Nirala</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Pooja Nirala holds a Master’s degree in Accounts and Finance and has over ten years of experience as a Senior Accountant. As a Trustee, she uses her financial expertise and passion for social development to support the Selfless Serving Society’s mission.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Catherine Mrinal Dutta</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Catherine Mrinal Dutta, the senior-most Trustee, brings deep experience, resilience, and compassion. After a career with a leading newspaper, she now dedicates her time to supporting and empowering women and children through the Society’s initiatives.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Lishoy George</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Lishoy George holds a degree from a reputed art college and has over 20 years of experience in advertising. Currently working with a leading agency, he uses his creative and strategic expertise to support the Society’s initiatives and outreach efforts, contributing actively to its mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guiding Light Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-heading centered">Our Guiding Light</h2>
          <p className="section-subheading centered">
            Dedicated leaders guiding our mission with expertise and compassion
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">👤</div>
              <h3>Vivek Kamble</h3>
              <p className="team-role">Guiding Member</p>
              <p className="team-bio">
                MSc. With over 21 years of experience in the biopharmaceutical and healthcare industry. works with a leading clinical research organization dedicated to patient safety and well-being.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo">👤</div>
              <h3>Apurva Kulkarni</h3>
              <p className="team-role">Guiding Member--</p>
              <p className="team-bio">
                Brief biography and background information about this guiding light member. Their experience, qualifications, and contribution to the organization's mission and vision.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo">👤</div>
              <h3>Mahima Raval</h3>
              <p className="team-role">Guiding Member</p>
              <p className="team-bio">
                Master's in Biotechnology, experienced in treatment counselling, and conducting sessions with respect to women health & hygiene, environment and surroundings hygiene.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo">👤</div>
              <h3>Lalita Jaykrishnan</h3>
              <p className="team-role">Guiding Member</p>
              <p className="team-bio">
                BA Entrepreneur Life Style Bags Manufacturing Also dealing in Natural Gas (petroleum sector) Love to explore new things, travelling, and gardening.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo">👤</div>
              <h3>Kirti</h3>
              <p className="team-role">Guiding Member--</p>
              <p className="team-bio">
                Brief biography and background information about this guiding light member. Their experience, qualifications, and contribution to the organization's mission and vision.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo">👤</div>
              <h3>Gauri Chapekar</h3>
              <p className="team-role">Guiding Member</p>
              <p className="team-bio">
                Masters in Counselling Psychology, Certified in many therapies like CBT, REBT, DBT, Inner child healing etc.
              </p>
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
