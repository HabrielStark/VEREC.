import React from 'react';
import { motion } from 'framer-motion';

interface MobileNavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ children, onClick }: MobileNavLinkProps) => (
  <motion.button
    onClick={onClick}
    className="flex w-full items-center px-4 py-3 text-base font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
    whileHover={{ x: 4 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.button>
);

export default MobileNavLink;