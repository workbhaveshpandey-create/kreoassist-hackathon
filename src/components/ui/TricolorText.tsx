import React from 'react';
import { motion } from 'framer-motion';

interface TricolorTextProps {
  text: string;
  className?: string;
}

const TricolorText: React.FC<TricolorTextProps> = ({ text, className = '' }) => {
  return (
    <motion.span
      className={`bg-tricolor-gradient bg-clip-text text-transparent font-bold bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ['0% center', '200% center']
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {text}
    </motion.span>
  );
};

export default TricolorText;