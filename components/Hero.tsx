'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const highlightWords = ['Innovative', 'Seamless', 'Engaging', 'Powerful', 'Memorable'];
  const pastelColors = ['#A5B4FC', '#6EE7B7', '#F9A8D4', '#6300f7', '#93fdc8'];
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % highlightWords.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [highlightWords.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-[#000000] relative overflow-hidden pt-16 pb-12 lg:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-white opacity-[0.02] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-white opacity-[0.02] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 top-[22%] -translate-y-1/2 hidden lg:block w-[460px] h-[460px] pointer-events-none z-0"
      >
        <motion.div
          className="absolute top-0 right-3 w-52 h-52 bg-transparent border-2 border-white/35 rounded-3xl"
          animate={{
            rotate: [0, 5, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-24 left-6 w-40 h-40 border-2 border-[#B3B3B3]/40 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-24 h-24 bg-transparent border-2 border-white/30 rounded-2xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-3 lg:mb-4"
        >
          <motion.h1
            variants={itemVariants}
            className="w-full text-center text-[40px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] text-white"
          >
            <span className="block">Crafting digital experiences</span>
            <span className="block text-left">
              that are{' '}
              <motion.span
                key={highlightWords[activeWordIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'circInOut' }}
                className="inline-block"
                style={{ color: pastelColors[activeWordIndex] }}
              >
                {highlightWords[activeWordIndex]}
              </motion.span>
            </span>
          </motion.h1>
        </motion.div>

        <div className="max-w-2xl">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p
              variants={itemVariants}
              className="text-[#B3B3B3] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
            >
              As a leading software development company in Coimbatore, Jawanexis is a trusted technology partner in Coimbatore delivering enterprise-grade software solutions, full stack development, and mobile app development.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-lg hover:bg-[#E5E5E5] transition-all duration-300 font-medium text-base"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium text-base"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
