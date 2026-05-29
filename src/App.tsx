import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { HardwareIntro } from './components/HardwareIntro';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return localStorage.getItem('hasSeenIntro') !== 'true';
  });

  // Initialize smooth scrolling only after the intro is complete
  useSmoothScroll(!showIntro);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <HardwareIntro 
            key="intro"
            onComplete={() => {
              localStorage.setItem('hasSeenIntro', 'true');
              setShowIntro(false);
            }} 
          />
        ) : (
          <motion.div 
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full overflow-x-clip bg-darkBg"
          >
            <HeroSection />
            <MarqueeSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
