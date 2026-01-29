import React, { useEffect } from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
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

    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const programs = [
    {
      id: 1,
      icon: "📚",
      title: "Education & Literacy",
      description: "Empowering rural girls through quality education and skill-based training",
      initiatives: [
        "Tailoring Training for Rural Girls in Gujarat",
        "Skill-Based Learning Programs",
        "Educational Support for Underprivileged Students",
        "Vocational & Literacy Development Workshops",
      ],
      impact: "20+ girls trained and empowered with livelihood skills"
    },
    {
      id: 2,
      icon: "🏥",
      title: "Healthcare Services",
      description: "Providing accessible healthcare and hygiene awareness to underserved communities",
      initiatives: [
        "Health & Hygiene Awareness for Adolescent Girls",
        "Distribution of Sanitary Kits and Essentials",
        "Wellness & Hygiene Campaigns in Rural Areas",
        "Support for Women’s Health Programs",
      ],
      impact: "100+ girls benefited through hygiene and wellness initiatives"
    },
    {
      id: 3,
      icon: "💼",
      title: "Livelihood & Skill Development",
      description: "Creating sustainable income opportunities through skill training and entrepreneurship",
      initiatives: [
        "Handcrafted Product Exhibitions (Runwal Elegante)",
        "Training for Tribal Women & Differently-Abled Artisans",
        "Corporate Order Partnerships for Handmade Goods",
        "Community-Based Craft & Sales Programs",
      ],
      impact: "50+ artisans gained sustainable income opportunities"
    },
    {
      id: 4,
      icon: "👧",
      title: "Women Empowerment",
      description: "Promoting gender equality and self-reliance through skill, creativity, and confidence",
      initiatives: [
        "Tailoring Courses for Rural Girls",
        "Women-Led Entrepreneurship Exhibitions",
        "Financial Independence & Self-Reliance Programs",
        "Inclusion of Differently-Abled Women in Livelihood Projects",
      ],
      impact: "70+ women empowered across rural and urban communities"
    },
    {
      id: 5,
      icon: "🌱",
      title: "Environmental Conservation",
      description: "Encouraging sustainability and responsible consumption through community initiatives",
      initiatives: [
        "KAPAAD Project – Clothes Reuse & Recycling Drive",
        "Promotion of Zero-Waste Practices",
        "Awareness on Sustainable Living",
        "Textile Waste Repurposing (Mats & Cleaning Items)",
      ],
      impact: "31 kg of clothes collected and repurposed sustainably"
    },
    {
      id: 6,
      icon: "🤝",
      title: "Community Development",
      description: "Building resilient and compassionate communities through collective action",
      initiatives: [
        "Flood Relief Drive at Rasikpur Village",
        "Food Grain Collection & Distribution (650 kg)",
        "Support to Old-Age Homes and Special-Needs Children",
        "“Anna Daan” Community Contribution Campaign",
      ],
      impact: "350+ kg food aid delivered to flood-affected families"
    }
  ];

  const approach = [
    {
      step: "1",
      title: "Community Engagement",
      description: "We work closely with local communities to understand their unique needs and challenges",
      icon: "👥"
    },
    {
      step: "2",
      title: "Strategic Planning",
      description: "Develop comprehensive plans with measurable goals and sustainable outcomes",
      icon: "📋"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute programs with dedicated teams and local partnerships",
      icon: "⚙️"
    },
    {
      step: "4",
      title: "Monitoring & Evaluation",
      description: "Regular assessment to ensure effectiveness and continuous improvement",
      icon: "📊"
    }
  ];

  return (
    <div className="what-we-do-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in">What We Do</h1>
          <p className="page-subtitle fade-in">
            Transforming lives through comprehensive programs focused on education, health, and sustainable development
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content fade-in">
            <h2 className="section-heading centered">Our Mission in Action</h2>
            <p className="intro-text">
              At Selfless Serving Society, we believe in creating lasting change through holistic community development. 
              Our programs are designed to address the root causes of poverty and inequality, empowering individuals 
              and communities to build better futures for themselves and generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section programs-section">
        <div className="container">
          <h2 className="section-heading centered">Our Core Programs</h2>
          <p className="section-subheading centered">
            Comprehensive initiatives addressing critical needs across multiple sectors
          </p>
          
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={program.id} className="program-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="program-icon">{program.icon}</div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                
                <div className="program-initiatives">
                  <h4>Key Initiatives:</h4>
                  <ul>
                    {program.initiatives.map((initiative, idx) => (
                      <li key={idx}>
                        <span className="bullet">•</span>
                        {initiative}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="program-impact">
                  <span className="impact-icon">📈</span>
                  <span className="impact-text">{program.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section approach-section">
        <div className="container">
          <h2 className="section-heading centered">Our Approach</h2>
          <p className="section-subheading centered">
            A systematic and sustainable methodology that ensures lasting impact
          </p>
          
          <div className="approach-timeline">
            {approach.map((item, index) => (
              <div key={index} className={`approach-item slide-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="approach-number">{item.step}</div>
                <div className="approach-content">
                  <div className="approach-icon">{item.icon}</div>
                  <h3 className="approach-title">{item.title}</h3>
                  <p className="approach-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section stats-section">
        <div className="container">
          <h2 className="section-heading centered white">Collective Impact</h2>
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-icon">👨‍👩‍👧‍👦</div>
              <div className="stat-number">20,000+</div>
              <div className="stat-label">Lives Touched</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Active Programs</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">🏘️</div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">🤝</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-heading centered">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card slide-up">
              <div className="value-icon">💫</div>
              <h3>Integrity</h3>
              <p>Maintaining transparency and accountability in all our actions</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>Serving with empathy and understanding the needs of others</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>Striving for the highest quality in everything we do</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">🔄</div>
              <h3>Sustainability</h3>
              <p>Creating long-term solutions that empower communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Join Us in Making a Difference</h2>
            <p>Your support enables us to expand our reach and create more impact</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Get Involved</a>
              <a href="/case-studies" className="cta-button secondary">View Impact Stories</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
