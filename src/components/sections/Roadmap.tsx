import React from 'react';
import { motion } from 'framer-motion';
import { Map, Radio, Send, Rocket, Sparkles } from 'lucide-react';

interface RoadmapItemProps {
  quarter: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  delay?: number;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  quarter,
  title,
  icon,
  description,
  delay = 0
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative group"
  >
    <div className="h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-saffron/30 transition-all duration-300 hover:bg-white/[0.02]">
      {/* Icon */}
      <div className="flex items-center justify-between mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-saffron/20 to-indiaGreen/10 text-saffron group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
          {quarter}
        </span>
      </div>

      {/* Content */}
      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-saffron transition-colors duration-300">
        {title}
      </h4>
      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const Roadmap: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative" id="roadmap">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge inline-flex">
            <Rocket size={14} />
            <span>What's Coming</span>
          </div>
          <h2 className="section-title">
            Building the <span className="gradient-text">Future</span>
          </h2>
          <p className="section-subtitle">
            Our vision for making KreoAssist the most resilient communication tool
          </p>
        </motion.div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RoadmapItem
            quarter="2025"
            title="Offline Maps Integration"
            icon={<Map size={28} />}
            description="Vector-based offline maps with navigation to nearby shelters, hospitals, and safe zones during emergencies."
            delay={0.1}
          />
          <RoadmapItem
            quarter="2026"
            title="LoRaWAN Support"
            icon={<Radio size={28} />}
            description="Long-range radio support enabling communication up to 10+ kilometers without any infrastructure."
            delay={0.2}
          />
          <RoadmapItem
            quarter="2026"
            title="Rescue Drone Interface"
            icon={<Send size={28} />}
            description="Direct integration with rescue drones for emergency supply delivery and aerial communication relay."
            delay={0.3}
          />
        </div>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10">
            <Sparkles size={16} className="text-saffron" />
            <span className="text-sm text-gray-400">More features coming soon...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;