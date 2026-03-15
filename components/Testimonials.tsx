'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Jawanexis Technologies delivered beyond our expectations. Their technical expertise and commitment to quality helped us launch our product ahead of schedule.',
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechStart Inc',
      rating: 5,
    },
    {
      quote: 'Working with Jawanexis has been a game-changer for our business. They understand both technology and business needs perfectly.',
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'Innovation Labs',
      rating: 5,
    },
    {
      quote: 'The team at Jawanexis is highly professional and responsive. They transformed our vision into a beautiful, functional product.',
      name: 'Emily Rodriguez',
      position: 'CEO',
      company: 'Digital Ventures',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-[#0B0B0B]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            Testimonials from our valued partners and clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-8 md:p-12"
              >
                <Quote className="text-white mb-6" size={48} />

                <div className="flex mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-white fill-white" size={20} />
                  ))}
                </div>

                <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#B3B3B3]">
                      {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#222222] text-white hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white w-8' : 'bg-[#222222]'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#222222] text-white hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
