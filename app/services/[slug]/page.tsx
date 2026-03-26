import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Benefit = {
  title: string;
  description: string;
};

type ServiceDetail = {
  slug: string;
  title: string;
  intro: string;
  details: string[];
  capabilities: string[];
  technologies: string[];
  benefits: Benefit[];
  applications?: Benefit[];
  benefitsTitle?: string;
  benefitsSubtitle?: string;
};

const BenefitCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-[#111] border border-zinc-800 rounded-2xl p-8 transition-all hover:scale-[1.02] flex flex-col justify-between h-full">
    <div className="h-8 w-8 rounded-full bg-zinc-800 mb-3 flex items-center justify-center text-cyan-400">✓</div>
    <h4 className="text-white font-semibold mb-2">{title}</h4>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const serviceDetails: ServiceDetail[] = [
  {
    slug: 'full-stack-development',
    title: 'Full Stack Development',
    intro:
      'Jawanexis Technologies offers end-to-end Full Stack Development services for building scalable and high-performance digital platforms.',
    details: [
      'Our team designs, develops, and deploys complete web solutions using modern frontend and backend technologies.',
      'We build robust applications for startups, SaaS products, enterprise systems, and digital platforms with a focus on performance, scalability, and security.',
    ],
    capabilities: [
      'Frontend Development: React.js, Next.js, Angular, Vue.js, HTML5, CSS3, Tailwind CSS, Bootstrap',
      'Backend Development: Node.js, Express.js, Java Spring Boot, Python Django, REST APIs, GraphQL APIs',
      'Database Technologies: MongoDB, PostgreSQL, MySQL, Firebase, Redis',
      'Cloud and DevOps: AWS, Google Cloud, Docker, Kubernetes, CI/CD pipelines',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'Django', 'MongoDB', 'PostgreSQL'],
    benefits: [
      { title: 'Responsive & Adaptive Interfaces', description: 'Delivers consistent and seamless user experiences across all devices, screen sizes, and browsers.' },
      { title: 'Enhanced User Experience', description: 'Improves usability through intuitive layouts, smooth navigation, and engaging interactions.' },
      { title: 'High Performance Rendering', description: 'Optimized frontend architecture reduces load times and ensures smooth transitions.' },
      { title: 'Scalable UI Architecture', description: 'Designed to support future enhancements and growing application complexity.' },
      { title: 'Reliable System Performance', description: 'Handles complex business logic and high-volume requests efficiently.' },
      { title: 'Secure Data Handling', description: 'Implements strong authentication, authorization, and data protection mechanisms.' },
      { title: 'Scalable Infrastructure', description: 'Supports application growth by efficiently managing increasing users and data.' },
      { title: 'Efficient Data Processing', description: 'Processes requests quickly and accurately to ensure smooth system communication.' },
      { title: 'Efficient Data Management', description: 'Organizes and structures data for fast retrieval and optimized performance.' },
      { title: 'High Availability & Reliability', description: 'Keeps data accessible and operational with minimal downtime.' },
      { title: 'Data Integrity & Consistency', description: 'Maintains accuracy and consistency across all stored data.' },
      { title: 'Scalable Storage Solutions', description: 'Adapts to growing data needs without impacting performance.' },
      { title: 'Faster Deployment Cycles', description: 'Automated pipelines enable quick and reliable application releases.' },
      { title: 'Scalable Cloud Infrastructure', description: 'Dynamically adjusts resources based on demand and workload.' },
      { title: 'Improved System Reliability', description: 'Continuous monitoring and automation reduce downtime and failures.' },
      { title: 'Automation & Operational Efficiency', description: 'Minimizes manual processes through automated builds, tests, and deployments.' },
    ],
  },
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    intro: 'Building modern interfaces with high-performance, accessible, and maintainable front-end technologies.',
    details: ['Focused on UI architecture, responsive design, and intuitive user experiences.', 'Leveraging React, Angular, Vue, and component-driven design to deliver scalable frontends.'],
    capabilities: ['Component-based UI', 'Responsive design', 'Accessibility', 'State management', 'Performance optimization'],
    technologies: ['React.js', 'Angular', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    benefits: [
      { title: 'Fast & Responsive UI', description: 'Minimizes rendering time and improves user interactivity with optimized frontend architecture.' },
      { title: 'Accessible Experiences', description: 'Designs inclusively to meet accessibility standards and support diverse user needs.' },
      { title: 'Consistency and Reusability', description: 'Reusable components accelerate development and maintain visual consistency across the app.' },
      { title: 'Seamless User Interaction', description: 'Smooth animations and optimized workflows improve user satisfaction and retention.' },
    ],
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    intro: 'Creating secure, scalable, and maintainable server-side solutions for data-driven applications.',
    details: ['API design, business logic, and data orchestration for modern applications.', 'Secure authentication, authorization, and scalable service architecture.'],
    capabilities: ['API development', 'Microservices', 'Data modeling', 'Security', 'Performance tuning'],
    technologies: ['Node.js', 'Express.js', 'Java Spring Boot', 'Python Django', 'GraphQL', 'REST APIs'],
    benefits: [
      { title: 'Scalable Services', description: 'Builds APIs and microservices that grow with user demand and maintain high performance.' },
      { title: 'Secure Data Handling', description: 'Implements robust authentication, authorization, and data protection strategies.' },
      { title: 'Reliable Operation', description: 'Minimizes downtime with resilient architecture and monitoring.' },
      { title: 'Optimized Throughput', description: 'Efficient request handling and data processing minimize latency and resource usage.' },
    ],
  },
  {
    slug: 'database-technologies',
    title: 'Database Technologies',
    intro: 'Designing data storage strategies that align with business requirements and scale efficiently.',
    details: ['Data modeling, indexing, caching, and queries for high-performance data access.', 'Support for relational and NoSQL systems with replication and backup plans.'],
    capabilities: ['Data architecture', 'Query optimization', 'Replication', 'Backups', 'Data security'],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase'],
    benefits: [
      { title: 'Reliable Data Access', description: 'Ensures consistent and fast data retrieval for high-performance applications.' },
      { title: 'Scalable Storage', description: 'Handles growth with flexible database tuning and architecture design.' },
      { title: 'Data Integrity', description: 'Maintains accuracy and consistency across application workflows.' },
      { title: 'High Availability', description: 'Implements failover, replication, and redundancy for stable operation.' },
    ],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    intro: 'Enabling continuous deployment and cloud-native infrastructure for resilient delivery.',
    details: ['CI/CD pipelines, container orchestration, and infrastructure automation for reliability.', 'Monitoring, logging, and scalable deployments across cloud platforms.'],
    capabilities: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Automation'],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Terraform', 'CI/CD'],
    benefits: [
      { title: 'Fast Deployment', description: 'Enable rapid release cycles with automated build and deployment pipelines.' },
      { title: 'Infrastructure Scalability', description: 'Scale infrastructure automatically to meet traffic and performance needs.' },
      { title: 'Operational Resilience', description: 'Maintain stability with monitoring, alerting, and self-healing systems.' },
      { title: 'DevOps Collaboration', description: 'Streamline team workflows with infrastructure as code and shared practices.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    intro:
      'Jawanexis Technologies develops high-performance mobile applications for Android, iOS, and cross-platform environments.',
    details: [
      'Our mobile development team builds secure, scalable, and user-friendly applications that provide seamless experiences across devices.',
      'Our mobile solutions focus on performance, scalability, and intuitive user experience.',
    ],
    capabilities: [
      'Native Development: Swift (iOS), Kotlin (Android)',
      'Cross Platform Development: React Native, Flutter, Ionic',
      'Mobile Backend Services: Firebase, Node.js APIs, GraphQL APIs',
      'Use cases: Business apps, e-commerce platforms, SaaS products, enterprise apps, on-demand service platforms',
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Ionic', 'Firebase', 'GraphQL'],
    benefits: [
      { title: 'Optimized Performance', description: 'Applications run smoothly with high responsiveness by leveraging platform-specific capabilities. Ensures faster execution and better overall user experience.' },
      { title: 'Superior User Experience', description: 'Follows native design guidelines for each platform, delivering familiar and intuitive interactions. Enhances usability and user satisfaction.' },
      { title: 'Full Device Integration', description: 'Seamless access to hardware features like camera, GPS, sensors, and notifications. Enables advanced functionality and richer app experiences.' },
      { title: 'High Reliability & Stability', description: 'Platform-optimized architecture reduces crashes and performance issues. Ensures consistent and dependable application behavior.' },
      { title: 'Single Codebase Efficiency', description: 'One codebase for multiple platforms reduces duplication and simplifies maintenance. Speeds up development while maintaining consistency.' },
      { title: 'Faster Time to Market', description: 'Accelerates product delivery with shared components and streamlined workflows. Helps businesses launch applications quickly.' },
      { title: 'Cost Optimization', description: 'Reduces development and maintenance costs compared to separate native apps. Maximizes return on investment.' },
      { title: 'Consistent User Experience', description: 'Maintains uniform design and functionality across devices and platforms. Ensures a cohesive brand experience.' },
    ],
  },
  {
    slug: 'native-development',
    title: 'Native Development',
    intro: 'Builds platform-specific mobile apps for iOS and Android with native performance and UX.',
    details: ['Native apps tailored for each platform using Swift for iOS and Kotlin for Android.', 'Focus on optimized performance, full hardware access, and robust user experience.'],
    capabilities: ['iOS app development', 'Android app development', 'Device API integration', 'Performance optimization'],
    technologies: ['Swift', 'Kotlin', 'Xcode', 'Android Studio', 'Core ML', 'Jetpack'],
    benefits: [
      { title: 'Optimized Performance', description: 'High responsiveness with native execution and low latency code paths.' },
      { title: 'Superior User Experience', description: 'Platform-specific UI patterns for intuitive and familiar interactions.' },
      { title: 'Full Device Integration', description: 'Direct access to camera, sensors, and native APIs for richer features.' },
      { title: 'Stability and Reliability', description: 'Lower crash rates and strong system compatibility with native architecture.' },
    ],
  },
  {
    slug: 'cross-platform',
    title: 'Cross Platform Development',
    intro: 'Builds mobile applications from a single codebase for iOS and Android to accelerate delivery.',
    details: ['Shared codebase across devices using React Native, Flutter, and Ionic.', 'Fast iteration, common UI components, and cost-efficient development.'],
    capabilities: ['Code reusability', 'Unified UI', 'Faster release cycles', 'Device bridge integration'],
    technologies: ['React Native', 'Flutter', 'Ionic', 'Capacitor'],
    benefits: [
      { title: 'Single Codebase Efficiency', description: 'Reduces duplication by using one codebase for multiple platforms.' },
      { title: 'Accelerated Time-to-Market', description: 'Streamlined release processes with shared functionalities.' },
      { title: 'Cost Optimization', description: 'Lower development and maintenance costs compared to separate native apps.' },
      { title: 'Consistent UX', description: 'Uniform behavior and design across devices for brand consistency.' },
    ],
  },
  {
    slug: 'backend-services',
    title: 'Backend Services',
    intro: 'Designs scalable backend systems and APIs that support mobile applications and data-driven experiences.',
    details: ['Secure API design, authentication, and real-time data synchronization.', 'Cloud and server architecture for high availability and growth.'],
    capabilities: ['API development', 'Database integration', 'Authentication', 'Real-time services'],
    technologies: ['Node.js', 'Express.js', 'Firebase', 'GraphQL', 'PostgreSQL', 'MongoDB'],
    benefits: [
      { title: 'Scalable Architecture', description: 'Handles increasing user load with robust service design.' },
      { title: 'Secure Data Management', description: 'Ensures data safety through encryption and access controls.' },
      { title: 'Reliable Performance', description: 'Maintains low latency and high throughput under load.' },
      { title: 'Seamless Integration', description: 'Smooth communication between mobile apps, databases, and third-party services.' },
    ],
  },
  {
    slug: 'applications',
    title: 'Applications',
    intro: 'Develops tailored mobile solutions for enterprise, commerce, SaaS, and on-demand platforms.',
    details: ['Customer-focused app solutions built for engagement and retention.', 'End-to-end planning, development, and continuous improvement.'],
    capabilities: ['Business apps', 'e-Commerce apps', 'SaaS apps', 'Enterprise mobility'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    benefits: [
      { title: 'Enhanced Engagement', description: 'Deliver interactive app experiences that users love.' },
      { title: 'Business Growth', description: 'Mobile solutions that drive conversions and operational efficiency.' },
      { title: 'Custom Workflows', description: 'Tailored features that match specific business processes.' },
      { title: 'Optimized Delivery', description: 'Fast time-to-market with scalable and maintainable codebases.' },
    ],
  },

  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    intro:
      'Jawanexis Technologies builds modern web applications that are scalable, secure, and performance-driven.',
    details: [
      'We develop custom web platforms designed to solve complex business challenges and deliver seamless digital experiences.',
      'Our web applications are built using modern architecture, microservices, and scalable cloud infrastructure.',
    ],
    capabilities: [
      'SaaS Product Development',
      'Enterprise Web Platforms',
      'CRM and ERP Systems',
      'Customer Portals, workflow automation systems, and business intelligence dashboards',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'AWS'],
    benefitsTitle: 'Benefits of Expertise',
    benefitsSubtitle: 'Scalable solutions built on deep industry knowledge and proven methodologies.',
    benefits: [
      { title: 'Deep Industry Knowledge', description: 'Strong understanding of modern technologies and business workflows. Enables delivery of solutions aligned with real-world requirements.' },
      { title: 'Tailored Solutions', description: 'Approaches customized to meet specific business challenges and goals. Ensures maximum efficiency and relevance.' },
      { title: 'Scalable Systems', description: 'Solutions designed to grow with evolving business needs. Supports long-term performance and expansion.' },
      { title: 'Proven Methodologies', description: 'Use of reliable development practices and industry standards. Ensures consistency, quality, and predictable outcomes.' },
    ],
    applicationsTitle: 'Benefits of Modern Technologies',
    applicationsSubtitle: 'Web/app competencies built for performance, adaptability, and future readiness.',
    applications: [
      { title: 'High Performance Applications', description: 'Optimized frameworks ensure fast load times and smooth execution. Enhances overall user experience and responsiveness.' },
      { title: 'Flexibility & Adaptability', description: 'Easily adapts to changing business requirements and future upgrades. Supports continuous improvement and innovation.' },
      { title: 'Seamless Integration', description: 'Works efficiently with third-party tools and systems. Enables smooth data flow across platforms.' },
      { title: 'Future-Ready Solutions', description: 'Built using modern, evolving technologies. Ensures long-term sustainability and relevance.' },
    ],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    intro:
      'Jawanexis Technologies provides professional website development services in Coimbatore for startups, enterprises, and global businesses.',
    details: [
      'We create high-performing websites that are SEO-optimized, responsive, and conversion-focused.',
      'Every website we develop is designed with performance optimization, SEO readiness, and modern UI/UX principles.',
    ],
    capabilities: [
      'Types: Corporate websites, business websites, startup landing pages, portfolio websites, e-commerce websites, custom CMS websites',
      'SEO-ready architecture and responsive design',
      'Conversion-focused user journeys',
      'Modern UI/UX implementation',
    ],
    technologies: ['Next.js', 'React.js', 'WordPress', 'Headless CMS', 'Shopify', 'Webflow'],
    benefits: [
      { title: 'Strong Digital Presence', description: 'Enhances brand visibility and credibility online. Helps businesses reach a wider audience effectively.' },
      { title: 'Responsive Design', description: 'Ensures seamless performance across mobile, tablet, and desktop devices. Provides a consistent user experience.' },
      { title: 'SEO Optimization', description: 'Improves search engine rankings and discoverability. Drives organic traffic and engagement.' },
      { title: 'User Engagement', description: 'Delivers intuitive and interactive experiences. Encourages higher retention and conversions.' },
      { title: 'Fast & Optimized Performance', description: 'Ensures quick loading and smooth navigation. Improves user satisfaction and retention.' },
      { title: 'Scalable Architecture', description: 'Supports business growth and increasing user demand. Maintains performance under load.' },
      { title: 'Secure Systems', description: 'Protects user data and application integrity. Ensures safe and reliable operations.' },
      { title: 'Easy Maintenance', description: 'Simplifies updates, upgrades, and future enhancements. Reduces long-term development effort.' },
    ],
  },
  {
    slug: 'mulesoft-api-integration',
    title: 'MuleSoft API Integration',
    intro:
      'Jawanexis Technologies provides enterprise-grade MuleSoft integration services to connect applications, data, and systems across organizations.',
    details: [
      'We help businesses implement API-led connectivity architecture to streamline integrations and improve operational efficiency.',
      'Our MuleSoft experts deliver scalable integration solutions for enterprises using the MuleSoft Anypoint Platform.',
    ],
    capabilities: [
      'MuleSoft API Development',
      'API-Led Connectivity Implementation',
      'Enterprise System Integration and cloud integration',
      'Legacy system modernization, Salesforce integration, and API gateway implementation',
    ],
    technologies: ['MuleSoft Anypoint Platform', 'REST APIs', 'GraphQL APIs', 'API Gateway'],
    benefitsTitle: 'Benefits of MuleSoft Integration',
    benefitsSubtitle: 'Scalable, resilient, and enterprise-ready integration solutions designed for real-world complexity',
    benefits: [
      { title: 'Scalable API-Led Architecture', description: 'A structured API-led approach using System, Process, and Experience layers enables reusable and governed integrations. It simplifies complex system interactions and supports long-term scalability and maintainability.' },
      { title: 'Real-Time & Event-Driven Systems', description: 'Enables asynchronous processing and event-based communication for instant data flow. Improves responsiveness, reduces latency, and enhances system performance.' },
      { title: 'Seamless Enterprise Integration', description: 'Connects CRM, ERP, databases, and third-party platforms into a unified ecosystem. Ensures smooth communication and eliminates data silos.' },
      { title: 'Advanced Data Engineering', description: 'Supports large-scale data transformation and pipelines using optimized processing. Ensures accurate and efficient data movement across systems.' },
      { title: 'Cloud-Native Scalability', description: 'Leverages modern cloud platforms like CloudHub 2.0 for scalable deployments. Ensures high availability and optimized resource usage.' },
      { title: 'Modernization & Future Readiness', description: 'Transforms legacy systems into API-led architectures. Improves governance, maintainability, and adaptability.' },
      { title: 'Reliability & Fault Tolerance', description: 'Implements retry strategies, error handling, and fault-tolerant flows. Ensures stable and resilient integrations.' },
      { title: 'Monitoring & Observability', description: 'Provides real-time logging, alerts, and performance tracking. Enables faster issue detection and resolution.' },
    ],
    applications: [
      { title: 'Salesforce & CRM Integrations', description: 'Enables seamless data synchronization between Salesforce and enterprise systems. Improves automation and customer insights.' },
      { title: 'ERP & Enterprise Systems Integration', description: 'Connects ERP systems with financial and operational platforms. Ensures consistent workflows and data accuracy.' },
      { title: 'Data Warehousing & Analytics', description: 'Integrates platforms like Snowflake and SQL systems for analytics pipelines. Supports real-time insights and business intelligence.' },
      { title: 'API & Third-Party Integrations', description: 'Connects external APIs with internal systems securely. Improves interoperability and flexibility.' },
      { title: 'File & SFTP Integrations', description: 'Automates file transfers and batch processing across systems. Ensures reliable data exchange workflows.' },
      { title: 'Event-Driven Applications', description: 'Builds real-time systems using messaging and event-based architecture. Improves responsiveness and scalability.' },
      { title: 'Legacy System Modernization', description: 'Transforms outdated systems into modern API-led architectures. Improves performance and maintainability.' },
      { title: 'Cloud Migration & Integration', description: 'Supports migration to CloudHub 2.0 and cloud-native environments. Ensures minimal downtime and optimized performance.' },
    ],
  },
  {
    slug: 'quality-engineering-testing',
    title: 'Quality Engineering & Testing',
    intro:
      'Quality is a core component of every product we deliver. Jawanexis Technologies offers comprehensive software testing and quality engineering services.',
    details: [
      'Our QA practice ensures reliable and high-performance applications before deployment.',
      'Our testing process ensures stable, secure, and high-quality software products.',
    ],
    capabilities: [
      'Functional testing, automation testing, performance testing, security testing',
      'API testing, regression testing, mobile app testing',
      'Test strategy planning and execution',
      'Continuous quality validation in agile release cycles',
    ],
    technologies: ['Selenium', 'Cypress', 'Playwright', 'JUnit', 'TestNG', 'Postman'],
    benefits: [
      { title: 'Improved Software Quality', description: 'Ensures applications are stable, reliable, and error-free. Enhances overall user experience.' },
      { title: 'Risk Reduction', description: 'Identifies and resolves issues early in development. Prevents costly failures post-deployment.' },
      { title: 'Performance Optimization', description: 'Validates system behavior under different conditions. Ensures consistent performance.' },
      { title: 'Faster Release Cycles', description: 'Streamlined testing processes accelerate delivery. Maintains quality while reducing time-to-market.' },
      { title: 'Automation Efficiency', description: 'Reduces manual effort through automated testing processes. Improves speed and consistency.' },
      { title: 'Higher Accuracy', description: 'Minimizes human errors in testing workflows. Ensures reliable and repeatable results.' },
      { title: 'Scalable Testing', description: 'Supports testing across multiple environments and scenarios. Handles complex systems effectively.' },
      { title: 'Continuous Integration Support', description: 'Integrates with CI/CD pipelines for faster feedback. Enables continuous quality improvement.' },
    ],
  },
  {
    slug: 'it-resource-staffing',
    title: 'IT Resource Staffing',
    intro:
      'Jawanexis Technologies provides flexible IT staffing solutions that help businesses scale their technology teams quickly.',
    details: [
      'We offer experienced developers, engineers, and technical specialists for short-term and long-term project requirements.',
      'Our engagement models include Fixed Bid, Time and Material, and Staff Augmentation.',
    ],
    capabilities: [
      'Fixed Bid Model for clearly defined scope, timeline, and deliverables',
      'Time and Material model for evolving requirements',
      'Staff Augmentation to extend existing teams with specialized talent',
      'Resource availability across Full Stack, Frontend, Backend, MuleSoft, Mobile, QA, and DevOps',
    ],
    technologies: ['Full Stack', 'Frontend', 'Backend', 'MuleSoft', 'Mobile', 'QA', 'DevOps'],
    benefits: [
      { title: 'Deep Industry Knowledge', description: 'Strong understanding of modern technologies and business workflows. Enables delivery of solutions aligned with real-world requirements.' },
      { title: 'Tailored Solutions', description: 'Approaches customized to meet specific business challenges and goals. Ensures maximum efficiency and relevance.' },
      { title: 'Scalable Systems', description: 'Solutions designed to grow with evolving business needs. Supports long-term performance and expansion.' },
      { title: 'Proven Methodologies', description: 'Use of reliable development practices and industry standards. Ensures consistency, quality, and predictable outcomes.' },
      { title: 'Flexible Collaboration', description: 'Adapts to different project needs and timelines. Ensures smooth and efficient teamwork.' },
      { title: 'Cost Efficiency', description: 'Optimizes resource usage based on project scope. Reduces unnecessary expenses.' },
      { title: 'Predictable Delivery', description: 'Structured approaches ensure timely project completion. Improves planning and execution.' },
      { title: 'Scalable Resources', description: 'Easily adjust team size based on requirements. Supports dynamic business needs.' },
      { title: 'Process Transparency', description: 'Clear workflows provide visibility across all stages. Improves communication and trust.' },
      { title: 'Agile Execution', description: 'Supports iterative development and quick adjustments. Enhances flexibility and responsiveness.' },
      { title: 'Continuous Improvement', description: 'Regular feedback cycles refine processes and outcomes. Drives better results over time.' },
      { title: 'Efficient Delivery', description: 'Optimized processes reduce delays and inefficiencies. Ensures consistent project progress.' },
      { title: 'Access to Expertise', description: 'Skilled professionals across multiple domains. Ensures high-quality development and execution.' },
      { title: 'Faster Project Delivery', description: 'Experienced teams accelerate development timelines. Reduces time-to-market.' },
      { title: 'Scalable Workforce', description: 'Easily expand or reduce team based on needs. Provides flexibility for different project sizes.' },
      { title: 'Quality Assurance', description: 'Ensures work meets industry standards and best practices. Maintains consistency and reliability.' },
    ],
  },
  {
    slug: 'ui-development',
    title: 'UI Development',
    intro: 'Creating intuitive and visually engaging interfaces that elevate user interaction and usability.',
    details: ['Focus on responsive design, accessibility, and cohesive interface patterns.', 'Used for modern product experiences.'],
    capabilities: ['Design systems', 'Interaction design', 'Responsive UI', 'Accessibility enhancements'],
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    benefits: [
      { title: 'High Performance Applications', description: 'Optimized frameworks ensure fast load times and smooth execution. Enhances overall user experience and responsiveness.' },
      { title: 'Flexibility & Adaptability', description: 'Easily adapts to changing business requirements and future upgrades. Supports continuous improvement and innovation.' },
      { title: 'Seamless Integration', description: 'Works efficiently with third-party tools and systems. Enables smooth data flow across platforms.' },
      { title: 'Future-Ready Solutions', description: 'Built using modern, evolving technologies. Ensures long-term sustainability and relevance.' },
    ],
  },
  {
    slug: 'react-js-development',
    title: 'React JS Development',
    intro: 'Developing dynamic and scalable user interfaces using component-based architecture.',
    details: ['Reusable components for consistency.', 'Efficient rendering with React diffing and hooks.'],
    capabilities: ['Component-based UI', 'State management', 'Performance optimization', 'Reusable libraries'],
    technologies: ['React.js'],
    benefits: [
      { title: 'High Performance Applications', description: 'Optimized frameworks ensure fast load times and smooth execution. Enhances overall user experience and responsiveness.' },
      { title: 'Flexibility & Adaptability', description: 'Easily adapts to changing business requirements and future upgrades. Supports continuous improvement and innovation.' },
      { title: 'Seamless Integration', description: 'Works efficiently with third-party tools and systems. Enables smooth data flow across platforms.' },
      { title: 'Future-Ready Solutions', description: 'Built using modern, evolving technologies. Ensures long-term sustainability and relevance.' },
    ],
  },
  {
    slug: 'angular-development',
    title: 'Angular Development',
    intro: 'Building structured and maintainable applications with a robust framework designed for scalability.',
    details: ['Enterprise patterns with MVC architecture.', 'Built-in tooling for forms, routing, and validation.'],
    capabilities: ['Two-way data binding', 'Modular architecture', 'Dependency injection', 'Enterprise tooling'],
    technologies: ['Angular'],
    benefits: [
      { title: 'High Performance Applications', description: 'Optimized frameworks ensure fast load times and smooth execution. Enhances overall user experience and responsiveness.' },
      { title: 'Flexibility & Adaptability', description: 'Easily adapts to changing business requirements and future upgrades. Supports continuous improvement and innovation.' },
      { title: 'Seamless Integration', description: 'Works efficiently with third-party tools and systems. Enables smooth data flow across platforms.' },
      { title: 'Future-Ready Solutions', description: 'Built using modern, evolving technologies. Ensures long-term sustainability and relevance.' },
    ],
  },
  {
    slug: 'next-js-development',
    title: 'Next JS Development',
    intro: 'Delivering high-performance applications with server-side rendering and optimized SEO capabilities.',
    details: ['Hybrid static & server rendering for fast UX.', 'Out-of-the-box performance and routing improvements.'],
    capabilities: ['SSR', 'SSG', 'API routes', 'Image optimization'],
    technologies: ['Next.js'],
    benefits: [
      { title: 'High Performance Applications', description: 'Optimized frameworks ensure fast load times and smooth execution. Enhances overall user experience and responsiveness.' },
      { title: 'Flexibility & Adaptability', description: 'Easily adapts to changing business requirements and future upgrades. Supports continuous improvement and innovation.' },
      { title: 'Seamless Integration', description: 'Works efficiently with third-party tools and systems. Enables smooth data flow across platforms.' },
      { title: 'Future-Ready Solutions', description: 'Built using modern, evolving technologies. Ensures long-term sustainability and relevance.' },
    ],
  }
];

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceDetails.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | Jawanexis Technologies',
    };
  }

  return {
    title: `${service.title} | Jawanexis Technologies`,
    description: service.intro,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#000000] min-h-screen">
      <section className="pt-32 pb-14 bg-gradient-to-b from-[#0B0B0B] to-[#000000] border-b border-[#222222]">
        <div className="container-custom">
          <Link
            href="/services"
            className="inline-flex items-center text-[#B3B3B3] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Services
          </Link>

          <h1 className="text-[34px] md:text-[52px] font-bold text-white mb-5">{service.title}</h1>
          <p className="text-[#B3B3B3] text-lg md:text-xl leading-relaxed max-w-4xl">{service.intro}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-custom grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[#111111] border border-[#222222] rounded-2xl p-8">
            <h2 className="text-white text-2xl font-semibold mb-5">Service Overview</h2>
            <div className="space-y-4">
              {service.details.map((paragraph) => (
                <p key={paragraph} className="text-[#B3B3B3] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="text-white text-xl font-semibold mt-8 mb-4">Key Capabilities</h3>
            <ul className="space-y-3">
              {service.capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#B3B3B3] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <section className="mt-16">
              <h3 className="text-white text-3xl font-bold mb-4">{service.benefitsTitle || `Benefits of ${service.title}`}</h3>
              {service.benefitsSubtitle && <p className="text-gray-400 text-lg mb-8">{service.benefitsSubtitle}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {service.benefits.map((benefit) => (
                  <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
                ))}
              </div>
            </section>

            {service.applications && (
              <section className="mt-16">
                <h3 className="text-white text-3xl font-bold mb-4">{service.applicationsTitle ?? `Applications of ${service.title}`}</h3>
                <p className="text-gray-400 text-lg mb-8">{service.applicationsSubtitle ?? 'Real-world integration use cases powering enterprise ecosystems'}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                  {service.applications.map((app) => (
                    <BenefitCard key={app.title} title={app.title} description={app.description} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="bg-[#111111] border border-[#222222] rounded-2xl p-8 h-fit">
            <h3 className="text-white text-xl font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#D0D0D0] text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
