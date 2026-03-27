'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[40px] md:text-[56px] font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-[#B3B3B3] text-lg mb-8">Last updated: March 2024</p>

            <div className="space-y-8 text-[#B3B3B3]">
              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">2. Use License</h2>
                <p className="leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on Jawanexis Technologies' website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">3. Disclaimer</h2>
                <p className="leading-relaxed">
                  The materials on Jawanexis Technologies' website are provided on an 'as is' basis. Jawanexis Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">4. Limitations</h2>
                <p className="leading-relaxed">
                  In no event shall Jawanexis Technologies or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">5. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">6. Contact Information</h2>
                <p className="leading-relaxed">
                  For any questions regarding these Terms of Service, please contact us at 23z132@psgietch.ac.in
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
