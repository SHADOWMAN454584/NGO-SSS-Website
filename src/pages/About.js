import React, { useEffect, useState } from 'react';
import './About.css';

// Import About Us page photos
import ourStory1 from '../assets/About us page photoes/our story 1.jpg';
import ourStory2 from '../assets/About us page photoes/our story 2.jpg';
import approach1 from '../assets/About us page photoes/Approach 1.jpg';
import approach2 from '../assets/About us page photoes/Approach 2.jpg';

const ourStoryImages = [ourStory1, ourStory2];
const approachImages = [approach1, approach2];

const About = () => {
  const [storyImageIndex, setStoryImageIndex] = useState(0);
  const [approachImageIndex, setApproachImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const nextStoryImage = () => {
    setStoryImageIndex((prevIndex) => (prevIndex + 1) % ourStoryImages.length);
  };

  const prevStoryImage = () => {
    setStoryImageIndex((prevIndex) => 
      prevIndex === 0 ? ourStoryImages.length - 1 : prevIndex - 1
    );
  };

  const nextApproachImage = () => {
    setApproachImageIndex((prevIndex) => (prevIndex + 1) % approachImages.length);
  };

  const prevApproachImage = () => {
    setApproachImageIndex((prevIndex) => 
      prevIndex === 0 ? approachImages.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

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

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in">About Us</h1>
          <p className="page-subtitle fade-in">
            Dedicated to creating positive change through compassion and action
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-heading">Our Story</h2>
              <p>
                We are a non-governmental, non-profit organisation dedicated to closing this gap. Through outreach programs, workshops, seminars, talks, and distribution of health-related products, we strive to empower people with knowledge, tools, and habits that help them live healthier, more dignified lives.
              </p>
              <p>
                Over the years, we have expanded our reach and deepened our impact, working 
                alongside communities to address their most pressing challenges. Our approach 
                combines grassroots engagement with strategic partnerships to create sustainable 
                solutions.
              </p>
              <p>
                Selfless Serving Society empowers communities by spreading health and hygiene awareness. Through workshops and outreach programs, it provides essential care and education to underserved areas, inspiring healthier and more dignified lives for all.
              </p>
            </div>
            <div className="content-image">
              <div className="image-box image-slider-container">
                <img 
                  src={ourStoryImages[storyImageIndex]} 
                  alt="Our Story" 
                  className="about-image" 
                  onClick={() => openLightbox(ourStoryImages[storyImageIndex])}
                />
                <button className="image-arrow image-arrow-left" onClick={prevStoryImage}>
                  ‹
                </button>
                <button className="image-arrow image-arrow-right" onClick={nextStoryImage}>
                  ›
                </button>
                <div className="image-indicators">
                  {ourStoryImages.map((_, index) => (
                    <span
                      key={index}
                      className={`image-indicator ${index === storyImageIndex ? 'active' : ''}`}
                      onClick={() => setStoryImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section approach-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <div className="image-box approach-image image-slider-container">
                <img 
                  src={approachImages[approachImageIndex]} 
                  alt="Our Approach" 
                  className="about-image" 
                  onClick={() => openLightbox(approachImages[approachImageIndex])}
                />
                <button className="image-arrow image-arrow-left" onClick={prevApproachImage}>
                  ‹
                </button>
                <button className="image-arrow image-arrow-right" onClick={nextApproachImage}>
                  ›
                </button>
                <div className="image-indicators">
                  {approachImages.map((_, index) => (
                    <span
                      key={index}
                      className={`image-indicator ${index === approachImageIndex ? 'active' : ''}`}
                      onClick={() => setApproachImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
            <div className="content-text ">
              <h2 className="section-heading">Our Approach</h2>
              <p>
                At Selfless Serving Society, our approach focuses on empowering women and girls through education, awareness, and community support. We conduct workshops and sessions for adolescent girls on menstrual health, puberty, body changes, self-care, hygiene, and breaking taboos. By creating safe spaces in schools and communities, we encourage open conversations, provide guidance, and ensure access to sanitary supplies without shame.
              </p>
              <p>
                We also distribute hygiene kits with biodegradable sanitary pads, soap, and other essentials to those who cannot afford them. Alongside this, we promote community engagement by involving parents, teachers, boys, and local leaders to build a supportive and stigma-free environment.
              </p>
              <p>
                Finally, we monitor our impact not just by counting kits or events, but by observing real outcomes — improved knowledge, confidence, school attendance, and reduced hygiene-related illnesses. Through this approach, we strive to create lasting change and promote dignity and health for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card ">
              <div className="vm-icon">🎯</div>
              <h2>Our Vision</h2>
              <p>
                To build a compassionate and informed society where every individual, regardless of age or gender, is empowered and treated with dignity and respect.
              </p>
            </div>
            <div className="vm-card ">
              <div className="vm-icon">🚀</div>
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower women and girls through awareness on health, hygiene, menstrual care, early marriage, and pregnancy, while promoting life skills and vocational training. We also conduct medical camps and health awareness programs in underserved areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading centered">Our Core Values</h2>
          <p className="section-subheading centered">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌸</div>
              <h3>Empower</h3>
              <p>We believe that no women, adolescent girl should miss work or school, feel ashamed, or be deprived of her dignity because of menstruation or hygiene barriers.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We operate with transparency, accountability, and ethical practices in all we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We strive for the highest standards in program delivery and impact measurement.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔗</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of partnerships and collective action for greater impact.</p>
            </div>
            <div className="value-card ">
              <div className="value-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>We create solutions that endure, building long-term capacity within communities.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Innovation</h3>
              <p>We embrace creative approaches and continuously adapt to serve communities better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-heading centered">Our Trustees</h2>
          <p className="section-subheading centered">
            Dedicated leaders guiding our mission with expertise and compassion
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">👤</div>
              <h3>Nasreen Rishi Madaan</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Nasreen Rishi Madaan holds a Master’s degree in Economics and brings valuable experience from a successful career in banking. As a Trustee of the Selfless Serving Society, she contributes her financial insight, practical wisdom, and compassionate approach to the organisation’s initiatives. A homemaker and mother of two, Nasreen balances her professional and personal pursuits while supporting the Society’s mission to empower communities.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Sunita Fernandes</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Sunita Fernandes holds a Post Graduate Diploma in Human Resources and brings nearly two decades of global experience across East Africa and India. An accomplished HR professional, she has led initiatives in people development, organisational transformation, and culture alignment. As Trustee, Sunita applies her expertise to foster a positive, people-centered approach in the Society’s operations and outreach programs.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Mamata Hulke John</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Mamata Hulke John holds degrees in Commerce (B.Com), Physical Education (B.P.Ed), and Sports Management. A teacher turned entrepreneur with a growing interest in finance, she brings creativity, energy, and a people-focused approach to her role as Trustee. Her educational background and management experience enable her to contribute effectively to the organisation’s programs and social initiatives
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Pooja Nirala</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Pooja Nirala holds a Master’s degree in Accounts and Finance and has over ten years of professional experience as a Senior Accountant. Passionate about social development, she has actively volunteered with several NGOs. As a Trustee, she leverages her financial expertise and commitment to community welfare to support the Selfless Serving Society’s mission of creating meaningful impact.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Catherine Mrinal Dutta</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Catherine Mrinal Dutta, the most senior member of the Trust, brings extensive experience, wisdom, and compassion. Hailing from Goa and raised by a single parent, she embodies resilience and empathy. Having witnessed the challenges faced by women and children firsthand, she contributes through ideation, guidance, and active support in every possible way. After a fulfilling career with a leading newspaper, she now dedicates her time to empowering women and children through the Society’s initiatives.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Lishoy George</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Lishoy George holds a degree from a reputed art college and brings over two decades of experience in the advertising industry. Currently associated with a leading advertising agency, he combines his creative expertise with strategic insight to support the initiatives and outreach programs of the Society. Driven by a strong commitment to giving back to society, he plays a key role in advancing the organisation’s mission.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Konica Lishoy</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Konica Lishoy holds a diploma in Commercial Art. After a professional career, she took a break to focus on motherhood. Her involvement with the Teach for India project, visiting underserved schools and interacting with parents, especially mothers, inspired her to work for children and women in need. Following several years with an NGO, she founded the Selfless Serving Society, bringing experience, knowledge, and a compassionate approach to the organisation’s programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="impact-statement">
        <div className="container">
          <div className="statement-content">
            <h2>Together, We Create Change</h2>
            <p>
              Every achievement, every life touched, and every community transformed is a testament 
              to the power of collective action. Join us in building a better future for all.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="image-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <img 
            src={lightboxImage} 
            alt="Full size" 
            className="lightbox-image" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default About;
