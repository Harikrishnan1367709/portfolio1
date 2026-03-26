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
};

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    slug: 'enterprise-saas-platform',
    title: 'Enterprise SaaS Platform',
    category: 'FinTech',
    summary:
      'This project involved the design and development of a next-generation enterprise SaaS platform tailored for financial organizations that rely heavily on real-time data for decision-making.',
    logo: '/logo/revamp.png',
    previewImage: '/projects/project1(1).png',
    tags: ['UI UX Design', 'React Js', 'Node Js'],
    sections: [
      {
        title: 'Project Overview',
        points: [
          'The platform was built to address the growing complexity of financial operations by providing a unified system that delivers live insights, automated reporting, and scalable infrastructure. With a strong emphasis on performance, security, and usability, the solution enables multiple organizations to operate seamlessly within a single ecosystem while maintaining strict data isolation and integrity.',
        ],
      },
      {
        title: 'The Need',
        points: [
          'Modern financial enterprises operate in highly dynamic and data-intensive environments where timely access to accurate information is critical. Many organizations struggle with fragmented systems, where data is scattered across departments, leading to inefficiencies and reporting delays. These challenges are further amplified by increasing user loads, limited scalability of traditional systems, rising concerns around data security in multi-tenant architectures, and complex interfaces that make data interpretation difficult for non-technical stakeholders.',
          'To overcome these issues, there was a clear need for a centralized, scalable, and user-friendly platform that simplifies financial workflows while enabling faster and more informed decision-making.',
        ],
      },
      {
        title: 'Product Thinking & Strategy',
        points: [
          'The product was designed with a balanced approach that prioritized both user experience and system performance. The strategy focused on handling complex data operations while presenting information clearly and actionably. A modular architecture was adopted for scalability and flexibility, allowing components to evolve independently.',
          'Significant attention was given to hierarchical data structuring so users could move from high-level insights to detailed analytics. Performance optimization strategies were implemented for real-time processing with minimal latency under heavy workloads. Strong multi-tenant security controls and flexible APIs were included to support complete data isolation and seamless third-party integrations.',
        ],
      },
      {
        title: 'System Architecture',
        points: [
          'The platform follows a microservices-based architecture, enabling independent development, deployment, and scaling of services. This improves resilience and availability because individual components can be updated or scaled without impacting the full system.',
          'The backend is composed of distributed Node.js services for authentication, data processing, and reporting. Real-time communication is powered by WebSockets, while Redis caching reduces latency for frequently accessed data. The solution is deployed on AWS cloud infrastructure for scalability, reliability, and cost efficiency, and uses a carefully designed multi-tenant database schema to ensure secure data isolation.',
        ],
      },
      {
        title: 'Experience & Interaction Design',
        points: [
          'A key objective was to transform complex financial data into an intuitive, low-friction user experience. The interface was structured to minimize cognitive load so users can interpret insights quickly. Real-time dashboards deliver live operational visibility, and interactive drill-down charts support deeper analytical workflows and better decisions across teams.',
          'Navigation across modules was designed to stay smooth and consistent, while context-aware insights highlight the most relevant information based on user actions and live data patterns.',
        ],
      },
      {
        title: 'Micro Interactions & Motion',
        points: [
          'Subtle motion and feedback patterns were used to improve clarity and confidence throughout the product. Animated transitions make data changes easier to understand, hover-based tooltips provide quick context without adding visual clutter, and skeleton loaders improve perceived loading performance during asynchronous states.',
          'Smooth page transitions and clear confirmation and alert states create a polished, responsive product experience suited for enterprise users.',
        ],
      },
      {
        title: 'Data Visualization Approach',
        points: [
          'Data visualization was treated as a storytelling layer, not just a reporting layer. Information was organized hierarchically to guide users from KPI summaries to deeper analytics. Color-coded indicators highlight trends, risk signals, and opportunities, making insights easier to interpret at a glance.',
          'Dynamic line, bar, and pie visualizations update in real time, while custom report generation allows users to build context-specific outputs aligned to operational needs.',
        ],
      },
      {
        title: 'Responsive & Accessibility Design',
        points: [
          'The platform was designed with a responsive-first approach. While primarily optimized for large desktop dashboards, it adapts effectively to tablet workflows so business users can access key insights on the go.',
          'Accessibility-focused decisions included readable typography, consistent spacing systems, and a structured 12-column grid that supports clarity, rhythm, and scanability across dense data surfaces.',
        ],
      },
      {
        title: 'Security & Compliance',
        points: [
          'Security was treated as a foundational layer of the platform. Authentication was implemented using JWT, with OAuth support for secure third-party access. Role-based access control ensures users only access functions and data aligned to their permissions.',
          'APIs are protected through secure gateway patterns, and sensitive data is encrypted in transit and at rest to align with enterprise trust and compliance expectations.',
        ],
      },
    
    ],
    impact: [
      'The platform scaled to support more than 10,000 active users while maintaining reliability and speed. Reporting time was reduced by approximately 40%, giving teams faster access to critical insights. Real-time analytics and improved usability accelerated decision-making across departments, and the scalable architecture sustained stable performance under high loads. Overall, the solution transformed complex financial operations into a more efficient, data-driven workflow.',
    ],
  },
  {
    slug: 'healthcare-mobile-app',
    title: 'Healthcare Mobile App',
    category: 'Healthcare',
    summary:
      'A secure and scalable healthcare mobile application designed to bridge the gap between patients and healthcare providers through real-time telemedicine and efficient patient management.',
    logo: '/logo/alphaspects.png',
    previewImage: '/projects/project2(1).png',
    tags: ['Mobile App', 'React Native', 'Firebase'],
    sections: [
      {
        title: 'Tech Stack',
        points: ['React Native, Node.js, Firebase, WebRTC.'],
      },
      {
        title: 'Project Overview',
        points: ['Designed to bridge the gap between patients and healthcare providers with real-time telemedicine and efficient patient management.'],
      },
      {
        title: 'The Need',
        points: [
          'Limited accessibility for remote patients.',
          'Inefficient patient record management and care coordination.',
          'Overcrowded hospitals and delayed consultations.',
          'Lack of reliable real-time consultation solutions.',
          'Objective: create a digital healthcare ecosystem that improves accessibility and efficiency.',
        ],
      },
      {
        title: 'Approach & Design Thinking',
        points: [
          'Focused on simplicity for patients and efficiency for doctors.',
          'Designed intuitive flows for non-technical users.',
          'Ensured high-level security and compliance.',
          'Built real-time communication capabilities.',
        ],
      },
      {
        title: 'Experience Design',
        points: [
          'Seamless onboarding for patients.',
          'One-click appointment booking.',
          'Real-time video consultations.',
          'Easy access to medical history.',
          'Clean and minimal UI.',
        ],
      },
      {
        title: 'Security & Compliance',
        points: [
          'End-to-end encryption.',
          'Secure authentication.',
          'HIPAA-compliant architecture.',
          'Protected health data handling.',
        ],
      },
    ],
    impact: [
      'Reduced hospital visits by 30%',
      'Improved accessibility for remote users',
      'Enhanced patient engagement',
    ],
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    summary:
      'A high-performance e-commerce platform built to deliver seamless shopping experiences with advanced search, personalization, and secure payment integration.',
    logo: '/logo/neotouch.png',
    previewImage: '/projects/project3(1).png',
    tags: ['UI UX Design', 'Next Js', 'PostgreSQL'],
    sections: [
      {
        title: 'Tech Stack',
        points: [
          'Frontend: Next.js (SSR for SEO optimization).',
          'Backend: Node.js (API layer).',
          'Database: PostgreSQL.',
          'Payments: Stripe API.',
          'Caching: Redis.',
          'Deployment: Vercel / AWS.',
        ],
      },
      {
        title: 'Overview',
        points: [
          'Built to deliver seamless shopping experiences with advanced search, personalization, and secure payment integration.',
        ],
      },
      {
        title: 'Key Features',
        points: [
          'Advanced product search and filtering.',
          'Personalized recommendations using user behavior.',
          'Secure checkout and payment integration with Stripe.',
          'Inventory and order management system.',
          'Responsive UI for cross-device compatibility.',
          'Admin dashboard for analytics and control.',
        ],
      },
    ],
    impact: [
      'Improved conversion rates with optimized user experience',
      'Faster page load times using SSR',
      'Seamless and secure payment processing',
    ],
  },
  {
    slug: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    category: 'Analytics',
    summary:
      'An intelligent analytics platform leveraging machine learning to provide predictive insights and data-driven decision-making capabilities for businesses.',
    logo: '/logo/queue.png',
    previewImage: '/projects/project4(1).png',
    tags: ['Dashboard', 'React Js', 'Python'],
    sections: [
      {
        title: 'Tech Stack',
        points: [
          'Frontend: React.js, Chart.js / D3.js.',
          'Backend: Python (FastAPI / Flask).',
          'Machine Learning: TensorFlow, Scikit-learn.',
          'Database: PostgreSQL / MongoDB.',
          'Cloud: AWS (SageMaker, EC2).',
          'Data Processing: Pandas, NumPy.',
        ],
      },
      {
        title: 'Overview',
        points: [
          'An intelligent analytics platform leveraging machine learning to provide predictive insights and data-driven decision-making capabilities for businesses.',
        ],
      },
      {
        title: 'Key Features',
        points: [
          'Interactive dashboards with real-time data visualization.',
          'Predictive analytics using machine learning models.',
          'Data aggregation from multiple sources.',
          'Custom reporting and KPI tracking for operations teams.',
          'User-friendly interface with dynamic charts and graphs.',
        ],
      },
    ],
    impact: [
      'Enabled businesses to make faster data-driven decisions',
      'Improved forecasting accuracy by 25%+',
      'Reduced manual data analysis effort significantly',
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECT_CASE_STUDIES.find((project) => project.slug === slug);
