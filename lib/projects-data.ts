export type ProjectSection = {
  title: string;
  points: string[];
  imageAfter?: string;
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
    previewImage: '/projects/project1(4).png',
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
        imageAfter: '/projects/project1(4).png',
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
        imageAfter: '/projects/project1(3).jpg',
      },
      {
        title: 'Responsive & Accessibility Design',
        points: [
          'The platform was designed with a responsive-first approach. While primarily optimized for large desktop dashboards, it adapts effectively to tablet workflows so business users can access key insights on the go.',
          'Accessibility-focused decisions included readable typography, consistent spacing systems, and a structured 12-column grid that supports clarity, rhythm, and scanability across dense data surfaces.',
        ],
        imageAfter: '/projects/project1(2).png',
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
      'A secure, scalable, and user-centric healthcare mobile application designed to bridge the gap between patients and healthcare providers through real-time telemedicine and intelligent patient management.',
    logo: '/logo/alphaspects.png',
    previewImage: '/projects/project2(1).png',
    tags: ['Mobile App', 'React Native', 'Node.js', 'Firebase', 'WebRTC'],
    sections: [
      {
        title: 'Project Overview',
        points: [
          'The Healthcare Mobile App was conceived as a secure, scalable, and user-centric digital care platform that bridges the gap between patients and healthcare providers through real-time telemedicine and intelligent patient management. It unifies virtual consultations, appointment orchestration, and centralized medical records into one connected ecosystem, reducing friction across the patient journey while supporting provider efficiency.',
          'Beyond feature delivery, the core product vision focused on expanding healthcare accessibility, reducing operational inefficiencies in clinical workflows, and improving patient trust through reliable, privacy-first digital interactions. The result is a resilient care experience that feels simple for users while remaining technically robust for long-term growth.',
        ],
      },
      {
        title: 'The Need',
        points: [
          'Modern healthcare systems face several operational and accessibility challenges, especially in rapidly growing and remote regions.',
          'Key problems identified:',
          '- Limited access to healthcare services for rural and remote patients',
          '- Inefficient and fragmented patient record management systems',
          '- Overcrowded hospitals due to non-critical in-person visits',
          '- Lack of real-time consultation and communication between patients and doctors',
          '- Manual appointment scheduling leading to delays and mismanagement',
          'The objective was to build a **digital-first healthcare ecosystem** that improves accessibility, reduces physical dependency on hospitals, and enhances efficiency for both patients and providers.',
        ],
      },
      {
        title: 'Product Thinking & Strategy',
        points: [
          'The product strategy followed a patient-first and doctor-efficient approach, balancing usability, performance, and security from the outset. Patient workflows were intentionally simplified for users across technical backgrounds, with guided interactions that reduce cognitive load and make care actions such as booking, consultation, and history review easy to complete.',
          'On the provider side, the system emphasized real-time interaction readiness and operational clarity. A modular architecture was selected to support scaling and future capability expansion, including AI-assisted diagnostics, e-prescriptions, and advanced care intelligence, while maintaining compliance with healthcare data and privacy standards.',
        ],
      },
      {
        title: 'System Architecture',
        points: [
          'The application follows a modern, scalable architecture optimized for real-time communication and secure data handling.',
          '- **Mobile Frontend:** Cross-platform app built with React Native',
          '- **Backend Services:** Node.js-based APIs for handling business logic',
          '- **Realtime Communication:** WebRTC for live video consultations',
          '- **Cloud Backend:** Firebase for authentication, database, and notifications',
          '- **Data Storage:** Secure cloud storage for medical records and reports',
          '- **Push Notifications:** Real-time alerts for appointments, prescriptions, and updates',
          'This architecture ensures **low latency, high availability, and seamless scalability**.',
        ],
        imageAfter: '/projects/project2(2).png',
      },
      {
        title: 'Experience & Interaction Design',
        points: [
          'The experience layer was crafted to make healthcare interactions simple, fast, and stress-free, especially for non-technical users. User journeys were designed around clear progression and predictable actions, starting with guided onboarding and continuing through one-click appointment booking with live doctor availability visibility.',
          'The consultation flow minimizes setup friction for real-time video sessions, while digital medical records remain accessible anytime through a personalized dashboard that surfaces upcoming appointments and health insights. A clean, minimal, and intuitive interface system supports confidence, readability, and continuity across all major patient touchpoints.',
        ],
      },
      {
        title: 'Interaction & Usability Enhancements',
        points: [
          'To improve engagement and trust, the product includes smart reminders for appointments and medication schedules, immediate confirmation feedback for critical actions, and thoughtfully designed loading states that improve perceived responsiveness. Error states were written in clear, user-friendly language, and accessibility-focused choices such as readable typography, consistent spacing, and simple navigation patterns ensure inclusive usability for a broad patient population.',
        ],
      },
      {
        title: 'Security & Compliance',
        points: [
          'Given the sensitivity of healthcare information, security was treated as a foundational product pillar. The platform applies end-to-end encryption for video consultations and data transfer, secure token-based and OTP authentication flows, and role-based access controls for patients and healthcare providers. Architecture and data handling decisions were aligned to HIPAA-level compliance expectations, with strict privacy policies, secure record storage and transmission controls, and audit-aware operational practices.',
        ],
      },
      {
        title: 'Technology Stack',
        points: [
          'The core stack includes React Native for cross-platform mobile delivery, Node.js REST APIs for business logic and orchestration, WebRTC for realtime telemedicine sessions, Firebase for authentication and cloud database services, and Firebase Cloud Messaging for push notifications and care-event alerts.',
        ],
      },
      {
        title: 'Future Enhancements',
        points: [
          'The product was intentionally planned for future-ready expansion, including AI-based symptom checking and preliminary diagnosis support, wearable device integration for continuous health monitoring, e-prescription and pharmacy workflows, patient-facing health analytics dashboards, and multilingual support to improve accessibility across broader demographics.',
        ],
      },
    ],
    impact: [
      'The application reduced unnecessary hospital visits by 30% through virtual consultations, expanded quality care access for remote and underserved communities, and improved patient engagement through a highly usable digital experience. It also lowered administrative overhead for hospitals and clinics, accelerated consultation and diagnosis cycles, and contributed to higher patient satisfaction and retention through reliable, convenient care delivery.',
    ],
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    summary:
      'High-performance digital commerce platform built for intelligent discovery, frictionless checkout, and secure, scalable transactions.',
    logo: '/logo/neotouch.png',
    previewImage: '/projects/project3(2).png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    sections: [
      {
        title: 'Project Overview',
        points: [
          '**High-Performance Digital Commerce Experience**',
          'Modern digital commerce is no longer just about listing products. It is about creating an intelligent shopping experience that understands user intent, reduces friction, and increases conversion at every step.',
          'This platform was designed as a next-generation e-commerce system focused on frictionless shopping journeys, real-time personalization, high-speed product discovery, and secure scalable transactions. The goal was to move beyond a traditional store model and build an experience-driven commerce ecosystem.',
        ],
      },
      {
        title: 'Core Challenge',
        points: [
          'Instead of building a simple online store, the objective was to solve deeper behavioral and system-level problems that impact both users and business outcomes.',
          'Users often face decision fatigue due to an overwhelming number of product choices. Search results are frequently slow or irrelevant, and checkout flows are often complex, leading to drop-offs. Trust issues in payment systems and poor mobile experiences further reduce engagement.',
          'From a business perspective, key challenges included low conversion rates, high cart abandonment, weak personalization engines, and scalability issues during peak traffic loads.',
        ],
      },
      {
        title: 'Design Philosophy',
        points: [
          'The entire system was built around a single guiding principle: every click should bring the user closer to purchase.',
          'To achieve this, the platform follows an intent-first navigation model where user behavior drives discovery instead of static categories. The design minimizes cognitive load through clean layouts and progressive disclosure of information. Every interface element is optimized through a conversion-driven design system focused on engagement and action.',
        ],
      },
      {
        title: 'System Architecture',
        points: [
          'The platform is built on a scalable cloud-native architecture designed for performance and reliability.',
          'The frontend layer uses Next.js with server-side rendering to improve SEO and page speed. The backend is structured using Node.js microservices, enabling modular scalability and independent deployment.',
          'PostgreSQL is used as the primary database for reliable transactional data handling. Redis is implemented as a caching layer to reduce latency and improve response times. Stripe handles secure payment processing, ensuring safe and seamless transactions.',
          'The system is deployed using AWS and Vercel, enabling high availability, load handling, and global performance optimization.',
        ],
        imageAfter: '/projects/project3(2).png',
      },
      {
        title: 'Experience Design Strategy',
        points: [
          'The user experience is designed as a guided shopping flow rather than traditional navigation-based browsing.',
          'The discovery layer includes intelligent search, predictive suggestions, trending products, and behavior-based ranking. The product layer focuses on fast browsing with image-first layouts, smart filtering, and quick view interactions.',
          'The checkout layer is optimized into a single-page flow with minimal friction, reducing unnecessary steps and improving completion rates.',
        ],
      },
      {
        title: 'Interaction and Motion Design',
        points: [
          'Micro-interactions play a key role in making the experience feel responsive and premium.',
          'Smooth cart animations provide visual confirmation of actions, while skeleton loading states improve perceived performance. Hover-based product previews allow quick exploration without navigation delays. Subtle page transitions and instant feedback systems ensure that every interaction feels immediate and fluid.',
          'These refinements collectively create a modern, polished shopping experience.',
        ],
      },
      {
        title: 'Personalization Engine',
        points: [
          'The platform includes a behavior-driven personalization system that adapts content based on user activity.',
          'It tracks browsing behavior, product interactions, and purchase history to generate intelligent recommendations. This includes recently viewed products, trending sections, personalized homepage layouts, product affinity suggestions, and frequently bought together recommendations.',
          'This system significantly improves engagement and increases the probability of conversion.',
        ],
      },
      {
        title: 'Responsive Experience',
        points: [
          'The platform follows a mobile-first design approach to ensure accessibility across all devices.',
          'It is optimized for mobile, tablet, and desktop environments, with layouts that dynamically adapt using a responsive grid system. This ensures consistent usability, readability, and performance across different screen sizes and network conditions.',
        ],
      },
      {
        title: 'Security and Payment Integration',
        points: [
          'Security is a foundational layer of the platform.',
          'It integrates Stripe for secure payment processing using tokenized transactions. Authentication is handled through JWT-based systems to ensure secure access control.',
          'All sensitive data is encrypted both in transit and at rest. Role-based access control ensures proper separation between users and administrative operations. The system is also protected against common API vulnerabilities and security threats.',
        ],
      },
    ],
    impact: [
      'The platform significantly improved both user experience and business performance.',
      'Conversion rates increased due to reduced friction in the shopping journey. Cart abandonment was reduced through a simplified checkout flow. Page load times improved through server-side rendering and caching strategies.',
      'User engagement increased as a result of personalized recommendations, and the system is fully capable of handling high traffic loads with stable performance.',
    ],
  },
  {
    slug: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    category: 'Analytics',
    summary:
      'An advanced analytics platform designed to transform raw business data into actionable insights through machine learning and intelligent data processing.',
    logo: '/logo/queue.png',
    previewImage: '/projects/project4(1).png',
    tags: ['Analytics', 'React', 'FastAPI', 'TensorFlow', 'AWS'],
    sections: [
      {
        title: 'Project Overview',
        points: [
          'An advanced analytics platform designed to transform raw business data into actionable insights using machine learning and intelligent data processing. The system enables organizations to monitor performance, predict trends, and make data-driven strategic decisions in real time.',
          'The platform combines interactive dashboards, predictive modeling, and scalable cloud infrastructure to deliver a powerful business intelligence solution.',
        ],
      },
      {
        title: 'The Need',
        points: [
          'Modern businesses generate massive volumes of data, but struggle to extract meaningful insights due to:',
          '- Fragmented data across multiple systems',
          '- Manual and time-consuming analysis processes',
          '- Lack of real-time decision-making capabilities',
          '- Limited predictive insights for future planning',
          '- Complex tools that require technical expertise',
          'The goal was to build an intuitive, intelligent, and scalable analytics platform that simplifies data analysis while enhancing decision-making accuracy.',
        ],
      },
      {
        title: 'Product Thinking & Strategy',
        points: [
          'The solution was designed with a focus on intelligence, usability, and scalability:',
          '- Built an AI-first architecture for predictive insights',
          '- Focused on real-time data accessibility and clarity',
          '- Designed for both technical and non-technical users',
          '- Enabled modular data integration from multiple sources',
          '- Prioritized performance and responsiveness',
          'The strategy ensured the platform is not just a dashboard but a decision-making engine.',
        ],
      },
      {
        title: 'System Architecture',
        points: [
          'The platform follows a data-driven, microservices-based architecture for scalability and flexibility:',
          '- **Frontend:** React-based interactive dashboards',
          '- **Backend:** Python FastAPI services for data processing and ML model serving',
          '- **Machine Learning:** TensorFlow for predictive modeling and insights generation',
        ],
        imageAfter: '/projects/project4(2).png',
      },
      {
        title: 'Architecture Highlights',
        points: [
          '- Real-time data ingestion and processing pipelines',
          '- ML model integration for predictive analytics',
          '- Scalable backend APIs for high-performance data access',
          '- Cloud-based deployment for reliability and scalability',
        ],
      },
      {
        title: 'Data Intelligence & Machine Learning',
        points: [
          'Machine learning plays a core role in delivering predictive insights:',
          '- Time-series forecasting for sales and demand prediction',
          '- Classification models for customer segmentation',
          '- Anomaly detection for identifying unusual patterns',
          '- Recommendation systems for business optimization',
          'Models were trained and deployed using TensorFlow and Scikit-learn, ensuring accuracy and scalability.',
        ],
      },
      {
        title: 'Experience & Interaction Design',
        points: [
          'The platform was designed to make complex data simple, interactive, and insightful.',
          'Key Experience Highlights',
          '- Real-time dashboards with live updates',
          '- Drill-down capabilities for detailed analysis',
          '- Interactive charts and visual storytelling',
          '- Customizable views based on user roles',
          '- Clean and minimal UI for better usability',
        ],
      },
      {
        title: 'Data Visualization Approach',
        points: [
          'A strong emphasis was placed on data storytelling and clarity:',
          '- Dynamic charts using Chart.js and D3.js',
          '- Use of color-coded insights for quick interpretation',
          '- KPI tracking dashboards with real-time metrics',
          '- Comparative and trend-based visualizations',
          '- Exportable reports for business analysis',
        ],
      },
      {
        title: 'Micro Interactions & UX Enhancements',
        points: [
          'To enhance engagement and usability:',
          '- Smooth transitions between data states',
          '- Animated chart updates for better understanding',
          '- Tooltip-based insights on hover',
          '- Loading indicators and skeleton screens',
          '- Real-time notifications for key events',
          'These interactions improve user confidence and decision speed.',
        ],
      },
      {
        title: 'Responsive & Accessibility Design',
        points: [
          'The dashboard is optimized for multiple devices and accessibility:',
          '- Desktop-first design for data-heavy views',
          '- Tablet-friendly layouts for business users',
          '- Accessible typography and color contrast',
          '- Consistent grid-based layout system',
        ],
      },
      {
        title: 'Security & Data Integrity',
        points: [
          'Security was treated as a critical component:',
          '- Secure API endpoints with authentication',
          '- Role-based access control (RBAC)',
          '- Data encryption for sensitive information',
          '- Secure cloud storage and backups',
          '- Compliance-ready architecture',
        ],
      },
      {
        title: 'Technology Stack',
        points: [
          '**Frontend:**',
          '- React',
          '- Chart.js / D3.js',
          '**Backend:**',
          '- Python (FastAPI / Flask)',
          '**Machine Learning:**',
          '- TensorFlow',
          '- Scikit-learn',
          '**Database:**',
          '- PostgreSQL / MongoDB',
          '**Cloud & Deployment:**',
          '- AWS (EC2, SageMaker)',
          '**Data Processing:**',
          '- Pandas',
          '- NumPy',
        ],
      },
      {
        title: 'Performance Optimization',
        points: [
          'To ensure high performance:',
          '- Optimized data queries and indexing',
          '- Efficient data pipelines for faster processing',
          '- Caching strategies for frequently accessed data',
          '- Lazy loading for dashboard components',
          '- Scalable cloud infrastructure',
        ],
      },
      {
        title: 'Future Enhancements',
        points: [
          '- Real-time streaming analytics with Kafka',
          '- Advanced AI models for deeper predictions',
          '- Natural Language Query (NLQ) support',
          '- Integration with third-party BI tools',
          '- Mobile analytics dashboard',
        ],
      },
    ],
    impact: [
      '- Enabled organizations to make faster, data-driven decisions',
      '- Improved forecasting accuracy by 25%+',
      '- Reduced manual data analysis effort significantly',
      '- Increased operational efficiency through automation',
      '- Provided actionable insights across departments',
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECT_CASE_STUDIES.find((project) => project.slug === slug);
