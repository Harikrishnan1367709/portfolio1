'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import CTA from '@/components/CTA';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      description: 'Built a scalable multi-tenant SaaS platform serving over 10,000 users with real-time analytics and reporting capabilities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      category: 'Fintech',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      client: 'Global Finance Corp',
      year: '2024',
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Developed a HIPAA-compliant mobile application for patient management and telemedicine consultations with end-to-end encryption.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      category: 'Healthcare',
      tags: ['React Native', 'Firebase', 'Node.js'],
      client: 'MedTech Solutions',
      year: '2024',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Created a high-performance e-commerce platform with advanced search, personalization, and seamless payment integration.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      category: 'E-Commerce',
      tags: ['Next.js', 'PostgreSQL', 'Stripe'],
      client: 'RetailHub Inc',
      year: '2023',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Built an intelligent analytics platform with machine learning insights and predictive modeling capabilities for data-driven decisions.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'Web3',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      client: 'DataVision Analytics',
      year: '2023',
    },
    {
      title: 'Supply Chain Management System',
      description: 'Developed an end-to-end supply chain management platform with real-time tracking and inventory optimization.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      category: 'Enterprise',
      tags: ['Angular', 'Java', 'Oracle'],
      client: 'LogiTech Corp',
      year: '2023',
    },
    {
      title: 'Food Delivery Platform',
      description: 'Built a comprehensive food delivery platform with real-time order tracking and integrated payment processing.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      category: 'FoodTech',
      tags: ['Flutter', 'Node.js', 'MongoDB'],
      client: 'QuickEats',
      year: '2023',
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
              Our Projects
            </h1>
            <p className="text-[#B3B3B3] text-xl leading-relaxed">
              Explore our portfolio of successful digital transformations and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-[#6B6B6B] text-sm">{project.year}</span>
                  </div>

                  <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-[#E5E5E5] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#B3B3B3] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#222222] text-[#B3B3B3] text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#6B6B6B] text-sm">Client: {project.client}</span>
                    <ExternalLink className="text-white group-hover:translate-x-1 transition-transform" size={18} />
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
