'use client';

import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function ClientsPage() {
  const clientSectors = [
    {
      sector: 'Enterprise & IT Services',
      description: 'Technology and software partners delivering business-critical systems.',
      clients: ['Aes Technologies Private limited', 'Alphaspects', 'axolent'],
    },
    {
      sector: 'Fintech & Digital Platforms',
      description: 'Secure and scalable digital products for finance and modern operations.',
      clients: ['Revamp', 'Queless'],
    },
    {
      sector: 'Consumer & EdTech',
      description: 'User-first applications focused on engagement, learning, and growth.',
      clients: ['Neotouch', 'Jawa edtech'],
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
              Our Clients
            </h1>
            <p className="text-[#B3B3B3] text-xl leading-relaxed">
              Trusted by leading companies across diverse industries worldwide
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {clientSectors.map((group, groupIndex) => (
              <motion.section
                key={group.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                className="rounded-2xl border border-[#1E1E1E] bg-[#0B0B0B] p-6 md:p-8"
              >
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">{group.sector}</h2>
                  <p className="mt-2 text-[#B3B3B3] text-base leading-relaxed">{group.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.clients.map((client, clientIndex) => (
                    <motion.div
                      key={`${group.sector}-${client}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: clientIndex * 0.04 }}
                      whileHover={{ scale: 1.03 }}
                      className="bg-[#161616] border border-[#222222] rounded-xl px-6 py-6 flex items-center justify-center text-center hover:border-white transition-all duration-300 cursor-pointer min-h-[100px]"
                    >
                      <span className="text-white font-semibold">{client}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </div>
  );
}
