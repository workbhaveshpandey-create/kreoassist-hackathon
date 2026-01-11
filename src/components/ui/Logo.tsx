import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            {/* Outer Circle */}
            <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="2" />
            
            {/* Vertical Line of K */}
            <motion.path 
                d="M30 20 V80" 
                stroke="white" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
            />
            {/* Dots on Vertical Line */}
            <circle cx="30" cy="50" r="2" fill="white" />
            <rect x="26" y="76" width="8" height="8" stroke="white" strokeWidth="2" />

            {/* Upper Arm of K */}
            <motion.path 
                d="M30 50 L70 20" 
                stroke="white" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            />
            <circle cx="70" cy="20" r="3" fill="white" stroke="none" />
            
            {/* Lower Arm of K */}
            <motion.path 
                d="M30 50 L70 80" 
                stroke="white" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            />
            <rect x="66" y="76" width="8" height="8" stroke="white" strokeWidth="2" />

            {/* Inner Triangle Connection */}
            <motion.path 
                d="M45 50 L70 35 L70 65 Z" 
                stroke="white" 
                strokeWidth="1"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <circle cx="58" cy="42" r="2" fill="white" />
            <circle cx="58" cy="58" r="2" fill="white" />
        </svg>
    </div>
  );
};

export default Logo;