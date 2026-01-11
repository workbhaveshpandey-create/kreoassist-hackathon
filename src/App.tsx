import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppInit } from './hooks/useAppInit';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Stats from './components/sections/Stats';
import Roadmap from './components/sections/Roadmap';
import Footer from './components/sections/Footer';
import LoadingScreen from './components/sections/LoadingScreen';

const App: React.FC = () => {
  const { isLoading } = useAppInit();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => { }} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-pitch text-white font-sans">
          <Header />
          <main>
            <Hero />
            <Features />
            <Stats />
            <Roadmap />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;