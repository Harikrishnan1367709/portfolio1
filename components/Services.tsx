'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const expertises = [
  {
    title: 'Experience Design',
    desc: 'Designing elevated experiences and intuitive interfaces for the users.',
    href: '/services#design',
    svg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/experienceDesignSvg.svg',
    gif: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/experienceDesignGif.gif',
    bg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/designImg.png',
    arrow: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/arrowOrange.svg',
    hoverBorderClass: 'hover:border-[#f97316]',
  },
  {
    title: 'Front-end Development',
    desc: 'Developing optimal user experiences and streamlined API Integration.',
    href: '/services#frontEnd',
    svg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/frontEndSvg.svg',
    gif: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/frontEndGif.gif',
    bg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/frontEndImg.png',
    arrow: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/arrowPurple.svg',
    hoverBorderClass: 'hover:border-[#9333ea]',
  },
  {
    title: 'Mobile Development',
    desc: 'Building a robust, scalable mobile application encompassing both iOS and Android platforms',
    href: '/services#mobileApp',
    svg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/mobileSvg.svg',
    gif: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/mobileGif.gif',
    bg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/mobileImg.png',
    arrow: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/arrowSky.svg',
    hoverBorderClass: 'hover:border-[#0ea5e9]',
  },
  {
    title: 'Backend Development',
    desc: 'Constructing resilient, adaptable, and proficient backend architecture.',
    href: '/services#backEnd',
    svg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/BackendSvg.svg',
    gif: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/backendGif.gif',
    bg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/backEndImg.png',
    arrow: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/arrowPink.svg',
    hoverBorderClass: 'hover:border-[#ec4899]',
  },
  {
    title: 'QA Testing',
    desc: 'Assessing the created software guaranteeing its high standard of quality and reliability.',
    href: '/services#QA',
    svg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/qualitySvg.svg',
    gif: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/qualityGif.gif',
    bg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/qualityImg.png',
    arrow: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/arrowBlue.svg',
    hoverBorderClass: 'hover:border-[#3b82f6]',
  },
  {
    title: 'Digital Marketing',
    desc: 'Promoting your brand, products, and services through visually pleasing visuals.',
    href: '/contact-us',
    svg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/marketingSvg.svg',
    gif: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/marketingGif.gif',
    bg: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/marketingImg.png',
    arrow: 'https://sb-production-images.s3.ap-southeast-1.amazonaws.com/assets/images/home/arrowGreen.svg',
    hoverBorderClass: 'hover:border-[#22c55e]',
  }
];

const Services = () => {
  return (
    <section
      className="w-full bg-[#f9fafb]"
      style={{
        position: 'relative',
        padding: '96px 0',
      }}
    >
      <div className="container-custom">
        <div className="mb-12 max-w-[720px] text-left">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-[17px] font-medium leading-normal text-[#4b5563]"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[32px] font-medium leading-[48px] not-italic text-[rgb(43,42,53)] font-sans"
          >
            Experience a radically sensible approach to user-centered design.
          </motion.h2>
        </div>

        {/* Equal width columns + row stretch so every card matches the tallest in that row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertises.map((item, i) => (
            <Link
              href={item.href}
              key={item.title}
              className="group flex h-full min-h-0 min-w-0 w-full focus:outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex h-full w-full min-h-[280px] flex-col bg-white rounded-[8px] border border-[#e5e5e5] p-[48px_32px] relative overflow-hidden md:min-h-[340px] lg:min-h-[410px] ${item.hoverBorderClass} hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                {/* Images Layer (SVG -> GIF on hover) */}
                <div className="relative z-20 mb-10 h-[48px] w-[48px] shrink-0 sm:h-[56px] sm:w-[56px]">
                  <span className="block absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.svg} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                  </span>
                  <span className="block absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.gif} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                  </span>
                </div>

                {/* Home_expertContents: h4 → spacer span → p (reference order); flex-1 fills card for uniform height */}
                <div className="Home_expertContents__O_nnZ relative z-20 flex min-h-0 w-full flex-1 flex-col lg:max-w-[100%]">
                  <h4 className="max-w-[160px] text-[20px] font-semibold leading-[1.3] tracking-tight text-[#111827] lg:text-[24px]">
                    {item.title}
                  </h4>
                  <span className="Home_expertContainerStyle__LJXiQ" />
                  <p className="text-[15px] leading-[1.65] text-[#4b5563] lg:text-[16px]">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative bg image — relative img, aligned to card top-right */}
                <div
                  className="absolute inset-x-0 top-0 z-0 flex justify-end items-start pointer-events-none opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-80"
                  aria-hidden
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.bg}
                    alt=""
                    className="relative block h-auto max-h-[min(200px,42vw)] w-auto max-w-[min(220px,70%)] object-contain object-right-top object-top select-none"
                  />
                </div>

                {/* Hover Arrow - BOTTOM RIGHT */}
                <div className="absolute bottom-10 right-10 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <div style={{ position: 'relative', width: '28px', height: '28px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.arrow} alt="arrow" className="w-full h-full object-contain" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
