import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';
import { Trophy, Award, BookOpen, ShieldAlert, Cpu } from 'lucide-react';

interface ProjectData {
  num: string;
  title: string;
  category: string;
  tech: string;
  href: string;
  img1: string;
  img2: string;
  img3: string;
}

const projectsList: ProjectData[] = [
  {
    num: '01',
    title: 'CrowdFlow AI',
    category: 'AI & Cloud Web App',
    tech: 'React (Vite) · Firebase · Google Cloud Run · AI/ML · REST APIs',
    href: 'https://github.com/CHAUHANRUDRA24/Portfolio',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    title: 'Smart Safety Helmet',
    category: 'Embedded & Hardware System',
    tech: 'Analog Electronics · Logic Gates · Infrared & LDR Sensors · Switching Circuits',
    href: 'https://github.com/CHAUHANRUDRA24/Portfolio',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    title: 'Dynamic Footlamp',
    category: 'Hardware & Automation',
    tech: 'RCWL Motion Sensor · Ambient Light Sensing · Fade Transitions · Power Optimization',
    href: 'https://github.com/CHAUHANRUDRA24/Portfolio',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  progress: MotionValue<number>;
  total: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, progress, total }) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const start = index * 0.22;
  const scale = useTransform(progress, [start, 0.85], [1, targetScale]);

  return (
    <div className="h-[90vh] sm:h-[85vh] flex items-center justify-center sticky top-20 md:top-28">
      <motion.div
        style={{
          scale,
        }}
        className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 h-[75vh] sm:h-[80vh] shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="font-black text-[#D7E2EA]/10 text-[2.5rem] sm:text-[4rem] md:text-[5rem] leading-none select-none">
              {project.num}
            </span>
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/50">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-textLight leading-tight">
                {project.title}
              </h3>
              <p className="text-[9px] sm:text-xs text-[#D7E2EA]/30 font-mono mt-0.5">
                {project.tech}
              </p>
            </div>
          </div>
          <LiveProjectButton href={project.href} className="self-stretch sm:self-auto text-xs py-2 px-6 sm:py-2.5 sm:px-8" />
        </div>

        {/* Card Body - Grid */}
        <div className="grid grid-cols-10 gap-3 flex-grow overflow-hidden">
          {/* Column 1 (40% width) - 2 Stacked Images */}
          <div className="col-span-10 sm:col-span-4 flex flex-col gap-3 justify-between">
            <div 
              className="w-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-white/5 flex-grow"
            >
              <img 
                src={project.img1} 
                alt={`${project.title} Detail 1`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div 
              className="w-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-white/5 flex-grow hidden sm:block"
            >
              <img 
                src={project.img2} 
                alt={`${project.title} Detail 2`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 2 (60% width) - Tall Image */}
          <div className="col-span-10 sm:col-span-6 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-white/5 flex-grow min-h-[160px] sm:min-h-0">
            <img 
              src={project.img3} 
              alt={`${project.title} Full View`} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside projects container to drive scaling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="w-full bg-darkBg text-textLight">
      {/* Cards Scroll Section */}
      <section 
        ref={containerRef}
        id="projects"
        className="bg-darkBg rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-12 relative z-30 flex flex-col"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Section Heading */}
          <FadeIn delay={0} y={40} className="w-full">
            <h2 className="hero-heading font-black uppercase text-center text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none mb-10">
              Project
            </h2>
          </FadeIn>

          {/* Cards Stack Container */}
          <div className="flex flex-col relative w-full mb-20">
            {projectsList.map((project, index) => (
              <ProjectCard 
                key={project.num}
                project={project} 
                index={index} 
                progress={scrollYProgress} 
                total={projectsList.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="bg-darkBg px-5 sm:px-8 md:px-10 py-16 sm:py-24 border-t border-white/5 relative z-30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {/* Left: Awards & Recognition */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0} y={20}>
              <h3 className="hero-heading font-black uppercase text-xl sm:text-3xl md:text-4xl tracking-tight mb-2">
                Awards & Recognition
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1} y={25} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#BE4C00] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-textLight uppercase tracking-wide">
                    Winner – Technovation Hackathon 2026
                  </h4>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#B600A8] uppercase tracking-wider block mt-0.5">
                    Rank #1
                  </span>
                  <p className="text-xs sm:text-sm font-light text-textLight/60 mt-1.5 leading-relaxed">
                    Recognized for hardware prototyping, custom logic circuit design, and robust embedded system implementation.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} y={25} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#7621B0] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-textLight uppercase tracking-wide">
                    Qualified Team – Vikas Saptah Hackathon 2025
                  </h4>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#B600A8] uppercase tracking-wider block mt-0.5">
                    SSIP Gujarat
                  </span>
                  <p className="text-xs sm:text-sm font-light text-textLight/60 mt-1.5 leading-relaxed">
                    Only team from GCET selected for the final round, recognized for highly innovative circuit design.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0} y={20}>
              <h3 className="hero-heading font-black uppercase text-xl sm:text-3xl md:text-4xl tracking-tight mb-2">
                Certifications
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-6">
              <FadeIn delay={0.15} y={25} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-[#B600A8] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-textLight uppercase tracking-wide">
                    Gen AI Academy 2.0 – DevOps Track
                  </h4>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#BE4C00] uppercase tracking-wider block mt-0.5">
                    Google Cloud
                  </span>
                  <p className="text-xs sm:text-sm font-light text-textLight/60 mt-1.5 leading-relaxed">
                    Practical experience in CI/CD, Kubernetes (GKE), and secure cloud deployment tools on Google Cloud Platform.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25} y={25} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-[#7621B0] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-textLight uppercase tracking-wide">
                    Codeversity National Hackathon 2026
                  </h4>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#BE4C00] uppercase tracking-wider block mt-0.5">
                    IIT Gandhinagar
                  </span>
                  <p className="text-xs sm:text-sm font-light text-textLight/60 mt-1.5 leading-relaxed">
                    Represented Team Creato4 in developing advanced AI-driven solutions during a 3-day intensive competition.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.35} y={25} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <ShieldAlert className="w-8 h-8 sm:w-10 sm:h-10 text-[#BE4C00] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-textLight uppercase tracking-wide">
                    AI Technical Workshop
                  </h4>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#B600A8] uppercase tracking-wider block mt-0.5">
                    IIT Gandhinagar
                  </span>
                  <p className="text-xs sm:text-sm font-light text-textLight/60 mt-1.5 leading-relaxed">
                    Completed specialized training covering core AI implementation and leading industry frameworks.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProjectsSection;
