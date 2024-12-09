import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const values = [
    { icon: Award, key: 'excellence' },
    { icon: Users, key: 'integrity' },
    { icon: Lightbulb, key: 'innovation' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            {t('about.subtitle')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#051245] dark:text-white relative inline-block">
            {t('about.title')}
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
            {t('about.description')}
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[#051245] dark:text-white"
          >
            {t('about.values.title')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-2xl ${
                  isDark ? 'bg-[#051245]/90' : 'bg-white'
                } backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  isDark ? 'bg-[#1C75BD]/20' : 'bg-[#14ABFF]/10'
                }`}>
                  {React.createElement(value.icon, {
                    className: 'w-8 h-8 text-[#1C75BD]',
                    strokeWidth: 1.5
                  })}
                </div>

                <h4 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-[#051245]'
                }`}>
                  {t(`about.values.items.${index}.title`)}
                </h4>
                <p className={`${
                  isDark ? 'text-white/80' : 'text-[#051245]/80'
                }`}>
                  {t(`about.values.items.${index}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-[#051245] dark:text-white">
            {t('about.team.title')}
          </h3>
          <p className={`text-lg ${
            isDark ? 'text-white/80' : 'text-[#051245]/80'
          } max-w-2xl mx-auto`}>
            {t('about.team.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;