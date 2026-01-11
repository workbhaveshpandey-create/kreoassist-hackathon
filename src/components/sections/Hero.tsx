import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import Logo from '../ui/Logo';
import PhoneMockup from './PhoneMockup';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-saffron/10 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indiaGreen/10 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-400">Version 1.0 • Now Available</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Disaster-Proof</span>
              <br />
              <span className="gradient-text">Communication</span>
              <br />
              <span className="text-white">in Your Pocket</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Decentralized mesh networking meets hybrid AI. Stay connected when the grid fails.
              <span className="text-saffron font-medium"> Made in India 🇮🇳</span>
            </p>

            {/* Feature Badge */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Zap className="w-4 h-4 text-indiaGreen" />
                <span className="text-sm text-gray-400">Works <strong className="text-white">100% Offline</strong></span>
              </div>
            </div>

            {/* Download Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <a
                href="https://github.com/workbhaveshpandey-create/kreoassist/releases/download/v1.0.0/app-release.apk"
                download
                className="btn-premium w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </a>
              <div className="flex items-center gap-4 px-4 py-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Smartphone size={14} />
                  <span>Android</span>
                </div>
                <span className="text-xs text-gray-600">•</span>
                <span className="text-xs text-gray-500">~60MB</span>
                <span className="text-xs text-gray-600">•</span>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <ShieldCheck size={14} />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-indiaGreen/20 blur-[80px] rounded-full scale-75" />
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;