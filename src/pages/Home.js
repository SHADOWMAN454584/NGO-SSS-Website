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

// Import photos for case study 2
const caseStudy2Photos = [
  require('../assets/Case Study 2/cs2 1.jpg'),
  require('../assets/Case Study 2/cs2 2.jpg'),
  require('../assets/Case Study 2/cs2 3.jpg'),
  require('../assets/Case Study 2/cs2 4.jpeg'),
  require('../assets/Case Study 2/cs2 5.jpg'),
  require('../assets/Case Study 2/cs2 6.jpeg'),
  require('../assets/Case Study 2/cs2 7.jpeg'),
  require('../assets/Case Study 2/cs2 8.jpg'),
  require('../assets/Case Study 2/cs2 9.jpeg'),
];

// Import photos for case study 3
const caseStudy3Photos = [
  require('../assets/Case Study 3/cs3 1.jpg'),
  require('../assets/Case Study 3/cs3 2.jpg'),
  require('../assets/Case Study 3/cs3 3.jpg'),
  require('../assets/Case Study 3/cs3 4.jpg'),
  require('../assets/Case Study 3/cs3 5.jpg'),
  require('../assets/Case Study 3/cs3 6.jpg')
];

// Import photos for case study 4
const caseStudy4Photo = [
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

// Livelihood case studies data (CS2, CS3, CS4)
const livelihoodCaseStudies = [
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
    title: "Green Day & Sustainable Community Action Initiatives",
    location: "Local School & Community Areas",
    year: "2026",
    image: "🌿",
    photos: caseStudy3Photos,
    overview: "This case study captures three environmentally focused initiatives — Green Day Tree Plantation Drive, Community-Led Plastic Collection & Recycling, and Textile Waste Reduction & Clothing Reuse — aimed at promoting sustainability, reducing waste, and building environmental responsibility within the community.",
    initiatives: [
      {
        initiativeTitle: "Initiative 1: Green Day — Taking a Stand for Trees and the Environment",
        challenge: "Across many cities and towns, large numbers of trees are being uprooted or cut down for infrastructure projects such as roads, buildings, and public works. While development is important, this widespread removal of trees leads to increased air pollution, higher temperatures, soil erosion, water imbalance, and loss of biodiversity. Recognising these environmental and community impacts, action was initiated at a local school level.",
        objectives: [
          "Promote environmental awareness among students",
          "Encourage tree plantation to counteract deforestation",
          "Improve school campus ecology and air quality",
          "Foster long-term environmental responsibility"
        ],
        solution: "Organised a Tree-Planting Drive at a nearby school to promote environmental awareness and contribute to restoring green cover.",
        implementationStrategy: [
          "Identified a nearby school for plantation activity",
          "Selected a mix of plant varieties for ecological and educational value",
          "Donated 25 healthy plants",
          "Educated students on environmental importance of trees"
        ],
        plantsDonated: {
          total: "25 healthy plants",
          categories: [
            "Medicinal plants — promoting awareness of traditional natural remedies",
            "Decorative plants — enhancing beauty of school grounds",
            "Shade and support plants — future canopy trees improving air quality and regulating temperature"
          ]
        },
        impact: [
          "Created greener school environment",
          "Improved awareness about environmental conservation",
          "Encouraged ecological balance within campus",
          "Inspired students to become environmental stewards"
        ]
      },
      {
        initiativeTitle: "Initiative 2: Community-Led Plastic Collection & Recycling Drive",
        challenge: "Plastic waste — including bags, bottles, wrappers, and packets — is widespread in streets, drains, open areas, and water bodies. Being non-biodegradable, plastic takes hundreds of years to decompose, causing soil and water pollution, clogging drains, harming wildlife, and contributing to air pollution when burnt openly.",
        objectives: [
          "Reduce plastic waste accumulation",
          "Prevent harmful open burning of plastic",
          "Promote recycling and responsible disposal",
          "Increase awareness about single-use plastic reduction"
        ],
        solution: "Organised ongoing plastic collection drives in partnership with Project Mumbai, mobilising community participation in responsible waste management.",
        implementationStrategy: [
          "Community awareness campaigns about plastic hazards",
          "Mobilised neighbours and residents for participation",
          "Regular collection drives organised",
          "Partnership with Project Mumbai for recycling process"
        ],
        operationalProcess: [
          "Residents brought collected plastic waste (bottles, bags, wrappers, packets)",
          "Volunteers segregated plastic based on type and usability",
          "Plastic recycled or transformed into useful items instead of landfill disposal"
        ],
        impact: [
          "Large quantity of plastic collected every month",
          "Strong and consistent community involvement",
          "Increased awareness about environmental damage caused by plastic",
          "Reduction in single-use plastic consumption habits",
          "Encouraged behavioural change toward sustainability"
        ]
      },
      {
        initiativeTitle: "Initiative 3: Textile Waste Reduction & Clothing Reuse Initiative",
        challenge: "Every year, tonnes of clothing are discarded despite being wearable or recyclable. Textile waste in landfills releases harmful greenhouse gases such as methane and toxins into soil and water. This environmental challenge demands sustainable solutions that reduce waste while supporting communities in need.",
        objectives: [
          "Reduce textile waste going to landfills",
          "Promote reuse and sustainable consumption",
          "Provide clothing support to families in need",
          "Encourage circular economy practices"
        ],
        solution: "Encouraged community members to donate clean, wearable clothes instead of discarding them, ensuring responsible redistribution and creative reuse.",
        implementationStrategy: [
          "Community mobilisation through sustainability messaging",
          "Selfless Serving Society acted as collection partner",
          "Systematic collection of donated clothes",
          "Collaboration with Project Mumbai for sorting and processing"
        ],
        processingWorkflow: [
          "Garments sorted based on usability",
          "Wearable clothes prepared for distribution",
          "Damaged textiles separated for creative reuse",
          "Worn-out textiles repurposed into eco-friendly items such as floor wipes, mats, and cleaning cloths"
        ],
        impact: [
          "Bags full of clothes collected during every drive",
          "Immediate relief provided to families and children in need",
          "Reduced textile waste entering landfills",
          "Repurposed materials created useful household products",
          "Increased awareness of responsible consumption",
          "Community members became ambassadors of sustainability"
        ]
      }
    ],
    collectiveImpact: [
      "Strengthened environmental awareness at grassroots level",
      "Promoted sustainable waste management practices",
      "Reduced plastic and textile waste in community",
      "Improved green cover through plantation efforts",
      "Encouraged long-term behavioural change toward environmental responsibility",
      "Built stronger collaboration between community, NGOs, and partner organisations"
    ]
  },
  {
    id: 4,
    title: "Anna Daan Flood Relief Drive",
    location: "Flood-Affected Village & Supporting Institutions",
    year: "2024",
    image: "🌧️",
    photos: caseStudy4Photo,
    overview: "This case study highlights two compassionate emergency response initiatives — the Anna Daan Flood Relief Drive and the Monsoon Medical & Hygiene Support Initiative — aimed at supporting vulnerable communities affected by natural disaster and seasonal challenges.",
    initiatives: [
      {
        initiativeTitle: "Anna Daan Flood Relief Drive",
        challenge: "Sudden and severe flooding from the river left numerous homes submerged, crops destroyed, and families without access to essential food, clean water, or basic supplies. Many affected households were isolated and unable to access relief independently.",
        objectives: [
          "Provide immediate food assistance to flood-affected families",
          "Ensure relief reaches remote and hard-to-access areas",
          "Support vulnerable institutions affected by the disaster",
          "Strengthen community solidarity during crisis"
        ],
        solution: "Launch of the 'Anna Daan' Drive — a focused relief effort to collect and distribute food grains and essential supplies to flood-affected families through coordinated volunteer action.",
        implementationStrategy: [
          "Mobilized volunteers and community members",
          "Collected food grains and essential supplies",
          "Prioritized severely affected areas",
          "Ensured timely and organized distribution",
          "Extended support to vulnerable institutions"
        ],
        reliefDistributionOverview: {
          totalCollection: "Approximately 650 kg of food grains and essential food items collected and distributed",
          distributionBreakdown: [
            "Major portion distributed to families in the severely affected village",
            "Remaining food grains distributed equally between:",
            "1) Old age home",
            "2) Orphanage",
            "3) Rural school"
          ]
        },
        impact: [
          "90+ families in the affected village received food support sufficient for one week",
          "Additional households received assistance beyond measurable figures",
          "Improved food security during immediate crisis period",
          "Strengthened trust and responsiveness within the community"
        ]
      },
      {
        initiativeTitle: "Monsoon Support for the Old Age Home",
        challenge: "During the monsoon season, the old age home experienced acute shortages of essential medicines and adult diapers, critical for maintaining health, hygiene, and dignity among elderly residents. Due to monsoon-related accessibility challenges and limited resources, the facility was unable to meet these needs independently.",
        objectives: [
          "Provide essential medical supplies during monsoon",
          "Ensure hygiene and dignity for elderly residents",
          "Support healthcare continuity during seasonal vulnerability",
          "Strengthen care infrastructure for elderly populations"
        ],
        solution: "Medical & Hygiene Support Initiative — collaboration with friends, well-wishers, and donors to provide essential medical and hygiene supplies to the old age home.",
        implementationStrategy: [
          "Coordinated with donors and supporters",
          "Identified urgent medical and hygiene requirements",
          "Procured required supplies",
          "Ensured timely delivery during monsoon season"
        ],
        supportProvided: [
          "Medicines to manage ongoing health conditions",
          "Relief support for seasonal ailments",
          "Adult diapers for hygiene and comfort",
          "Essential hygiene supplies to maintain dignity and quality of life"
        ],
        impact: [
          "Improved health stability among elderly residents",
          "Enhanced hygiene and comfort",
          "Preserved dignity and quality of life",
          "Ensured uninterrupted care during monsoon challenges"
        ]
      }
    ],
    collectiveImpact: [
      "Addressed immediate needs caused by natural disaster",
      "Supported vulnerable populations including elderly and children",
      "Strengthened community resilience during crisis",
      "Demonstrated rapid, compassionate, and organized response",
      "Reinforced long-term trust within beneficiary communities"
    ]
  }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [livelihoodModalOpen, setLivelihoodModalOpen] = useState(false);
  const [currentPhotoIndexCS2, setCurrentPhotoIndexCS2] = useState(0);
  const [currentPhotoIndexCS3, setCurrentPhotoIndexCS3] = useState(0);
  const [currentPhotoIndexCS4, setCurrentPhotoIndexCS4] = useState(0);

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

  // Livelihood modal handlers
  const openLivelihoodModal = (e) => {
    e.preventDefault();
    setLivelihoodModalOpen(true);
    setCurrentPhotoIndexCS2(0);
    setCurrentPhotoIndexCS3(0);
    setCurrentPhotoIndexCS4(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLivelihoodModal = () => {
    setLivelihoodModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navigation handlers for CS2
  const nextPhotoCS2 = () => {
    setCurrentPhotoIndexCS2((prev) => (prev + 1) % caseStudy2Photos.length);
  };
  const prevPhotoCS2 = () => {
    setCurrentPhotoIndexCS2((prev) => prev === 0 ? caseStudy2Photos.length - 1 : prev - 1);
  };

  // Navigation handlers for CS3
  const nextPhotoCS3 = () => {
    setCurrentPhotoIndexCS3((prev) => (prev + 1) % caseStudy3Photos.length);
  };
  const prevPhotoCS3 = () => {
    setCurrentPhotoIndexCS3((prev) => prev === 0 ? caseStudy3Photos.length - 1 : prev - 1);
  };

  // Navigation handlers for CS4
  const nextPhotoCS4 = () => {
    setCurrentPhotoIndexCS4((prev) => (prev + 1) % caseStudy4Photo.length);
  };
  const prevPhotoCS4 = () => {
    setCurrentPhotoIndexCS4((prev) => prev === 0 ? caseStudy4Photo.length - 1 : prev - 1);
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
      {/* Livelihood Case Studies Modal */}
      {livelihoodModalOpen && (
        <div className="livelihood-modal-overlay" onClick={closeLivelihoodModal}>
          <div className="livelihood-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="livelihood-modal-close" onClick={closeLivelihoodModal}>
              ×
            </button>
            <div className="livelihood-modal-body">
              <h2 className="livelihood-modal-title">Impact in Livelihood</h2>
              <p className="livelihood-modal-subtitle">Our initiatives creating sustainable livelihood opportunities and community resilience</p>

              {livelihoodCaseStudies.map((study) => (
                <div key={study.id} className="livelihood-case-study-card">
                  {study.id === 2 ? (
                    /* Special layout for CS2 */
                    <div className="livelihood-cs-wrapper">
                      {study.photos && study.photos.length > 0 && (
                        <div className="livelihood-photo-slider">
                          <div className="livelihood-slider-container">
                            {study.photos.map((photo, photoIndex) => (
                              <img
                                key={photoIndex}
                                src={photo}
                                alt={`${study.title} - View ${photoIndex + 1}`}
                                className={`livelihood-slider-image ${photoIndex === currentPhotoIndexCS2 ? 'active' : ''}`}
                              />
                            ))}
                            <button className="livelihood-slider-arrow livelihood-slider-arrow-left" onClick={prevPhotoCS2}>‹</button>
                            <button className="livelihood-slider-arrow livelihood-slider-arrow-right" onClick={nextPhotoCS2}>›</button>
                          </div>
                          <div className="livelihood-slider-indicators">
                            {study.photos.map((_, photoIndex) => (
                              <span
                                key={photoIndex}
                                className={`livelihood-indicator ${photoIndex === currentPhotoIndexCS2 ? 'active' : ''}`}
                                onClick={() => setCurrentPhotoIndexCS2(photoIndex)}
                              ></span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="livelihood-cs-info-section">
                        <div className="livelihood-cs-header">
                          <div className="livelihood-cs-icon">{study.image}</div>
                          <div className="livelihood-cs-meta">
                            <h3 className="livelihood-cs-title">{study.title}</h3>
                            <div className="livelihood-cs-info">
                              <span>📍 {study.location}</span>
                              <span>📅 {study.year}</span>
                            </div>
                          </div>
                        </div>
                        <div className="livelihood-cs-content">
                          <div className="livelihood-cs-section">
                            <h4>The Challenge</h4>
                            <p>{study.challenge}</p>
                          </div>
                          <div className="livelihood-cs-section">
                            <h4>Our Solution</h4>
                            <p>{study.solution}</p>
                          </div>
                          <div className="livelihood-cs-section">
                            <h4>Impact Achieved</h4>
                            <ul className="livelihood-impact-list">
                              {study.impact.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Layout for CS3 and CS4 with initiatives */
                    <>
                      <div className="livelihood-cs-header">
                        <div className="livelihood-cs-icon">{study.image}</div>
                        <div className="livelihood-cs-meta">
                          <h3 className="livelihood-cs-title">{study.title}</h3>
                          <div className="livelihood-cs-info">
                            <span>📍 {study.location}</span>
                            <span>📅 {study.year}</span>
                          </div>
                        </div>
                      </div>

                      {study.photos && study.photos.length > 0 && (
                        <div className="livelihood-photo-slider">
                          <div className="livelihood-slider-container">
                            {study.photos.map((photo, photoIndex) => (
                              <img
                                key={photoIndex}
                                src={photo}
                                alt={`${study.title} - View ${photoIndex + 1}`}
                                className={`livelihood-slider-image ${
                                  photoIndex === (study.id === 3 ? currentPhotoIndexCS3 : currentPhotoIndexCS4) ? 'active' : ''
                                }`}
                              />
                            ))}
                            <button
                              className="livelihood-slider-arrow livelihood-slider-arrow-left"
                              onClick={study.id === 3 ? prevPhotoCS3 : prevPhotoCS4}
                            >‹</button>
                            <button
                              className="livelihood-slider-arrow livelihood-slider-arrow-right"
                              onClick={study.id === 3 ? nextPhotoCS3 : nextPhotoCS4}
                            >›</button>
                          </div>
                          <div className="livelihood-slider-indicators">
                            {study.photos.map((_, photoIndex) => (
                              <span
                                key={photoIndex}
                                className={`livelihood-indicator ${
                                  photoIndex === (study.id === 3 ? currentPhotoIndexCS3 : currentPhotoIndexCS4) ? 'active' : ''
                                }`}
                                onClick={() => study.id === 3 ? setCurrentPhotoIndexCS3(photoIndex) : setCurrentPhotoIndexCS4(photoIndex)}
                              ></span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="livelihood-cs-content">
                        {study.overview && (
                          <div className="livelihood-cs-section">
                            <h4>Overview</h4>
                            <p>{study.overview}</p>
                          </div>
                        )}

                        {study.initiatives && study.initiatives.map((initiative, initIdx) => (
                          <div key={initIdx} className="livelihood-cs-section livelihood-initiative-section">
                            <h4 className="livelihood-initiative-title">{initiative.initiativeTitle}</h4>

                            <div className="livelihood-cs-subsection">
                              <h5>Challenge</h5>
                              <p>{initiative.challenge}</p>
                            </div>

                            {initiative.objectives && (
                              <div className="livelihood-cs-subsection">
                                <h5>Objectives</h5>
                                <ul className="livelihood-impact-list">
                                  {initiative.objectives.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="livelihood-cs-subsection">
                              <h5>Solution</h5>
                              <p>{initiative.solution}</p>
                            </div>

                            {initiative.implementationStrategy && (
                              <div className="livelihood-cs-subsection">
                                <h5>Implementation Strategy</h5>
                                <ul className="livelihood-impact-list">
                                  {initiative.implementationStrategy.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {initiative.plantsDonated && (
                              <div className="livelihood-cs-subsection">
                                <h5>Plants Donated</h5>
                                <p><strong>{initiative.plantsDonated.total}</strong></p>
                                <ul className="livelihood-impact-list">
                                  {initiative.plantsDonated.categories.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {initiative.operationalProcess && (
                              <div className="livelihood-cs-subsection">
                                <h5>Operational Process</h5>
                                <ul className="livelihood-impact-list">
                                  {initiative.operationalProcess.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {initiative.processingWorkflow && (
                              <div className="livelihood-cs-subsection">
                                <h5>Processing Workflow</h5>
                                <ul className="livelihood-impact-list">
                                  {initiative.processingWorkflow.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {initiative.reliefDistributionOverview && (
                              <div className="livelihood-cs-subsection">
                                <h5>Relief Distribution Overview</h5>
                                <p><strong>{initiative.reliefDistributionOverview.totalCollection}</strong></p>
                                <ul className="livelihood-impact-list">
                                  {initiative.reliefDistributionOverview.distributionBreakdown.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {initiative.supportProvided && (
                              <div className="livelihood-cs-subsection">
                                <h5>Support Provided</h5>
                                <ul className="livelihood-impact-list">
                                  {initiative.supportProvided.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {initiative.impact && (
                              <div className="livelihood-cs-subsection">
                                <h5>Impact</h5>
                                <ul className="livelihood-impact-list">
                                  {initiative.impact.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}

                        {study.collectiveImpact && (
                          <div className="livelihood-cs-section">
                            <h4>Collective Impact</h4>
                            <ul className="livelihood-impact-list">
                              {study.collectiveImpact.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
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
              <Link to="/case-studies#case-study-1" className="work-card-link">Read Case Study →</Link>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Promoted menstrual hygiene and wellness by distributing essential hygiene kits to adolescent girls in marginalized communities.</p>
              <Link to="/case-studies#case-study-5" className="work-card-link">Read Case Study →</Link>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">🌱</div>
              <h3>Environment</h3>
              <p>Collected 31 kg of clothes under the KAPAAD Project, promoting recycling, zero-waste practices, and sustainable living.</p>
              <Link to="/case-studies#case-study-3" className="work-card-link">Read Case Study →</Link>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">💼</div>
              <h3>Livelihood</h3>
              <p>Created livelihood opportunities for 50+ tribal women and differently-abled artisans through handcrafted product sales and exhibitions.</p>
              <a href="#livelihood-case-studies" className="work-card-link" onClick={openLivelihoodModal}>Read Case Study →</a>
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
