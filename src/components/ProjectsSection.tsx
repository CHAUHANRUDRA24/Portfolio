import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';
import { 
  Trophy, 
  Award, 
  BookOpen, 
  ShieldAlert, 
  Cpu, 
  X, 
  ExternalLink,
  Calendar,
  Users,
  Wrench,
  Play,
  AlertTriangle,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { projectsList } from '../data/projectsData';
import type { ProjectData } from '../data/projectsData';
import { certificatesList } from '../data/certificatesData';
import type { CertificateData } from '../data/certificatesData';

interface CardProps {
  project: ProjectData;
  index: number;
  progress: MotionValue<number>;
  total: number;
  onViewStudy: () => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, progress, total, onViewStudy }) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const start = index * 0.22;
  const scale = useTransform(progress, [start, 0.85], [1, targetScale]);

  // Color options tailored to each project's context: 
  // 1: Cloud/AI (Pink/Purple), 2: Hardware/Safety (Indigo), 3: Lighting/Automation (Orange)
  const hoverColors = [
    'hover:border-[#B600A8] hover:shadow-[0_20px_60px_rgba(182,0,168,0.25)]',
    'hover:border-[#7621B0] hover:shadow-[0_20px_60px_rgba(118,33,176,0.25)]',
    'hover:border-[#BE4C00] hover:shadow-[0_20px_60px_rgba(190,76,0,0.25)]',
  ];
  const hoverClass = hoverColors[index % hoverColors.length];

  return (
    <div className="h-[90vh] sm:h-[85vh] flex items-center justify-center sticky top-20 md:top-28">
      <motion.div
        style={{
          scale,
        }}
        className={`w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-cardBorder/20 bg-cardBg p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 h-[75vh] sm:h-[80vh] shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out group/card ${hoverClass}`}
      >
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="font-black text-textLight/10 text-[2.5rem] sm:text-[4rem] md:text-[5rem] leading-none select-none transition-colors duration-500 group-hover/card:text-textLight/20">
              {project.num}
            </span>
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-textLight/50">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-textLight leading-tight">
                {project.hasStudy ? (
                  <button 
                    onClick={onViewStudy} 
                    className="text-left font-black uppercase text-textLight hover:underline hover:text-[#BE4C00] transition-colors focus:outline-none"
                  >
                    {project.title}
                  </button>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-[9px] sm:text-xs text-textLight/30 font-mono mt-0.5">
                {project.tech}
              </p>
            </div>
          </div>
          <LiveProjectButton 
            href={project.href} 
            label={project.hasStudy ? 'View Study' : 'Live Project'}
            onClick={project.hasStudy ? (e) => {
              e.preventDefault();
              onViewStudy();
            } : undefined}
            className="self-stretch sm:self-auto text-xs py-2 px-6 sm:py-2.5 sm:px-8 transition-colors duration-300" 
          />
        </div>

        {/* Card Body - Single Image Preview */}
        <div className="flex-grow w-full overflow-hidden flex items-center justify-center bg-cardBorder/[0.02] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-cardBorder/5 p-4 md:p-6 mt-2">
          {project.hasStudy ? (
            <button 
              onClick={onViewStudy} 
              className="w-full h-full flex items-center justify-center group/img relative cursor-pointer focus:outline-none"
            >
              <img 
                src={project.img1} 
                alt={`${project.title} Preview`} 
                className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.015] shadow-md dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                loading="lazy"
              />
            </button>
          ) : (
            <a 
              href={project.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full h-full flex items-center justify-center group/img relative cursor-pointer"
            >
              <img 
                src={project.img1} 
                alt={`${project.title} Preview`} 
                className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.015] shadow-md dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                loading="lazy"
              />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Track scroll inside projects container to drive scaling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCert || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert, selectedProject]);

  // Helper function to pick styling colors based on project ID
  const getThemeColors = (id: string) => {
    switch (id) {
      case 'crowdflow-ai':
        return {
          primary: '#B600A8',
          accent: '#7621B0',
          bgGlow: 'rgba(182, 0, 168, 0.15)',
          badge: 'bg-[#B600A8]/20 text-[#D7E2EA]'
        };
      case 'smart-safety-helmet':
        return {
          primary: '#7621B0',
          accent: '#B600A8',
          bgGlow: 'rgba(118, 33, 176, 0.15)',
          badge: 'bg-[#7621B0]/20 text-[#B600A8]'
        };
      case 'dynamic-footlamp':
        return {
          primary: '#BE4C00',
          accent: '#F59E0B',
          bgGlow: 'rgba(190, 76, 0, 0.15)',
          badge: 'bg-[#BE4C00]/20 text-[#F59E0B]'
        };
      case 'agromind-ai':
        return {
          primary: '#10B981',
          accent: '#34D399',
          bgGlow: 'rgba(16, 185, 129, 0.15)',
          badge: 'bg-[#10B981]/20 text-[#34D399]'
        };
      case 'votepath-ai':
        return {
          primary: '#C2410C',
          accent: '#EA580C',
          bgGlow: 'rgba(194, 65, 12, 0.15)',
          badge: 'bg-[#C2410C]/20 text-[#EA580C]'
        };
      case 'agri-titan-x6':
        return {
          primary: '#0D9488',
          accent: '#2DD4BF',
          bgGlow: 'rgba(13, 148, 136, 0.15)',
          badge: 'bg-[#0D9488]/20 text-[#2DD4BF]'
        };
      case 'smart-water-grid':
        return {
          primary: '#0284C7',
          accent: '#38BDF8',
          bgGlow: 'rgba(2, 132, 199, 0.15)',
          badge: 'bg-[#0284C7]/20 text-[#38BDF8]'
        };
      default:
        return {
          primary: '#B600A8',
          accent: '#BE4C00',
          bgGlow: 'rgba(182, 0, 168, 0.15)',
          badge: 'bg-[#B600A8]/20 text-[#D7E2EA]'
        };
    }
  };

  // Accent mapping for custom premium dark styling
  const accentColorMap: Record<string, { badge: string; text: string; border: string; glow: string }> = {
    yellow: {
      badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      text: 'text-yellow-400',
      border: 'hover:border-yellow-500/30',
      glow: 'rgba(234,179,8,0.15)',
    },
    blue: {
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      text: 'text-blue-400',
      border: 'hover:border-blue-500/30',
      glow: 'rgba(59,130,246,0.15)',
    },
    green: {
      badge: 'bg-green-500/10 text-green-400 border-green-500/20',
      text: 'text-green-400',
      border: 'hover:border-green-500/30',
      glow: 'rgba(34,197,94,0.15)',
    },
    red: {
      badge: 'bg-red-500/10 text-red-400 border-red-500/20',
      text: 'text-red-400',
      border: 'hover:border-red-400/30',
      glow: 'rgba(239,68,68,0.15)',
    },
    indigo: {
      badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      text: 'text-indigo-400',
      border: 'hover:border-indigo-500/30',
      glow: 'rgba(99,102,241,0.15)',
    },
    orange: {
      badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      text: 'text-orange-400',
      border: 'hover:border-orange-500/30',
      glow: 'rgba(249,115,22,0.15)',
    },
    pink: {
      badge: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      text: 'text-pink-400',
      border: 'hover:border-pink-500/30',
      glow: 'rgba(236,72,153,0.15)',
    },
    slate: {
      badge: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
      text: 'text-slate-400',
      border: 'hover:border-slate-500/30',
      glow: 'rgba(100,116,139,0.15)',
    },
    purple: {
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      text: 'text-purple-400',
      border: 'hover:border-purple-500/30',
      glow: 'rgba(168,85,247,0.15)',
    },
    cyan: {
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      text: 'text-cyan-400',
      border: 'hover:border-cyan-500/30',
      glow: 'rgba(6,182,212,0.15)',
    },
  };

  const getAccentIcon = (accent: string) => {
    switch (accent) {
      case 'yellow': return Trophy;
      case 'blue': return Award;
      case 'green': return BookOpen;
      case 'red': return ShieldAlert;
      case 'indigo':
      case 'orange': return Cpu;
      case 'pink': return Award;
      case 'purple': return Award;
      case 'cyan': return ShieldAlert;
      default: return BookOpen;
    }
  };

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
                onViewStudy={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section id="awards" className="bg-darkBg px-5 sm:px-8 md:px-10 py-16 sm:py-24 border-t border-cardBorder/10 relative z-30 transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <FadeIn delay={0} y={20}>
            <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight mb-2 text-left">
              Awards & Recognition
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <FadeIn delay={0.1} y={25}>
              <motion.div 
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex flex-col gap-4 p-6 rounded-3xl border border-cardBorder/10 hover:border-[#BE4C00]/40 bg-cardBorder/[0.02] hover:bg-cardBorder/[0.04] hover:shadow-[0_15px_30px_rgba(190,76,0,0.12)] transition-all duration-300 cursor-pointer h-full justify-between"
              >
                <div className="flex gap-4">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#BE4C00] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-textLight uppercase tracking-wide leading-snug">
                      Winner – Technovation Hackathon 2026
                    </h4>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#B600A8] uppercase tracking-wider block mt-0.5 font-mono">
                      Rank #1
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-light text-textLight/60 mt-1 leading-relaxed">
                  Recognized for hardware prototyping, custom logic circuit design, and robust embedded system implementation.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2} y={25}>
              <motion.div 
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex flex-col gap-4 p-6 rounded-3xl border border-cardBorder/10 hover:border-[#7621B0]/40 bg-cardBorder/[0.02] hover:bg-cardBorder/[0.04] hover:shadow-[0_15px_30px_rgba(118,33,176,0.12)] transition-all duration-300 cursor-pointer h-full justify-between"
              >
                <div className="flex gap-4">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#7621B0] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-textLight uppercase tracking-wide leading-snug">
                      Qualified Team – Vikas Saptah Hackathon 2025
                    </h4>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#B600A8] uppercase tracking-wider block mt-0.5 font-mono">
                      SSIP Gujarat
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-light text-textLight/60 mt-1 leading-relaxed">
                  Only team from GCET selected for the final round, recognized for highly innovative circuit design.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.3} y={25}>
              <motion.div 
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex flex-col gap-4 p-6 rounded-3xl border border-cardBorder/10 hover:border-[#0284C7]/40 bg-cardBorder/[0.02] hover:bg-cardBorder/[0.04] hover:shadow-[0_15px_30px_rgba(2,132,199,0.12)] transition-all duration-300 cursor-pointer h-full justify-between"
              >
                <div className="flex gap-4">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#0284C7] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-textLight uppercase tracking-wide leading-snug">
                      Runner-Up – BGI Indore Hackathon 2026
                    </h4>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#B600A8] uppercase tracking-wider block mt-0.5 font-mono">
                      Vision 2047: Viksit Bharat
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-light text-textLight/60 mt-1 leading-relaxed">
                  National Runner-Up out of numerous teams, recognized for designing and exhibiting an IoT Smart Water Grid system.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-darkBg px-5 sm:px-8 md:px-10 py-16 sm:py-24 border-t border-cardBorder/10 relative z-30 transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <FadeIn delay={0} y={20}>
            <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight mb-2 text-left">
              Certifications
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {certificatesList.map((cert, index) => {
              const accent = accentColorMap[cert.accent] || accentColorMap.yellow;
              const Icon = getAccentIcon(cert.accent);

              return (
                <FadeIn key={cert.id} delay={0.05 * index} y={25}>
                  <motion.div 
                    whileHover={{ 
                      y: -6, 
                      scale: 1.015,
                      boxShadow: `0 20px 45px -10px ${accent.glow}`
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onClick={() => setSelectedCert(cert)}
                    className={`group relative flex flex-col gap-5 p-6 rounded-[24px] border border-cardBorder/10 bg-cardBg/[0.01] hover:bg-cardBg/[0.03] transition-all duration-300 cursor-pointer h-full justify-between ${accent.border}`}
                  >
                    <div>
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <div className="p-2.5 rounded-2xl bg-cardBorder/[0.02] border border-cardBorder/10 transition-transform duration-300 group-hover:scale-110">
                          <Icon className={`w-6 h-6 flex-shrink-0 ${accent.text}`} />
                        </div>
                        <span className="text-xs font-bold font-mono text-textLight/30 mt-2">
                          {cert.year || cert.issued}
                        </span>
                      </div>
                      <h4 className="font-bold text-base sm:text-lg text-textLight uppercase tracking-wide leading-snug group-hover:text-primary transition-colors mt-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-textLight/45 mt-1 font-mono font-medium">
                        {cert.issuer}
                      </p>
                      {cert.note && (
                        <p className="text-xs sm:text-sm font-light text-textLight/60 mt-3.5 leading-relaxed line-clamp-3">
                          {cert.note}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-cardBorder/10 flex items-center justify-between gap-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${accent.badge}`}>
                        {cert.credentialId ? `ID: ${cert.credentialId}` : cert.issued}
                      </span>
                      <span className="text-xs font-black uppercase tracking-wider text-primary group-hover:translate-x-0.5 transition-transform duration-300">
                        Open →
                      </span>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Sheet */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative w-full max-w-2xl bg-cardBg text-textLight p-6 md:p-8 shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-cardBorder/10 rounded-[28px] mx-auto max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-3rem)] overflow-y-auto min-h-[400px] flex flex-col gap-6 items-center transition-colors duration-300"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center cursor-pointer group z-20 rounded-full bg-cardBorder/5 border border-cardBorder/10 hover:bg-cardBorder/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-textLight/70 group-hover:text-textLight transition-colors" />
              </button>

              {/* Modal Body */}
              <div className="flex flex-col gap-5 items-center text-center w-full mt-4">
                <h2 className="font-black text-2xl md:text-3xl text-textLight uppercase tracking-tight max-w-[90%]">
                  {selectedCert.title}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#BE4C00] -mt-2">
                  {selectedCert.issuer} • {selectedCert.issued}
                </p>

                {/* Double Bordered Image Container (4:3 aspect ratio) */}
                <div className="w-full aspect-[4/3] border border-cardBorder/10 p-2 sm:p-4 bg-cardBorder/[0.01] relative overflow-hidden rounded-2xl flex items-center justify-center group/modalimg shadow-inner dark:shadow-[inset_0_4px_30px_rgba(0,0,0,0.5)]">
                  {selectedCert.imageUrl ? (
                    <img 
                      src={selectedCert.imageUrl} 
                      alt={selectedCert.title} 
                      className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover/modalimg:scale-[1.015]"
                    />
                  ) : (
                    <div className="w-full h-full border border-cardBorder/5 flex flex-col items-center justify-center text-center p-6 bg-cardBorder/[0.01] rounded-lg">
                      <BookOpen className="text-5xl text-textLight/20 mb-3" />
                      <p className="font-sans text-lg font-bold text-textLight/60">No Preview Linked</p>
                      <p className="text-xs text-textLight/30 mt-2">{selectedCert.imageLabel || 'No preview linked yet'}</p>
                    </div>
                  )}
                </div>

                {/* Skewed Yellow Credential ID Badge */}
                {selectedCert.credentialId && (
                  <div className="px-4 py-2 bg-cardBorder/[0.03] border border-cardBorder/10 rounded-xl text-sm font-mono tracking-wider text-textLight/90 flex items-center gap-3">
                    <span className="text-[10px] uppercase text-textLight/40 tracking-wider font-sans font-bold">Credential ID</span>
                    <span className="font-black text-primary">{selectedCert.credentialId}</span>
                  </div>
                )}

                {/* Description Note */}
                {selectedCert.note && (
                  <p className="text-sm sm:text-base text-textLight/80 max-w-xl leading-relaxed font-light">
                    {selectedCert.note}
                  </p>
                )}

                {/* Skill tags */}
                {selectedCert.skills && selectedCert.skills.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-1">
                    {selectedCert.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3.5 py-1.5 bg-cardBorder/[0.03] border border-cardBorder/10 rounded-full text-xs font-semibold text-textLight/70 hover:text-textLight hover:border-cardBorder/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Filename Note */}
                <p className="text-[10px] text-textLight/30 font-mono">
                  Original file: {selectedCert.imageLabel || selectedCert.imageUrl.split('/').pop()}
                </p>

                {/* Original Link CTA */}
                {selectedCert.credentialUrl && (
                  <div className="flex flex-wrap justify-center gap-4 mt-2">
                    <a 
                      href={selectedCert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative px-8 py-3 bg-[#BE4C00]/80 hover:bg-[#BE4C00] text-textLight font-bold text-sm sm:text-base rounded-xl transition-all duration-300 flex items-center gap-2 shadow-[0_5px_15px_rgba(190,76,0,0.3)] hover:shadow-[0_5px_25px_rgba(190,76,0,0.5)] border border-[#BE4C00]/20"
                    >
                      <span>View Original Link</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* Project Case Study Modal Overlay */}
        {selectedProject && (() => {
          const theme = getThemeColors(selectedProject.id);
          return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
              />
              
              {/* Modal Sheet */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className="relative w-full max-w-5xl bg-cardBg text-textLight p-6 sm:p-10 md:p-12 shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-cardBorder/10 rounded-[32px] mx-auto max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-3rem)] overflow-y-auto flex flex-col gap-8 items-center transition-colors duration-300"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center cursor-pointer group z-20 rounded-full bg-cardBorder/5 border border-cardBorder/10 hover:bg-cardBorder/10 transition-colors"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5 text-textLight/70 group-hover:text-textLight transition-colors" />
                </button>

                {/* Modal Header */}
                <div className="flex flex-col gap-4 w-full border-b border-cardBorder/10 pb-6 mt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-textLight/10 text-textLight/90 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest rounded-md">
                      Case Study {selectedProject.num}
                    </span>
                    {selectedProject.id === 'smart-safety-helmet' && (
                      <span className="bg-[#BE4C00]/20 text-[#F59E0B] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md flex items-center gap-1">
                        <Trophy className="w-3.5 h-3.5 text-[#BE4C00]" /> #1 TECHNOVATION 2026
                      </span>
                    )}
                  </div>
                  <h2 className="font-black text-2xl sm:text-4xl md:text-5xl text-textLight uppercase tracking-tight max-w-[90%] leading-tight text-left">
                    {selectedProject.title}
                  </h2>
                  
                  {/* Project Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-medium text-xs sm:text-sm text-textLight/60 mt-1 font-mono">
                    {selectedProject.tech && (
                      <div className="flex items-center gap-1.5">
                        <Wrench className="w-4 h-4 text-textLight/40" />
                        <span>{selectedProject.tech}</span>
                      </div>
                    )}
                    {selectedProject.teamSize && (
                      <>
                        <span className="hidden sm:inline text-textLight/20">|</span>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-textLight/40" />
                          <span>{selectedProject.teamSize}</span>
                        </div>
                      </>
                    )}
                    {selectedProject.duration && (
                      <>
                        <span className="hidden sm:inline text-textLight/20">|</span>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-textLight/40" />
                          <span>{selectedProject.duration}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Hero Image Section */}
                {selectedProject.img3 && (
                  <div className="relative w-full aspect-video rounded-[24px] overflow-hidden border border-cardBorder/10 bg-cardBg group shadow-lg">
                    <img 
                      src={selectedProject.img3} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                    />
                    {selectedProject.heroCaption && (
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 flex items-end">
                        <p className="text-xs sm:text-sm md:text-base font-medium italic text-textLight/80 font-mono">
                          {selectedProject.heroCaption}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* What This Project Is (Summary) */}
                {selectedProject.description && (
                  <div className="relative w-full bg-cardBorder/[0.01] border border-cardBorder/5 rounded-[24px] p-6 sm:p-8 md:p-10 overflow-hidden text-left">
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none -z-10" style={{ background: theme.bgGlow }}></div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#BE4C00]" /> What This Project Is
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-textLight/85 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>
                )}

                {/* Problem and Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
                  {/* Problem */}
                  {selectedProject.problem && (
                    <div className="bg-cardBorder/[0.01] border border-cardBorder/5 hover:border-red-500/10 rounded-[24px] p-6 sm:p-8 transition-colors duration-300">
                      <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" /> The Problem
                      </h3>
                      <div 
                        className="text-xs sm:text-sm md:text-base text-textLight/80 leading-relaxed font-light space-y-4"
                        dangerouslySetInnerHTML={{ __html: selectedProject.problem }}
                      />
                    </div>
                  )}

                  {/* Solution */}
                  {selectedProject.solution && (
                    <div className="bg-cardBorder/[0.01] border border-cardBorder/5 hover:border-green-500/10 rounded-[24px] p-6 sm:p-8 transition-colors duration-300">
                      <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-green-500" /> The Solution
                      </h3>
                      <div 
                        className="text-xs sm:text-sm md:text-base text-textLight/80 leading-relaxed font-light space-y-4"
                        dangerouslySetInnerHTML={{ __html: selectedProject.solution }}
                      />
                    </div>
                  )}
                </div>

                {/* Gallery */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="flex flex-col gap-6 w-full text-left">
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white">
                      Project Gallery & Artifacts
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {selectedProject.gallery.map((item, index) => (
                        <div key={index} className="group/gallery relative flex flex-col gap-3">
                          <div className="aspect-[4/3] rounded-[18px] overflow-hidden border border-cardBorder/10 bg-cardBorder/5 group-hover/gallery:border-[#BE4C00]/20 transition-all duration-300">
                            <img 
                              src={item.url} 
                              alt={item.caption} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/gallery:scale-105"
                              loading="lazy"
                            />
                          </div>
                          <p className="text-[10px] sm:text-xs text-textLight/50 font-mono text-center px-2">
                            {item.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results Section */}
                {selectedProject.results && selectedProject.results.length > 0 && (
                  <div className="bg-cardBorder/[0.01] border border-cardBorder/5 rounded-[24px] p-6 sm:p-8 md:p-10 w-full flex flex-col gap-8 text-center transition-colors duration-300">
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white underline underline-offset-8 decoration-wavy decoration-[#BE4C00]">
                      Final Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mt-2">
                      {selectedProject.results.map((r, i) => (
                        <div key={i} className="flex flex-col gap-2 items-center">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-dashed border-cardBorder/20 flex flex-col items-center justify-center bg-cardBorder/[0.02] hover:border-[#BE4C00]/40 transition-colors relative">
                            <span className="font-mono font-black text-xl sm:text-2xl text-white">
                              {r.value}
                            </span>
                            {i === 0 && <span className="absolute -top-1 -right-1 text-base">🏆</span>}
                          </div>
                          <h4 className="font-black font-mono uppercase text-xs sm:text-sm text-white mt-1">
                            {r.label}
                          </h4>
                          <p className="text-[10px] sm:text-xs font-light text-textLight/50 font-mono">
                            {r.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Links */}
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-4 mt-2">
                    {selectedProject.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2.5 font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-3.5 border-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md ${
                          i === 0 
                            ? 'bg-textLight text-darkBg border-textLight hover:bg-textLight/90 hover:border-textLight/90 shadow-md' 
                            : 'bg-transparent text-textLight border-textLight/20 hover:border-textLight hover:bg-textLight/5'
                        }`}
                      >
                        {link.icon === 'play' ? <Play className="w-4 h-4 fill-current" /> : <Award className="w-4 h-4" />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                {/* Press links */}
                {selectedProject.pressLinks && selectedProject.pressLinks.length > 0 && (
                  <div className="bg-cardBorder/[0.01] border border-dashed border-cardBorder/10 rounded-[24px] p-6 sm:p-8 w-full text-center mt-2">
                    <h4 className="text-sm font-black uppercase tracking-wide text-white mb-4">
                      Press & Public Media Coverage
                    </h4>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                      {selectedProject.pressLinks.map((p, idx) => (
                        <a 
                          key={idx}
                          href={p.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-textLight/60 hover:text-white transition-colors group font-mono"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#BE4C00] group-hover:scale-110 transition-transform" />
                          <span className="border-b border-dashed border-textLight/20 group-hover:border-white">{p.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};
export default ProjectsSection;
