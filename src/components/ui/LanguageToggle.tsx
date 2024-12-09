import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#1C75BD]/10 hover:bg-[#1C75BD]/20 transition-colors duration-200"
      >
        <Globe className="w-5 h-5 text-[#1C75BD]" />
        <span className="text-sm font-medium text-[#051245]">
          {t(`language.${i18n.language}`)}
        </span>
      </motion.button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1">
              {['en', 'es'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#1C75BD]/10 transition-colors duration-200 ${
                    i18n.language === lang ? 'text-[#1C75BD] font-medium' : 'text-[#051245]'
                  }`}
                >
                  {t(`language.${lang}`)}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default LanguageToggle; 