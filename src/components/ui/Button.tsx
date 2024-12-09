import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) => {
  const { isDark } = useTheme();
  
  const baseStyles = "group relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden";
  
  const variants = {
    primary: `${isDark 
      ? 'bg-primary-light hover:bg-primary-light/90 text-white focus:ring-primary-light' 
      : 'bg-primary hover:bg-primary/90 text-white focus:ring-primary'
    }`,
    secondary: `${isDark
      ? 'bg-white/10 hover:bg-white/20 text-white focus:ring-white/30'
      : 'bg-white hover:bg-gray-50 text-primary focus:ring-primary/30'
    }`,
    outline: `${isDark
      ? 'border-2 border-white/80 text-white hover:bg-white/10 focus:ring-white/30'
      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary'
    }`
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Hover effect overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      
      {/* Button content */}
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;