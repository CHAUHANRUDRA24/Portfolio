
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const aboutText = "Pursuing my B.Tech in Information and Communication Technology, i focus on embedded systems, logic circuit design, and full-stack web development. I truly enjoy building smart, hardware-integrated systems and modern web applications that solve real-world problems. Let's build something incredible together!";

  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-darkBg text-textLight px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden z-20"
    >
      {/* Absolute Decorative 3D Images */}
      {/* Top-Left: Moon Icon */}
      <FadeIn 
        delay={0.1} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 select-none pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Decorative Moon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto opacity-80 filter drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
        />
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn 
        delay={0.25} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 select-none pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="Decorative 3D Object" 
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto opacity-85 filter drop-shadow-[0_15px_30px_rgba(119,33,177,0.1)]"
        />
      </FadeIn>

      {/* Top-Right: Lego Icon */}
      <FadeIn 
        delay={0.15} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 select-none pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Decorative Lego" 
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto opacity-80 filter drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
        />
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn 
        delay={0.3} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 select-none pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="Decorative 3D Group" 
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto opacity-85 filter drop-shadow-[0_15px_35px_rgba(190,76,0,0.1)]"
        />
      </FadeIn>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center max-w-4xl text-center z-10">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
            About me
          </h2>
        </FadeIn>

        {/* Paragraph text with scroll reveal */}
        <div className="mt-10 sm:mt-14 md:mt-16 max-w-[560px] mx-auto">
          <AnimatedText 
            text={aboutText} 
            className="text-textLight font-medium text-center leading-relaxed text-[1rem] sm:text-[1.2rem] md:text-[1.35rem]"
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20} className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
export default AboutSection;
