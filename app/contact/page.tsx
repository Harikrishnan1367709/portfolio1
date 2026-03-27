'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('company', formData.company);
      payload.append('message', formData.message);
      if (resumeFile) {
        payload.append('resume', resumeFile);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result?.message || 'Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setResumeFile(null);
        if (resumeInputRef.current) {
          resumeInputRef.current.value = '';
        }
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result?.error || 'Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Unable to connect to the server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setResumeFile(null);
      return;
    }

    if (file.size > MAX_RESUME_SIZE_BYTES) {
      setSubmitStatus('error');
      setSubmitMessage('Resume/CV file size must be 5MB or less.');
      setResumeFile(null);
      if (resumeInputRef.current) {
        resumeInputRef.current.value = '';
      }
      return;
    }

    setResumeFile(file);
  };

  return (
    <div className="bg-[#000000] min-h-screen">
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-[40px] md:text-[64px] font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-[#B3B3B3] text-xl leading-relaxed">
              Let's discuss your project and explore how we can help transform your vision into reality
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-[32px] font-bold text-white mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:23z132@psgietch.ac.in" className="text-[#B3B3B3] hover:text-white transition-colors">
                      23z132@psgietch.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:+919790631286" className="text-[#B3B3B3] hover:text-white transition-colors">
                      +91 9790631286
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-[#B3B3B3]">
                      No: 54 Bharathi park 7th Cross<br />
                      Near ICICI Bank, Saibaba Colony<br />
                      Coimbatore 641043, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#161616] border border-[#222222] rounded-2xl p-8">
                <h3 className="text-white font-semibold text-xl mb-4">Office Hours</h3>
                <div className="space-y-2 text-[#B3B3B3]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#161616] border border-[#222222] rounded-2xl p-8">
                <h2 className="text-[28px] font-bold text-white mb-6">Send us a message</h2>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <p className="text-green-500 text-sm">{submitMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                    <p className="text-red-500 text-sm">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#222222] rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#222222] rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#222222] rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#222222] rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#222222] rounded-lg text-white focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-white font-medium mb-2">
                      Resume / CV
                    </label>
                    <input
                      ref={resumeInputRef}
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#222222] rounded-lg text-white focus:outline-none focus:border-white transition-colors file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-3 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-[#E5E5E5]"
                    />
                    <p className="mt-2 text-xs text-[#8C8C8C]">
                      Optional. Upload PDF, DOC, or DOCX up to 5MB.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black px-8 py-4 rounded-lg hover:bg-[#E5E5E5] transition-all duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
