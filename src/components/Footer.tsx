import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './ui/Logo';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  const footerLinks = [
    {
      title: 'Services',
      links: ['Accounting', 'Tax Services', 'Consulting', 'Payroll', 'Incorporation']
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Contact Us']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '939-380-6490'
    },
    {
      icon: Mail,
      text: 'contact@verec.com'
    },
    {
      icon: MapPin,
      text: '123 Business Ave, Suite 100, New York, NY 10001'
    }
  ];

  return (
    <footer className={`relative pt-24 pb-12 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-sm`}>
              Professional accounting and financial services for businesses of all sizes.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <item.icon className={`w-5 h-5 mt-1 ${isDark ? 'text-primary-light' : 'text-primary'}`} />
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={section.title}>
              <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (linkIndex * 0.05) }}
                  >
                    <a
                      href="#"
                      className={`text-sm ${
                        isDark 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-colors duration-200`}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 mt-8 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              &copy; {new Date().getFullYear()} VEREC Accounting. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className={`text-sm ${
                    isDark 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  } transition-colors duration-200`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;