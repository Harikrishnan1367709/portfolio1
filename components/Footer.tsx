import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Full Stack Development', href: '/services#full-stack' },
    { name: 'Mobile App Development', href: '/services#mobile' },
    { name: 'Web Application Development', href: '/services#web-app' },
    { name: 'MuleSoft Integration', href: '/services#mulesoft' },
    { name: 'Quality Engineering', href: '/services#qa' },
    { name: 'IT Resource Staffing', href: '/services#staffing' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <footer className="bg-[#000000] border-t border-[#222222]">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Jawanexis Technologies</h3>
            <p className="text-[#B3B3B3] text-sm mb-6 leading-relaxed">
              Leading software development company delivering scalable digital solutions for startups, enterprises, and global businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#222222] text-[#B3B3B3] hover:text-white hover:border-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[#B3B3B3] hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#B3B3B3] hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#B3B3B3] mt-1 flex-shrink-0" />
                <span className="text-[#B3B3B3] text-sm">
                  No: 54 Bharathi park 7th Cross, Near ICICI Bank, Saibaba Colony, Coimbatore 641043
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#B3B3B3] flex-shrink-0" />
                <a
                  href="mailto:sales@jawanexis.com"
                  className="text-[#B3B3B3] hover:text-white transition-colors duration-300 text-sm"
                >
                  sales@jawanexis.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#B3B3B3] flex-shrink-0" />
                <a
                  href="tel:+919790631286"
                  className="text-[#B3B3B3] hover:text-white transition-colors duration-300 text-sm"
                >
                  +91 9790631286
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222222] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#6B6B6B] text-sm">
              &copy; {currentYear} Jawanexis Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-[#6B6B6B] hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#6B6B6B] hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
