'use client';

import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Globe,
  Workflow,
  TestTube as TestTube2,
  Users,
  Layout,
  Atom,
  Box,
  Zap,
  Database,
  Server,
} from 'lucide-react';
import CTA from '@/components/CTA';

type ServiceCardData = {
  icon?: ElementType;
  title: string;
  description?: string;
  tech: string[];
  slug?: string;
};

type ServiceSectionData = {
  title: string;
  description: string;
  cards: ServiceCardData[];
  cols?: string;
};

const serviceSections: ServiceSectionData[] = [
  {
    title: 'Front-end Development Services',
    description: 'Designing and developing scalable front-end solutions that deliver exceptional user experiences. We combine performance, accessibility, and aesthetics to build interfaces users love.',
    cols: 'grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2',
    cards: [
      {
        icon: Layout,
        title: 'UI Development',
        description: 'Creating intuitive and visually engaging interfaces that enhance user interaction and usability. Focused on responsive design, accessibility, and delivering a seamless user experience across devices.',
        tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      },
      {
        icon: Atom,
        title: 'React JS Development',
        description: 'Developing dynamic and scalable user interfaces using a component-based architecture. Ensures high performance, reusability, and smooth interactions in modern web applications.',
        tech: ['React.js'],
      },
      {
        icon: Box,
        title: 'Angular Development',
        description: 'Building structured and maintainable applications with a robust framework designed for scalability. Well-suited for complex and enterprise-level front-end solutions.',
        tech: ['Angular'],
      },
      {
        icon: Zap,
        title: 'Next JS Development',
        description: 'Delivering high-performance applications with server-side rendering and optimized SEO capabilities. Enhances speed, efficiency, and overall user experience for modern web platforms.',
        tech: ['Next.js'],
      },
    ],
  },
  {
    title: 'Full Stack Development',
    description: 'Building robust and scalable applications by integrating powerful frontend and backend technologies. We deliver end-to-end solutions focused on performance, reliability, and growth.',
    cards: [
      {
        icon: Atom,
        title: 'Frontend Development',
        description: 'Creating engaging and responsive user interfaces that enhance user experience across modern web platforms. Focused on performance, accessibility, and seamless interaction.',
        tech: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      },
      {
        icon: Server,
        title: 'Backend Development',
        description: 'Powering applications with robust and scalable server-side logic and architecture. Ensuring secure data handling, efficient processing, and reliable system performance.',
        tech: ['Node.js', 'Express.js', 'Java Spring Boot', 'Python Django', 'REST APIs', 'GraphQL APIs'],
      },
      {
        icon: Database,
        title: 'Database Technologies',
        description: 'Managing and organizing data with efficient, scalable, and secure database solutions. Designed to support high performance, reliability, and seamless data access.',
        tech: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
      },
      {
        icon: Globe,
        title: 'Cloud & DevOps',
        description: 'Streamlining development and deployment processes with modern cloud infrastructure and automation. Ensuring scalability, reliability, and faster delivery through optimized workflows.',
        tech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
      },
    ],
  },
  {
    title: 'Mobile App Development',
    description: 'Building seamless and high-performance mobile experiences across iOS and Android platforms. Delivering intuitive, scalable, and user-centric applications for modern businesses.',
    cards: [
      {
        icon: Smartphone,
        title: 'Native Development',
        description: 'Delivering high-performance mobile applications tailored specifically for iOS and Android platforms. Focused on smooth user experience, reliability, and platform-optimized performance.',
        tech: ['Swift (iOS)', 'Kotlin (Android)'],
      },
      {
        icon: Smartphone,
        title: 'Cross Platform',
        description: 'Creating mobile applications that run seamlessly across multiple platforms from a single codebase. Ensuring faster development, consistency, and cost-effective solutions.',
        tech: ['React Native', 'Flutter', 'Ionic'],
      },
      {
        icon: Smartphone,
        title: 'Backend Services',
        description: 'Supporting mobile applications with secure and scalable backend systems and APIs. Enabling seamless data flow, authentication, and real-time functionality.',
        tech: ['Firebase', 'Node.js APIs', 'GraphQL APIs'],
      },
      {
        icon: Smartphone,
        title: 'Applications',
        description: 'Building impactful mobile solutions tailored to diverse business needs and user demands. From startups to enterprises, delivering applications that drive engagement and growth.',
        tech: ['Business Apps', 'E-commerce Platforms', 'SaaS Products', 'Enterprise Applications', 'On-demand Platforms'],
      },
    ],
  },
  {
    title: 'Web Application Development',
    description: 'Crafting dynamic and scalable web solutions designed to support evolving business requirements. Focused on delivering smooth performance, strong architecture, and intuitive user experiences.',
    cards: [
      {
        icon: Globe,
        slug: 'web-application-development',
        title: 'Expertise',
        description: 'Delivering advanced web solutions tailored to complex business requirements and workflows. Focused on building scalable platforms that enhance efficiency, automation, and user experience.',
        tech: ['SaaS Product Development', 'Enterprise Platforms', 'CRM & ERP Systems', 'Customer Portals', 'Workflow Automation', 'BI Dashboards'],
      },
      {
        icon: Globe,
        slug: 'web-application-development',
        title: 'Technologies',
        description: 'Leveraging modern tools and frameworks to build high-performance and scalable applications. Ensuring reliability, flexibility, and seamless integration across digital platforms.',
        tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'AWS'],
      },
    ],
  },
  {
    title: 'Website Development',
    description: 'Creating impactful websites that combine visual appeal with functionality and speed. We deliver scalable, SEO-friendly solutions tailored to your business goals.',
    cards: [
      {
        icon: Globe,
        slug: 'website-development',
        title: 'Types of Websites',
        description: 'Creating tailored website solutions designed to meet diverse business goals and user needs. From corporate platforms to startup launches, ensuring performance, scalability, and strong digital presence.',
        tech: ['Corporate Websites', 'Business Websites', 'Startup Landing Pages', 'Portfolio Websites', 'E-commerce Websites', 'Custom CMS Websites'],
      },
      {
        icon: Globe,
        slug: 'website-development',
        title: 'Technologies',
        description: 'Utilizing modern development tools and frameworks to deliver fast, secure, and scalable websites. Ensuring flexibility, seamless integration, and long-term performance.',
        tech: ['Next.js', 'React.js', 'WordPress', 'Headless CMS', 'Shopify', 'Webflow'],
      },
    ],
  },
  {
    title: 'MuleSoft API Integration',
    description: 'Seamless connectivity across systems, applications, and data through API-led architectures. Focused on scalability, reliability, and real-world enterprise integration needs.',
    cards: [
      {
        icon: Workflow,
        slug: 'mulesoft-api-integration',
        title: 'Services',
        tech: ['MuleSoft API Development', 'API-led Connectivity', 'Enterprise Integration', 'Cloud Integration', 'Legacy Modernization', 'Salesforce Integration', 'API Gateway'],
      },
    ],
  },
  {
    title: 'Quality Engineering & Testing',
    description: 'Ensuring reliable, secure, and high-performing applications through comprehensive testing strategies. Focused on delivering consistent quality across every stage of the development lifecycle.',
    cards: [
      {
        icon: TestTube2,
        slug: 'quality-engineering-testing',
        title: 'Testing Services',
        description: 'Ensuring application quality through comprehensive testing strategies across functionality, performance, and security. Focused on delivering stable, reliable, and high-performing software experiences.',
        tech: ['Functional Testing', 'Automation Testing', 'Performance Testing', 'Security Testing', 'API Testing', 'Regression Testing', 'Mobile Testing'],
      },
      {
        icon: TestTube2,
        slug: 'quality-engineering-testing',
        title: 'Tools',
        description: 'Utilizing modern testing frameworks and automation tools to enhance accuracy and efficiency. Enabling faster releases with consistent quality and reduced manual effort.',
        tech: ['Selenium', 'Cypress', 'Playwright', 'JUnit', 'TestNG', 'Postman'],
      },
    ],
  },
  {
    title: 'IT Resource Staffing',
    description: 'Access to skilled technology professionals tailored to your project needs and timelines. Flexible engagement models that support scalability, efficiency, and faster delivery.',
    cards: [
      {
        icon: Users,
        slug: 'it-resource-staffing',
        title: 'Engagement Models',
        description: 'Flexible collaboration approaches designed to match project requirements and business goals. Supporting predictable delivery, adaptability, and efficient resource utilization.',
        tech: ['Fixed Bid', 'Time & Material', 'Staff Augmentation'],
      },
      {
        icon: Users,
        slug: 'it-resource-staffing',
        title: 'Details',
        description: 'Structured workflows and agile methodologies that ensure transparency and timely delivery. Focused on scalability, efficiency, and continuous improvement throughout the development cycle.',
        tech: ['Predictable timelines', 'Agile process', 'Scalable workforce', 'Specialized talent'],
      },
      {
        icon: Users,
        slug: 'it-resource-staffing',
        title: 'Resources',
        description: 'Access to skilled professionals across various domains to support your development needs. Ensuring the right expertise is available to accelerate project success.',
        tech: ['Full Stack Developers', 'Frontend Developers', 'Backend Developers', 'MuleSoft Developers', 'Mobile Developers', 'QA Engineers', 'DevOps Engineers'],
      },
    ],
  },
];

function ServiceCard({ icon: Icon, title, description, tech, slug }: ServiceCardData) {
  const sectionSlugMapping: Record<string, string> = {
    'Expertise': 'web-application-development',
    'Technologies': 'web-application-development',
    'Native Development': 'mobile-app-development',
    'Cross Platform': 'mobile-app-development',
    'Backend Services': 'mobile-app-development',
    'Applications': 'mobile-app-development',
    'Frontend Development': 'full-stack-development',
    'Backend Development': 'full-stack-development',
    'Database Technologies': 'full-stack-development',
    'Cloud & DevOps': 'full-stack-development',
  };

  const fallbackSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const targetSlug = slug ?? sectionSlugMapping[title] ?? fallbackSlug;

  return (
    <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <div>
        {Icon && <Icon className="h-8 w-8 text-cyan-400 mb-4" />}
        <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
        {description && <p className="text-gray-400 text-sm leading-relaxed">{description}</p>}
      </div>

      <a href={`/services/${targetSlug}`} className="text-cyan-400 font-medium hover:text-cyan-300 mt-4">
        Learn More →
      </a>
    </div>
  );
}

function ServiceSection({ title, description, cards, cols }: ServiceSectionData) {
  const gridCols = cols ?? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
      <p className="text-[#B3B3B3] text-lg max-w-3xl mb-8">{description}</p>
      <div className={gridCols}>
        {cards.map((card) => (
          <ServiceCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            tech={card.tech}
            slug={card.slug}
          />
        ))}
      </div>
      <div className="mt-10 h-px bg-[#222222]" />
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#000000] min-h-screen text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Our Services</h1>
        </div>

        <div className="mt-14">
          {serviceSections.map((section) => (
            <ServiceSection
              key={section.title}
              title={section.title}
              description={section.description}
              cards={section.cards}
            />
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}
