'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrollStage, setScrollStage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);
  const mergeTransition = { type: 'spring' as const, stiffness: 220, damping: 24, mass: 0.9 };
  const isTextHidden = scrollStage >= 1;
  const isCompact = scrollStage >= 2;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const isScrollingDown = y > lastScrollYRef.current;

      // Downward: 0 -> 1 -> 2. Upward: keep compact until near top, then 0.
      if (isScrollingDown) {
        if (y > 140) {
          setScrollStage(2);
        } else if (y > 60) {
          setScrollStage(1);
        } else {
          setScrollStage(0);
        }
      } else if (y < 30) {
        setScrollStage(0);
      }

      lastScrollYRef.current = y;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container-custom">
        <motion.div
          className="mx-auto flex items-center"
          initial={{
            height: 92,
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: 0,
            maxWidth: '100%',
            backgroundColor: 'rgba(0,0,0,0)',
            borderRadius: 0,
            borderWidth: 0,
            borderColor: 'rgba(42,42,42,0)',
            borderStyle: 'solid',
            justifyContent: 'space-between',
          }}
          animate={isCompact ? {
            height: 52,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 8,
            maxWidth: 820,
            width: 'calc(100% - 24px)',
            backgroundColor: 'rgba(5,5,5,0.95)',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: 'rgba(42,42,42,1)',
            borderStyle: 'solid',
            justifyContent: 'space-between',
          } : {
            height: 92,
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: 0,
            maxWidth: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0)',
            borderRadius: 0,
            borderWidth: 0,
            borderColor: 'rgba(42,42,42,0)',
            borderStyle: 'solid',
            justifyContent: 'space-between',
          }}
          transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className={isCompact ? 'lg:w-1/3 lg:flex lg:justify-start' : ''}
            animate={{ scale: isCompact ? 0.95 : 1 }}
            transition={mergeTransition}
          >
            <Link href="/" className="flex items-center">
              <motion.div
                className="flex items-center overflow-hidden"
                animate={{ columnGap: isCompact ? 0 : 12 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                <Image
                  src="/Logo_Design_for_Jawanexis.png"
                  alt="Jawanexis Technologies"
                  width={52}
                  height={52}
                  priority
                  className={`object-contain transition-all duration-300 ${
                    isCompact ? 'h-8 w-8 md:h-9 md:w-9' : 'h-10 w-10 md:h-12 md:w-12'
                  }`}
                />

                <motion.div
                  className="whitespace-nowrap overflow-hidden block"
                  animate={{
                    opacity: isTextHidden ? 0 : 1,
                    width: isCompact ? 0 : 170,
                  }}
                  initial={{ opacity: 1, width: 170 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Image
                    src="jawanexis_logo-removebg-preview.png"
                    alt="Jawanexis"
                    width={552}
                    height={552}
                    className="object-contain h-20 w-30 md:h-24 md:w-40"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            className={`hidden lg:flex items-center transition-all duration-300 ${
              isCompact ? 'lg:w-1/3 justify-center gap-8' : 'space-x-8'
            }`}
            transition={mergeTransition}
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[#FFFFFF] hover:text-[#B3B3B3] transition-colors duration-300 relative group font-medium flex flex-col items-center ${
                    isCompact ? 'text-sm whitespace-nowrap' : 'text-sm'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="w-1 h-1 bg-white rounded-full mt-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </motion.div>

          <motion.div
            className={`hidden lg:flex ${isCompact ? 'lg:w-1/3 justify-end' : ''}`}
            animate={{ scale: isCompact ? 0.94 : 1 }}
            transition={mergeTransition}
          >
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center bg-white text-black rounded-lg hover:bg-[#E5E5E5] transition-all duration-300 font-medium ${
                isCompact ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm'
              }`}
            >
              Start a Project
            </Link>
          </motion.div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B0B0B] border-t border-[#222222]"
          >
            <div className="container-custom py-6 space-y-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-white hover:text-[#B3B3B3] transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="w-1 h-1 bg-white rounded-full ml-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-black px-6 py-3 rounded-lg hover:bg-[#E5E5E5] transition-all duration-300 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
