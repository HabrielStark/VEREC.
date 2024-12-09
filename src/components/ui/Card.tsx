import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'glass';
}

const Card = ({ children, className = '', variant = 'solid' }: CardProps) => {
  const baseStyles = "rounded-xl transition-all duration-300";
  const variants = {
    solid: "bg-white shadow-lg hover:shadow-xl",
    glass: "glass-effect frost-shadow border border-white border-opacity-20"
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;