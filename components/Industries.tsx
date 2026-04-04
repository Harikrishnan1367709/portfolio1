'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Heart, Car, Cpu, Leaf, UtensilsCrossed, ArrowRight } from 'lucide-react';

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const industries = [
    {
      title: 'Fintech',
      highlightPhrase: 'Digital Innovation for',
      colorText: 'Fintech',
      description: 'Unlock superior user experiences and performance with our expertly designed and developed fintech apps, websites, & web apps.',
      color: '#4ade80', // Green
      Icon: DollarSign,
    },
    {
      title: 'Healthcare',
      highlightPhrase: 'Patient-centric',
      colorText: 'Healthcare',
      description: 'Telemedicine, patient management, and health analytics platforms engineered to prioritize patient outcomes and security.',
      color: '#60a5fa', // Blue
      Icon: Heart,
    },
    {
      title: 'Automotive',
      highlightPhrase: 'Next-gen mobility in',
      colorText: 'Automotive',
      description: 'Connected vehicles, fleet management, and smart mobility solutions driving the future of transportation.',
      color: '#a78bfa', // Purple
      Icon: Car,
    },
    {
      title: 'Web3',
      highlightPhrase: 'Decentralized systems in',
      colorText: 'Web3',
      description: 'Blockchain infrastructure, DeFi ecosystems, and decentralized applications engineered for scale and trust.',
      color: '#f472b6', // Pink
      Icon: Cpu,
    },
    {
      title: 'Agritech',
      highlightPhrase: 'Smart farming with',
      colorText: 'Agritech',
      description: 'Intelligent supply chains and agricultural platforms leveraging data to maximize yield and sustainability.',
      color: '#14b8a6', // Teal
      Icon: Leaf,
    },
    {
      title: 'FoodTech',
      highlightPhrase: 'Modern platforms for',
      colorText: 'FoodTech',
      description: 'End-to-end delivery platforms, restaurant logistics, and food service applications prioritizing seamless user journeys.',
      color: '#fb923c', // Orange
      Icon: UtensilsCrossed,
    },
  ];

  return (
    <section className="py-20 md:py-[100px] bg-[#fafbfc] overflow-hidden font-sans">
      <div className="max-w-[1148px] mx-auto px-4 sm:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 font-sans text-[32px] font-medium leading-[48px] not-italic tracking-tight text-[#1a1a1a]">
            Industries
          </h2>
          <p className="text-[#6b7280] text-[18px] md:text-[22px] leading-[1.6] max-w-[800px]">
            Our growth mindset coupled with our obsession for human-centered design, helps us create tailored experiences for each industry
          </p>
        </motion.div>
      </div>

      {/* Horizontal Accordion Container */}
      <div className="ml-auto w-full xl:w-[calc(100vw-(50vw-574px))] px-4 sm:px-8 xl:pr-8">
        <div className="flex w-full h-[400px] md:h-[440px]">
          {industries.map((industry, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={industry.title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative h-full transition-[flex-basis,min-width] duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] bg-white cursor-pointer box-border overflow-hidden
                  ${isActive ? 'grow basis-auto min-w-[340px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]' : 'grow-0 basis-[90px] md:basis-[130px] hover:bg-gray-50'}
                  ${index === 0 ? 'rounded-l-[12px]' : ''}
                  ${index === industries.length - 1 ? 'rounded-r-[12px]' : ''}
                `}
                style={{
                  border: `1px solid ${industry.color}`,
                  borderLeftWidth: '2px',
                  marginLeft: index === 0 ? '0' : '-1px', // Overlap 1px to prevent double borders
                  zIndex: isActive ? 10 : 1
                }}
              >
                {/* Collapsed Tab Title (Vertical Text bottom-anchored) */}
                <div 
                  className={`absolute top-0 right-0 h-full w-[90px] md:w-[130px] flex items-end justify-center pb-12 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}
                >
                  <span 
                    className="text-[18px] md:text-[22px] font-bold text-[#6b7280] tracking-wide whitespace-nowrap"
                    style={{ 
                      writingMode: 'vertical-rl', 
                      transform: 'rotate(180deg)' 
                    }}
                  >
                    {industry.title}
                  </span>
                </div>

                {/* Expanded Card Unveiled Content */}
                {/* Absolute positioning keeps layout rigid while flex container grows to reveal it seamlessly */}
                <div 
                  className={`absolute top-0 left-0 w-[500px] lg:w-[860px] h-full flex flex-col md:flex-row items-center px-8 md:px-14 py-12 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}
                >
                  
                  {/* Left Text Block */}
                  <div className="w-full md:w-[45%] h-full flex flex-col justify-center pr-8">
                    <h3 className="text-[28px] md:text-[34px] font-bold mb-4 text-[#374151] leading-[1.3]">
                      {industry.highlightPhrase} <br/>
                      <span style={{ color: industry.color }}>{industry.colorText}</span>
                    </h3>
                    <p className="text-[#6b7280] text-[15px] md:text-[17px] mb-10 leading-relaxed max-w-[90%]">
                      {industry.description}
                    </p>
                    <a 
                      href={`/projects?type=${industry.title}`}
                      className="mt-auto px-8 py-3.5 bg-[#2b2b36] text-[#fafbfc] text-[15px] font-semibold w-max hover:bg-black transition-colors rounded-sm"
                    >
                      View projects
                    </a>
                  </div>

                  {/* Right Graphic Nodes (Replacing generic dots with actual client logos!) */}
                  <div className="hidden md:flex flex-1 w-full md:w-[55%] h-full items-center justify-center relative">
                     {/* Faint Orbital Concentric Rings */}
                     <div className="relative w-[300px] h-[300px] xl:w-[340px] xl:h-[340px] rounded-full flex items-center justify-center pointer-events-none" style={{ backgroundColor: `${industry.color}08` }}>
                       <div className="w-[180px] h-[180px] xl:w-[220px] xl:h-[220px] rounded-full flex items-center justify-center" style={{ backgroundColor: `${industry.color}15` }}>
                         <div className="w-[72px] h-[72px] xl:w-[84px] xl:h-[84px] rounded-full bg-white shadow-xl flex items-center justify-center">
                           <industry.Icon size={34} className="text-[#292b2f] xl:w-[38px] xl:h-[38px]" strokeWidth={2.5} />
                         </div>
                       </div>
                       
                       {/* Floating Satellite Nodes loaded with REAL CLIENT LOGOS mapping to your brand assets! */}
                       <div className="absolute top-[18%] left-[20%] w-14 h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-2.5">
                         <img src="/logo/revamp.png" alt="Client Revamp" className="w-full h-full object-contain" />
                       </div>
                       
                       <div className="absolute top-[28%] right-[8%] w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-2">
                         <img src="/logo/alphaspects.png" alt="Client Alphaspects" className="w-full h-full object-contain" />
                       </div>
                       
                       <div className="absolute bottom-[22%] right-[20%] w-16 h-16 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-3">
                         <img src="/logo/neotouch.png" alt="Client Neotouch" className="w-full h-full object-contain" />
                       </div>
                       
                       <div className="absolute bottom-[20%] left-[30%] w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-2.5">
                         <img src="/logo/queue.png" alt="Client Queue" className="w-full h-full object-contain" />
                       </div>
                     </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Client Button */}
      <div className="flex justify-center mt-12 md:mt-20">
         <motion.a 
           href="/clients"
           whileHover={{ scale: 1.05 }}
           className="px-8 py-3.5 bg-[#40b581] text-white text-[16px] font-semibold tracking-wide hover:bg-[#32986a] transition-all rounded-none flex items-center gap-2 shadow-sm"
         >
            View all clients <ArrowRight size={18} strokeWidth={2.5} />
         </motion.a>
      </div>

    </section>
  );
};

export default Industries;
