import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Wrench, 
  Trophy, 
  Award, 
  ExternalLink, 
  Play, 
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { projectsList } from '../data/projectsData';
import type { ProjectData } from '../data/projectsData';
import ThemeToggle from './ThemeToggle';
import useSmoothScroll from '../hooks/useSmoothScroll';

export const ProjectDetail: React.FC = () => {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [nextProject, setNextProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id) {
      const found = projectsList.find((p) => p.id === id);
      if (found) {
        setProject(found);
        
        // Find next project
        const currentIndex = projectsList.findIndex((p) => p.id === id);
        const nextIndex = (currentIndex + 1) % projectsList.length;
        setNextProject(projectsList[nextIndex]);
      } else {
        setProject(null);
      }
    } else {
      // Default to first project with study if no ID provided
      const defaultProject = projectsList.find(p => p.hasStudy) || projectsList[0];
      setProject(defaultProject);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-darkBg text-textLight flex items-center justify-center font-mono transition-colors duration-300">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-t-2 border-b-2 border-[#BE4C00] rounded-full animate-spin"></div>
          <span>LOADING CASE STUDY...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-darkBg text-textLight flex flex-col items-center justify-center p-6 text-center transition-colors duration-300">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6 animate-pulse" />
        <h1 className="text-3xl font-black uppercase mb-2">Project Not Found</h1>
        <p className="text-textLight/50 mb-8 max-w-md">
          The project case study you are looking for does not exist or has been moved.
        </p>
        <a 
          href="/#projects" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-textLight text-textLight font-semibold uppercase tracking-wider text-sm hover:bg-textLight/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </a>
      </div>
    );
  }

  // Helper function to pick styling colors based on project ID
  const getThemeColors = (id: string) => {
    switch (id) {
      case 'crowdflow-ai':
        return {
          primary: '#B600A8',
          accent: '#7621B0',
          bgGlow: 'rgba(182, 0, 168, 0.15)',
          border: 'group-hover:border-[#B600A8]/50',
          badge: 'bg-[#B600A8]/20 text-[#D7E2EA]'
        };
      case 'smart-safety-helmet':
        return {
          primary: '#7621B0',
          accent: '#B600A8',
          bgGlow: 'rgba(118, 33, 176, 0.15)',
          border: 'group-hover:border-[#7621B0]/50',
          badge: 'bg-[#7621B0]/20 text-[#B600A8]'
        };
      case 'dynamic-footlamp':
        return {
          primary: '#BE4C00',
          accent: '#F59E0B',
          bgGlow: 'rgba(190, 76, 0, 0.15)',
          border: 'group-hover:border-[#BE4C00]/50',
          badge: 'bg-[#BE4C00]/20 text-[#F59E0B]'
        };
      case 'agromind-ai':
        return {
          primary: '#10B981',
          accent: '#34D399',
          bgGlow: 'rgba(16, 185, 129, 0.15)',
          border: 'group-hover:border-[#10B981]/50',
          badge: 'bg-[#10B981]/20 text-[#34D399]'
        };
      case 'votepath-ai':
        return {
          primary: '#C2410C',
          accent: '#EA580C',
          bgGlow: 'rgba(194, 65, 12, 0.15)',
          border: 'group-hover:border-[#C2410C]/50',
          badge: 'bg-[#C2410C]/20 text-[#EA580C]'
        };
      case 'agri-titan-x6':
        return {
          primary: '#0D9488',
          accent: '#2DD4BF',
          bgGlow: 'rgba(13, 148, 136, 0.15)',
          border: 'group-hover:border-[#0D9488]/50',
          badge: 'bg-[#0D9488]/20 text-[#2DD4BF]'
        };
      case 'smart-water-grid':
        return {
          primary: '#0284C7',
          accent: '#38BDF8',
          bgGlow: 'rgba(2, 132, 199, 0.15)',
          border: 'group-hover:border-[#0284C7]/50',
          badge: 'bg-[#0284C7]/20 text-[#38BDF8]'
        };
      default:
        return {
          primary: '#B600A8',
          accent: '#BE4C00',
          bgGlow: 'rgba(182, 0, 168, 0.15)',
          border: 'group-hover:border-[#B600A8]/50',
          badge: 'bg-[#B600A8]/20 text-[#D7E2EA]'
        };
    }
  };

  const theme = getThemeColors(project.id);

  return (
    <div className="min-h-screen bg-darkBg text-textLight py-12 px-4 sm:px-6 md:px-8 lg:px-12 selection:bg-[#BE4C00]/30 selection:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-16 pb-24">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-textLight/60 hover:text-white font-semibold uppercase tracking-wider text-sm transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Lab
          </a>
        </motion.div>

        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex flex-col gap-5 border-b border-cardBorder/10 pb-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-textLight/10 text-textLight/90 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest rounded-md">
              Case Study {project.num}
            </span>
            {project.id === 'smart-safety-helmet' && (
              <span className="bg-[#BE4C00]/20 text-[#F59E0B] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-[#BE4C00]" /> #1 TECHNOVATION 2026
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white max-w-4xl">
            {project.title}
          </h1>

          {/* Project Meta Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-medium text-xs sm:text-sm text-textLight/60 mt-2 font-mono">
            {project.tech && (
              <div className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-textLight/40" />
                <span>{project.tech}</span>
              </div>
            )}
            {project.teamSize && (
              <>
                <span className="hidden sm:inline text-textLight/20">|</span>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-textLight/40" />
                  <span>{project.teamSize}</span>
                </div>
              </>
            )}
            {project.duration && (
              <>
                <span className="hidden sm:inline text-textLight/20">|</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-textLight/40" />
                  <span>{project.duration}</span>
                </div>
              </>
            )}
          </div>
        </motion.header>

        {/* Hero Image Section */}
        {project.img3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-video rounded-[24px] sm:rounded-[36px] overflow-hidden border-2 border-cardBorder/10 bg-cardBg group shadow-xl dark:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-colors duration-300"
          >
            <img 
              src={project.img3} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
            {project.heroCaption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 md:p-8 flex items-end">
                <p className="text-xs sm:text-sm md:text-base font-medium italic text-textLight/80 font-mono">
                  {project.heroCaption}
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* What This Project Is (Summary) */}
        {project.description && (
          <motion.section 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-cardBorder/[0.02] border border-cardBorder/5 rounded-[24px] p-6 sm:p-8 md:p-10 shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none -z-10" style={{ background: theme.bgGlow }}></div>
            
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#BE4C00]" /> What This Project Is
            </h2>
            <p className="text-base sm:text-lg text-textLight/85 leading-relaxed font-light">
              {project.description}
            </p>
          </motion.section>
        )}

        {/* Grid: Problem and Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem Section */}
          {project.problem && (
            <motion.section 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-cardBorder/[0.02] border border-cardBorder/5 hover:border-red-500/20 rounded-[24px] p-6 sm:p-8 shadow-md dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group"
            >
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" /> The Problem
              </h2>
              <div 
                className="text-sm sm:text-base text-textLight/80 leading-relaxed font-light space-y-4"
                dangerouslySetInnerHTML={{ __html: project.problem }}
              />
            </motion.section>
          )}

          {/* Solution Section */}
          {project.solution && (
            <motion.section 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-cardBorder/[0.02] border border-cardBorder/5 hover:border-green-500/20 rounded-[24px] p-6 sm:p-8 shadow-md dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group"
            >
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-green-500 animate-bounce" /> The Solution
              </h2>
              <div 
                className="text-sm sm:text-base text-textLight/80 leading-relaxed font-light space-y-4"
                dangerouslySetInnerHTML={{ __html: project.solution }}
              />
            </motion.section>
          )}
        </div>

        {/* Gallery / Deliverables */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white">
              Project Gallery & Artifacts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.gallery.map((item, index) => (
                <div 
                  key={index}
                  className="group/gallery relative flex flex-col gap-3"
                >
                  <div className="aspect-[4/3] rounded-[18px] sm:rounded-[24px] overflow-hidden border border-cardBorder/10 bg-cardBorder/5 shadow-lg group-hover/gallery:border-[#BE4C00]/30 transition-all duration-300">
                    <img 
                      src={item.url} 
                      alt={item.caption} 
                      className="w-full h-full object-cover transition-transform duration-750 group-hover/gallery:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-textLight/50 font-mono text-center px-2">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Final Results Stats Section */}
        {project.results && project.results.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cardBorder/[0.02] border border-cardBorder/5 rounded-[24px] p-6 sm:p-8 md:p-12 shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-8 text-center transition-colors duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white underline underline-offset-8 decoration-wavy decoration-[#BE4C00]">
              Final Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-4">
              {project.results.map((r, i) => (
                <div key={i} className="flex flex-col gap-2 items-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-cardBorder/20 flex flex-col items-center justify-center bg-cardBorder/[0.03] hover:border-[#BE4C00]/60 hover:bg-[#BE4C00]/5 hover:scale-105 transition-all duration-300 relative shadow-inner">
                    <span className="font-mono font-black text-2xl sm:text-3xl text-white">
                      {r.value}
                    </span>
                    {i === 0 && <span className="absolute -top-1.5 -right-1.5 text-lg">🏆</span>}
                  </div>
                  <h3 className="font-black font-mono uppercase text-sm sm:text-base text-white mt-2">
                    {r.label}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-textLight/60 font-mono">
                    {r.note}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Links & Video Demo Section */}
        {(project.links && project.links.length > 0) && (
          <motion.section 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-4"
          >
            {project.links.map((link, i) => (
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
          </motion.section>
        )}

        {/* Press Coverage Section */}
        {project.pressLinks && project.pressLinks.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cardBorder/[0.02] border border-dashed border-cardBorder/10 rounded-[24px] p-6 sm:p-8 text-center transition-colors duration-300"
          >
            <h2 className="text-lg font-black uppercase tracking-wide text-white mb-4">
              Press & Public Media Coverage
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {project.pressLinks.map((p, idx) => (
                <a 
                  key={idx}
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-textLight/60 hover:text-white transition-colors group font-mono"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#BE4C00] group-hover:scale-110 transition-transform" />
                  <span className="border-b border-dashed border-textLight/20 group-hover:border-white">{p.label}</span>
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {/* Next Project Footer */}
        {nextProject && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-cardBorder/10 pt-10"
          >
            <a 
              href={`project.html?id=${nextProject.id}`}
              className="group block bg-cardBg/[0.01] hover:bg-cardBg/[0.03] border border-cardBorder/5 hover:border-[#BE4C00]/30 rounded-[24px] p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-lg text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#BE4C00] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-textLight/40 font-mono text-xs uppercase tracking-widest block mb-1">
                Up Next
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white uppercase group-hover:text-[#BE4C00] transition-colors leading-tight max-w-2xl mx-auto">
                {nextProject.title}
              </h3>
              <div className="inline-flex items-center gap-2 mt-4 text-xs font-mono font-bold uppercase tracking-widest text-textLight/40 group-hover:text-white transition-colors">
                Read Case Study <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        )}

      </div>
      <ThemeToggle />
    </div>
  );
};

export default ProjectDetail;

