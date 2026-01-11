import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  if (variant === 'primary') {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative group inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 overflow-hidden rounded-lg ${className}`}
        onClick={onClick}
      >
        {/* Gradient Border Background */}
        <div className="absolute inset-0 w-full h-full bg-tricolor-gradient blur-[2px] opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
        
        {/* Inner Dark Background */}
        <div className="absolute inset-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] bg-pitch rounded-lg z-10"></div>
        
        {/* Text Content */}
        <span className="relative z-20 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-2 rounded-lg text-gray-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;