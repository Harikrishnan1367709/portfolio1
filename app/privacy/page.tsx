'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-[#B3B3B3] text-lg mb-8">Last updated: March 2024</p>

            <div className="space-y-8 text-[#B3B3B3]">
              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information you provide directly to us, such as when you fill out a contact form, request information about our services, or communicate with us.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the information we collect to respond to your inquiries, provide our services, and communicate with you about projects and opportunities.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website and conducting our business.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl font-semibold mb-4">5. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at sales@jawanexis.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
