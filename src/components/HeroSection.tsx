
import { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { ResumeButton } from './ResumeButton';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex flex-col justify-between overflow-x-clip bg-darkBg text-textLight"
    >
      {/* Background Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Interactive Spotlight Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(182, 0, 168, 0.12), rgba(118, 33, 176, 0.06) 30%, transparent 70%)`
        }}
      />

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="relative z-30 w-full">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {/* Logo / Brand Name */}
          <a href="#" className="font-bold tracking-widest text-lg sm:text-xl uppercase hover:scale-105 transition-transform duration-200">
            RUDRA
          </a>
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <a 
              href="#about" 
              className="relative text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider pb-1 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-[#B600A8] after:to-[#7621B0] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              About
            </a>
            <a 
              href="#services" 
              className="relative text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider pb-1 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-[#B600A8] after:to-[#7621B0] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              Services
            </a>
            <a 
              href="#projects" 
              className="relative text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider pb-1 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-[#B600A8] after:to-[#7621B0] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="relative text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider pb-1 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-[#B600A8] after:to-[#7621B0] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              Contact
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="flex-grow flex items-center justify-center relative z-10 mt-6 sm:mt-4 md:-mt-5">
        <div className="w-full text-center px-4">
          <FadeIn delay={0.15} y={40} className="flex flex-col items-center">
            {/* Professional Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B600A8] mb-6 hover:border-white/20 transition-all duration-300 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B600A8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B600A8]"></span>
              </span>
              Available for Internships & Collaborations
            </div>

            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] select-none whitespace-normal break-words w-full">
              I&apos;m Rudra
            </h1>

            {/* Dynamic Subtitle */}
            <p className="mt-6 text-[10px] sm:text-xs md:text-sm lg:text-base text-textLight/60 tracking-[0.25em] uppercase font-light max-w-2xl mx-auto leading-relaxed select-none">
              Embedded Systems <span className="text-[#B600A8] font-normal mx-1">/</span> Full-Stack Web <span className="text-[#7621B0] font-normal mx-1">/</span> IoT Architect
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-30 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6 md:gap-0">
        {/* Left description text */}
        <FadeIn delay={0.35} y={20} className="w-full md:w-auto">
          <p 
            className="text-textLight/70 font-light uppercase tracking-[0.18em] leading-relaxed max-w-sm sm:max-w-md md:max-w-lg text-left"
            style={{ fontSize: 'clamp(0.8rem, 1.25vw, 1.4rem)' }}
          >
            an embedded systems & full-stack developer crafting smart and innovative hardware solutions
          </p>
        </FadeIn>

        {/* Right Action buttons */}
        <FadeIn delay={0.5} y={20} className="flex flex-row gap-3 sm:gap-4 items-center w-full md:w-auto justify-start md:justify-end">
          <ResumeButton />
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
export default HeroSection;
