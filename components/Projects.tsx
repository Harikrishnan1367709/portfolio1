 'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      description: 'Built a scalable multi-tenant SaaS platform serving over 10,000 users with real-time analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      category: 'Fintech',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Developed a HIPAA-compliant mobile application for patient management and telemedicine.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      category: 'Healthcare',
      tags: ['React Native', 'Firebase'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Created a high-performance e-commerce platform with advanced search and personalization.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      category: 'E-Commerce',
      tags: ['Next.js', 'PostgreSQL'],
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Built an intelligent analytics platform with machine learning insights and predictive modeling.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'Web3',
      tags: ['React', 'Python', 'AWS'],
    },
  ];

  return (
    <section className="section-padding bg-[#0B0B0B]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            Showcasing our portfolio of successful digital transformations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#161616] border border-[#222222] hover:border-white transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#222222] text-[#B3B3B3] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-[#E5E5E5] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#B3B3B3] mb-6 leading-relaxed">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-flex items-center text-white font-medium group-hover:gap-2 transition-all duration-300"
                >
                  View Case Study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            View All Projects
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
