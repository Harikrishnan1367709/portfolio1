export type ProjectSection = {
  title: string;
  points: string[];
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  logo: string;
  previewImage: string;
  tags: string[];
  client?: string;
  year?: string;
  sections: ProjectSection[];
  impact: string[];
  stack: string[];
};

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    slug: 'enterprise-saas-platform',
    title: 'Enterprise SaaS Platform',
    category: 'FinTech',
    summary:
      'A next-generation enterprise SaaS platform designed for financial organizations with real-time data insights, automated reporting, and scalable multi-tenant infrastructure.',
    logo: '/logo/revamp.png',
    previewImage: '/projects/enterprise-dashboard.svg',
    tags: ['UI UX Design', 'React Js', 'Node Js'],
    client: 'Revamppayment gateway integration (trust)',
    year: '2025',
    sections: [
      {
        title: 'The Need',
        points: [
          'Lack of centralized data visibility across multiple departments.',
          'Inefficient reporting pipelines causing delays in decision-making.',
          'Scalability issues with growing user load in a multi-tenant setup.',
          'Security concerns around tenant isolation and protected enterprise data.',
        ],
      },
      {
        title: 'Product Thinking & Strategy',
        points: [
          'Designed modular architecture for independent service scaling.',
          'Prioritized data clarity and hierarchy for decision-focused teams.',
          'Built flexible APIs and optimized real-time performance with caching.',
          'Ensured secure multi-tenant isolation and enterprise-ready controls.',
        ],
      },
      {
        title: 'Experience & Interaction Design',
        points: [
          'Real-time dashboards with interactive drill-down capabilities.',
          'Context-aware insights and clean interface with minimal cognitive load.',
          'Smooth transitions, skeleton loaders, and responsive layouts for desktop and tablet.',
        ],
      },
    ],
    impact: [
      'Scaled to 10,000+ active users',
      'Reduced reporting time by 40%',
      'Improved decision-making speed across teams',
      'Enhanced system performance under high load',
    ],
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'WebSockets', 'Redis', 'JWT', 'OAuth', 'Docker'],
  },
  {
    slug: 'healthcare-mobile-app',
    title: 'Healthcare Mobile App',
    category: 'Healthcare',
    summary:
      'A secure and scalable healthcare mobile application built to connect patients and providers through telemedicine and efficient patient management.',
    logo: '/logo/alphaspects.png',
    previewImage: 'projects/project2(1).png',
    tags: ['Mobile App', 'React Native', 'Firebase'],
    client: 'ALPHASPECTS-CRM',
    year: '2025',
    sections: [
      {
        title: 'The Need',
        points: [
          'Limited accessibility for remote patients.',
          'Inefficient patient record management and care coordination.',
          'Overcrowded hospitals and delayed consultations.',
          'Lack of reliable real-time consultation solutions.',
        ],
      },
      {
        title: 'Approach & Experience Design',
        points: [
          'Designed simple patient flows and efficient doctor workflows.',
          'Enabled seamless onboarding, one-click booking, and real-time video consultations.',
          'Provided easy access to medical history through a clean and minimal interface.',
          'Built with secure authentication and end-to-end encryption for protected health data.',
        ],
      },
    ],
    impact: [
      'Reduced hospital visits by 30%',
      'Improved accessibility for remote users',
      'Enhanced patient engagement and care continuity',
    ],
    stack: ['React Native', 'Node.js', 'Firebase', 'WebRTC', 'Encryption', 'HIPAA-compliant architecture'],
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    summary:
      'A high-performance commerce platform with advanced search, personalized recommendations, secure checkout, and inventory operations.',
    logo: '/logo/neotouch.png',
    previewImage: 'projects/project3(1).png',
    tags: ['UI UX Design', 'Next Js', 'PostgreSQL'],
    client: 'NEOTOUCH',
    year: '2024',
    sections: [
      {
        title: 'Key Features',
        points: [
          'Advanced product search and filtering.',
          'Personalized recommendations based on user behavior.',
          'Secure checkout and payment integration with Stripe.',
          'Inventory and order management with analytics controls.',
        ],
      },
      {
        title: 'Platform Design',
        points: [
          'Responsive UI optimized for cross-device shopping journeys.',
          'Admin dashboard for operations, analytics, and control.',
          'SSR-driven Next.js experience for stronger SEO and faster perceived loads.',
        ],
      },
    ],
    impact: [
      'Improved conversion rates with optimized user experience',
      'Faster page load times using SSR',
      'Seamless and secure payment processing',
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis', 'Vercel', 'AWS'],
  },
  {
    slug: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    category: 'Analytics',
    summary:
      'An intelligent analytics platform that leverages machine learning for predictive insights and data-driven business decision-making.',
    logo: '/logo/queue.png',
    previewImage: '/projects/ai-dashboard.svg',
    tags: ['Dashboard', 'React Js', 'Python'],
    client: 'queue LESS-website',
    year: '2024',
    sections: [
      {
        title: 'Core Capabilities',
        points: [
          'Interactive dashboards with real-time data visualization.',
          'Predictive analytics powered by machine learning models.',
          'Data aggregation from multiple business data sources.',
          'Custom reporting and KPI tracking for operations teams.',
        ],
      },
      {
        title: 'Data Experience',
        points: [
          'User-friendly interface with dynamic charts and graphs.',
          'Forecasting workflows tuned for faster decision support.',
          'Reduced manual reporting effort through intelligent automation.',
        ],
      },
    ],
    impact: [
      'Improved forecasting accuracy by 25%+',
      'Reduced manual data analysis effort significantly',
      'Enabled businesses to make faster data-driven decisions',
    ],
    stack: ['React.js', 'Chart.js', 'D3.js', 'Python', 'FastAPI', 'Flask', 'TensorFlow', 'Scikit-learn', 'PostgreSQL', 'MongoDB', 'AWS', 'Pandas', 'NumPy'],
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECT_CASE_STUDIES.find((project) => project.slug === slug);
