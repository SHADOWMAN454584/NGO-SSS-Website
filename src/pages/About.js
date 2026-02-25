import React, { useEffect, useState } from 'react';
import './About.css';

// Import title image
import aboutHeroImage from '../assets/Title Images/about-us.jpg.jpeg';

// Import leader photos
import konicaPhoto from '../assets/Leader Photoes/Konica.jpeg';
import nasreenPhoto from '../assets/Leader Photoes/Nasreen.jpeg';
import mamtaPhoto from '../assets/Leader Photoes/Mamta.jpeg';
import poojaPhoto from '../assets/Leader Photoes/Pooja.jpeg';
import apoorvaPhoto from '../assets/Leader Photoes/Apoorva.jpeg';
import gauriPhoto from '../assets/Leader Photoes/Gauri.jpeg';
import Kirti from '../assets/Leader Photoes/Kirti.jpeg';
import Lalita from '../assets/Leader Photoes/Lalita.jpeg';
import Vevek from '../assets/Leader Photoes/Vevek.jpeg';

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
        <img src={aboutHeroImage} alt="About Us" className="page-hero-bg-img" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          {/* <h1 className="page-title fade-in">About Us</h1>
          <p className="page-subtitle fade-in">
            Dedicated to creating positive change through compassion and action
          </p> */}
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
                We are a registered non-governmental, non-profit organisation committed to closing health and hygiene gaps in underserved communities. With 80G, 12A, and CSR1 certifications for tax benefits, we leverage strategic partnerships and grassroots engagement to deliver sustainable impact
              </p>
              <p>
                Through targeted outreach programs, workshops, seminars, and health product distribution, we empower individuals with the knowledge, tools, and habits necessary for healthier, more dignified lives. Over the years, we have expanded our reach and deepened our impact by collaborating closely with communities to address their most pressing challenges.
              </p>
              <p>
                Selfless Serving Society is dedicated to spreading health and hygiene awareness, providing essential care and education, and inspiring positive change across underserved areas.
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
            
          </div>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-heading centered">Our Pillars</h2>
          <p className="section-subheading centered">
            Dedicated leaders guiding our mission with expertise and compassion
          </p>
          <div className="team-grid">
            <div className="team-card ">
              <div className="team-photo"><img src={konicaPhoto} alt="Konica Lishoy" /></div>
              <h3>Konica Lishoy</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Konica Lishoy holds a diploma in Commercial Art. After working professionally, she took a break for motherhood. Her experience with the Teach for India project inspired her to support underprivileged children and women. After several years with an NGO, she founded the Selfless Serving Society, bringing her experience and compassion to its work.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo"><img src={nasreenPhoto} alt="Nasreen Rishi Madaan" /></div>
              <h3>Nasreen Rishi Madaan</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Nasreen Rishi Madaan holds a Master's degree in Economics and has a successful background in banking. As a Trustee of the Selfless Serving Society, she offers financial expertise and a compassionate perspective to its initiatives. A homemaker and mother of two, she actively supports the organisation's mission to empower communities.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Sunita Fernandes</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Sunita Fernandes holds a Post Graduate Diploma in Human Resources and has nearly 20 years of experience across East Africa and India. As a Trustee, she brings her HR expertise and a people-centered approach to support the Society's programs and operations.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo"><img src={mamtaPhoto} alt="Mamata Hulke John" /></div>
              <h3>Mamata Hulke John</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Mamata Hulke John holds degrees in Commerce, Physical Education, and Sports Management. A teacher turned entrepreneur with an interest in finance, she brings energy and a people-focused approach as a Trustee, contributing effectively to the organisation's programs and initiatives.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo"><img src={poojaPhoto} alt="Pooja Nirala" /></div>
              <h3>Pooja Nirala</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Pooja Nirala holds a Master's degree in Accounts and Finance and has over ten years of experience as a Senior Accountant. As a Trustee, she uses her financial expertise and passion for social development to support the Selfless Serving Society's mission.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Catherine Mrinal Dutta</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Catherine Mrinal Dutta, the senior-most Trustee, brings deep experience, resilience, and compassion. After a career with a leading newspaper, she now dedicates her time to supporting and empowering women and children through the Society's initiatives.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo">👤</div>
              <h3>Lishoy George</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Lishoy George holds a degree from a reputed art college and has over 20 years of experience in advertising. Currently working with a leading agency, he uses his creative and strategic expertise to support the Society's initiatives and outreach efforts, contributing actively to its mission.
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
              <div className="team-photo"><img src={Vevek} alt="Vivek Kamble" /></div>
              <h3>Vivek Kamble</h3>
              <p className="team-role">Guiding Member</p>
              <p className="team-bio">
                MSc. With over 21 years of experience in the biopharmaceutical and healthcare industry. works with a leading clinical research organization dedicated to patient safety and well-being.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo"><img src={Kirti} alt="Kirti" /></div>
              <h3>Kirti</h3>
              <p className="team-role">Guiding Member--</p>
              <p className="team-bio">
                Bachelor of Science - Chemistry, Post Graduate Diploma in Business Administration. Self employed.
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
              <div className="team-photo"><img src={Lalita} alt="Lalita"/></div>
              <h3>Lalita Jaykrishnan</h3>
              <p className="team-role">Guiding Member</p>
              <p className="team-bio">
                BA Entrepreneur Life Style Bags Manufacturing Also dealing in Natural Gas (petroleum sector) Love to explore new things, travelling, and gardening.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo"><img src={apoorvaPhoto} alt="Apoorva Kulkarni" /></div>
              <h3>Apoorva Kulkarni</h3>
              <p className="team-role">Guiding Member</p>
              <p className="team-bio">
                Apoorva Kulkarni is a Business Strategy Consultant and IIM Kozhikode alumnus. He is the Founder of Apurva Business Strategy, helping businesses scale, expand globally, and achieve sustainable growth.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo"><img src={gauriPhoto} alt="Gauri Chapekar" /></div>
              <h3>Gauri Chapekar</h3>
              <p className="team-role">Guiding Member</p>
              <p className="team-bio">
                Masters in Counselling Psychology, Certified in many therapies like CBT, REBT, DBT, Inner child healing etc.
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
