
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-darkBg text-textLight">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="relative z-30 w-full">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {/* Logo / Brand Name */}
          <a href="#" className="font-bold tracking-widest text-lg sm:text-xl uppercase hover:opacity-70 transition-opacity duration-200">
            RUDRA
          </a>
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <a href="#about" className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200">
              About
            </a>
            <a href="#services" className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200">
              Services
            </a>
            <a href="#projects" className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200">
              Projects
            </a>
            <a href="#contact" className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200">
              Contact
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Hero Portrait - Centered absolutely */}
      <FadeIn 
        delay={0.6} 
        y={30} 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
      >
        <Magnet 
          padding={150} 
          strength={3} 
          activeTransition="transform 0.3s ease-out" 
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full pointer-events-auto"
        >
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="Rudra Chauhan Portrait" 
            className="w-full h-auto object-cover filter drop-shadow-[0_20px_50px_rgba(119,33,177,0.3)]"
          />
        </Magnet>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="flex-grow flex items-center justify-center relative z-0 mt-6 sm:mt-4 md:-mt-5">
        <div className="w-full overflow-hidden text-center">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] select-none">
              Hi, i&apos;m rudra
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
