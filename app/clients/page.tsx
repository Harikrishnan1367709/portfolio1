'use client';

import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function ClientsPage() {
  const clients = [
    'TechStart Inc',
    'Innovation Labs',
    'Digital Ventures',
    'Global Finance Corp',
    'MedTech Solutions',
    'RetailHub Inc',
    'DataVision Analytics',
    'LogiTech Corp',
    'QuickEats',
    'Smart Agro',
    'AutoConnect',
    'BlockChain Solutions',
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-8 flex items-center justify-center text-center hover:border-white transition-all duration-300 cursor-pointer min-h-[120px]"
              >
                <span className="text-white font-semibold">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </div>
  );
}
