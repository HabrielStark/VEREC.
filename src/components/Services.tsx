import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Building2, HandCoins, ScrollText, FileText, ArrowRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  key: 'accounting' | 'incorporation' | 'consulting' | 'payroll' | 'tax';
}

const services: Service[] = [
  {
    icon: Calculator,
    key: 'accounting'
  },
  {
    icon: Building2,
    key: 'incorporation'
  },
  {
    icon: HandCoins,
    key: 'consulting'
  },
  {
    icon: ScrollText,
    key: 'payroll'
  },
  {
    icon: FileText,
    key: 'tax'
  }
];

const Services = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);

  const handleServiceClick = (service: Service): void => {
    setSelectedService(service);
  };

  const handleClose = (): void => {
    setSelectedService(null);
  };

  const handleGetStarted = (service: Service): void => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceDetails = (serviceKey: Service['key']) => {
    const details = t(`services.${serviceKey}.details`, { returnObjects: true }) as string[];
    return details;
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#051245] via-[#1C75BD] to-[#14ABFF] opacity-5" />
        <div className={`absolute inset-0 ${isDark ? 'bg-grid-dark' : 'bg-grid-light'} opacity-10`} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            {t('services.subtitle')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#051245] dark:text-white relative inline-block">
            {t('services.title')}
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
            {t('services.description')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard 
                service={service} 
                isDark={isDark} 
                onClick={handleServiceClick}
                index={index}
                getDetails={getServiceDetails}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#051245]/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[600px] ${
                isDark ? 'bg-[#051245]' : 'bg-white'
              } rounded-2xl p-8 z-50 shadow-2xl shadow-[#14ABFF]/20`}
            >
              <button
                onClick={handleClose}
                className={`absolute top-4 right-4 p-2 rounded-lg ${
                  isDark ? 'hover:bg-[#1C75BD]/20' : 'hover:bg-[#14ABFF]/10'
                } transition-colors duration-200`}
              >
                <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-[#051245]'}`} />
              </button>

              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                isDark ? 'bg-[#1C75BD]/20' : 'bg-[#14ABFF]/10'
              }`}>
                {React.createElement(selectedService.icon, {
                  className: 'service-icon w-10 h-10',
                  strokeWidth: 1.5
                })}
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#051245]'}`}>
                {t(`services.${selectedService.key}.title`)}
              </h3>
              <p className={`mb-6 ${isDark ? 'text-white/80' : 'text-[#051245]/80'}`}>
                {t(`services.${selectedService.key}.description`)}
              </p>

              <div className="space-y-4 mb-8">
                {getServiceDetails(selectedService.key).map((detail, index) => (
                  <motion.div
                    key={detail}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <ArrowRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-[#14ABFF]' : 'text-[#1C75BD]'}`} />
                    <span className={isDark ? 'text-white/80' : 'text-[#051245]/80'}>
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  handleGetStarted(selectedService);
                  handleClose();
                }}
                className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 ${
                  isDark 
                    ? 'bg-[#1C75BD] hover:bg-[#14ABFF] text-white' 
                    : 'bg-[#051245] hover:bg-[#1C75BD] text-white'
                } transition-all duration-300 shadow-lg shadow-[#14ABFF]/20`}
              >
                <span>{t('common.getStarted')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceCard = ({ 
  service, 
  isDark, 
  onClick,
  index,
  getDetails
}: { 
  service: Service; 
  isDark: boolean; 
  onClick: (service: Service) => void;
  index: number;
  getDetails: (key: Service['key']) => string[];
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`service-card relative p-8 rounded-2xl cursor-pointer overflow-hidden ${
        isDark ? 'bg-[#051245]/90' : 'bg-white'
      } backdrop-blur-md h-full flex flex-col`}
      onClick={() => onClick(service)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C75BD]/5 via-transparent to-[#14ABFF]/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
          isDark ? 'bg-[#1C75BD]/20' : 'bg-[#14ABFF]/10'
        } group-hover:shadow-lg group-hover:shadow-[#14ABFF]/20 transition-all duration-300`}
      >
        {React.createElement(service.icon, {
          className: 'service-icon w-10 h-10',
          strokeWidth: 1.5
        })}
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className={`text-2xl font-bold mb-4 ${
          isDark ? 'text-white' : 'text-[#051245]'
        } group-hover:text-[#1C75BD] transition-colors duration-300`}>
          {t(`services.${service.key}.title`)}
        </h3>

        {/* Description */}
        <p className={`mb-6 ${
          isDark ? 'text-white/80' : 'text-[#051245]/80'
        } line-clamp-2`}>
          {t(`services.${service.key}.description`)}
        </p>

        {/* Details */}
        <div className="space-y-3 mb-8 flex-1">
          {getDetails(service.key).slice(0, 3).map((detail, idx) => (
            <motion.div
              key={detail}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start space-x-3 group/item"
            >
              <ArrowRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                isDark ? 'text-[#14ABFF]' : 'text-[#1C75BD]'
              } group-hover/item:text-[#14ABFF] transition-colors duration-200`} />
              <span className={`${
                isDark ? 'text-white/80' : 'text-[#051245]/80'
              } group-hover/item:text-[#1C75BD] transition-colors duration-200 text-sm`}>
                {detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 ${
            isDark 
              ? 'bg-[#1C75BD] hover:bg-[#14ABFF] text-white' 
              : 'bg-[#051245] hover:bg-[#1C75BD] text-white'
          } transition-all duration-300 shadow-lg shadow-[#14ABFF]/20`}
        >
          <span>{t(`services.${service.key}.cta`)}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Services;