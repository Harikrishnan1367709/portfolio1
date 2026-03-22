'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Server, Globe, Link2, CircleCheck as CheckCircle, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      slug: 'full-stack-development',
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web solutions for startups, SaaS, and enterprises.',
    },
    {
      slug: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'High-performance native and cross-platform apps for iOS and Android.',
    },
    {
      slug: 'web-application-development',
      icon: Server,
      title: 'Web Application Development',
      description: 'Scalable, secure platforms for business and enterprise needs.',
    },
    {
      slug: 'website-development',
      icon: Globe,
      title: 'Website Development',
      description: 'SEO-friendly, responsive websites for startups and enterprises.',
    },
    {
      slug: 'mulesoft-api-integration',
      icon: Link2,
      title: 'MuleSoft API Integration',
      description: 'Connect systems and streamline business operations.',
    },
    {
      slug: 'quality-engineering-testing',
      icon: CheckCircle,
      title: 'Quality Engineering & Testing',
      description: 'Secure, reliable, and high-performance software QA.',
    },
    {
      slug: 'it-resource-staffing',
      icon: Users,
      title: 'IT Resource Staffing',
      description: 'Flexible, skilled tech teams for short or long-term projects.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-padding bg-[#000000]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            We deliver comprehensive digital solutions across the entire technology stack
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="group bg-[#161616] border border-[#222222] rounded-2xl p-8 transition-all duration-300 hover:border-white"
            >
              <motion.div
                className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6"
                variants={{
                  rest: {
                    scale: 1,
                    rotate: 0,
                    y: [0, -3, 0],
                    transition: {
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.08,
                    },
                  },
                  hover: {
                    y: -8,
                    scale: 1.12,
                    rotate: [0, -10, 10, 0],
                    transition: {
                      duration: 0.6,
                      ease: 'easeInOut',
                    },
                  },
                }}
              >
                <service.icon className="text-black" size={28} />
              </motion.div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-[#B3B3B3] leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center text-white font-medium hover:text-[#E5E5E5] transition-colors"
              >
                View Details
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
