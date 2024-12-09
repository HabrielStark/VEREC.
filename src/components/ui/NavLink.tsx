import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  isScrolled: boolean;
}

const NavLink = ({ children, onClick, isScrolled }: NavLinkProps) => (
  <motion.button
    onClick={onClick}
    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
      isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.div
      className={`absolute bottom-0 left-0 w-full h-0.5 ${
        isScrolled ? 'bg-primary' : 'bg-white'
      }`}
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.2 }}
    />
  </motion.button>
);

export default NavLink;