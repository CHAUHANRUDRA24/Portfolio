export interface ProjectLink {
  url: string;
  label: string;
  icon: string;
}

export interface PressLink {
  label: string;
  url: string;
}

export interface ProjectResult {
  value: string;
  label: string;
  note: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
}

export interface ProjectData {
  id: string;
  num: string;
  title: string;
  category: string;
  tech: string;
  href: string; // The URL used in ProjectsSection
  img1: string;
  img2: string;
  img3: string;
  hasStudy: boolean;
  
  // Case Study Details
  description?: string;
  problem?: string;
  solution?: string;
  duration?: string;
  teamSize?: string;
  tools?: string;
  heroCaption?: string;
  results?: ProjectResult[];
  gallery?: GalleryItem[];
  links?: ProjectLink[];
  pressLinks?: PressLink[];
}

export const projectsList: ProjectData[] = [
  {
    id: 'crowdflow-ai',
    num: '01',
    title: 'CrowdFlow AI',
    category: 'AI & Cloud Web App',
    tech: 'React (Vite) · Firebase · Google Cloud Run · AI/ML · REST APIs',
    href: 'project.html?id=crowdflow-ai',
    img1: '/crowdflow1.png',
    img2: '/crowdflow2.png',
    img3: '/crowdflow3.png',
    hasStudy: true,
    description: 'An AI-powered smart crowd analytics and flow prediction system running serverless on Google Cloud Run and integrated with Firebase for real-time dashboards.',
    problem:
      'Traditional crowd monitoring at busy event locations or transportation hubs is highly manual, labor-intensive, and slow to react. Event coordinators and city planners lack visual analytics to detect overcrowding, calculate flow velocity, or predict bottleneck areas, presenting significant safety hazards and logistics inefficiencies.',
    solution:
      'We built CrowdFlow AI, a comprehensive crowd analytics platform. By utilizing state-of-the-art object detection algorithms deployed in a serverless Google Cloud Run environment, the system processes camera feeds to count people in real time. It stores flow statistics in Firebase, offering live updates to a React dashboard. Key modules include congestion heatmaps, historical flow forecasts, and automated density alerts.',
    duration: 'Dec 2025 – Feb 2026',
    teamSize: 'Collaborative project',
    tools: 'React (Vite), Firebase, Google Cloud Run, TensorFlow, OpenCV, FastAPI',
    heroCaption: 'Real-time analytics for modern event management: serverless processing, heatmaps, and bottleneck warning signals.',
    results: [
      {
        value: '98%',
        label: 'Accuracy',
        note: 'Crowd detection accuracy'
      },
      {
        value: 'Sub-sec',
        label: 'Latency',
        note: 'Real-time data synchronization'
      },
      {
        value: '10k+',
        label: 'Throughput',
        note: 'Processed requests per second'
      }
    ],
    gallery: [
      {
        url: '/crowdflow1.png',
        caption: 'Main analytics dashboard view showing flow rates'
      },
      {
        url: '/crowdflow2.png',
        caption: 'Real-time density heatmap visualization'
      },
      {
        url: '/crowdflow3.png',
        caption: 'System architecture and cloud deployment design'
      }
    ],
    links: [
      {
        url: 'https://github.com/CHAUHANRUDRA24/Portfolio',
        label: 'View Repository',
        icon: 'github'
      }
    ]
  },
  {
    id: 'smart-safety-helmet',
    num: '02',
    title: 'Smart Safety Helmet',
    category: 'Embedded & Hardware System',
    tech: 'Analog Electronics · Logic Gates · Infrared & LDR Sensors · Switching Circuits',
    href: 'project.html?id=smart-safety-helmet',
    img1: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/screenshot-1.jpg',
    img2: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/img-2733.jpg',
    img3: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/hero.png',
    hasStudy: true,
    description: 'A fully hardware-based safety helmet for night-time and emergency linemen work featuring automatic lighting, distance-based beam control, humidity alerts, and an isolated SOS power path for accidents.',
    problem:
      'Electrical linemen often work at <strong>night</strong> or during <strong>emergency breakdowns</strong>, where visibility is poor and conditions can turn unsafe fast. Holding a torch is not practical, fixed beams can blind or waste power, and high humidity increases risk around live electrical work. In these environments, <strong>microcontroller-based systems can be less desirable</strong> due to EMI/noise concerns and reliability expectations, so we designed a <strong>logic-only</strong> solution.',
    solution:
      'We built a <strong>logic-based circuit system (no microcontroller)</strong> using IR + LDR + humidity sensing and transistor switching. Key modules include:<br/><br/>' +
      '<strong>• Automatic ON/OFF lighting</strong> using an LDR for hands-free operation.<br/>' +
      '<strong>• Distance-based high/low beam</strong> using IR sensing to switch beam levels automatically.<br/>' +
      '<strong>• Humidity alert</strong> (amber indication) for unsafe working conditions.<br/>' +
      '<strong>• SOS safety mode</strong> with a dedicated button that isolates the main circuit and switches to backup power, designed to keep working even in short-circuit scenarios.<br/>' +
      '<strong>• Power system</strong> with battery level indication and TP4056-based charging for stable charging.<br/>' +
      '<strong>• Safety build</strong> with an internal foam layer and strapping to prevent head contact and secure hardware.<br/><br/>' +
      '<strong>Team:</strong> Prince Tagadiya (Lead), Khushi Belani (Co-Lead), Sumona Saha, Khushi Desai, Jenil Jivrajani, Rudra Chauhan, Nisarg Patel, Diya Ankleshvaria.<br/>' +
      '<strong>Mentor:</strong> Dr. Geetali Saha.',
    duration: 'Oct 2024 – Jan 2025',
    teamSize: '8-member team (Team Lead & Circuit Designer)',
    tools: 'IR, LDR, Humidity, Logic ICs, Transistor Switching, TP4056',
    heroCaption: 'Logic-first, safety-first: hands-free beam control + SOS with isolated backup',
    results: [
      {
        value: '#1',
        label: 'TECHNOVATION',
        note: 'State Level Winner (2026)'
      },
      {
        value: 'Finalist',
        label: 'SSIP 6.0',
        note: 'Only GCET team selected (Vikas Saptah Hackathon 2025)'
      },
      {
        value: 'No MCU',
        label: 'System',
        note: 'Fully hardware-driven reliability'
      }
    ],
    gallery: [
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/screenshot-1.jpg',
        caption: 'Helmet prototype with headlamp switched ON'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/img-2733.jpg',
        caption: 'Breadboard test setup (sensors + wiring + indicators)'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/hero.png',
        caption: 'Winner trophy + certificate snapshot'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/instagram.webp',
        caption: 'Award moment with trophy'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/linkedin-post.jpeg',
        caption: 'Award moment with certificate'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/shastri-maidan.jpeg',
        caption: 'Public display/billboard showing TECHNOVATION highlight'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/team-1.jpeg',
        caption: 'Social media coverage card (Charotar No Avaj)'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/photos/team-2.jpeg',
        caption: 'Gujarati newspaper coverage screenshot'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/press/naya-padkar-2026-01-29.jpeg',
        caption: 'Press clipping (Naya Padkar, 29 Jan 2026)'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/press/nav-gujarat-samay-2026-01-30.jpeg',
        caption: 'Press clipping (Nav Gujarat Samay, 30 Jan 2026)'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/press/divya-samachar-2026-01-30.jpeg',
        caption: 'Press clipping (Divya Samachar, 30 Jan 2026)'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/press/divya-bhaskar-1.png',
        caption: 'Press clipping (Divya Bhaskar, page 1)'
      },
      {
        url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/press/divya-bhaskar-2.png',
        caption: 'Press clipping (Divya Bhaskar, page 2)'
      }
    ],
    links: [
      {
        url: 'https://www.linkedin.com/posts/prince-tagadiya_technovation2026-engineering-hardwareproject-activity-7422655004894961664-aYVA',
        label: 'Watch Demo',
        icon: 'play'
      },
      {
        url: 'https://www.linkedin.com/posts/prince-tagadiya_hackathon-ssip-gcet-activity-7394730314784210944-gqZQ',
        label: 'Hackathon Finals',
        icon: 'award'
      }
    ],
    pressLinks: [
      { label: 'Charotar No Avaj (Instagram)', url: 'https://lnkd.in/dgrZ75_8' },
      { label: 'Sardar Patel University (Instagram)', url: 'https://lnkd.in/dTQ9aN7d' },
      { label: 'Divya Bhaskar (News)', url: 'https://lnkd.in/d669HgYR' },
      { label: 'SPU + Divya Bhaskar (PDF)', url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/docs/spu-divya-bhaskar.pdf' },
      { label: 'SPU Technovation Jan 2026 (PDF)', url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/docs/spu-technovation-jan-2026.pdf' },
      { label: 'Winner Certificate (PDF)', url: 'https://princes-studio.netlify.app/assets/projects/smart-helmet/docs/certificate.pdf' }
    ]
  },
  {
    id: 'dynamic-footlamp',
    num: '03',
    title: 'Dynamic Footlamp',
    category: 'Hardware & Automation',
    tech: 'RCWL Motion Sensor · Ambient Light Sensing · Fade Transitions · Power Optimization',
    href: 'project.html?id=dynamic-footlamp',
    img1: '/assets/projects/dynamic-footlamp/photos/auto-mode-demo.png',
    img2: '/assets/projects/dynamic-footlamp/photos/final-foot-light-diagram.pdf.png',
    img3: '/assets/projects/dynamic-footlamp/photos/footlamp-hardware.png',
    hasStudy: true,
    description: 'A no-microcontroller automatic footlamp that uses a motion sensor and an LDR to keep the light off in daytime, dim at night, and fully bright when someone walks nearby.',
    problem:
      'Night-time footlights are often either <strong>always ON</strong> and waste power, or completely manual and easy to forget. The goal of this project was to make a small path/foot lamp that only gives light when it is actually useful: <strong>OFF in daytime</strong>, <strong>dim in darkness</strong>, and <strong>bright when movement is detected</strong>.',
    solution:
      'This project is a <strong>simple analog automatic footlamp</strong> built without any microcontroller. It combines a <strong>RCWL-0516 microwave motion sensor</strong>, an <strong>LDR</strong>, and a <strong>BC547 transistor</strong> to control a 12V COB LED based on real conditions.<br/><br/>' +
      '<strong>Three operating modes</strong>:<br/>' +
      '<strong>• ON mode</strong>: lamp stays fully ON all the time.<br/>' +
      '<strong>• OFF mode</strong>: lamp stays completely OFF.<br/>' +
      '<strong>• AUTO mode</strong>: smart behavior based on light + motion.<br/><br/>' +
      '<strong>AUTO mode logic</strong>:<br/>' +
      '<strong>• Daytime / bright environment</strong> -> lamp remains OFF.<br/>' +
      '<strong>• Dark + no motion</strong> -> lamp glows dim to keep the path visible.<br/>' +
      '<strong>• Dark + motion detected</strong> -> lamp switches to full brightness for safe walking.<br/><br/>' +
      '<strong>Core hardware from the notes</strong>: RCWL-0516 sensor, LDR, 12V COB LED, BC547 transistor, 10k base resistor, 1N4007 diode, and a 3-way ON/AUTO/OFF mode switch.<br/><br/>' +
      '<strong>Why it works well</strong>: the LDR decides whether the environment is dark, the RCWL sensor detects movement, and the transistor combines those signals to control the LED brightness smoothly without code, delay, or digital logic.',
    duration: 'Prototype build',
    teamSize: 'Student project',
    tools: 'RCWL-0516, LDR, BC547, COB LED, 12V supply, analog control',
    heroCaption: 'A small smart footlight: dim in darkness, bright on motion, off in daylight',
    results: [
      {
        value: '3 Modes',
        label: 'Control',
        note: 'ON / AUTO / OFF'
      },
      {
        value: 'Analog',
        label: 'Logic',
        note: 'No MCU or coding'
      },
      {
        value: 'Dim+Bright',
        label: 'Behavior',
        note: 'Darkness and motion aware'
      }
    ],
    gallery: [
      {
        url: '/assets/projects/dynamic-footlamp/photos/auto-mode-demo.png',
        caption: 'Prototype demo showing AUTO mode response during darkness simulation'
      },
      {
        url: '/assets/projects/dynamic-footlamp/photos/final-foot-light-diagram.pdf.png',
        caption: 'Breadboard/circuit diagram preview generated from the final footlamp design PDF'
      },
      {
        url: '/assets/projects/dynamic-footlamp/photos/footlamp-hardware.png',
        caption: 'Cozy dark workshop prototype test setup with warm glowing LED strip'
      }
    ],
    links: [
      {
        url: '/assets/projects/dynamic-footlamp/docs/final-foot-light-diagram.pdf',
        label: 'Circuit Diagram (PDF)',
        icon: 'award'
      },
      {
        url: '/assets/projects/dynamic-footlamp/docs/dynamic-footlamp.docx',
        label: 'Project Notes (DOCX)',
        icon: 'award'
      }
    ]
  },
  {
    id: 'agromind-ai',
    num: '04',
    title: 'AgroMind AI',
    category: 'AI & Smart Agriculture Platform',
    tech: 'React · Firebase · AI/ML · IoT Integration · Cloud',
    href: 'project.html?id=agromind-ai',
    img1: '/agromind1.jpg',
    img2: '/agromind2.png',
    img3: '/agromind3.png',
    hasStudy: true,
    description: 'An AI-powered smart agriculture platform built to help farmers make better, faster, and data-driven decisions using modern technology.',
    problem:
      'Traditional farming operations struggle with poor resource utilization, unoptimized water usage, and lack of real-time diagnostics. Farmers lack precise tools to detect crop diseases early, gauge local weather impact, or monitor soil conditions remotely, leading to crop losses and inefficiencies.',
    solution:
      'AgroMind AI combines Artificial Intelligence with smart farming technologies to improve productivity and decision-making for farmers. Key features include:<br/><br/>' +
      '<strong>• AI-based crop & farming assistance</strong> to recommend optimal crop varieties and fertilizer balance.<br/>' +
      '<strong>• Plant disease detection</strong> using ML image analysis to identify diseases from pictures instantly.<br/>' +
      '<strong>• Smart irrigation insights</strong> to optimize water management and schedule watering efficiently.<br/>' +
      '<strong>• Weather-based guides</strong> to offer dynamic recommendations aligned with live forecasts.<br/>' +
      '<strong>• Real-time monitoring dashboard</strong> displaying sensor telemetry for air and soil conditions.<br/>' +
      '<strong>• AI chatbot</strong> for immediate conversational guidance and farmer support.',
    duration: 'Launched 2026',
    teamSize: 'Solo project',
    tools: 'React, Firebase, AI/ML, IoT Integration, Tailwind CSS, Cloud Deployment',
    heroCaption: 'Artificial Intelligence meets smart agriculture: automated disease detection, smart irrigation, and live dashboards.',
    results: [
      {
        value: 'AI/ML',
        label: 'Disease Det.',
        note: 'Image-based plant disease analysis'
      },
      {
        value: 'Smart',
        label: 'Irrigation',
        note: 'Water management and scheduling insights'
      },
      {
        value: 'Chatbot',
        label: 'AI Guide',
        note: '24/7 conversational advice for farmers'
      }
    ],
    gallery: [
      {
        url: '/agromind1.jpg',
        caption: 'AI-powered crop analysis and real-time dashboard'
      },
      {
        url: '/agromind2.png',
        caption: 'Plant disease detection and image upload interface'
      },
      {
        url: '/agromind3.png',
        caption: 'Smart irrigation and telemetry analysis charts'
      }
    ],
    links: [
      {
        url: 'https://lnkd.in/gk_cjmSg',
        label: 'Live Demo',
        icon: 'award'
      }
    ]
  },
  {
    id: 'votepath-ai',
    num: '05',
    title: 'VotePath AI',
    category: 'AI & Civic Tech Web App',
    tech: 'React (Vite) · Google Cloud Run · AI Assistant · Python',
    href: 'project.html?id=votepath-ai',
    img1: '/votepath1.png',
    img2: '/votepath2.png',
    img3: '/votepath_hero.png',
    hasStudy: true,
    description: 'An AI-powered assistant designed to simplify and improve the way people understand the election process, making voting accessible, transparent, and easy to navigate.',
    problem:
      'Understanding the election process, voter registration requirements, and deadlines can be confusing, especially for first-time voters. Official portals are often text-heavy, making it difficult for citizens to navigate eligibility rules, track timelines, or get direct answers to real-time queries about voting.',
    solution:
      'We developed VotePath AI (VoteGuideAI) as a personalized election journey assistant. Developed for the <strong>Build with AI – Solution Challenge India</strong> (organized by Hack2skill with Google for Developers), the platform simplifies electoral participation through:<br/><br/>' +
      '<strong>• Step-by-step voting guidance</strong> covering the entire election journey based on the user\'s profile.<br/>' +
      '<strong>• AI-powered assistant</strong> for answering real-time voter queries about processes and requirements.<br/>' +
      '<strong>• Smart Checklist & Timelines</strong> displaying clear election deadlines and progress tracking.<br/>' +
      '<strong>• Eligibility verification</strong> assisting users in checking voter requirements.<br/>' +
      '<strong>• Scalable deployment</strong> utilizing Google Cloud Run for efficient serverless hosting.',
    duration: 'Developed 2026',
    teamSize: 'Solution Challenge Hackathon Build',
    tools: 'React + Vite, Google Cloud Run, Gemini API, Firebase',
    heroCaption: 'A personalized election journey: step-by-step guides, AI chat queries, and checklist tools for first-time voters.',
    results: [
      {
        value: 'AI Chat',
        label: 'Assistance',
        note: 'Real-time query answering'
      },
      {
        value: 'Cloud Run',
        label: 'Deployment',
        note: 'Scalable serverless hosting'
      },
      {
        value: 'Step-by-Step',
        label: 'Guide',
        note: 'Electoral timelines and checklists'
      }
    ],
    gallery: [
      {
        url: '/votepath1.png',
        caption: 'Personalized election journey landing page interface'
      },
      {
        url: '/votepath2.png',
        caption: 'Secure Sign-in page for VotePath AI portal'
      },
      {
        url: '/votepath3.png',
        caption: 'Interactive student/voter dashboard tracking election steps'
      }
    ],
    links: [
      {
        url: 'https://lnkd.in/dxnHd6nh',
        label: 'Live Demo',
        icon: 'award'
      },
      {
        url: 'https://github.com/CHAUHANRUDRA24/Portfolio',
        label: 'View Repository',
        icon: 'github'
      }
    ]
  },
  {
    id: 'agri-titan-x6',
    num: '06',
    title: 'Agri-Titan X6',
    category: 'Autonomous Systems & AgriTech',
    tech: 'Hexacopter Hardware · Custom Ground Control Software (GCS) · Mobile Monitoring App · SSIP 2.0',
    href: 'project.html?id=agri-titan-x6',
    img1: '/assets/projects/agri-titan-x6/photos/image1.png',
    img2: '/assets/projects/agri-titan-x6/photos/image2.png',
    img3: '/assets/projects/agri-titan-x6/photos/image3.png',
    hasStudy: true,
    description: 'A smart modular precision agriculture hexacopter with custom ground control software and a farmer-friendly mobile application.',
    problem:
      'Traditional agriculture drones are highly complex to operate. Farmers are required to learn technical mission-planning software and manage complex controllers, making the technology impractical and inaccessible for day-to-day farming tasks.',
    solution:
      'We developed Agri-Titan X6, a modular precision agriculture hexacopter funded under SSIP 2.0. Along with the custom drone hardware, we built a farmer-focused software ecosystem featuring a simplified "8 Button UI" mobile application. The complex flight algorithms and setups are handled in the background, allowing farmers to control payload releases (such as water pump spraying) with simple button taps.<br/><br/>' +
      '<strong>Key Features:</strong><br/>' +
      '• <strong>1 KG payload capacity</strong> for targeted pesticide/water spraying.<br/>' +
      '• <strong>Water pump control</strong> directly managed from the ground station.<br/>' +
      '• <strong>Custom Ground Control Software (GCS)</strong> for real-time telemetry.<br/>' +
      '• <strong>Farmer-friendly mobile app</strong> featuring a simple 8-button UI.<br/>' +
      '• <strong>Stable autonomous flight testing</strong>.<br/><br/>' +
      '<strong>Team:</strong> Rudra Chauhan, Nisarg Patel, Khushi Belani, with senior guidance from Mohammad Ali Saiyed.<br/>' +
      '<strong>Mentor:</strong> Dr. Geetali Saha.',
    duration: 'May 2026',
    teamSize: 'Team of 3 (SSIP 2.0 Funded Project)',
    tools: 'Hexacopter Hardware, Ground Control Software (GCS), Android/Mobile App, Custom APIs',
    heroCaption: 'Smart modular precision agriculture hexacopter funded under SSIP 2.0.',
    results: [
      {
        value: '₹44,000',
        label: 'Funding',
        note: 'SSIP 2.0 Grant Winner'
      },
      {
        value: '1 KG',
        label: 'Payload',
        note: 'Tested stable water pump spraying'
      },
      {
        value: '8 Buttons',
        label: 'Mobile UI',
        note: 'Simplified farmer-friendly app'
      }
    ],
    gallery: [
      {
        url: '/assets/projects/agri-titan-x6/photos/image1.png',
        caption: 'Agri-Titan X6 drone prototype ready for flight testing'
      },
      {
        url: '/assets/projects/agri-titan-x6/photos/image2.png',
        caption: 'Team presenting Agri-Titan X6 Hexacopter'
      },
      {
        url: '/assets/projects/agri-titan-x6/photos/image3.png',
        caption: 'Ground Control Software dashboard displaying live telemetry'
      },
      {
        url: '/assets/projects/agri-titan-x6/photos/image4.png',
        caption: 'Flight testing field setup and calibrations'
      },
      {
        url: '/assets/projects/agri-titan-x6/photos/image5.png',
        caption: 'Drone electronics payload module assembly'
      },
      {
        url: '/assets/projects/agri-titan-x6/photos/image6.png',
        caption: 'SSIP 2.0 funding evaluation and presentation card'
      }
    ],
    links: [
      {
        url: 'https://www.linkedin.com/posts/rudra-chauhan24_activity-7465416465249366016-aptJ',
        label: 'LinkedIn Post',
        icon: 'award'
      }
    ]
  },
  {
    id: 'smart-water-grid',
    num: '07',
    title: 'Smart Water Grid',
    category: 'IoT & Smart Cities Innovation',
    tech: 'IoT Sensors · Tamper Switches · ESP32 · Firebase',
    href: 'project.html?id=smart-water-grid',
    img1: 'https://media.licdn.com/dms/image/v2/D4D22AQE5u02tu5QtQw/feedshare-shrink_800/B4DZ5JJlgNJ8Ac-/0/1779343710663?e=2147483647&v=beta&t=viB_mBBukmDtlhhQbd2yb10fX13GhqhVp4WuMNyy6r4',
    img2: 'https://media.licdn.com/dms/image/v2/D4D22AQHvpoFaJ1KCOQ/feedshare-shrink_800/B4DZ5JJm26H4Ac-/0/1779343716435?e=2147483647&v=beta&t=dgM-gHRPZgsuTQ6mMVVUIXC9_2ZC3KWolop22C5GbY4',
    img3: 'https://media.licdn.com/dms/image/v2/D4D22AQEdg0Cth6fuQw/feedshare-shrink_800/B4DZ5JJkuHJUAc-/0/1779343707320?e=2147483647&v=beta&t=dAUCw8_oMZ_6HCEba2mW5_AON9IM7SqEEChJT5txibg',
    hasStudy: true,
    description: 'An IoT-based smart water management system designed to detect water leakage, monitor theft activities, and help municipal authorities pinpoint the exact locations of illegal usage.',
    problem:
      'Municipalities and smart cities lose massive volumes of water due to undetected underground pipeline leakages and illegal water theft. Traditional water meters are easily tampered with, and authorities lack real-time localized data to identify which connection or house is causing leakages or taking water illegally.',
    solution:
      'We engineered a scalable, low-cost Smart Water Grid prototype. Securing <strong>Runner-Up</strong> at the National level <strong>Sushila Devi Bansal College (BGI) Indore Hackathon 2026</strong> (Vision 2047: Viksit Bharat), the solution implements:<br/><br/>' +
      '<strong>• Real-time leakage detection</strong> to instantly trace pipeline drops and prevent water wastage.<br/>' +
      '<strong>• Smart water theft monitoring</strong> identifying the exact house or connection involved in illegal siphoning.<br/>' +
      '<strong>• Smart tamper detection system</strong> which triggers an instant alert to municipal authorities if the water meter is damaged, opened, or removed.<br/>' +
      '<strong>• Emergency SOS water access</strong> supporting citizens with emergency water paths during critical scenarios.<br/>' +
      '<strong>• Offline cloud synchronization</strong> caching data locally during network outages and syncing once connection resumes.<br/>' +
      '<strong>• Live monitoring dashboard</strong> aggregating real-time flow diagnostics and anomaly alerts.<br/><br/>' +
      '<strong>Team Creato5:</strong> Prince Tagadiya, Nisarg Patel, Rudra Chauhan, Vrushti Budh.<br/>' +
      '<strong>Mentor:</strong> Dr. Geetali Saha, Kavindra Jain, Dr. Hitesh Shah.',
    duration: 'May 2026',
    teamSize: 'Runner-Up – BGI Indore Hackathon 2026 (Team of 4)',
    tools: 'IoT Flow Sensors, Tamper Switches, ESP32, Firebase Real-time DB, Offline Cache, React Dashboard',
    heroCaption: 'IoT-enabled smart grid: pinpointing water theft and pipeline leakages while providing emergency access.',
    results: [
      {
        value: 'Runner-Up',
        label: 'National BGI',
        note: 'Runner-Up at BGI Indore Hackathon 2026'
      },
      {
        value: 'Real-time',
        label: 'Detection',
        note: 'Instant leakage & tamper alerts'
      },
      {
        value: 'Offline',
        label: 'Sync',
        note: 'Automatic data upload after outages'
      }
    ],
    gallery: [
      {
        url: 'https://media.licdn.com/dms/image/v2/D4D22AQE5u02tu5QtQw/feedshare-shrink_800/B4DZ5JJlgNJ8Ac-/0/1779343710663?e=2147483647&v=beta&t=viB_mBBukmDtlhhQbd2yb10fX13GhqhVp4WuMNyy6r4',
        caption: 'Team Creato5 displaying the national Runner-Up award certificate and trophy'
      },
      {
        url: 'https://media.licdn.com/dms/image/v2/D4D22AQHvpoFaJ1KCOQ/feedshare-shrink_800/B4DZ5JJm26H4Ac-/0/1779343716435?e=2147483647&v=beta&t=dgM-gHRPZgsuTQ6mMVVUIXC9_2ZC3KWolop22C5GbY4',
        caption: 'Hackathon exhibition booth displaying the functional smart water prototype'
      },
      {
        url: 'https://media.licdn.com/dms/image/v2/D4D22AQEdg0Cth6fuQw/feedshare-shrink_800/B4DZ5JJkuHJUAc-/0/1779343707320?e=2147483647&v=beta&t=dAUCw8_oMZ_6HCEba2mW5_AON9IM7SqEEChJT5txibg',
        caption: 'Close-up view of the IoT water flow sensor and ESP32 board integration'
      },
      {
        url: 'https://media.licdn.com/dms/image/v2/D4D22AQHAV4ho2njkZQ/feedshare-image-high-res/B4DZ5JJmmKIUAU-/0/1779343715291?e=2147483647&v=beta&t=uN2nZghq5poS7fmyGAUyIlhpM4zLT0H3uxuEV04hBz8',
        caption: 'Indore Hackathon award ceremony presentation snapshot'
      }
    ],
    links: [
      {
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7463108597128835072/',
        label: 'LinkedIn Post',
        icon: 'award'
      },
      {
        url: 'https://github.com/CHAUHANRUDRA24/Portfolio',
        label: 'View Repository',
        icon: 'github'
      }
    ]
  }
];
