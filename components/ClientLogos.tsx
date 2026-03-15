'use client';

import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clients = [
    'TechStart Inc',
    'Innovation Labs',
    'Digital Ventures',
    'Global Finance Corp',
    'MedTech Solutions',
    'RetailHub Inc',
  ];

  return (
    <section className="py-16 bg-[#0B0B0B] border-y border-[#222222]">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#6B6B6B] text-sm text-center mb-8 uppercase tracking-wider"
        >
          Trusted by Leading Companies
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="flex items-center justify-center p-6 border border-[#222222] rounded-lg opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <span className="text-[#B3B3B3] font-semibold text-sm text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
