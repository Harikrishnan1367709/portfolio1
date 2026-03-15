'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-[#000000] relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white opacity-[0.03] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white opacity-[0.03] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-8">
            <Sparkles className="text-black" size={32} />
          </div>

          <h2 className="text-[32px] md:text-[56px] font-bold text-white mb-6 leading-tight">
            Have an idea?<br />
            Let's build something great together.
          </h2>

          <p className="text-[#B3B3B3] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into reality with our expert team. We're ready to bring your next project to life.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-lg hover:bg-[#E5E5E5] transition-all duration-300 font-semibold text-lg"
            >
              Start a Project
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#6B6B6B] text-sm mt-8"
          >
            Free consultation • No obligation • Quick response
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
