import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';
import GlassCard from './ui/GlassCard';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => scrollToSection('contact');
  const handleServices = () => scrollToSection('services');

  return (
    <section
      id="home"
      className={`relative min-h-screen pt-20 ${isDark ? 'dark-hero' : 'light-hero'}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#051245] via-[#1C75BD] to-[#14ABFF] opacity-90">
        <div
          className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f')] bg-cover bg-center ${
            isDark ? 'opacity-20' : 'opacity-10'
          }`}
        />
        <div
          className={`absolute inset-0 backdrop-blur-sm ${
            isDark ? 'bg-black/20' : 'bg-white/10'
          }`}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-6"
          >
            <GlassCard
              className={`px-6 py-2 border ${
                isDark ? 'border-white/20' : 'border-white/30'
              } backdrop-blur-md`}
            >
              <span className="text-white font-semibold tracking-wide drop-shadow-md">
                {t('hero.subtitle')}
              </span>
            </GlassCard>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-xl text-glow heading-gradient ${isDark ? 'dark-heading' : 'light-heading'}`}
          >
            {t('hero.title')}
            <span className="block text-4xl md:text-6xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={`text-xl md:text-2xl mb-12 text-white/95 font-medium drop-shadow-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'dark-text' : 'light-text'}`}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
              onClick={handleGetStarted}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>{t('hero.cta.primary')}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={handleServices}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {t('hero.cta.secondary')}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-background">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
