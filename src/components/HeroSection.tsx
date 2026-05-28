
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-darkBg text-textLight">
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
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] select-none whitespace-normal break-words w-full">
              I&apos;m Rudra
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-30 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 flex justify-between items-end w-full">
        {/* Left description text */}
        <FadeIn delay={0.35} y={20}>
          <p 
            className="text-textLight font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an embedded systems & full-stack developer crafting smart and innovative hardware solutions
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
export default HeroSection;
