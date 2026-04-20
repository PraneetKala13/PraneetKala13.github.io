// Centralized data file for all profile content
// This makes it easy to update content without modifying component logic

export const personalInfo = {
  name: 'Praneet Jayant Kala',
  positioning: 'Technical Project Manager',
  subPositioning: 'AI & Digital Transformation Delivery',
  email: 'pj.kala333@gmail.com',
  phone: '+27 73 044 8702',
  location: 'South Africa',
  locationNote: 'Open to relocation',
  linkedIn: 'https://www.linkedin.com/in/praneet-kala/',
  github: 'https://github.com/PraneetKala13',
  instagram: 'https://www.instagram.com/praneetkala333/',
  facebook: 'https://www.facebook.com/profile.php?id=61586796659838',
  resumeUrl: '/Resume_of_Praneet_Kala.pdf'
};

export const professionalSummary = {
  short: 'Technical Project Manager with 6+ years of experience delivering enterprise IT and digital transformation initiatives.',
  full: `Technical Project Manager with 6+ years of experience delivering enterprise IT and digital transformation initiatives across aerospace, defence, automotive and higher education sectors. Managed a multi-project portfolio including a flagship R800k enterprise deployment, leading cross-functional teams of up to 7 members while overseeing contracts, budgets and governance controls. Delivered measurable impact including a 5.7% productivity uplift in AI-enabled initiatives and 15–25% revenue growth within strategic accounts. Experienced across the full project lifecycle including initiation, scope definition, WBS development, schedule planning, execution, risk control and structured delivery governance.`
};

export const coreCapabilities = [
  { title: 'AI strategy & GenAI adoption', icon: 'Brain' },
  { title: 'Product discovery & roadmapping', icon: 'Map' },
  { title: 'API integration & platform connectivity', icon: 'Link2' },
  { title: 'Rapid prototyping & MVP execution', icon: 'Zap' },
  { title: 'Technical problem-solving & debugging', icon: 'Wrench' },
  { title: 'Stakeholder alignment & facilitation', icon: 'Users' },
  { title: 'Program & project governance', icon: 'ClipboardCheck' },
];

export const technologyFocus = [
  'AI-enabled workflows & automation',
  'Data & analytics',
  'Digital platforms & APIs',
  'Product experimentation',
  'Agile delivery patterns'
];

// AI & Data Systems — foundational technologies for building AI-enabled systems
export const aiDataSystems = {
  'AI & APIs': ['Prompt Engineering', 'OpenAI APIs', 'AI-assisted Implementation'],
  'Integration & Auth': ['API Integration', 'OAuth & Auth Flows', 'API Testing', 'Webhook Setup'],
  'Data & Backend': ['Python', 'SQL', 'Supabase', 'JSON & Data Structuring'],
  'Infrastructure': ['Azure', 'Docker', 'Linux'],
  'Engineering': ['MATLAB', 'Simulink', 'C/C++'],
};

// Delivery & Product Execution — tools, workflows and platforms that support execution
export const deliveryTools = {
  'Automation & Build': ['n8n', 'Zapier', 'Lovable', 'Rapid Prototyping'],
  'Data & Analytics': ['Power BI', 'Pandas', 'NumPy'],
  'Product Execution': ['Feature Prioritisation', 'MVP Scoping', 'Competitor Analysis', 'Experimentation'],
  'Technical Docs': ['Requirements Documentation', 'BRD Writing', 'System Flow Mapping'],
  'Collaboration & PM': ['Miro', 'Jira', 'Notion', 'Slack', 'MS Project'],
  'Dev & Version Control': ['Git', 'VS Code', 'Integration Debugging'],
};

export const keyMetrics = [
  { value: 'R800k', label: 'Flagship Deployment', description: 'Enterprise deployment across aerospace, defence & automotive' },
  { value: 'R1.6m+', label: 'Portfolio Value', description: 'Cumulative contract value managed across concurrent engagements' },
  { value: '5.7%', label: 'Productivity Uplift', description: 'Measured improvement from AI-enabled initiatives at Piab Group' },
  { value: '15–25%', label: 'Revenue Growth', description: 'Achieved within strategic accounts at Opti-Num Solutions' }
];

export const experiences = [
  {
    title: 'Co-founder & Director',
    company: 'SoiQet — Early-stage AI Venture',
    location: 'South Africa',
    period: 'Sep 2025 – Present',
    description: 'Leading structured planning and phased delivery of an AI-enabled SaaS platform across product, data and integration workstreams.',
    achievements: [
      'Leading structured planning and phased delivery of an AI-enabled SaaS platform, defining scope, milestones and backlog prioritisation across product, data and integration workstreams',
      'Translating business requirements into BRDs, user stories and execution plans, ensuring alignment between technical contributors and commercial objectives',
      'Managing delivery risks, scope changes and dependency tracking through structured governance routines and sprint cadences',
      'Developed structured project artefacts including scope definition documents, high-level WBS and delivery roadmaps to guide phased execution'
    ],
    skills: ['Project Governance', 'WBS Development', 'Backlog Management', 'BRD Writing', 'Stakeholder Alignment', 'SaaS Delivery']
  },
  {
    title: 'AI Innovation & Strategy Analyst (MSc Internship)',
    company: 'Piab Group',
    location: 'Stockholm, Sweden',
    period: 'Mar 2024 – Jun 2024',
    description: 'Defined the roadmap for Piab\'s internal AI assistant platform, aligning Product, IT, Operations and Data teams on phased delivery and workflow impact.',
    achievements: [
      'Defined the roadmap for Piab\'s internal AI assistant platform, aligning Product, IT, Operations and Data teams on phased delivery and use-case prioritisation',
      'Acted as Product Owner proxy, translating cross-functional requirements into structured user stories and ensuring traceability between technical components and business outcomes',
      'Designed and delivered Power BI dashboards to leadership and functional teams, contributing to a measured <strong>5.7% productivity uplift</strong>',
      'Initiated governance discussions on AI usage, employee data practices and GDPR alignment, contributing to compliance-aware digital innovation'
    ],
    skills: ['Power BI', 'Product Owner Proxy', 'AI Roadmapping', 'Stakeholder Alignment', 'GDPR & AI Governance']
  },
  {
    title: 'Team Lead / Digital Modernisation Manager',
    company: 'Opti-Num Solutions',
    location: 'Johannesburg, South Africa',
    period: 'Jul 2021 – Jul 2022',
    description: 'Directed a multi-project enterprise IT portfolio with cumulative contract values exceeding R1.6m across aerospace, defence, automotive and higher education clients.',
    achievements: [
      'Directed a multi-project portfolio with cumulative contract values exceeding <strong>R1.6m</strong>, including a flagship <strong>R800k</strong> deployment across aerospace, defence and automotive clients',
      'Led 4 direct and 3 indirect team members across consulting, engineering and analytics functions, overseeing mobilisation, resource allocation and milestone tracking',
      'Owned contract management, budget oversight and resource forecasting across concurrent engagements, contributing to <strong>15–25% revenue growth</strong> within key strategic accounts',
      'Built and maintained integrated delivery plans including WBS structures, Gantt schedules, dependency mapping and critical path tracking',
      'Defined and managed project scope, SOW alignment, budget baselines and change control processes',
      'Established and maintained RAID logs and stakeholder communication plans to proactively manage delivery risks'
    ],
    skills: ['Portfolio Management', 'WBS & Gantt Planning', 'RAID Log Management', 'Contract Management', 'Budget Oversight', 'Stakeholder Communication']
  },
  {
    title: 'Senior Consultant — Digital Solutions & Modernisation',
    company: 'Opti-Num Solutions',
    location: 'Johannesburg, South Africa',
    period: 'Jul 2020 – Jun 2021',
    description: 'Supported structured delivery across full project lifecycle in regulated industries, contributing to scope definition, WBS development and execution tracking.',
    achievements: [
      'Supported structured delivery across full project lifecycle, contributing to scope definition, WBS development, effort estimation, schedule planning and execution tracking',
      'Facilitated stakeholder workshops and Agile ceremonies to clarify objectives, manage dependencies and sequence deliverables across regulated environments',
      'Produced and maintained project artefacts including status reports, RAID logs, stakeholder maps and communication updates to support governance and decision-making',
      'Contributed to scope definition, effort estimation and mobilisation planning across aerospace, automotive and mining sectors'
    ],
    skills: ['Project Artefacts', 'RAID Logs', 'Agile Ceremonies', 'Stakeholder Workshops', 'Scope & WBS', 'Regulated Delivery']
  },
  {
    title: 'Consultant — Innovation Enablement',
    company: 'Opti-Num Solutions',
    location: 'Johannesburg, South Africa',
    period: 'Feb 2018 – Jun 2020',
    description: 'Supported enterprise software deployment and adoption programmes, coordinating workshops, onboarding and training initiatives across multi-sector clients.',
    achievements: [
      'Supported enterprise software deployment and adoption programmes, coordinating workshops, onboarding and training initiatives across multi-sector clients',
      'Assisted with requirements documentation, KPI tracking and governance artefact maintenance aligned to defined delivery methodologies',
      'Built and delivered digital education solutions using MATLAB and Simulink across <strong>20+</strong> institutions'
    ],
    skills: ['Enterprise Adoption', 'Requirements Documentation', 'KPI Tracking', 'Governance Artefacts', 'Training Delivery']
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
      'Facilitated <strong>10+</strong> technical workshops and <strong>20+</strong> training sessions for MathWorks tools',
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
    name: 'Google Project Management Professional Certificate',
    issuer: 'Google',
    year: '2025'
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
