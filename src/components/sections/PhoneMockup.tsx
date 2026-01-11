import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, Cpu, MapPin, Signal, Battery } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      {/* Phone Frame */}
      <div
        className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] border-[3px] border-gray-700 overflow-hidden"
        style={{
          boxShadow: `
            0 25px 50px -12px rgba(0,0,0,0.6),
            0 0 60px rgba(255, 153, 51, 0.1)
          `
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

        {/* Screen Content */}
        <div className="w-full h-full bg-black p-4 flex flex-col pt-12">

          {/* Status Bar */}
          <div className="flex justify-between items-center text-[10px] text-gray-400 mb-4 px-1">
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal size={10} />
              <WifiOff size={10} className="text-saffron" />
              <Battery size={12} />
            </div>
          </div>

          {/* App Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] text-saffron font-semibold tracking-wider uppercase">KreoAssist</div>
              <div className="text-base font-bold text-white">Emergency Mode</div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-saffron/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
              <span className="text-[9px] text-saffron font-medium">Offline</span>
            </div>
          </div>

          {/* SOS Button */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150" />
              <div
                className="relative w-28 h-28 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center"
                style={{ boxShadow: '0 0 30px rgba(239, 68, 68, 0.4)' }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-xl font-black text-white tracking-wider">SOS</span>
                  <span className="text-[7px] text-white/70 uppercase tracking-wide mt-0.5">Tap to Alert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-2 mt-2">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2.5">
              <div className="p-1.5 bg-saffron/20 rounded-lg text-saffron">
                <Cpu size={12} />
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-gray-500 uppercase">Mesh Network</div>
                <div className="text-[11px] font-semibold text-white">12 Devices Connected</div>
              </div>
            </div>
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2.5">
              <div className="p-1.5 bg-indiaGreen/20 rounded-lg text-indiaGreen">
                <MapPin size={12} />
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-gray-500 uppercase">Location</div>
                <div className="text-[11px] font-semibold text-white">28.61°N, 77.20°E</div>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="mt-3 flex justify-center">
            <div className="w-1/3 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;