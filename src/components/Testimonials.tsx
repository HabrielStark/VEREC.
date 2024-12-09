import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{
    author: string;
    company: string;
    text: string;
  }>;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
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
            {t('testimonials.subtitle')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#051245] dark:text-white relative inline-block">
            {t('testimonials.title')}
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
            {t('testimonials.description')}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-[#051245]/90' : 'bg-white'
              } backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Quote className="w-12 h-12 text-[#1C75BD] mb-6" />
              <p className={`text-lg mb-6 ${
                isDark ? 'text-white/90' : 'text-[#051245]/90'
              }`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className={`font-bold ${
                    isDark ? 'text-white' : 'text-[#051245]'
                  }`}>
                    {testimonial.author}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-white/70' : 'text-[#051245]/70'
                  }`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;