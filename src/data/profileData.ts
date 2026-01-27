// Centralized data file for all profile content
// This makes it easy to update content without modifying component logic

export const personalInfo = {
  name: 'Praneet Jayant Kala',
  positioning: 'Innovation & Solutioning',
  subPositioning: 'Enterprise Modernisation',
  email: 'pj.kala333@gmail.com',
  phone: '+27 73 044 8702',
  location: 'South Africa',
  locationNote: 'Open to relocation',
  linkedIn: 'https://www.linkedin.com/in/praneet-kala/',
  github: 'https://github.com/PraneetKala13',
  resumeUrl: 'https://github.com/PraneetKala13/PraneetKala13.github.io/raw/main/public/Resume - Praneet Kala.pdf'
};

export const professionalSummary = {
  short: 'Consultant with 6+ years of experience bridging business and technology across startups and enterprise environments.',
  full: `Project manager and AI & Product Strategy professional with 6+ years of experience bridging business and technology across startups and enterprise environments. Known for bringing cross-functional teams together, aligning stakeholders, and translating complex ideas into clear, actionable plans. Skilled in workflow automation, process orchestration and data-informed decision-making, with a strong focus on turning strategy into execution systems.`
};

export const coreCapabilities = [
  { title: 'AI strategy & GenAI adoption', icon: 'Brain' },
  { title: 'Product discovery & roadmapping', icon: 'Map' },
  { title: 'Workflow & process design', icon: 'Workflow' },
  { title: 'Data analysis & decision support', icon: 'BarChart3' },
  { title: 'Stakeholder alignment & facilitation', icon: 'Users' },
  { title: 'Digital strategy & transformation', icon: 'Rocket' },
  { title: 'Program & project governance', icon: 'ClipboardCheck' }
];

export const technologyFocus = [
  'AI-enabled workflows & automation',
  'Data & analytics',
  'Digital platforms & APIs',
  'Product experimentation',
  'Agile delivery patterns'
];

export const toolsAndTech = {
  'Data & Analytics': ['Power BI', 'Supabase', 'SQL', 'Python', 'Pandas', 'NumPy'],
  'AI & Automation': ['Prompt Engineering', 'OpenAI APIs', 'n8n', 'Zapier'],
  'Product & Delivery': ['User journey mapping', 'Experimentation', 'Requirements documentation', 'Miro'],
  'Engineering & Systems': ['MATLAB', 'Simulink', 'C/C++', 'Linux'],
  'Collaboration & Tooling': ['Git', 'Jira', 'VS Code', 'Docker']
};

export const keyMetrics = [
  { value: '84%', label: 'Product Usage Increase', description: 'Improved chatbot adoption at Piab Group' },
  { value: '97%', label: 'AI Feature Interactions', description: 'Uplift in AI-enabled feature engagement' },
  { value: '25%', label: 'Customer Satisfaction', description: 'Improvement through workflow redesign' },
  { value: '20%', label: 'Efficiency Gains', description: 'Process automation improvements' }
];

export const experiences = [
  {
    title: 'Co-founder & Product / AI Strategy Lead',
    company: 'SoiQet — Early-stage AI Venture',
    location: 'Sweden',
    period: 'Sep 2024 – Present',
    description: 'Built an AI-driven venture focused on improving marketing workflows through social-media data and automation.',
    achievements: [
      'Defined product vision, value proposition and early roadmap for an AI-powered workflow platform',
      'Drove rapid experimentation through hackathons, customer interviews and prototyping to validate problem–solution fit',
      'Developed and evaluated integrations using n8n, Zapier and partner APIs to inform MVP architecture',
      'Coordinated operations and partner engagement at Nordic tech events, strengthening facilitation and stakeholder alignment'
    ],
    skills: ['Product Strategy', 'AI/ML', 'n8n', 'Zapier', 'OpenAI APIs', 'Stakeholder Management']
  },
  {
    title: 'Professional Development & Innovation Engagement',
    company: 'Independent / Self-directed',
    location: 'Sweden',
    period: 'Aug 2024 – Present',
    description: 'Continued hands-on development of AI, product and data literacy through applied experimentation and self-directed projects.',
    achievements: [
      'Participated in hackathons and innovation challenges focused on AI-enabled workflows and rapid prototyping',
      'Practised clear storytelling and presentation of technical concepts to mixed technical and non-technical audiences',
      'Engaged in regional and international technology ecosystems (Tech Arena, Nordic Tech Week)',
      'Completed formal training in Project Management and AI strategy to strengthen structured delivery and governance awareness'
    ],
    skills: ['AI Strategy', 'Hackathons', 'Public Speaking', 'Innovation', 'Networking']
  },
  {
    title: 'Intern — AI Product Strategy & Analytics',
    company: 'Piab Group',
    location: 'Stockholm, Sweden',
    period: 'Feb 2024 – Jun 2024',
    description: 'Supported enterprise transformation initiatives by interpreting stakeholder needs and translating them into prioritised requirements.',
    achievements: [
      'Analysed user journeys and product usage data, identifying <strong>84% increase</strong> in product usage and <strong>97% uplift</strong> in AI feature interactions',
      'Built Power BI dashboards to improve visibility of adoption, reliability and value metrics for senior leadership',
      'Translated insights into prioritised product requirements in collaboration with UX, IT and data teams',
      'Presented strategic recommendations that influenced AI integration plans and capability investment decisions',
      'Contributed to responsible AI policy discussions, including data quality, privacy and model risk considerations'
    ],
    skills: ['Power BI', 'Data Analytics', 'Product Strategy', 'AI/ML', 'Stakeholder Communication']
  },
  {
    title: 'Team Lead / Digital Project Manager — Enablement',
    company: 'Opti-Num Solutions',
    location: 'Johannesburg, South Africa',
    period: 'Jul 2021 – Jul 2022',
    description: 'Led cross-functional technical and commercial teams delivering digital enablement and modernisation initiatives.',
    achievements: [
      'Managed 7 team members across 3 business units, delivering 4 internal digital tools that reduced manual processing time by <strong>40%</strong>',
      'Rolled out workflow automation products cutting lead times by <strong>~30%</strong> and increasing cross-team request throughput by <strong>25%</strong>',
      'Managed customer portfolios for 12+ enterprise clients in Aerospace & Defence, Automotive and Energy sectors',
      'Facilitated stakeholder workshops to align expectations, surface adoption risks and support change management',
      'Achieved <strong>100% portfolio retention</strong> and boosted customer satisfaction by <strong>25%</strong>'
    ],
    skills: ['Team Leadership', 'Agile', 'CRM', 'Project Management', 'MATLAB', 'Simulink']
  },
  {
    title: 'Senior Consultant / Project Manager — Digital Solutions',
    company: 'Opti-Num Solutions',
    location: 'Johannesburg, South Africa',
    period: 'Jul 2020 – Jun 2021',
    description: 'Led digital modernisation projects in regulated industries, balancing innovation with compliance requirements.',
    achievements: [
      'Delivered 5 custom software platforms for defence clients (SAAB, Denel), improving data processing by <strong>20%</strong>',
      'Mapped end-to-end processes and identified automation opportunities, delivering <strong>20% efficiency gains</strong>',
      'Acted as primary liaison between business and engineering teams, ensuring clear, testable requirements',
      'Defined MVP scope and backlog; achieved <strong>90%</strong> feature delivery accuracy within client-set deadlines'
    ],
    skills: ['MATLAB', 'Simulink', 'HDL', 'Python', 'Linux', 'DevOps', 'Defence Sector']
  },
  {
    title: 'Consultant — Digital Adoption Projects',
    company: 'Opti-Num Solutions',
    location: 'Johannesburg, South Africa',
    period: 'Feb 2018 – Jun 2020',
    description: 'Evaluated digital maturity and supported phased adoption of cloud, analytics and automation initiatives.',
    achievements: [
      'Performed digital maturity assessments and benchmarking to inform transformation planning',
      'Supported IT and engineering teams with platform optimisation and enablement activities',
      'Delivered training and adoption support to reduce resistance and accelerate value realisation',
      'Built and delivered digital education solutions using MATLAB and Simulink across <strong>20+</strong> institutions'
    ],
    skills: ['Digital Transformation', 'Training', 'MATLAB', 'Simulink', 'Change Management']
  },
  {
    title: 'Application Engineer',
    company: 'Opti-Num Solutions',
    location: 'Johannesburg, South Africa',
    period: 'Jun 2016 – Jan 2018',
    description: 'Supported deployment and adoption of engineering and analytics platforms in academic and enterprise environments.',
    achievements: [
      'Advised academic institutions on aligning engineering and analytics tools with teaching and research goals',
      'Supported deployment, licensing and integration of platforms such as MATLAB and Simulink',
      'Facilitated <strong>50+</strong> technical enablement workshops and integration planning sessions',
      'Introduced low-cost hardware (Raspberry Pi, Arduino) into academic settings, fostering digital innovation'
    ],
    skills: ['MATLAB', 'Simulink', 'Raspberry Pi', 'Arduino', 'Technical Training', 'Academia']
  }
];

export const education = [
  {
    degree: 'MSc in Innovation Management and Product Development',
    school: 'KTH Royal Institute of Technology',
    location: 'Stockholm, Sweden',
    period: 'Aug 2022 – Sep 2024',
    details: 'Full-time studies including thesis and applied projects at the intersection of innovation, AI and product development',
    focusAreas: ['Foresighting methods', 'Innovation strategy', 'Portfolio management', 'Design thinking', 'Technology commercialisation'],
    highlight: 'Swedish Institute Scholar — Competitive government-funded scholarship for leadership and innovation'
  },
  {
    degree: 'BSc in Mechanical Engineering',
    school: 'University of the Witwatersrand',
    location: 'Johannesburg, South Africa',
    period: 'Feb 2010 – Apr 2016',
    details: 'Bachelor of Science degree in Mechanical Engineering with focus on systems and control engineering',
    focusAreas: ['Systems Engineering', 'Control Systems', 'Dynamics', 'Thermodynamics'],
    highlight: null
  }
];

export const certifications = [
  {
    name: 'Agentic AI and AI Agents for Leaders',
    issuer: 'Vanderbilt University',
    year: '2025'
  },
  {
    name: 'Prompt Engineering for ChatGPT',
    issuer: 'Vanderbilt University',
    year: '2025'
  },
  {
    name: 'Project Management Specialisation',
    issuer: 'Google',
    year: '2025',
    note: '3 courses'
  }
];

export const projects = [
  {
    title: 'SoiQet — AI Marketing Workflow Platform',
    description: 'Co-founded and led product strategy for an AI-driven platform improving marketing workflows through social-media data and automation. Designed and tested end-to-end workflows and integrations, moving from concept to working prototype.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['n8n', 'Zapier', 'OpenAI APIs', 'Supabase', 'React'],
    liveUrl: 'https://soiqet.lovable.app/',
    githubUrl: '#',
    status: 'In Development',
    period: 'Aug 2024 – Present',
    category: 'AI / Product',
    featured: true,
    icon: 'Rocket'
  },
  {
    title: 'Personal Financial Analyser',
    description: 'Building a comprehensive financial analysis tool that processes personal income and expense data to provide insights and forecasts. Implementing AI models to predict spending habits and optimize savings strategies.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    technologies: ['Python', 'Git', 'Shiny', 'AI/ML', 'Data Analytics'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PraneetKala13',
    status: 'In Development',
    period: 'Oct 2024 – Current',
    category: 'Finance / Personal',
    featured: true,
    icon: 'TrendingUp'
  },
  {
    title: 'Autonomous Braking System',
    description: 'Led multi-phase project delivery in collaboration with CSIR, coordinating engineers, researchers and client stakeholders. Defined project roadmaps and facilitated agile delivery for mining and automotive applications.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    technologies: ['MATLAB', 'Simulink', 'Agile', 'Systems Engineering'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Completed',
    period: 'Aug 2021 – Aug 2022',
    category: 'Mining / Automotive',
    featured: false,
    icon: 'Car'
  },
  {
    title: 'AI Chatbot Analysis at Piab Group',
    description: 'Conducted comprehensive analysis of AI chatbot adoption trends, achieving 84% increase in usage rates and 97% growth in message interactions. Implemented real-time analytics reporting with Power BI.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
    technologies: ['Power BI', 'Python', 'Data Analytics', 'Statistical Analysis'],
    liveUrl: 'https://kth.diva-portal.org/smash/get/diva2:1904850/FULLTEXT01',
    githubUrl: '#',
    status: 'Completed',
    period: 'Feb 2024 – Aug 2024',
    category: 'Data Analytics / AI',
    featured: false,
    icon: 'Brain'
  },
  {
    title: 'Custom SoC Reference Design',
    description: 'Advanced engineering project for Radar ESM at Hensoldt, focusing on signal processing and data visualizations. Developed custom System-on-Chip solutions for aerospace and defence applications.',
    image: 'https://se.mathworks.com/solutions/fpga-asic-soc-development/rfsoc/_jcr_content/mainParsys/band_copy_copy_10388/mainParsys/column_0_copy_copy/2/image_copy_copy.adapt.full.medium.jpg/1739777690455.jpg',
    technologies: ['Simulink', 'HDL Coder', 'Xilinx RFSoC', 'Signal Processing'],
    liveUrl: 'https://www.optinum.co.za/case-studies/opening-title',
    githubUrl: '#',
    status: 'Completed',
    period: 'Feb 2021 – Jul 2021',
    category: 'Aerospace & Defence',
    featured: false,
    icon: 'Cpu'
  },
  {
    title: 'Digital Enablement & Adoption Programs',
    description: 'Delivered multiple digital adoption initiatives across universities and enterprise organisations. Designed enablement and rollout strategies to reduce resistance and support sustained adoption.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    technologies: ['MATLAB', 'Simulink', 'Training', 'Change Management'],
    liveUrl: 'https://www.optinum.co.za/',
    githubUrl: '#',
    status: 'Completed',
    period: '2018 – 2022',
    category: 'Enterprise & Education',
    featured: false,
    icon: 'GraduationCap'
  }
];

export const publication = {
  title: 'Nonlinear control of quadrotor UAV using Takagi-Sugeno fuzzy logic technique',
  authors: 'Jimoh O. Pedro; Praneet J. Kala',
  publisher: 'IEEE',
  conference: 'IEEE 2015 10th Asian Control Conference (ASCC)',
  date: '10 September 2015',
  url: 'https://ieeexplore.ieee.org/document/7244739'
};

export const interests = [
  { title: 'Running in Nordic winters', icon: 'PersonStanding' },
  { title: 'Hackathons & rapid prototyping', icon: 'Zap' },
  { title: 'Mentoring & facilitation', icon: 'Users' },
  { title: 'Designing digital workflows', icon: 'Workflow' }
];

export const socialLinks = [
  { platform: 'GitHub', url: 'https://github.com/PraneetKala13', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/praneet-kala/', icon: 'Linkedin' }
];
