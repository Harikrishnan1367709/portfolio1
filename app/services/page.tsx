'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Workflow, TestTube as TestTube2, Users } from 'lucide-react';
import CTA from '@/components/CTA';

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end development of scalable and high-performance digital platforms using modern frontend and backend technologies.',
      features: [
        'React.js, Next.js, Angular, Vue.js',
        'Node.js, Express.js, Java Spring Boot',
        'MongoDB, PostgreSQL, MySQL',
        'AWS, Google Cloud, Docker, Kubernetes',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'High-performance mobile applications for Android, iOS, and cross-platform environments with seamless user experiences.',
      features: [
        'Native iOS (Swift) and Android (Kotlin)',
        'React Native, Flutter, Ionic',
        'Firebase integration',
        'Mobile backend services',
      ],
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Modern, scalable, and secure web applications designed to solve complex business challenges.',
      features: [
        'SaaS product development',
        'Enterprise web platforms',
        'CRM and ERP systems',
        'Business intelligence dashboards',
      ],
    },
    {
      icon: Workflow,
      title: 'MuleSoft API Integration',
      description: 'Enterprise-grade MuleSoft integration services to connect applications, data, and systems across organizations.',
      features: [
        'API-led connectivity implementation',
        'Enterprise system integration',
        'Cloud integration solutions',
        'Salesforce integration',
      ],
    },
    {
      icon: TestTube2,
      title: 'Quality Engineering & Testing',
      description: 'Comprehensive software testing and quality engineering services to ensure reliable and high-performance applications.',
      features: [
        'Functional and automation testing',
        'Performance and security testing',
        'API testing with Postman',
        'Selenium, Cypress, Playwright',
      ],
    },
    {
      icon: Users,
      title: 'IT Resource Staffing',
      description: 'Flexible IT staffing solutions with experienced developers and technical specialists for your project needs.',
      features: [
        'Fixed bid model',
        'Time & material (T&M)',
        'Staff augmentation',
        'Scalable workforce solutions',
      ],
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0B0B] to-[#000000]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-[40px] md:text-[64px] font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-[#B3B3B3] text-xl leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive digital innovation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-black" size={32} />
                  </div>
                  <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#B3B3B3] text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#161616] border border-[#222222] rounded-2xl p-8">
                    <h3 className="text-white font-semibold text-xl mb-6">Key Capabilities</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-[#B3B3B3] leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
