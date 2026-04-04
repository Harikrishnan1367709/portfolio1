'use client';

import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clients = [
    { name: 'Revamp', description: 'Payment Integration' },
    { name: 'Alphaspects', description: 'CRM Platform' },
    { name: 'Neotouch', description: 'Digital Solutions' },
    { name: 'Jawa EdTech', description: 'LMS System' },
    { name: 'Queue', description: 'Web Platform' },
  ];

  return (
    <section className="pt-5 pb-16 bg-[#0B0B0B] border-y border-[#222222]">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#6B6B6B] text-sm text-center mb-8 uppercase tracking-wider"
        >
          Trusted by Leading Companies
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, opacity: 1, borderColor: '#40b581' }}
              className="flex flex-col items-center justify-center p-6 border border-[#222222] rounded-lg bg-[#121212] opacity-70 hover:opacity-100 hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[130px] w-full"
            >
              <h3 className="text-lg md:text-xl font-bold tracking-widest text-[#fafbfc] text-center uppercase mb-2">
                {client.name}
              </h3>
              <p className="text-[#6B6B6B] font-medium text-[11px] uppercase tracking-wider text-center">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
