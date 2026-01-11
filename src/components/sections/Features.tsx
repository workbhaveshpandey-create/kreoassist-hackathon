import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Cpu, Phone, Activity, ShieldCheck, Share2, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  gradient?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className = "",
  delay = 0,
  gradient = "from-white/5 to-transparent"
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`group relative bg-gradient-to-br ${gradient} border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden ${className}`}
  >
    {/* Hover Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-indiaGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Icon */}
    <div className="relative z-10 mb-4">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron/20 to-indiaGreen/20 flex items-center justify-center text-saffron border border-white/10 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-saffron transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>

    {/* Corner Accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge inline-flex">
            <Sparkles size={14} />
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">
            Built for <span className="gradient-text">Resilience</span>
          </h2>
          <p className="section-subtitle">
            Every feature designed to keep you connected and safe when it matters most
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Large Card - Offline Mesh */}
          <FeatureCard
            title="Offline Mesh Network"
            description="Create a peer-to-peer communication network using Bluetooth and Wi-Fi Direct. No cell towers, no internet required. Messages hop between devices automatically."
            icon={<Wifi className="w-6 h-6" />}
            className="lg:col-span-2"
            gradient="from-saffron/10 to-transparent"
            delay={0.1}
          />

          {/* Instant SOS */}
          <FeatureCard
            title="One-Tap SOS"
            description="Instantly trigger emergency protocols. Calls 112, sends GPS coordinates via SMS to your emergency contacts."
            icon={<Phone className="w-6 h-6" />}
            gradient="from-red-500/10 to-transparent"
            delay={0.2}
          />

          {/* Hybrid AI */}
          <FeatureCard
            title="Hybrid AI Assistant"
            description="Google Gemini online, Gemma-2B offline. Smart analysis and assistance regardless of connectivity."
            icon={<Cpu className="w-6 h-6" />}
            delay={0.3}
          />

          {/* First Aid */}
          <FeatureCard
            title="Offline First Aid"
            description="Comprehensive visual guides for CPR, choking, bleeding, burns, and more. Available without internet."
            icon={<Activity className="w-6 h-6" />}
            delay={0.4}
          />

          {/* Beacon Broadcast */}
          <FeatureCard
            title="Beacon Broadcast"
            description="Alert nearby KreoAssist users of emergencies. Your distress signal propagates through the mesh network."
            icon={<Share2 className="w-6 h-6" />}
            delay={0.5}
          />

          {/* Wide Card - Security */}
          <FeatureCard
            title="Privacy First Design"
            description="End-to-end encryption for all mesh communications. Your data stays on your device. No accounts required."
            icon={<ShieldCheck className="w-6 h-6" />}
            className="md:col-span-2 lg:col-span-3"
            gradient="from-indiaGreen/10 to-transparent"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;