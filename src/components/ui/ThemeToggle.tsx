import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`theme-toggle relative p-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <Sun className={`w-full h-full ${isDark ? 'text-white' : 'text-primary'}`} strokeWidth={2} />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            rotate: isDark ? 0 : -180,
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <Moon className={`w-full h-full ${isDark ? 'text-white' : 'text-primary'}`} strokeWidth={2} />
        </motion.div>
      </div>
      <div className={`absolute inset-0 rounded-full ${isDark ? 'bg-white/5' : 'bg-primary/5'} blur-sm -z-10`} />
    </motion.button>
  );
};

export default ThemeToggle;