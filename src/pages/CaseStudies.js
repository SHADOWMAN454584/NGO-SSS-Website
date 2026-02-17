import React, { useEffect, useState } from 'react';
import './CaseStudies.css';

// Import photos for case study 1
const caseStudy1Photos = [
  // require('../assets/Case Study 1/cs1 1.jpg'),
  require('../assets/Case Study 1/CS1Gallery/cs1g2.jpeg'),//imp for front
  require('../assets/Case Study 1/cs1 2.jpg'),
  require('../assets/Case Study 1/cs1 3.jpg'),
  require('../assets/Case Study 1/cs1 4.jpg'),
  require('../assets/Case Study 1/cs1 5.jpg'),
  require('../assets/Case Study 1/cs1 6.jpg'),
  require('../assets/Case Study 1/cs1 7.jpg'),
  // require('../assets/Case Study 1/cs1 8.jpg'), no pad
  require('../assets/Case Study 1/cs1 9.jpg'),
  // require('../assets/Case Study 1/cs1 10.jpg'),
  require('../assets/Case Study 1/cs1 11.jpg'),
  require('../assets/Case Study 1/cs1 12.jpg'),
  require('../assets/Case Study 1/cs1 13.jpg'),
  require('../assets/Case Study 1/cs1 14.jpg'),
  // require('../assets/Case Study 1/cs1 15.jpg'), no pad
  // require('../assets/Case Study 1/cs1 16.jpg'), no pad
];

// Import photos for CS1 Gallery (additional photos)
const caseStudy1GalleryPhotos = [
require('../assets/Case Study 1/CS1Gallery/cs1g1.jpeg'),
// require('../assets/Case Study 1/CS1Gallery/cs1g2.jpeg'), no pad
require('../assets/Case Study 1/CS1Gallery/cs1g3.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g4.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g5.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g6.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g7.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g8.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g9.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g10.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g12.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g13.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g14.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g15.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g16.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g17.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g18.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g19.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g20.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g21.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g22.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g23.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g24.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g25.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g26.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g27.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g28.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g29.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g30.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g31.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g32.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g33.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g34.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g35.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g36.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g37.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g38.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g39.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g40.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g41.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g42.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g43.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g44.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g45.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g46.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g47.jpeg'),
require('../assets/Case Study 1/CS1Gallery/cs1g48.jpeg')
];

// Combine all photos for the modal gallery
const allCaseStudy1Photos = [...caseStudy1Photos, ...caseStudy1GalleryPhotos];

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

// Import photos for Emergency Relief & Compassionate Care Initiatives
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

// Import photos for Health, Safety & Empowerment Awareness Initiatives
const healthSafetyInitiativePhotos = [
  require('../assets/Case Study 5/cs5 1.jpg'),
  require('../assets/Case Study 5/cs5 2.jpg'),
  require('../assets/Case Study 5/cs5 3.jpg'),
  require('../assets/Case Study 5/cs5 4.jpg'),
  require('../assets/Case Study 5/cs5 5.jpg'),
  require('../assets/Case Study 5/cs5 6.jpg'),
];

const CaseStudies = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentPhotoIndexCS2, setCurrentPhotoIndexCS2] = useState(0);
  const [currentPhotoIndexCS3, setCurrentPhotoIndexCS3] = useState(0);
  const [currentPhotoIndexCS4, setCurrentPhotoIndexCS4] = useState(0);
  const [currentPhotoIndexCS5, setCurrentPhotoIndexCS5] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhotoIndex, setModalPhotoIndex] = useState(0);

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
      (prevIndex + 1) % caseStudy4Photo.length
    );
  };

  const prevPhotoCS4 = () => {
    setCurrentPhotoIndexCS4((prevIndex) => 
      prevIndex === 0 ? caseStudy4Photo.length - 1 : prevIndex - 1
    );
  };

  // Navigation handlers for Case Study 5
  const nextPhotoCS5 = () => {
    setCurrentPhotoIndexCS5((prevIndex) => 
      (prevIndex + 1) % healthSafetyInitiativePhotos.length
    );
  };

  const prevPhotoCS5 = () => {
    setCurrentPhotoIndexCS5((prevIndex) => 
      prevIndex === 0 ? healthSafetyInitiativePhotos.length - 1 : prevIndex - 1
    );
  };

  // Modal handlers
  const openModal = () => {
    setIsModalOpen(true);
    setModalPhotoIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextModalPhoto = () => {
    setModalPhotoIndex((prevIndex) => 
      (prevIndex + 1) % allCaseStudy1Photos.length
    );
  };

  const prevModalPhoto = () => {
    setModalPhotoIndex((prevIndex) => 
      prevIndex === 0 ? allCaseStudy1Photos.length - 1 : prevIndex - 1
    );
  };

  const caseStudies = [
    {
      id: 1,
      title: "Skill Development: Building Confidence, Creating Independence",
      location: "",
      year: "",
      image: "💫",
      photos: caseStudy1Photos,
      overview: "This initiative focuses on empowering young rural girls and women through structured vocational skill development programs that create sustainable livelihood opportunities and long-term economic independence.",
      challenge: "Due to limited access to education and livelihood opportunities, many young rural girls face significant barriers to personal and economic growth. Financial constraints and the distance of schools further exacerbate these challenges, leaving them with few avenues to develop practical skills or earn a sustainable income.",
      objectives: [
        "Provide accessible vocational skill training to rural girls and women",
        "Encourage interest-based skill development",
        "Create pathways for sustainable income generation",
        "Build long-term financial independence and self-confidence"
      ],
      solution: "Skill Development for Economic Independence",
      implementationStrategy: [
        "Organized women and girls into focused groups of 10–15 participants",
        "Aligned training programs with individual interests and skill potential",
        "Collaborated with local tailoring classes",
        "Partnered with hand-craft and jewelry-making centers",
        "Provided structured hands-on vocational training"
      ],
      trainingModules: {
        stitchingAndTailoring: [
          "Training in stitching techniques",
          "Creation of quality blouses, bags, dresses, and tailored products",
          "Skill-building for independent order-based work"
        ],
        handcraftAndJewelryMaking: [
          "Training in handwork and creative design",
          "Jewelry-making skills development",
          "Product finishing and quality improvement"
        ]
      },
      participantEngagement: "The response was highly positive — participants showed strong engagement, quickly learned practical skills, and began producing finished products with confidence.",
      economicEnablement: [
        "Finished products transported to urban markets for sale at reasonable prices",
        "Income generation opportunities created for participants",
        "Guidance provided on online selling platforms",
        "Support for expanding market reach",
        "Encouragement to build sustainable micro-enterprises"
      ],
      impact: [
        "30+ participants completed stitching training and are now working independently",
        "12+ participants progressing toward becoming professional bag designers",
        "16+ participants engaged in jewelry-making as a livelihood activity",
        "20 girls trained and certified in tailoring",
        "60% started earning through small stitching orders",
        "Urban market access enabled and guidance on online selling provided",
        "Increased confidence, financial independence, and community pride"
      ],
      longTermOutcomes: [
        "Enhanced self-reliance among rural women and girls",
        "Improved economic stability within families",
        "Development of entrepreneurial mindset",
        "Strengthened community empowerment ecosystem"
      ],
      underDevelopment: [
        "Support for expanding market reach",
        "Encouragement to build sustainable micro-enterprises",
        "Creation of cooperative models for collective marketing",
        "Urban market access enabled and guidance on online selling provided",
        "Increased confidence, financial independence, and community pride"
      ],
      note: ""
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
    },
    {
      id: 5,
      title: "Health, Safety & Empowerment Awareness Initiatives",
      location: "Rural Schools & Villages",
      year: "2026",
      image: "💛",
      photos: healthSafetyInitiativePhotos,
      overview: "This case study highlights three critical awareness initiatives focused on menstrual health education, disaster preparedness training, and self-defense empowerment — all aimed at strengthening knowledge, safety, and confidence among women and children in rural communities.",
      initiatives: [
        {
          initiativeTitle: "Initiative 1: Menstrual Health & Hygiene Awareness",
          challenge: "In many rural villages, girls and women lack access to accurate information about menstrual health and hygiene. Due to traditional beliefs and limited health education, many continue to follow age-old practices or use unhygienic methods during their menstrual cycle. This creates health risks such as infections and reinforces stigma and discomfort around menstruation. Additionally, there is often little understanding of proper disposal of sanitary products, affecting both community hygiene and the local environment.",
          objectives: [
            "Provide accurate education on menstrual health",
            "Break stigma and misconceptions around menstruation",
            "Promote safe hygiene practices",
            "Encourage responsible disposal of sanitary waste",
            "Improve nutrition awareness among children"
          ],
          solution: "Conducted community visits, school awareness workshops, and interactive discussions to educate girls, women, and children on menstrual hygiene, safe disposal practices, and healthy lifestyle habits.",
          implementationStrategy: [
            "Organised awareness sessions in schools and villages",
            "Created safe spaces for open discussion and questions",
            "Provided biological education on menstruation",
            "Demonstrated safe usage of hygienic products",
            "Educated on proper menstrual waste disposal methods",
            "Promoted healthy eating habits among children"
          ],
          keyFocusAreas: [
            "Understanding the biological process of menstruation",
            "Importance of maintaining hygiene during menstrual cycle",
            "Safe and responsible disposal practices",
            "Clarification of myths and misconceptions",
            "Encouraging home-made nutritious food over packet foods"
          ],
          impact: [
            "Over 200 girls now understand proper menstrual hygiene practices",
            "More than 350 women using appropriate menstrual products with correct disposal knowledge",
            "Reduced health risks and improved sanitation awareness",
            "Increased confidence and comfort discussing menstrual health",
            "More children bringing home-made food to school, improving nutrition awareness"
          ]
        },
        {
          initiativeTitle: "Initiative 2: Disaster Awareness & Preparedness Training",
          challenge: "In many rural villages, children have limited awareness of disaster preparedness — including how to respond during floods, earthquakes, or fires. Schools often lack resources to provide structured disaster education, leaving students unsure of how to act safely during emergencies. Preparedness is essential to reduce risk, fear, and anxiety during crises.",
          objectives: [
            "Build disaster awareness among children",
            "Teach step-by-step emergency response actions",
            "Reduce fear and confusion during emergencies",
            "Strengthen school-level preparedness systems"
          ],
          solution: "Partnered with GujAid Disaster and First Aid Foundation to conduct interactive disaster management and first-aid training sessions within the school premises.",
          implementationStrategy: [
            "Collaborated with expert trainers from GujAid",
            "Organised interactive sessions at the school",
            "Provided step-by-step explanations of different disasters",
            "Used accessible language for better understanding",
            "Encouraged questions and active student participation"
          ],
          topicsCovered: [
            "Flood safety measures",
            "Earthquake response techniques",
            "Fire emergency actions",
            "Basic first-aid knowledge",
            "Helping others during emergencies"
          ],
          impact: [
            "Children and youth gained clearer understanding of disaster response",
            "Improved preparedness and step-by-step safety knowledge",
            "Reduced fear through awareness and structured learning",
            "Strengthened school's disaster education capacity through expert partnership"
          ]
        },
        {
          initiativeTitle: "Initiative 3: Self-Defense & Personal Safety Training",
          challenge: "The increasing rise in eve-teasing, harassment, and bullying — in public spaces and transport — has made daily travel unsafe for children, particularly girls. Safety concerns affect confidence, freedom, and mental well-being.",
          objectives: [
            "Equip children with practical self-defense techniques",
            "Increase confidence and personal safety awareness",
            "Reduce vulnerability in unsafe situations",
            "Empower girls to protect themselves"
          ],
          solution: "Partnered with a professional martial arts trainer, Udaan Sir (Udan Purabiya, Krav Maga self-defense system), to conduct structured self-defense sessions during school hours.",
          implementationStrategy: [
            "Coordinated with school authorities",
            "Invited professional martial arts trainer",
            "Conducted sessions within school premises",
            "Taught simple, quick, and easy-to-remember defense techniques",
            "Focused on real-life scenario-based training"
          ],
          trainingHighlights: [
            "Basic Krav Maga techniques",
            "Quick reaction and escape strategies",
            "Confidence-building exercises",
            "Situational awareness training"
          ],
          impact: [
            "Increased awareness about personal safety",
            "Students reported feeling safer and more confident",
            "Positive feedback from school staff and children",
            "Empowered girls with practical self-defense skills"
          ]
        }
      ],
      collectiveImpact: [
        "Improved health awareness among girls and women",
        "Enhanced disaster preparedness among children",
        "Strengthened personal safety confidence",
        "Encouraged open conversations around sensitive topics",
        "Built stronger school-community partnerships",
        "Created a culture of awareness, resilience, and empowerment"
      ]
    }
  ];

  return (
    <div className="case-studies-page">
      {/* Modal Gallery */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-slider">
              <button className="modal-arrow modal-arrow-left" onClick={prevModalPhoto}>
                ‹
              </button>
              
              <img
                src={allCaseStudy1Photos[modalPhotoIndex]}
                alt={`Case Study 1 Gallery ${modalPhotoIndex + 1}`}
                className="modal-image"
              />
              <button className="modal-arrow modal-arrow-right" onClick={nextModalPhoto}>
                ›
              </button>
            </div>
            <div className="modal-info">
              <p>{modalPhotoIndex + 1} / {allCaseStudy1Photos.length}</p>
            </div>
          </div>
        </div>
      )}

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
              ) : study.id === 3 || study.id === 4 || study.id === 5 ? (
                // Special layout for CS3, CS4, and CS5 with initiatives
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
                              photoIndex === (study.id === 3 ? currentPhotoIndexCS3 : study.id === 4 ? currentPhotoIndexCS4 : currentPhotoIndexCS5) ? 'active' : ''
                            }`}
                          />
                        ))}
                        
                        <button 
                          className="slider-arrow slider-arrow-left" 
                          onClick={study.id === 3 ? prevPhotoCS3 : study.id === 4 ? prevPhotoCS4 : prevPhotoCS5}
                        >
                          ‹
                        </button>
                        <button 
                          className="slider-arrow slider-arrow-right" 
                          onClick={study.id === 3 ? nextPhotoCS3 : study.id === 4 ? nextPhotoCS4 : nextPhotoCS5}
                        >
                          ›
                        </button>
                      </div>
                      <div className="slider-indicators">
                        {study.photos.map((_, photoIndex) => (
                          <span
                            key={photoIndex}
                            className={`indicator ${
                              photoIndex === (study.id === 3 ? currentPhotoIndexCS3 : study.id === 4 ? currentPhotoIndexCS4 : currentPhotoIndexCS5) ? 'active' : ''
                            }`}
                            onClick={() => study.id === 3 ? setCurrentPhotoIndexCS3(photoIndex) : study.id === 4 ? setCurrentPhotoIndexCS4(photoIndex) : setCurrentPhotoIndexCS5(photoIndex)}
                          ></span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="case-study-content">
                    {/* Overview */}
                    {study.overview && (
                      <div className="case-study-section">
                        <h4>Overview</h4>
                        <p>{study.overview}</p>
                      </div>
                    )}

                    {/* Initiatives */}
                    {study.initiatives && study.initiatives.map((initiative, initIdx) => (
                      <div key={initIdx} className="case-study-section initiative-section">
                        <h4 className="initiative-title">{initiative.initiativeTitle}</h4>
                        
                        <div className="case-study-subsection">
                          <h5>Challenge</h5>
                          <p>{initiative.challenge}</p>
                        </div>

                        {initiative.objectives && (
                          <div className="case-study-subsection">
                            <h5>Objectives</h5>
                            <ul className="impact-list">
                              {initiative.objectives.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="case-study-subsection">
                          <h5>Solution</h5>
                          <p>{initiative.solution}</p>
                        </div>

                        {initiative.implementationStrategy && (
                          <div className="case-study-subsection">
                            <h5>Implementation Strategy</h5>
                            <ul className="impact-list">
                              {initiative.implementationStrategy.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.plantsDonated && (
                          <div className="case-study-subsection">
                            <h5>Plants Donated</h5>
                            <p><strong>{initiative.plantsDonated.total}</strong></p>
                            <ul className="impact-list">
                              {initiative.plantsDonated.categories.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.operationalProcess && (
                          <div className="case-study-subsection">
                            <h5>Operational Process</h5>
                            <ul className="impact-list">
                              {initiative.operationalProcess.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.processingWorkflow && (
                          <div className="case-study-subsection">
                            <h5>Processing Workflow</h5>
                            <ul className="impact-list">
                              {initiative.processingWorkflow.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.reliefDistributionOverview && (
                          <div className="case-study-subsection">
                            <h5>Relief Distribution Overview</h5>
                            <p><strong>{initiative.reliefDistributionOverview.totalCollection}</strong></p>
                            <ul className="impact-list">
                              {initiative.reliefDistributionOverview.distributionBreakdown.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.supportProvided && (
                          <div className="case-study-subsection">
                            <h5>Support Provided</h5>
                            <ul className="impact-list">
                              {initiative.supportProvided.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.impact && (
                          <div className="case-study-subsection">
                            <h5>Impact</h5>
                            <ul className="impact-list">
                              {initiative.impact.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Collective Impact */}
                    {study.collectiveImpact && (
                      <div className="case-study-section">
                        <h4>Collective Impact</h4>
                        <ul className="impact-list">
                          {study.collectiveImpact.map((item, idx) => (
                            <li key={idx}>
                              <span className="check-icon">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
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

                  {/* Show More Button for Case Study 1 */}
                  {study.id === 1 && (
                    <div className="show-more-container">
                      <button className="show-more-button" onClick={openModal}>
                        {/* <span className="button-icon"></span> */}
                        More Photos...
                      </button>
                    </div>
                  )}

                  <div className="case-study-content">
                    {/* Overview (CS1) */}
                    {study.overview && (
                      <div className="case-study-section">
                        <h4>Overview</h4>
                        <p>{study.overview}</p>
                      </div>
                    )}

                    <div className="case-study-section">
                      <h4>The Challenge</h4>
                      <p>{study.challenge}</p>
                    </div>

                    {/* Objectives (CS1) */}
                    {study.objectives && (
                      <div className="case-study-section">
                        <h4>Objectives</h4>
                        <ul className="impact-list">
                          {study.objectives.map((item, idx) => (
                            <li key={idx}>
                              <span className="check-icon">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="case-study-section">
                      <h4>Our Solution</h4>
                      <p>{study.solution}</p>
                    </div>

                    {/* Implementation Strategy (CS1) */}
                    {study.implementationStrategy && (
                      <div className="case-study-section">
                        <h4>Implementation Strategy</h4>
                        <ul className="impact-list">
                          {study.implementationStrategy.map((item, idx) => (
                            <li key={idx}>
                              <span className="check-icon">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Training Modules (CS1) */}
                    {study.trainingModules && (
                      <div className="case-study-section">
                        <h4>Training Modules</h4>
                        <div className="training-modules">
                          <div className="training-module">
                            <h5>Stitching & Tailoring</h5>
                            <ul className="impact-list">
                              {study.trainingModules.stitchingAndTailoring.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="training-module">
                            <h5>Handcraft & Jewelry Making</h5>
                            <ul className="impact-list">
                              {study.trainingModules.handcraftAndJewelryMaking.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check-icon">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Participant Engagement (CS1) */}
                    {study.participantEngagement && (
                      <div className="case-study-section">
                        <h4>Participant Engagement</h4>
                        <p>{study.participantEngagement}</p>
                      </div>
                    )}

                    {/* Economic Enablement (CS1) */}
                    {study.economicEnablement && (
                      <div className="case-study-section">
                        <h4>Economic Enablement</h4>
                        <ul className="impact-list">
                          {study.economicEnablement.map((item, idx) => (
                            <li key={idx}>
                              <span className="check-icon">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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

                    {/* Long-Term Outcomes (CS1) */}
                    {study.longTermOutcomes && (
                      <div className="case-study-section">
                        <h4>Long-Term Outcomes</h4>
                        <ul className="impact-list">
                          {study.longTermOutcomes.map((item, idx) => (
                            <li key={idx}>
                              <span className="check-icon">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Under Development Section (CS1) */}
                    {study.underDevelopment && (
                      <div className="case-study-section">
                        <h4>Under Development</h4>
                        <ul className="impact-list">
                          {study.underDevelopment.map((item, idx) => (
                            <li key={idx}>
                              <span className="check-icon">🔄</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Note (if any) */}
                    {study.note && (
                      <div className="case-study-section">
                        <p className="case-study-note"><em>Note: {study.note}</em></p>
                      </div>
                    )}

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
