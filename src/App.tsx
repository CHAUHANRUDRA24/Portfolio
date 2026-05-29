import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  // Initialize smooth scrolling using Lenis
  useSmoothScroll();

  return (
    <div className="relative w-full overflow-x-clip bg-darkBg">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
