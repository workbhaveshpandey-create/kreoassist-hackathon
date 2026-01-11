import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Rocket } from 'lucide-react';

interface StatItemProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative group"
    >
        <div className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-saffron/30 transition-all duration-300">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron/20 to-indiaGreen/20 text-saffron mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            {/* Value */}
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                {value}
            </div>

            {/* Label */}
            <div className="text-sm text-gray-500 font-medium">
                {label}
            </div>
        </div>
    </motion.div>
);

const Stats: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 relative border-t border-b border-white/5" id="stats">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

            <div className="max-w-4xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="section-badge inline-flex">
                        <Rocket size={14} />
                        <span>Just Launched</span>
                    </div>
                    <h2 className="section-title">
                        We're Just <span className="gradient-text">Getting Started</span>
                    </h2>
                    <p className="section-subtitle">
                        Join us from the beginning and help build something meaningful
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                    <StatItem
                        icon={<Download className="w-6 h-6" />}
                        value="10+"
                        label="Downloads"
                        delay={0.1}
                    />
                    <StatItem
                        icon={<Users className="w-6 h-6" />}
                        value="10+"
                        label="Early Users"
                        delay={0.2}
                    />
                </div>

                {/* Early Adopter Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-gray-500 max-w-md mx-auto">
                        Be an early adopter and shape the future of disaster-proof communication.
                        Every download helps us grow stronger.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
