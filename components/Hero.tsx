'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const words = ['effective', 'efficient', 'enjoyable'];

const clientLogos = [
  { name: 'Revamppayment gateway integration (trust)', src: '/logo/revamp.png' },
  { name: 'ALPHASPECTS-CRM', src: '/logo/alphaspects.png' },
  { name: 'NEOTOUCH', src: '/logo/neotouch.png' },
  { name: 'JAWA EDTECH -lms', src: '/logo/jawaedtech.png' },
  { name: 'queue LESS-website', src: '/logo/queue.png' },
];


const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        width: '100%',
        padding: '220px 0 116px',
        backgroundImage: 'url(https://i.ibb.co/K9LV040/sbBgLogo.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 45%',
        backgroundColor: '#0e0e10',
      }}
    >
      <div className="container-custom">

        {/* H1 with animated word */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '64px',
            lineHeight: '83px',
            color: 'rgb(250, 251, 252)',
            marginBottom: '24px',
            maxWidth: '1100px',
          }}
        >
          We design and develop human experiences that are{' '}
          <span
            style={{
              display: 'inline-block',
              verticalAlign: 'bottom',
              overflow: 'hidden',
              height: '83px',
              position: 'relative',
              minWidth: '260px',
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={words[wordIndex]}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  display: 'block',
                  color: '#00D084',
                  lineHeight: '83px',
                }}
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-sans not-italic font-normal text-[24px] leading-[41px] text-[rgb(180,188,208)]"
          style={{
            maxWidth: '720px',
            marginBottom: '172px',
          }}
        >
          We provide web app design, front-end development, mobile UI design,
          mobile app development &amp; more.
        </motion.p>

        {/* 100+ clients label */}
        <motion.label
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            display: 'block',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28px',
            color: 'rgba(250, 251, 252, 0.5)',
            marginBottom: '28px',
            cursor: 'default',
          }}
        >
          100+ clients: UX, UI, &amp; Development
        </motion.label>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '32px 40px',
          }}
        >
          {clientLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.32 + i * 0.06 }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={60}
                style={{
                  height: '42px',
                  width: 'auto',
                  objectFit: 'contain',
                  opacity: 0.85,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
