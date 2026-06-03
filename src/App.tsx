import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { HardwareIntro } from './components/HardwareIntro';
import ThemeToggle from './components/ThemeToggle';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem('hasSeenIntro') !== 'true';
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
              sessionStorage.setItem('hasSeenIntro', 'true');
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
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <Footer />
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
