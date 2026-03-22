import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type ServiceDetail = {
  slug: string;
  title: string;
  intro: string;
  details: string[];
  capabilities: string[];
  technologies: string[];
};

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
  },
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
