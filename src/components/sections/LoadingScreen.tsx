import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './ui/Logo';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const interval = 20; // Update every 20ms
        const increment = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 300);
                    return 100;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-saffron/20 to-indiaGreen/20 rounded-full blur-[150px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8"
                >
                    <Logo className="scale-150" />
                </motion.div>

                {/* Brand Name */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold text-white mb-2 tracking-tight"
                >
                    Kreo<span className="text-saffron">Assist</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-500 text-sm mb-12"
                >
                    Disaster-proof communication
                </motion.p>

                {/* Loading Bar Container */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 280, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative"
                >
                    {/* Track */}
                    <div className="w-[280px] h-1 bg-white/10 rounded-full overflow-hidden">
                        {/* Progress Bar */}
                        <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-saffron via-white to-indiaGreen"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    {/* Shimmer Effect */}
                    <motion.div
                        animate={{ x: [-280, 280] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                    />
                </motion.div>

                {/* Percentage */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs text-gray-600 mt-4 font-mono"
                >
                    {Math.round(progress)}%
                </motion.span>
            </div>

            {/* Bottom Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 text-center"
            >
                <p className="text-xs text-gray-700">Made with ❤️ in India</p>
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
