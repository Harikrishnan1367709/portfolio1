'use client';

import { motion } from 'framer-motion';
import { DollarSign, Heart, Car, Cpu, Leaf, UtensilsCrossed } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: DollarSign,
      title: 'Fintech',
      description: 'Digital banking, payment solutions, and financial platforms',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Telemedicine, patient management, and health analytics',
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Connected vehicles, fleet management, and mobility solutions',
    },
    {
      icon: Cpu,
      title: 'Web3',
      description: 'Blockchain, DeFi, and decentralized applications',
    },
    {
      icon: Leaf,
      title: 'Agritech',
      description: 'Smart farming, supply chain, and agricultural platforms',
    },
    {
      icon: UtensilsCrossed,
      title: 'FoodTech',
      description: 'Delivery platforms, restaurant management, and food services',
    },
  ];

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
            Industries We Serve
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            Delivering specialized solutions across diverse industry verticals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-[#0B0B0B] border border-[#222222] rounded-2xl p-8 transition-all duration-300 hover:border-white cursor-pointer"
            >
              <div className="w-16 h-16 border-2 border-[#222222] rounded-xl flex items-center justify-center mb-6 group-hover:border-white transition-all duration-300">
                <industry.icon className="text-white" size={32} />
              </div>
              <h3 className="text-white font-semibold text-2xl mb-3">
                {industry.title}
              </h3>
              <p className="text-[#B3B3B3] leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
