'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Revamppayment gateway integration (trust) helped strengthen our payment experience and improve user confidence across key transaction journeys.",
      name: 'Revamppayment gateway integration (trust)',
      position: 'Client',
      logo: '/logo/revamp.png'
    },
    {
      quote: "ALPHASPECTS-CRM gave our team a more organized customer workflow, and the delivery quality was strong from planning to handoff.",
      name: 'ALPHASPECTS-CRM',
      position: 'Client',
      logo: '/logo/alphaspects.png'
    },
    {
      quote: "NEOTOUCH delivered a clean and reliable implementation, and the final product experience was smooth for both internal teams and end users.",
      name: 'NEOTOUCH',
      position: 'Client',
      logo: '/logo/neotouch.png'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    const len = testimonials.length;
    // Infinitely wrap properties around the center array
    if (offset < -Math.floor(len / 2)) offset += len;
    if (offset > Math.floor(len / 2)) offset -= len;
    return offset;
  };

  return (
    <section className="py-16 md:py-[96px] overflow-x-hidden font-sans bg-[#0e0e10]">
      <div className="max-w-[1148px] mx-auto px-4 sm:px-8">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-sans text-[32px] font-medium leading-[48px] not-italic tracking-tight text-[#FAFBFC]">
              Our Hall of Fame
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://clutch.co/profile/sketch-brahma-technologies#highlights"
            className="hover:scale-105 transition-transform duration-300 block pb-2"
          >
            <div className="relative h-[32px] md:h-[42px] w-[140px] md:w-[180px]">
              <img 
                src="https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/reviews.svg" 
                alt="Clutch Reviews" 
                className="w-full h-full object-contain md:object-right"
              />
            </div>
          </motion.a>
        </div>

        {/* Carousel Slider Area */}
        <div className="relative w-full h-[280px] md:h-[300px] flex items-center justify-center">
          {testimonials.map((test, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={index}
                animate={{
                  x: `${offset * 105}%`, // Shifts exactly by card width + 5% gap
                  scale: isCenter ? 1 : 0.9,
                  opacity: Math.abs(offset) > 1 ? 0 : isCenter ? 1 : 0.4,
                  zIndex: isCenter ? 10 : 0
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 w-[85%] md:w-[65%] max-w-[966px] border border-[#292b2f] rounded-[12px] p-6 md:p-8 h-[240px] md:h-[280px] flex flex-col justify-between bg-[#0e0e10] cursor-pointer"
                style={{ left: 0, right: 0, margin: 'auto' }}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Quote */}
                <p className="text-[#FAFBFC] text-[16px] md:text-[18px] leading-[1.8] font-normal tracking-wide font-sans text-pretty flex-grow">
                  {test.quote}
                </p>
                
                {/* Author */}
                <div className="mt-auto">
                  <h2 className="text-[#FAFBFC] text-[15px] md:text-[16px] font-medium mb-1 font-sans">
                    {test.name}
                  </h2>
                  <label className="text-[#8a8a8a] text-[12px] md:text-[13px] font-normal tracking-wide uppercase block font-sans">
                    {test.position}
                  </label>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots (Logos) */}
        <div className="mt-16 md:mt-24 flex gap-6 md:gap-12 items-center border-[#292b2f] border-t pt-8 overflow-x-auto hide-scrollbar">
          {testimonials.map((test, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex items-center justify-center p-2 transition-all duration-300 shrink-0
                ${index === currentIndex ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <img 
                src={test.logo} 
                alt={test.name} 
                className="h-6 md:h-8 object-contain"
              />
              {/* Active Indicator Line */}
              {index === currentIndex && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute -top-[33px] left-0 right-0 h-[2px] bg-[#FAFBFC]" 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
