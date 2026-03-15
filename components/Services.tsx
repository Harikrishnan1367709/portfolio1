'use client';

import { motion } from 'framer-motion';
import { Palette, Code, Smartphone, Server, CircleCheck as CheckCircle, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Experience Design',
      description: 'Creating intuitive and engaging user experiences that delight customers and drive business results through research-driven design.',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, performant, and accessible web applications using modern frameworks like React, Next.js, and Vue.js.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust, scalable server-side solutions with Node.js, Express, and modern database technologies.',
    },
    {
      icon: CheckCircle,
      title: 'QA Testing',
      description: 'Ensuring software quality through comprehensive testing strategies including automation, performance, and security testing.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Driving growth through data-driven marketing strategies, SEO optimization, and performance analytics.',
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
              whileHover={{ y: -8 }}
              className="group bg-[#161616] border border-[#222222] rounded-2xl p-8 transition-all duration-300 hover:border-white cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-black" size={28} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-[#B3B3B3] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
