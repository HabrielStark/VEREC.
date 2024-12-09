import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="logo-container"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <img 
        src="/logo.png" 
        alt="VEREC Accounting" 
        className="logo-image"
      />
    </motion.div>
  );
};

export default Logo;