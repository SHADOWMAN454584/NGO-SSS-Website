import React, { useEffect, useState } from 'react';
import './CaseStudies.css';

// Import photos for case study 1
const caseStudy1Photos = [
  require('../assets/Case Study 1/cs1 1.jpg'),
  require('../assets/Case Study 1/cs1 2.jpg'),
  require('../assets/Case Study 1/cs1 3.jpg'),
  require('../assets/Case Study 1/cs1 4.jpg'),
  require('../assets/Case Study 1/cs1 5.jpg'),
  require('../assets/Case Study 1/cs1 6.jpg'),
  // require('../assets/Case Study 1/cs1 7.jpg'),
  require('../assets/Case Study 1/cs1 8.jpg'),
  require('../assets/Case Study 1/cs1 9.jpg'),
  require('../assets/Case Study 1/cs1 10.jpg'),
  require('../assets/Case Study 1/cs1 11.jpg'),
  require('../assets/Case Study 1/cs1 12.jpg'),
];

// Import photos for case study 2
const caseStudy2Photos = [
  require('../assets/Case Study 2/cs2 1.jpg'),
  require('../assets/Case Study 2/cs2 2.jpg'),
  require('../assets/Case Study 2/cs2 3.jpg'),
  require('../assets/Case Study 2/cs2 4.jpg'),
  require('../assets/Case Study 2/cs2 5.jpg'),
];

// Import photos for case study 3
const caseStudy3Photos = [
  require('../assets/Case Study 3/cs3 1.jpg'),
  require('../assets/Case Study 3/cs3 2.jpg'),
  require('../assets/Case Study 3/cs3 3.jpg'),
  require('../assets/Case Study 3/cs3 4.jpg'),
  require('../assets/Case Study 3/cs3 5.jpg'),
  require('../assets/Case Study 3/cs3 6.jpg'),
  require('../assets/Case Study 3/cs3 7.jpg'),
  require('../assets/Case Study 3/cs3 8.jpg'),
];

// Import photos for case study 4 (using placeholder images for now)
// Replace these with actual Case Study 4 photos when available
const caseStudy4Photos = [
  require('../assets/Case Study 4/cs4 1.jpg'),
  require('../assets/Case Study 4/cs4 2.jpg'),
  require('../assets/Case Study 4/cs4 3.jpg'),
  require('../assets/Case Study 4/cs4 5.jpg'),
  require('../assets/Case Study 4/cs4 6.jpg'),
  require('../assets/Case Study 4/cs4 7.jpg'),
  require('../assets/Case Study 4/cs4 8.jpg'),
  require('../assets/Case Study 4/cs4 9.jpg'),
  require('../assets/Case Study 4/cs4 10.jpg'),
  require('../assets/Case Study 4/cs4 11.jpg'),
  require('../assets/Case Study 4/cs4 12.jpg'),
  require('../assets/Case Study 4/cs4 13.jpg'),
  require('../assets/Case Study 4/cs4 14.jpg'),
  require('../assets/Case Study 4/cs4 15.jpg'),
  require('../assets/Case Study 4/cs4 16.jpg'),
  require('../assets/Case Study 4/cs4 17.jpg'),
  require('../assets/Case Study 4/cs4 18.jpg'),
];

const CaseStudies = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentPhotoIndexCS2, setCurrentPhotoIndexCS2] = useState(0);
  const [currentPhotoIndexCS3, setCurrentPhotoIndexCS3] = useState(0);
  const [currentPhotoIndexCS4, setCurrentPhotoIndexCS4] = useState(0);

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

    // Handle anchor link scrolling
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Navigation handlers for Case Study 1
  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      (prevIndex + 1) % caseStudy1Photos.length
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? caseStudy1Photos.length - 1 : prevIndex - 1
    );
  };

  // Navigation handlers for Case Study 2
  const nextPhotoCS2 = () => {
    setCurrentPhotoIndexCS2((prevIndex) => 
      (prevIndex + 1) % caseStudy2Photos.length
    );
  };

  const prevPhotoCS2 = () => {
    setCurrentPhotoIndexCS2((prevIndex) => 
      prevIndex === 0 ? caseStudy2Photos.length - 1 : prevIndex - 1
    );
  };

  // Navigation handlers for Case Study 3
  const nextPhotoCS3 = () => {
    setCurrentPhotoIndexCS3((prevIndex) => 
      (prevIndex + 1) % caseStudy3Photos.length
    );
  };

  const prevPhotoCS3 = () => {
    setCurrentPhotoIndexCS3((prevIndex) => 
      prevIndex === 0 ? caseStudy3Photos.length - 1 : prevIndex - 1
    );
  };

  // Navigation handlers for Case Study 4
  const nextPhotoCS4 = () => {
    setCurrentPhotoIndexCS4((prevIndex) => 
      (prevIndex + 1) % caseStudy4Photos.length
    );
  };

  const prevPhotoCS4 = () => {
    setCurrentPhotoIndexCS4((prevIndex) => 
      prevIndex === 0 ? caseStudy4Photos.length - 1 : prevIndex - 1
    );
  };

  const caseStudies = [
    {
      id: 1,
      title: "Empowering Women and Communities through Handcrafted Creations",
      location: "Runwal Elegante, Mumbai",
      year: "2024",
      image: "💫",
      photos: caseStudy1Photos,
      challenge: "Limited livelihood opportunities for tribal women and individuals with physical challenges",
      solution: "Participated in an All-Women Entrepreneurs Exhibition, showcasing handcrafted Diwali diyas, decorative items, jute bags, incense sticks, masalas, and eco-friendly baskets — all made by marginalized artisans",
      impact: [
        "120 corporate diya orders received",
        "100% sales proceeds directed towards adolescent girls' health & hygiene programs",
        "50+ women artisans gained sustainable income",
        "Strengthened self-reliance & community pride"
      ]
    },
    {
      id: 2,
      title: "KAPAAD Project: Turning Compassion into Sustainable Action",
      location: "Mumbai, Maharashtra",
      year: "2023",
      image: "💪",
      photos: caseStudy2Photos,
      challenge: "Discarded usable clothes contributing to textile waste and lack of access to clothing for underprivileged families.",
      solution: "Encouraged individuals to donate wearable, clean clothes instead of discarding them. Selfless Serving Society (SSS) acted as a collection partner, gathering clothes from communities and handing them to Project Mumbai for segregation and repurposing.",
      impact: [
        "31 kg of clothes collected in the first drive",
        "Usable garments distributed to families and children in need",
        "Worn-out clothes repurposed into eco-friendly items like floor wipes and mats",
        "Promoted sustainability and social responsibility within communities"
      ]
    },
    {
      id: 3,
      title: "Empowering Rural Girls Through Tailoring Training",
      location: "Rural Villages, Gujarat",
      year: "2023",
      image: "👧",
      photos: caseStudy3Photos,
      challenge: "Limited access to education and livelihood opportunities for young rural girls due to financial constraints and distant schools.",
      solution: "Collaborated with a local tailoring center under the JOG initiative and sponsored two training batches for 20 girls, providing 3-month hands-on instruction in stitching and garment-making.",
      impact: [
        "20 girls trained and certified in tailoring",
        "60% started earning through small stitching orders",
        "Improved confidence and financial independence",
        "Ongoing expansion to new rural communities"
      ]
    },
    {
      id: 4,
      title: "Flood Relief at Rasikpur Village",
      location: "Rasikpur Village, Gujarat",
      year: "During Navratri 2023",
      image: "🩺",
      photos: caseStudy4Photos,
      challenge: "Sudden flooding from the Sabarmati River left homes submerged, crops damaged, and families without food, clean water, or essential supplies.",
      solution: "Launched the “Anna Daan” Flood Relief Drive, mobilizing volunteers and residents to collect and distribute food grains and necessities to flood-affected families while ensuring support reached unreached households.",
      impact: [
        "650 kg of food grains collected through community donations500+ hygiene kits distributed",
        "350 kg distributed to flood-affected families in Rasikpur",
        "Improved menstrual health knowledge among beneficiaries",
        "Over 120+ families received immediate relief support",
        "Strengthened community participation through the Anna Daan initiative",
        "Promoted empathy and unity during crisis response",
        "Inspired ongoing partnerships for future disaster relief efforts"
      ]
    }
  ];

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in">Case Studies</h1>
          <p className="page-subtitle fade-in">
            Real stories of transformation and lasting impact in communities we serve
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="intro-content fade-in">
            <h2 className="section-heading centered">Stories of Change</h2>
            <p className="section-subheading centered">
              Every project we undertake is more than just numbers – it's about transforming lives, 
              empowering communities, and creating sustainable change. Here are some of our impactful journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section case-studies-section">
        <div className="container">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              id={`case-study-${study.id}`}
              className={`case-study-card slide-up ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              {study.id === 2 ? (
                // Special layout for card 2
                <div className="case-study-wrapper">
                  {/* Photo Slider on Left */}
                  {study.photos && study.photos.length > 0 && (
                    <div className="photo-slider">
                      <div className="slider-container">
                        {study.photos.map((photo, photoIndex) => (
                          <img
                            key={photoIndex}
                            src={photo}
                            alt={`${study.title} - View ${photoIndex + 1}`}
                            className={`slider-image ${
                              photoIndex === currentPhotoIndexCS2 
                              ? 'active' 
                              : ''
                            }`}
                          />
                        ))}
                        
                        {/* Navigation Arrows */}
                        <button 
                          className="slider-arrow slider-arrow-left" 
                          onClick={prevPhotoCS2}
                        >
                          ‹
                        </button>
                        <button 
                          className="slider-arrow slider-arrow-right" 
                          onClick={nextPhotoCS2}
                        >
                          ›
                        </button>
                      </div>
                      <div className="slider-indicators">
                        {study.photos.map((_, photoIndex) => (
                          <span
                            key={photoIndex}
                            className={`indicator ${
                              photoIndex === currentPhotoIndexCS2
                              ? 'active' 
                              : ''
                            }`}
                            onClick={() => setCurrentPhotoIndexCS2(photoIndex)}
                          ></span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Info on Right */}
                  <div className="case-study-info-section">
                    <div className="case-study-header">
                      <div className="case-study-icon">{study.image}</div>
                      <div className="case-study-meta">
                        <h3 className="case-study-title">{study.title}</h3>
                        <div className="case-study-info">
                          <span className="location">📍 {study.location}</span>
                          <span className="year">📅 {study.year}</span>
                        </div>
                      </div>
                    </div>

                    <div className="case-study-content">
                      <div className="case-study-section">
                        <h4>The Challenge</h4>
                        <p>{study.challenge}</p>
                      </div>

                      <div className="case-study-section">
                        <h4>Our Solution</h4>
                        <p>{study.solution}</p>
                      </div>

                      <div className="case-study-section">
                        <h4>Impact Achieved</h4>
                        <ul className="impact-list">
                          {study.impact.map((item, idx) => (
                            <li key={idx}>
                              <span className="check-icon">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Default layout for other cards
                <>
                  <div className="case-study-header">
                    <div className="case-study-icon">{study.image}</div>
                    <div className="case-study-meta">
                      <h3 className="case-study-title">{study.title}</h3>
                      <div className="case-study-info">
                        <span className="location">📍 {study.location}</span>
                        <span className="year">📅 {study.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Photo Slider */}
                  {study.photos && study.photos.length > 0 && (
                    <div className="photo-slider">
                      <div className="slider-container">
                        {study.photos.map((photo, photoIndex) => (
                          <img
                            key={photoIndex}
                            src={photo}
                            alt={`${study.title} - View ${photoIndex + 1}`}
                            className={`slider-image ${
                              photoIndex === (
                                study.id === 1 ? currentPhotoIndex : 
                                study.id === 3 ? currentPhotoIndexCS3 : 
                                study.id === 4 ? currentPhotoIndexCS4 : 0
                              ) 
                              ? 'active' 
                              : ''
                            }`}
                          />
                        ))}
                        
                        {/* Navigation Arrows */}
                        <button 
                          className="slider-arrow slider-arrow-left" 
                          onClick={
                            study.id === 1 ? prevPhoto : 
                            study.id === 3 ? prevPhotoCS3 : 
                            study.id === 4 ? prevPhotoCS4 : undefined
                          }
                        >
                          ‹
                        </button>
                        <button 
                          className="slider-arrow slider-arrow-right" 
                          onClick={
                            study.id === 1 ? nextPhoto : 
                            study.id === 3 ? nextPhotoCS3 : 
                            study.id === 4 ? nextPhotoCS4 : undefined
                          }
                        >
                          ›
                        </button>
                      </div>
                      <div className="slider-indicators">
                        {study.photos.map((_, photoIndex) => (
                          <span
                            key={photoIndex}
                            className={`indicator ${
                              photoIndex === (
                                study.id === 1 ? currentPhotoIndex : 
                                study.id === 3 ? currentPhotoIndexCS3 : 
                                study.id === 4 ? currentPhotoIndexCS4 : 0
                              )
                              ? 'active' 
                              : ''
                            }`}
                            onClick={() => {
                              if (study.id === 1) setCurrentPhotoIndex(photoIndex);
                              if (study.id === 3) setCurrentPhotoIndexCS3(photoIndex);
                              if (study.id === 4) setCurrentPhotoIndexCS4(photoIndex);
                            }}
                          ></span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="case-study-content">
                    <div className="case-study-section">
                      <h4>The Challenge</h4>
                      <p>{study.challenge}</p>
                    </div>

                    <div className="case-study-section">
                      <h4>Our Solution</h4>
                      <p>{study.solution}</p>
                    </div>

                    <div className="case-study-section">
                      <h4>Impact Achieved</h4>
                      <ul className="impact-list">
                        {study.impact.map((item, idx) => (
                          <li key={idx}>
                            <span className="check-icon">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section stats-section">
        <div className="container">
          <h2 className="section-heading centered">Overall Impact</h2>
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-number">10,800+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">6</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">15</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">₹5 Cr+</div>
              <div className="stat-label">Economic Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Be Part of the Next Success Story</h2>
            <p>Your support can help us create more transformative stories like these</p>
            <a href="/contact" className="cta-button">Get Involved</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
