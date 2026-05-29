import { useState } from 'react';
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
    try {
      return localStorage.getItem('hasSeenIntro') !== 'true';
    } catch (e) {
      return true;
    }
  });

  // Initialize smooth scrolling only after the intro is complete
  useSmoothScroll(!showIntro);

  return (
    <>
      {showIntro ? (
        <HardwareIntro 
          onComplete={() => {
            try {
              localStorage.setItem('hasSeenIntro', 'true');
            } catch (e) {
              console.warn('localStorage access is blocked:', e);
            }
            setShowIntro(false);
          }} 
        />
      ) : (
        <div className="relative w-full overflow-x-clip bg-darkBg">
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
