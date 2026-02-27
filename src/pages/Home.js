import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sssLogo from '../assets/images/Logo.svg';
import './Home.css';

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

// Import hero images (add your images to src/assets/home hero image/)
// Uncomment these lines and add your actual image files
import heroImage1 from '../assets/home hero image/image1.jpg';
import heroImage2 from '../assets/home hero image/image2.jpeg';
import heroImage4 from '../assets/home hero image/image4.jpg';
// import heroImage3 from '../assets/home hero image/image3.jpg';

// Placeholder images array - replace with your actual images
const heroImages = [
  heroImage1,
  heroImage2,
  // heroImage3,
  heroImage4
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

// Import photos for case study 1
const caseStudy1Photos = [
  require('../assets/Case Study 1/CS1Gallery/cs1g2.jpeg'),
  require('../assets/Case Study 1/cs1 2.jpg'),
  require('../assets/Case Study 1/cs1 3.jpg'),
  require('../assets/Case Study 1/cs1 4.jpg'),
  require('../assets/Case Study 1/cs1 5.jpg'),
  require('../assets/Case Study 1/cs1 6.jpg'),
  require('../assets/Case Study 1/cs1 7.jpg'),
  //require('../assets/Case Study 1/cs1 9.jpg'),
  require('../assets/Case Study 1/cs1 11.jpg'),
  require('../assets/Case Study 1/cs1 12.jpg'),
  require('../assets/Case Study 1/cs1 13.jpg'),
  //require('../assets/Case Study 1/cs1 14.jpg'),
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

// Import photos for case study 5
const caseStudy5Photos = [
  require('../assets/Case Study 5/cs5 1.jpg'),
  require('../assets/Case Study 5/cs5 2.jpg'),
  require('../assets/Case Study 5/cs5 3.jpg'),
  require('../assets/Case Study 5/cs5 4.jpg'),
  require('../assets/Case Study 5/cs5 5.jpg'),
  require('../assets/Case Study 5/cs5 6.jpg'),
  require('../assets/Case Study 5/cs5 8.jpg'),
];

// Import photos for case study 6
const wellbeingInitiativePhotos = [
  require('../assets/Case Study 6/cs6 1.jpeg'),
  require('../assets/Case Study 6/cs6 2.jpeg'),
  require('../assets/Case Study 6/cs6 3.jpeg'),
  require('../assets/Case Study 6/cs6 4.jpeg'),
  require('../assets/Case Study 6/cs6 5.jpeg'),
  require('../assets/Case Study 6/cs6 6.jpeg'),
  require('../assets/Case Study 6/cs6 7.jpeg'),
  require('../assets/Case Study 6/cs6 8.jpeg'),
  require('../assets/Case Study 6/cs6 9.jpeg'),
  require('../assets/Case Study 6/cs6 10.jpeg'),
  require('../assets/Case Study 6/cs6 11.jpeg'),
  require('../assets/Case Study 6/cs6 12.jpeg'),
  require('../assets/Case Study 6/cs6 13.jpeg'),
  require('../assets/Case Study 6/cs6 14.jpeg'),
  require('../assets/Case Study 6/cs6 15.jpeg'),
];

// Healthcare camp photos (add photos to src/assets/Case Study 7/ when available)
const healthCampPhotos = [];

// Education case studies data (CS5 + CS6 for Education popup)
const educationCaseStudies = [
  {
    id: 5,
    title: "Health, Safety & Empowerment Awareness Initiatives",
    location: "Rural Schools & Villages",
    year: "2026",
    image: "💛",
    photos: caseStudy5Photos,
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
  },
  {
    id: 6,
    title: "Well-Being, Digital Awareness & Future Readiness Initiatives",
    location: "Village Schools & Community Spaces",
    year: "2026",
    image: "🧘",
    photos: wellbeingInitiativePhotos,
    overview: "This case study highlights three community-strengthening initiatives — Yoga & Wellness Camps, Social Media & Digital Safety Awareness, and Career Counselling for Students — designed to improve physical health, mental resilience, digital responsibility, and future preparedness among children and adults.",
    initiatives: [
      {
        initiativeTitle: "Initiative 1: Yoga — A Constant Need for Physical, Mental & Emotional Well-Being",
        challenge: "In today's fast-paced world, stress and lifestyle-related issues affect women, children, office staff, and workers alike. Many experience physical discomfort, anxiety, lack of concentration, exam-related stress, poor posture, and mental fatigue. Prolonged sitting and incorrect body alignment have become common concerns impacting overall health and quality of life.",
        objectives: [
          "Improve physical health and posture",
          "Reduce anxiety and mental fatigue",
          "Build focus and concentration in children",
          "Promote emotional balance and overall well-being",
          "Encourage consistent healthy lifestyle habits"
        ],
        solution: "Organised ongoing Yoga camps in village schools and community spaces in collaboration with CSR partners, offering structured and group-specific sessions.",
        implementationStrategy: [
          "Regular yoga camps conducted in schools and community areas",
          "Targeted yoga modules designed for different age groups and professions",
          "Guided sessions led by experienced Yoga Guru Neelam Pandya ji",
          "Educational insights on long-term benefits of yoga"
        ],
        groupFocusedApproach: {
          women: [
            "Practices for easing body pains",
            "Reducing restlessness",
            "Improving overall physical health"
          ],
          children: [
            "Managing anxiety",
            "Improving focus and concentration",
            "Reducing exam stress"
          ],
          officeStaffAndWorkers: [
            "Improving posture",
            "Enhancing body balance",
            "Cultivating calmness and mental clarity"
          ]
        },
        impact: [
          "Participants report feeling calmer and mentally balanced",
          "Visible improvement in physical strength and flexibility",
          "Enhanced concentration among children",
          "Positive community response and regular participation",
          "Increased awareness of yoga as a lifestyle practice, not just exercise"
        ]
      },
      {
        initiativeTitle: "Initiative 2: Social Media & Digital Safety Awareness",
        challenge: "Widespread use of mobile phones and social media platforms such as Facebook, Instagram, and Twitter has led to increased screen addiction, family tensions, and exposure to harmful content. Children often consume digital content without awareness of risks. Additionally, rising cases of cyber fraud, scams, photo theft, and online exploitation make digital awareness essential.",
        objectives: [
          "Educate children about digital safety",
          "Create awareness about cybercrime and online fraud",
          "Promote responsible mobile phone usage",
          "Encourage critical thinking about social media consumption"
        ],
        solution: "Invited social media expert Mr. Ankit Momaya to conduct an awareness session on responsible and safe mobile phone usage.",
        implementationStrategy: [
          "Organised expert-led interactive session",
          "Explained digital threats in accessible language",
          "Discussed real-life examples of cybercrime and scams",
          "Encouraged questions and active participation"
        ],
        topicsCovered: [
          "Cybercrime awareness",
          "Photo theft and misuse",
          "Online money fraud",
          "Risks of oversharing personal information",
          "Pros and cons of social media platforms"
        ],
        impact: [
          "Increased awareness about digital threats",
          "Improved understanding of responsible phone usage",
          "Greater clarity among children about online safety",
          "Community enlightened about both benefits and risks of social media"
        ]
      },
      {
        initiativeTitle: "Initiative 3: Career Counselling & Future Pathway Guidance",
        challenge: "Many rural students lack exposure to diverse career opportunities and structured guidance about higher education. Limited awareness can restrict aspirations and prevent students from aligning their strengths with suitable career paths.",
        objectives: [
          "Expose students to a wide range of career options",
          "Help students identify strengths and interests",
          "Encourage higher education aspirations",
          "Build confidence in future planning"
        ],
        solution: "Conducted interactive career counselling sessions for students of classes 9 to 12 with support from CSR partners.",
        implementationStrategy: [
          "Organised structured guidance session",
          "Introduced students to multiple career pathways",
          "Conducted small assessment activities",
          "Encouraged interactive discussion and engagement"
        ],
        keyActivities: [
          "Career awareness presentations",
          "Interest-based assessment exercises",
          "Discussion on higher education opportunities",
          "Guidance on aligning skills with professions"
        ],
        impact: [
          "Renewed enthusiasm among students for higher education",
          "Improved clarity about future career options",
          "Increased motivation to pursue structured academic paths",
          "Positive influence on families to support education",
          "Inspiration for the next generation to dream bigger"
        ]
      }
    ],
    collectiveImpact: [
      "Improved physical, mental, and emotional well-being",
      "Enhanced digital responsibility and awareness",
      "Strengthened career readiness among rural youth",
      "Built long-term resilience and informed decision-making",
      "Created a supportive ecosystem for holistic development"
    ]
  }
];

// Livelihood Impact case studies data (CS1 + CS4 for Livelihood popup)
const livelihoodImpactCaseStudies = [
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
      "Organized women and girls into focused groups of 10\u201315 participants",
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
    participantEngagement: "The response was highly positive \u2014 participants showed strong engagement, quickly learned practical skills, and began producing finished products with confidence.",
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
    ]
  },
  {
    id: 4,
    title: "Anna Daan Flood Relief Drive",
    location: "Flood-Affected Village & Supporting Institutions",
    year: "2024",
    image: "\uD83C\uDF27\uFE0F",
    photos: caseStudy4Photo,
    overview: "This case study highlights two compassionate emergency response initiatives \u2014 the Anna Daan Flood Relief Drive and the Monsoon Medical & Hygiene Support Initiative \u2014 aimed at supporting vulnerable communities affected by natural disaster and seasonal challenges.",
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
        solution: "Launch of the 'Anna Daan' Drive \u2014 a focused relief effort to collect and distribute food grains and essential supplies to flood-affected families through coordinated volunteer action.",
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
        solution: "Medical & Hygiene Support Initiative \u2014 collaboration with friends, well-wishers, and donors to provide essential medical and hygiene supplies to the old age home.",
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

// Healthcare case studies data (CS5 Health/Safety + CS6 Eye & Dental for Healthcare popup)
const healthcareCaseStudies = [
  
  {
    id: 6,
    title: "Eye & Dental Health Camps — Bridging Rural Healthcare Gaps",
    location: "Multiple Rural Villages",
    year: "2026",
    image: "👁️",
    photos: healthCampPhotos,
    overview: "This initiative focused on improving access to essential healthcare services in rural communities through specialised eye and dental health camps, organised in collaboration with CSR partner JTI.",
    initiatives: [
      {
        initiativeTitle: "Eye Health Screening Camp",
        challenge: "Access to basic eye care services remains limited in many rural areas. Lack of awareness and limited availability of specialists often result in undiagnosed vision problems such as refractive errors and cataracts, affecting productivity, education, and overall quality of life.",
        objectives: [
          "Provide accessible vision screening services",
          "Promote awareness about eye health and early detection",
          "Identify common visual impairments",
          "Improve quality of life through corrective support"
        ],
        solution: "Organised eye health camps in rural villages with trained eye care specialists conducting comprehensive vision check-ups.",
        implementationStrategy: [
          "Collaboration with CSR partner JTI",
          "Deployment of trained eye care specialists",
          "On-site comprehensive vision screening",
          "Educational sessions on eye health and preventive care",
          "Immediate distribution of corrective spectacles when required"
        ],
        servicesProvided: [
          "Thorough vision examinations",
          "Screening for refractive errors and cataracts",
          "Free spectacles provided to individuals with visual impairment",
          "Awareness on maintaining eye health"
        ],
        impact: [
          "Improved vision and independence for beneficiaries",
          "Enhanced ability to work and study",
          "Increased awareness of early detection importance",
          "Reduced barriers to specialised healthcare access"
        ]
      },
      {
        initiativeTitle: "Dental Health & Hygiene Camp",
        challenge: "Oral hygiene and preventive dental care are often overlooked in rural healthcare awareness. Limited access to dentists and lack of knowledge about dental hygiene contribute to untreated dental issues and long-term oral health problems.",
        objectives: [
          "Promote awareness about oral hygiene",
          "Provide accessible dental examinations",
          "Encourage preventive dental care practices",
          "Improve long-term oral health outcomes"
        ],
        solution: "Conducted dental health camps where dentists and support staff provided examinations, guidance, and hygiene kits to villagers.",
        implementationStrategy: [
          "On-site dental check-ups in rural villages",
          "Practical demonstrations on proper brushing techniques",
          "Awareness sessions on preventive oral care",
          "Distribution of dental care kits"
        ],
        servicesProvided: [
          "Dental examinations by qualified professionals",
          "Education on maintaining healthy teeth and gums",
          "Identification of warning signs of dental issues",
          "Distribution of toothbrushes, toothpaste, and educational material"
        ],
        impact: [
          "Improved understanding of oral hygiene importance",
          "Increased motivation to adopt better dental habits",
          "Early identification of dental health concerns",
          "Enhanced access to preventive healthcare services"
        ]
      }
    ],
    collectiveImpact: [
      "Reduced healthcare access barriers in rural communities",
      "Improved quality of life through better vision and oral health",
      "Increased awareness of preventive healthcare practices",
      "Demonstrated effective CSR-community collaboration",
      "Strengthened trust between healthcare providers and rural residents"
    ]
  }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [livelihoodModalOpen, setLivelihoodModalOpen] = useState(false);
  const [livelihoodImpactModalOpen, setLivelihoodImpactModalOpen] = useState(false);
  const [educationModalOpen, setEducationModalOpen] = useState(false);
  const [healthcareModalOpen, setHealthcareModalOpen] = useState(false);
  const [currentPhotoIndexHC5, setCurrentPhotoIndexHC5] = useState(0);
  const [currentPhotoIndexHC6, setCurrentPhotoIndexHC6] = useState(0);
  const [currentPhotoIndexCS1, setCurrentPhotoIndexCS1] = useState(0);
  const [currentPhotoIndexCS2, setCurrentPhotoIndexCS2] = useState(0);
  const [currentPhotoIndexCS3, setCurrentPhotoIndexCS3] = useState(0);
  const [currentPhotoIndexCS4, setCurrentPhotoIndexCS4] = useState(0);
  const [currentPhotoIndexCS4L, setCurrentPhotoIndexCS4L] = useState(0);
  const [currentPhotoIndexCS5, setCurrentPhotoIndexCS5] = useState(0);
  const [currentPhotoIndexCS6, setCurrentPhotoIndexCS6] = useState(0);

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

  // Livelihood Impact modal handlers
  const openLivelihoodImpactModal = (e) => {
    e.preventDefault();
    setLivelihoodImpactModalOpen(true);
    setCurrentPhotoIndexCS1(0);
    setCurrentPhotoIndexCS4L(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLivelihoodImpactModal = () => {
    setLivelihoodImpactModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navigation handlers for CS1
  const nextPhotoCS1 = () => {
    setCurrentPhotoIndexCS1((prev) => (prev + 1) % caseStudy1Photos.length);
  };
  const prevPhotoCS1 = () => {
    setCurrentPhotoIndexCS1((prev) => prev === 0 ? caseStudy1Photos.length - 1 : prev - 1);
  };

  // Navigation handlers for CS4L (Livelihood modal)
  const nextPhotoCS4L = () => {
    setCurrentPhotoIndexCS4L((prev) => (prev + 1) % caseStudy4Photo.length);
  };
  const prevPhotoCS4L = () => {
    setCurrentPhotoIndexCS4L((prev) => prev === 0 ? caseStudy4Photo.length - 1 : prev - 1);
  };

  // Education modal handlers
  const openEducationModal = (e) => {
    e.preventDefault();
    setEducationModalOpen(true);
    setCurrentPhotoIndexCS5(0);
    setCurrentPhotoIndexCS6(0);
    document.body.style.overflow = 'hidden';
  };

  const closeEducationModal = () => {
    setEducationModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Healthcare modal handlers
  const openHealthcareModal = (e) => {
    e.preventDefault();
    setHealthcareModalOpen(true);
    setCurrentPhotoIndexHC5(0);
    setCurrentPhotoIndexHC6(0);
    document.body.style.overflow = 'hidden';
  };

  const closeHealthcareModal = () => {
    setHealthcareModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navigation handlers for Healthcare CS5
  const nextPhotoHC5 = () => {
    setCurrentPhotoIndexHC5((prev) => (prev + 1) % caseStudy5Photos.length);
  };
  const prevPhotoHC5 = () => {
    setCurrentPhotoIndexHC5((prev) => prev === 0 ? caseStudy5Photos.length - 1 : prev - 1);
  };

  // Navigation handlers for Healthcare CS6 (Eye & Dental)
  const nextPhotoHC6 = () => {
    setCurrentPhotoIndexHC6((prev) => (prev + 1) % (healthCampPhotos.length || 1));
  };
  const prevPhotoHC6 = () => {
    setCurrentPhotoIndexHC6((prev) => prev === 0 ? Math.max(healthCampPhotos.length - 1, 0) : prev - 1);
  };

  // Navigation handlers for CS5
  const nextPhotoCS5 = () => {
    setCurrentPhotoIndexCS5((prev) => (prev + 1) % caseStudy5Photos.length);
  };
  const prevPhotoCS5 = () => {
    setCurrentPhotoIndexCS5((prev) => prev === 0 ? caseStudy5Photos.length - 1 : prev - 1);
  };

  // Navigation handlers for CS6
  const nextPhotoCS6 = () => {
    setCurrentPhotoIndexCS6((prev) => (prev + 1) % wellbeingInitiativePhotos.length);
  };
  const prevPhotoCS6 = () => {
    setCurrentPhotoIndexCS6((prev) => prev === 0 ? wellbeingInitiativePhotos.length - 1 : prev - 1);
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
              <h2 className="livelihood-modal-title">Impact in Environment</h2>
              <p className="livelihood-modal-subtitle">Our initiatives promoting sustainability, reducing waste, and building environmental responsibility</p>

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

      {/* Livelihood Impact Modal (CS1 + CS4) */}
      {livelihoodImpactModalOpen && (
        <div className="livelihood-modal-overlay" onClick={closeLivelihoodImpactModal}>
          <div className="livelihood-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="livelihood-modal-close" onClick={closeLivelihoodImpactModal}>
              ×
            </button>
            <div className="livelihood-modal-body">
              <h2 className="livelihood-modal-title">Impact in Livelihood</h2>
              <p className="livelihood-modal-subtitle">Empowering communities through skill development and emergency relief initiatives</p>

              {livelihoodImpactCaseStudies.map((study) => (
                <div key={study.id} className="livelihood-case-study-card">
                  {study.id === 1 ? (
                    /* CS1 — full-width layout with overview, training modules, etc. */
                    <>
                      <div className="livelihood-cs-header">
                        <div className="livelihood-cs-icon">{study.image}</div>
                        <div className="livelihood-cs-meta">
                          <h3 className="livelihood-cs-title">{study.title}</h3>
                          <div className="livelihood-cs-info">
                            {study.location && <span>📍 {study.location}</span>}
                            {study.year && <span>📅 {study.year}</span>}
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
                                className={`livelihood-slider-image ${photoIndex === currentPhotoIndexCS1 ? 'active' : ''}`}
                              />
                            ))}
                            <button className="livelihood-slider-arrow livelihood-slider-arrow-left" onClick={prevPhotoCS1}>‹</button>
                            <button className="livelihood-slider-arrow livelihood-slider-arrow-right" onClick={nextPhotoCS1}>›</button>
                          </div>
                          <div className="livelihood-slider-indicators">
                            {study.photos.map((_, photoIndex) => (
                              <span
                                key={photoIndex}
                                className={`livelihood-indicator ${photoIndex === currentPhotoIndexCS1 ? 'active' : ''}`}
                                onClick={() => setCurrentPhotoIndexCS1(photoIndex)}
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
                        <div className="livelihood-cs-section">
                          <h4>The Challenge</h4>
                          <p>{study.challenge}</p>
                        </div>
                        {study.objectives && (
                          <div className="livelihood-cs-section">
                            <h4>Objectives</h4>
                            <ul className="livelihood-impact-list">
                              {study.objectives.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="livelihood-cs-section">
                          <h4>Our Solution</h4>
                          <p>{study.solution}</p>
                        </div>
                        {study.implementationStrategy && (
                          <div className="livelihood-cs-section">
                            <h4>Implementation Strategy</h4>
                            <ul className="livelihood-impact-list">
                              {study.implementationStrategy.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {study.trainingModules && (
                          <div className="livelihood-cs-section">
                            <h4>Training Modules</h4>
                            <div className="livelihood-training-modules">
                              <div className="livelihood-training-module">
                                <h5>Stitching &amp; Tailoring</h5>
                                <ul className="livelihood-impact-list">
                                  {study.trainingModules.stitchingAndTailoring.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="livelihood-training-module">
                                <h5>Handcraft &amp; Jewelry Making</h5>
                                <ul className="livelihood-impact-list">
                                  {study.trainingModules.handcraftAndJewelryMaking.map((item, idx) => (
                                    <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                        {study.participantEngagement && (
                          <div className="livelihood-cs-section">
                            <h4>Participant Engagement</h4>
                            <p>{study.participantEngagement}</p>
                          </div>
                        )}
                        {study.economicEnablement && (
                          <div className="livelihood-cs-section">
                            <h4>Economic Enablement</h4>
                            <ul className="livelihood-impact-list">
                              {study.economicEnablement.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="livelihood-cs-section">
                          <h4>Impact Achieved</h4>
                          <ul className="livelihood-impact-list">
                            {study.impact.map((item, idx) => (
                              <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                            ))}
                          </ul>
                        </div>
                        {study.longTermOutcomes && (
                          <div className="livelihood-cs-section">
                            <h4>Long-Term Outcomes</h4>
                            <ul className="livelihood-impact-list">
                              {study.longTermOutcomes.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {study.underDevelopment && (
                          <div className="livelihood-cs-section">
                            <h4>Under Development</h4>
                            <ul className="livelihood-impact-list">
                              {study.underDevelopment.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">🔄</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    /* CS4 — full-width layout with initiatives */
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
                                className={`livelihood-slider-image ${photoIndex === currentPhotoIndexCS4L ? 'active' : ''}`}
                              />
                            ))}
                            <button className="livelihood-slider-arrow livelihood-slider-arrow-left" onClick={prevPhotoCS4L}>‹</button>
                            <button className="livelihood-slider-arrow livelihood-slider-arrow-right" onClick={nextPhotoCS4L}>›</button>
                          </div>
                          <div className="livelihood-slider-indicators">
                            {study.photos.map((_, photoIndex) => (
                              <span
                                key={photoIndex}
                                className={`livelihood-indicator ${photoIndex === currentPhotoIndexCS4L ? 'active' : ''}`}
                                onClick={() => setCurrentPhotoIndexCS4L(photoIndex)}
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

      {/* Education Case Studies Modal (CS5) */}
      {educationModalOpen && (
        <div className="livelihood-modal-overlay" onClick={closeEducationModal}>
          <div className="livelihood-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="livelihood-modal-close" onClick={closeEducationModal}>
              ×
            </button>
            <div className="livelihood-modal-body">
              <h2 className="livelihood-modal-title">Impact in Education</h2>
              <p className="livelihood-modal-subtitle">Awareness and empowerment initiatives fostering health, safety, and resilience in rural schools and communities</p>

              {educationCaseStudies.map((study) => (
                <div key={study.id} className="livelihood-case-study-card">
                  <div className="livelihood-cs-header">
                    <div className="livelihood-cs-icon">{study.image}</div>
                    <div className="livelihood-cs-meta">
                      <h3 className="livelihood-cs-title">{study.title}</h3>
                      <div className="livelihood-cs-info">
                        {study.location && <span>📍 {study.location}</span>}
                        {study.year && <span>📅 {study.year}</span>}
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
                            className={`livelihood-slider-image ${photoIndex === (study.id === 6 ? currentPhotoIndexCS6 : currentPhotoIndexCS5) ? 'active' : ''}`}
                          />
                        ))}
                        <button className="livelihood-slider-arrow livelihood-slider-arrow-left" onClick={study.id === 6 ? prevPhotoCS6 : prevPhotoCS5}>‹</button>
                        <button className="livelihood-slider-arrow livelihood-slider-arrow-right" onClick={study.id === 6 ? nextPhotoCS6 : nextPhotoCS5}>›</button>
                      </div>
                      <div className="livelihood-slider-indicators">
                        {study.photos.map((_, photoIndex) => (
                          <span
                            key={photoIndex}
                            className={`livelihood-indicator ${photoIndex === (study.id === 6 ? currentPhotoIndexCS6 : currentPhotoIndexCS5) ? 'active' : ''}`}
                            onClick={() => study.id === 6 ? setCurrentPhotoIndexCS6(photoIndex) : setCurrentPhotoIndexCS5(photoIndex)}
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

                        {initiative.keyFocusAreas && (
                          <div className="livelihood-cs-subsection">
                            <h5>Key Focus Areas</h5>
                            <ul className="livelihood-impact-list">
                              {initiative.keyFocusAreas.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.topicsCovered && (
                          <div className="livelihood-cs-subsection">
                            <h5>Topics Covered</h5>
                            <ul className="livelihood-impact-list">
                              {initiative.topicsCovered.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.trainingHighlights && (
                          <div className="livelihood-cs-subsection">
                            <h5>Training Highlights</h5>
                            <ul className="livelihood-impact-list">
                              {initiative.trainingHighlights.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.groupFocusedApproach && (
                          <div className="livelihood-cs-subsection">
                            <h5>Group-Focused Approach</h5>
                            {initiative.groupFocusedApproach.women && (
                              <div className="livelihood-training-modules">
                                <div className="livelihood-training-module">
                                  <h5>Women</h5>
                                  <ul className="livelihood-impact-list">
                                    {initiative.groupFocusedApproach.women.map((item, idx) => (
                                      <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="livelihood-training-module">
                                  <h5>Children</h5>
                                  <ul className="livelihood-impact-list">
                                    {initiative.groupFocusedApproach.children.map((item, idx) => (
                                      <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="livelihood-training-module">
                                  <h5>Office Staff &amp; Workers</h5>
                                  <ul className="livelihood-impact-list">
                                    {initiative.groupFocusedApproach.officeStaffAndWorkers.map((item, idx) => (
                                      <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {initiative.keyActivities && (
                          <div className="livelihood-cs-subsection">
                            <h5>Key Activities</h5>
                            <ul className="livelihood-impact-list">
                              {initiative.keyActivities.map((item, idx) => (
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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Healthcare Case Studies Modal */}
      {healthcareModalOpen && (
        <div className="livelihood-modal-overlay" onClick={closeHealthcareModal}>
          <div className="livelihood-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="livelihood-modal-close" onClick={closeHealthcareModal}>
              ×
            </button>
            <div className="livelihood-modal-body">
              <h2 className="livelihood-modal-title">Impact in Healthcare</h2>
              <p className="livelihood-modal-subtitle">Health awareness, empowerment, and essential healthcare access initiatives for rural communities</p>

              {healthcareCaseStudies.map((study) => (
                <div key={study.id} className="livelihood-case-study-card">
                  <div className="livelihood-cs-header">
                    <div className="livelihood-cs-icon">{study.image}</div>
                    <div className="livelihood-cs-meta">
                      <h3 className="livelihood-cs-title">{study.title}</h3>
                      <div className="livelihood-cs-info">
                        {study.location && <span>📍 {study.location}</span>}
                        {study.year && <span>📅 {study.year}</span>}
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
                            className={`livelihood-slider-image ${photoIndex === (study.id === 6 ? currentPhotoIndexHC6 : currentPhotoIndexHC5) ? 'active' : ''}`}
                          />
                        ))}
                        <button className="livelihood-slider-arrow livelihood-slider-arrow-left" onClick={study.id === 6 ? prevPhotoHC6 : prevPhotoHC5}>‹</button>
                        <button className="livelihood-slider-arrow livelihood-slider-arrow-right" onClick={study.id === 6 ? nextPhotoHC6 : nextPhotoHC5}>›</button>
                      </div>
                      <div className="livelihood-slider-indicators">
                        {study.photos.map((_, photoIndex) => (
                          <span
                            key={photoIndex}
                            className={`livelihood-indicator ${photoIndex === (study.id === 6 ? currentPhotoIndexHC6 : currentPhotoIndexHC5) ? 'active' : ''}`}
                            onClick={() => study.id === 6 ? setCurrentPhotoIndexHC6(photoIndex) : setCurrentPhotoIndexHC5(photoIndex)}
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

                        {initiative.keyFocusAreas && (
                          <div className="livelihood-cs-subsection">
                            <h5>Key Focus Areas</h5>
                            <ul className="livelihood-impact-list">
                              {initiative.keyFocusAreas.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.topicsCovered && (
                          <div className="livelihood-cs-subsection">
                            <h5>Topics Covered</h5>
                            <ul className="livelihood-impact-list">
                              {initiative.topicsCovered.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.trainingHighlights && (
                          <div className="livelihood-cs-subsection">
                            <h5>Training Highlights</h5>
                            <ul className="livelihood-impact-list">
                              {initiative.trainingHighlights.map((item, idx) => (
                                <li key={idx}><span className="livelihood-check-icon">✓</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {initiative.servicesProvided && (
                          <div className="livelihood-cs-subsection">
                            <h5>Services Provided</h5>
                            <ul className="livelihood-impact-list">
                              {initiative.servicesProvided.map((item, idx) => (
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
                Selfless Serving Society was founded on a simple belief: basic health and hygiene knowledge can transform lives and strengthen communities. In many underserved areas, lack of awareness and limited access to essential health supplies allow preventable illnesses to disproportionately affect women, children, and the elderly.

              </p>
              <p className="section-text">
                We are a registered non-governmental, non-profit organisation with 80G, 12A, and CSR1 certifications. Through targeted outreach programs, workshops, seminars, talks, and distribution of health products, we equip communities with the knowledge and tools they need to live healthier, happier, and more dignified lives
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
              <div className="team-photo"><img src={mamtaPhoto} alt="Mamata Hulke John" /></div>
              <h3>Mamata Hulke John</h3>
              <p className="team-role">Trustee</p>
              <p className="team-bio">
                Mamata Hulke John holds degrees in Commerce, Physical Education, and Sports Management. A teacher turned entrepreneur with an interest in finance, she brings energy and a people-focused approach as a Trustee, contributing effectively to the organisation’s programs and initiatives.
              </p>
            </div>
            <div className="team-card ">
              <div className="team-photo"><img src={poojaPhoto} alt="Pooja Nirala" /></div>
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
                Bachelor of Science - Chemistry, Post Graduate Diploma in Business Administration. Self employed
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
              <div className="team-photo"><img src={apoorvaPhoto} alt="Apurva Kulkarni" /></div>
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
              <a href="#education-case-studies" className="work-card-link" onClick={openEducationModal}>Read Case Study →</a>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Promoted menstrual hygiene and wellness by distributing essential hygiene kits to adolescent girls in marginalized communities.</p>
              <a href="#healthcare-case-studies" className="work-card-link" onClick={openHealthcareModal}>Read Case Study →</a>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">🌱</div>
              <h3>Environment</h3>
              <p>Collected 31 kg of clothes under the KAPAAD Project, promoting recycling, zero-waste practices, and sustainable living.</p>
              <a href="#environment-case-studies" className="work-card-link" onClick={openLivelihoodModal}>Read Case Study →</a>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">💼</div>
              <h3>Livelihood</h3>
              <p>Created livelihood opportunities for 50+ tribal women and differently-abled artisans through handcrafted product sales and exhibitions.</p>
              <a href="#livelihood-case-studies" className="work-card-link" onClick={openLivelihoodImpactModal}>Read Case Study →</a>
            </div>
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
