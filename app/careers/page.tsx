'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import CTA from '@/components/CTA';

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Coimbatore, India',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced Full Stack Developer to join our team and work on cutting-edge projects.',
    },
    {
      title: 'React Native Developer',
      location: 'Coimbatore, India / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our mobile development team to build innovative cross-platform applications using React Native.',
    },
    {
      title: 'MuleSoft Integration Specialist',
      location: 'Coimbatore, India',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Work with enterprise clients to design and implement API-led connectivity solutions using MuleSoft.',
    },
    {
      title: 'QA Automation Engineer',
      location: 'Coimbatore, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design and implement automated testing frameworks to ensure high-quality software delivery.',
    },
    {
      title: 'UI/UX Designer',
      location: 'Coimbatore, India',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create beautiful and intuitive user experiences for web and mobile applications.',
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
              Join Our Team
            </h1>
            <p className="text-[#B3B3B3] text-xl leading-relaxed">
              Build your career with us and work on exciting projects that make a real impact
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-white text-center mb-6">
              Current Openings
            </h2>
            <p className="text-[#B3B3B3] text-center max-w-2xl mx-auto">
              Explore opportunities to work with cutting-edge technologies and talented professionals
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-8 hover:border-white transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-[#E5E5E5] transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-[#B3B3B3]">
                        <MapPin size={16} />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#B3B3B3]">
                        <Clock size={16} />
                        <span className="text-sm">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#B3B3B3]">
                        <Briefcase size={16} />
                        <span className="text-sm">{job.experience}</span>
                      </div>
                    </div>

                    <p className="text-[#B3B3B3] leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <Link
                    href={`/contact?position=${encodeURIComponent(job.title)}`}
                    className="bg-white text-black px-6 py-3 rounded-lg hover:bg-[#E5E5E5] transition-all duration-300 font-medium text-center whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
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
