import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const contactInfo = [
    { icon: MapPin, key: 'address' },
    { icon: Phone, key: 'phone' },
    { icon: Mail, key: 'email' },
    { icon: Clock, key: 'hours' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#051245] via-[#1C75BD] to-[#14ABFF] opacity-5" />
        <div className={`absolute inset-0 ${isDark ? 'bg-grid-dark' : 'bg-grid-light'} opacity-10`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              isDark ? 'bg-[#1C75BD]/20 text-[#14ABFF]' : 'bg-[#14ABFF]/10 text-[#1C75BD]'
            }`}
          >
            {t('contact.subtitle')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#051245] dark:text-white relative inline-block">
            {t('contact.title')}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1C75BD] via-[#14ABFF] to-[#1C75BD] rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-[#051245]/80 dark:text-white/80 max-w-3xl mx-auto"
          >
            {t('contact.description')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`p-8 rounded-2xl ${
              isDark ? 'bg-[#051245]/90' : 'bg-white'
            } backdrop-blur-md shadow-lg`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-[#051245]'
                }`}>
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  required
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-[#1C75BD]/10 border-[#1C75BD]/20 text-white placeholder-white/50' 
                      : 'bg-[#14ABFF]/5 border-[#14ABFF]/20 text-[#051245] placeholder-[#051245]/50'
                  } focus:outline-none focus:ring-2 focus:ring-[#1C75BD]/50`}
                  placeholder={t('contact.form.name')}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-[#051245]'
                }`}>
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  required
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-[#1C75BD]/10 border-[#1C75BD]/20 text-white placeholder-white/50' 
                      : 'bg-[#14ABFF]/5 border-[#14ABFF]/20 text-[#051245] placeholder-[#051245]/50'
                  } focus:outline-none focus:ring-2 focus:ring-[#1C75BD]/50`}
                  placeholder={t('contact.form.email')}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-[#051245]'
                }`}>
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  required
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-[#1C75BD]/10 border-[#1C75BD]/20 text-white placeholder-white/50' 
                      : 'bg-[#14ABFF]/5 border-[#14ABFF]/20 text-[#051245] placeholder-[#051245]/50'
                  } focus:outline-none focus:ring-2 focus:ring-[#1C75BD]/50`}
                  placeholder={t('contact.form.phone')}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-[#051245]'
                }`}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-[#1C75BD]/10 border-[#1C75BD]/20 text-white placeholder-white/50' 
                      : 'bg-[#14ABFF]/5 border-[#14ABFF]/20 text-[#051245] placeholder-[#051245]/50'
                  } focus:outline-none focus:ring-2 focus:ring-[#1C75BD]/50`}
                  placeholder={t('contact.form.message')}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white ${
                  isDark 
                    ? 'bg-[#1C75BD] hover:bg-[#14ABFF]' 
                    : 'bg-[#051245] hover:bg-[#1C75BD]'
                } transition-all duration-300 shadow-lg shadow-[#14ABFF]/20`}
              >
                {t('contact.form.submit')}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`flex items-start space-x-4 p-6 rounded-xl ${
                  isDark ? 'bg-[#051245]/90' : 'bg-white'
                } backdrop-blur-md shadow-lg`}
              >
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-[#1C75BD]/20' : 'bg-[#14ABFF]/10'
                }`}>
                  {React.createElement(item.icon, {
                    className: 'w-6 h-6 text-[#1C75BD]'
                  })}
                </div>
                <div>
                  <p className={`text-lg font-medium mb-1 ${
                    isDark ? 'text-white' : 'text-[#051245]'
                  }`}>
                    {t(`contact.info.${item.key}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;