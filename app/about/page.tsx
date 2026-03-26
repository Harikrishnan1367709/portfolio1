'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Eye, Award, Users as Users2 } from 'lucide-react';
import CTA from '@/components/CTA';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'XXXXXXXXXXXX',
      role: 'Co-Founder & CEO',
      image: '/team photo.jpeg',
    },
    {
      name: 'XXXXXXXXXXXX',
      role: 'Head of Design',
      image: '/team photo.jpeg',
    },
    {
      name: 'XXXXXXXXXXXX',
      role: 'Head of Engineering',
      image: '/team photo.jpeg',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation Driven',
      description: 'We focus on building modern digital solutions that help businesses stay ahead in the evolving technology landscape.',
    },
    {
      icon: Eye,
      title: 'Client-Centric Approach',
      description: 'We work closely with clients to understand their goals and deliver solutions that align with their business strategy.',
    },
    {
      icon: Award,
      title: 'Quality & Reliability',
      description: 'We follow best development practices and rigorous testing to ensure software quality and performance.',
    },
    {
      icon: Users2,
      title: 'Experienced Team',
      description: 'Our developers bring strong expertise in modern frameworks, integration platforms, and enterprise technologies.',
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-[40px] md:text-[64px] font-bold text-white mb-6">
              About Jawanexis Technologies
            </h1>
            <p className="text-[#B3B3B3] text-xl leading-relaxed">
              A forward-thinking technology company focused on delivering innovative digital solutions that help businesses grow, transform, and scale in the modern digital economy
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6">
                Who We Are
              </h2>
              <p className="text-[#B3B3B3] text-lg leading-relaxed mb-6">
                Jawanexis Technologies is a modern software development and technology solutions company based in Coimbatore, India, delivering scalable digital solutions for startups, enterprises, and global businesses.
              </p>
              <p className="text-[#B3B3B3] text-lg leading-relaxed">
                We specialize in Full Stack Development, Mobile App Development, Web Applications, MuleSoft API Integrations, Quality Engineering, and IT Resource Staffing. Our technology-driven approach helps businesses transform ideas into high-performance digital products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#161616] border border-[#222222] rounded-2xl p-12"
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="text-white" size={32} />
                    <h3 className="text-white font-bold text-2xl">Our Vision</h3>
                  </div>
                  <p className="text-[#B3B3B3] leading-relaxed">
                    To become a globally recognized technology partner that empowers businesses through innovative software solutions, digital transformation, and cutting-edge technologies.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="text-white" size={32} />
                    <h3 className="text-white font-bold text-2xl">Our Mission</h3>
                  </div>
                  <p className="text-[#B3B3B3] leading-relaxed">
                    To deliver high-quality technology solutions that help businesses accelerate growth, improve operational efficiency, and create exceptional digital experiences for their customers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[32px] md:text-[48px] font-bold text-white text-center mb-12"
            >
              Our Values
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0B0B0B] border border-[#222222] rounded-2xl p-8 hover:border-white transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="text-black" size={28} />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#B3B3B3] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[32px] md:text-[48px] font-bold text-white mb-10"
            >
              Our Core Team
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto mb-10 w-fit overflow-hidden rounded-2xl border border-[#222222]"
            >
              <Image
                src="/team photo.jpeg"
                alt="Jawanexis core team"
                width={1500}
                height={900}
                className="h-[380px] w-[380px] object-cover md:h-[460px] md:w-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </motion.div>

            <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="w-full overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#06070A] text-center"
                >
                  <div className="relative h-[320px] bg-[#D9D9D9]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="border-t border-[#1E1E1E] px-4 py-4">
                    <h3 className="text-white text-[30px] font-semibold leading-tight">{member.name}</h3>
                    <p className="mt-2 text-[#B8C7E3] text-sm">{member.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
