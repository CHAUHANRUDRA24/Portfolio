import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Cpu, FileCode, Award, Network, Flame } from 'lucide-react';

interface HardwareIntroProps {
  onComplete: () => void;
}

export const HardwareIntro: React.FC<HardwareIntroProps> = ({ onComplete }) => {
  const [bootState, setBootState] = useState<'idle' | 'booting' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate mapping for interactive background glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };



  // Listen for Enter/Space to initiate boot sequence
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (bootState === 'idle' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleBootTrigger();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bootState]);

  const handleBootTrigger = () => {
    if (bootState !== 'idle') return;
    setBootState('booting');

    // Bootloader sequence log steps
    const bootSteps = [
      { progress: 5, log: '⚡ BOOTLOADER V2.6.5 INITIALIZED // INITIATING PORTFOLIO BOOT...' },
      { progress: 12, log: '👤 IDENTIFYING USER SIGNATURE: RUDRA CHAUHAN... VERIFIED' },
      { progress: 20, log: '🔌 ENERGIZING SYSTEM BOARD TRACES... POWER REGULATOR (3.3V) STABLE' },
      { progress: 28, log: '⚙️ CALIBRATING CPU FREQUENCY INTERFACES... CLOCK MULTIPLIER ACTIVE' },
      { progress: 36, log: '📁 ASSEMBLING PROJECTS COMPONENT MODULE (projectsData.bin)... VERIFIED' },
      { progress: 45, log: '🔥 ENGAGING CO-PROCESSORS FOR [RUDRA] CORE SYSTEM... CURRENT DRAW IN TOLERANCE' },
      { progress: 54, log: '🏆 DEPLOYING WALL OF FAME AWARDS CONTROLLER (awardsData)... SYNCHRONIZED' },
      { progress: 62, log: '📜 OPENING SYSTEM CERTIFICATE KEYSTORE VAULT (certificatesData)... SECURITY PASSED' },
      { progress: 70, log: '🔒 DECRYPTING CREDENTIAL BADGES FOR RUDRA CHAUHAN... OK' },
      { progress: 78, log: '🛰️ MAPPING GPIO DATA PORTS FOR PORTFOLIO HUD INTERFACES... ACTIVE' },
      { progress: 85, log: '⚡ STABILIZING SMOOTH-SCROLLING LENIS HAPTIC MOTOR ENGINE... OK' },
      { progress: 92, log: '🔗 BRIDGING DYNAMIC TELEMETRY INTERACTION GRIDS... SUCCESS' },
      { progress: 100, log: '🚀 ALL NODES ENGAGED // RUDRA CHAUHAN CORE STABILIZED. PORTAL LAUNCH READY.' }
    ];

    bootSteps.forEach(step => {
      setTimeout(() => {
        setProgress(step.progress);
        
        if (step.progress === 100) {
          setTimeout(() => {
            setBootState('completed');
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 800);
        }
      }, step.progress * 30); // Dynamic boot loading duration (3 seconds)
    });
  };

  const cardTransition = { type: 'spring', stiffness: 90, damping: 16 } as const;

  return (
    <AnimatePresence>
      {bootState !== 'completed' && (
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`fixed inset-0 z-[9999] bg-[#070707] overflow-hidden flex flex-col p-4 sm:p-8 text-[#D7E2EA] select-none font-sans ${bootState === 'booting' ? 'justify-center items-center' : 'justify-between'}`}
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(215,226,234,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

          {/* Interactive Mouse Hover Glow Tracker */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-40 blur-[100px]"
            style={{
              x: glowX,
              y: glowY,
              translateX: '-50%',
              translateY: '-50%',
              background: 'radial-gradient(circle, rgba(182,0,168,0.1) 0%, rgba(118,33,176,0.05) 50%, transparent 100%)',
            }}
          />

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#B600A8]/3 rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#7621B0]/3 rounded-full blur-[140px] pointer-events-none z-0" />

          {/* =========================================================
              PHASE 1: THE COLLAGE DASHBOARD (IDLE MODE)
              ========================================================= */}
          {bootState === 'idle' && (
            <div className="relative w-full max-w-6xl flex-grow flex-1 min-h-0 flex items-center justify-center py-4 mx-auto">
              
              {/* PCB Grid Trace Lines Connecting Center to Corners */}
              <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0">
                <path
                  d="M 500 360 L 400 280 L 250 280 L 200 230 L 200 180"
                  fill="none"
                  stroke={hoveredCard === 'work' ? '#B600A8' : '#7621B0'}
                  strokeWidth={hoveredCard === 'work' ? 2 : 1}
                  strokeDasharray={hoveredCard === 'work' ? 'none' : '4 4'}
                />
                <path
                  d="M 700 360 L 800 280 L 950 280 L 1000 230 L 1000 180"
                  fill="none"
                  stroke={hoveredCard === 'core' ? '#7621B0' : '#BE4C00'}
                  strokeWidth={hoveredCard === 'core' ? 2 : 1}
                  strokeDasharray={hoveredCard === 'core' ? 'none' : '4 4'}
                />
                <path
                  d="M 500 440 L 400 520 L 250 520 L 200 570 L 200 620"
                  fill="none"
                  stroke={hoveredCard === 'vault' ? '#BE4C00' : '#B600A8'}
                  strokeWidth={hoveredCard === 'vault' ? 2 : 1}
                  strokeDasharray={hoveredCard === 'vault' ? 'none' : '4 4'}
                />
                <path
                  d="M 700 440 L 800 520 L 950 520 L 1000 570 L 1000 620"
                  fill="none"
                  stroke={hoveredCard === 'connect' ? '#B600A8' : '#BE4C00'}
                  strokeWidth={hoveredCard === 'connect' ? 2 : 1}
                  strokeDasharray={hoveredCard === 'connect' ? 'none' : '4 4'}
                />
              </svg>

              {/* CARD 1 (TOP-LEFT): WORK */}
              <motion.div
                initial={{ opacity: 0, x: -180, y: -180, rotate: -15 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
                transition={cardTransition}
                onMouseEnter={() => setHoveredCard('work')}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.04, rotate: -1, zIndex: 50, borderColor: 'rgba(182, 0, 168, 0.4)' }}
                className="absolute top-16 left-4 md:top-24 md:left-8 z-10 w-64 p-5 rounded-2xl border border-white/10 bg-[#0C0C0C]/80 backdrop-blur-2xl shadow-[0_20px_45px_-10px_rgba(0,0,0,0.8),inset_0_2px_15px_rgba(182,0,168,0.03)] cursor-pointer group transition-all duration-300"
              >
                <div className="absolute top-0.5 right-6 w-12 h-2.5 bg-gradient-to-r from-[#B600A8] to-[#7621B0] rounded-b-md opacity-60" />
                <div className="flex items-center gap-3 border-b border-white/5 pb-2.5 mb-2.5">
                  <FileCode className="w-5 h-5 text-[#B600A8]" />
                  <h3 className="font-bold text-xs uppercase tracking-widest text-[#D7E2EA]/95">MOD_01 // PROJECTS</h3>
                </div>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-[#D7E2EA]/60 leading-relaxed">
                  <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded px-2 py-1">
                    <span>&gt; SMART HELMET</span>
                    <span className="text-[8px] text-[#B600A8] uppercase font-bold">IoT</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded px-2 py-1">
                    <span>&gt; WATER LEAKAGE</span>
                    <span className="text-[8px] text-[#7621B0] uppercase font-bold">EMBEDDED</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded px-2 py-1">
                    <span>&gt; SYSTEM MONITOR</span>
                    <span className="text-[8px] text-[#BE4C00] uppercase font-bold">WEB</span>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2 (TOP-RIGHT): SYSTEM SPEC */}
              <motion.div
                initial={{ opacity: 0, x: 180, y: -180, rotate: 15 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
                transition={cardTransition}
                onMouseEnter={() => setHoveredCard('core')}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.04, rotate: 1, zIndex: 50, borderColor: 'rgba(118, 33, 176, 0.4)' }}
                className="absolute top-12 right-4 md:top-20 md:right-12 z-10 w-64 p-5 rounded-2xl border border-white/10 bg-[#0C0C0C]/80 backdrop-blur-2xl shadow-[0_20px_45px_-10px_rgba(0,0,0,0.8),inset_0_2px_15px_rgba(118,33,176,0.03)] cursor-pointer group transition-all duration-300"
              >
                <div className="absolute top-0.5 right-6 w-12 h-2.5 bg-gradient-to-r from-[#7621B0] to-[#BE4C00] rounded-b-md opacity-60" />
                <div className="flex items-center gap-3 border-b border-white/5 pb-2.5 mb-2.5">
                  <Cpu className="w-5 h-5 text-[#7621B0]" />
                  <h3 className="font-bold text-xs uppercase tracking-widest text-[#D7E2EA]/95">MOD_02 // SYSTEM CORE</h3>
                </div>
                <div className="flex flex-col gap-1.5 font-mono text-[10px] text-[#D7E2EA]/60 leading-relaxed">
                  <p className="border-b border-white/5 pb-1">OWNER: Rudra Chauhan</p>
                  <p className="border-b border-white/5 pb-1">ROLE: IoT Developer</p>
                  <p>STACK: ESP32 // React // OCI</p>
                </div>
              </motion.div>

              {/* CARD 3 (BOTTOM-LEFT): CERTIFICATIONS VAULT */}
              <motion.div
                initial={{ opacity: 0, x: -180, y: 180, rotate: -15 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
                transition={cardTransition}
                onMouseEnter={() => setHoveredCard('vault')}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 50, borderColor: 'rgba(190, 76, 0, 0.4)' }}
                className="absolute bottom-12 left-4 md:bottom-20 md:left-10 z-10 w-72 p-5 rounded-2xl border border-white/10 bg-[#0C0C0C]/80 backdrop-blur-2xl shadow-[0_20px_45px_-10px_rgba(0,0,0,0.8),inset_0_2px_15px_rgba(190,76,0,0.03)] cursor-pointer group transition-all duration-300"
              >
                <div className="absolute top-0.5 right-6 w-12 h-2.5 bg-gradient-to-r from-[#BE4C00] to-[#B600A8] rounded-b-md opacity-60" />
                <div className="flex items-center gap-3 border-b border-white/5 pb-2.5 mb-2.5">
                  <Award className="w-5 h-5 text-[#BE4C00]" />
                  <h3 className="font-bold text-xs uppercase tracking-widest text-[#D7E2EA]/95">MOD_03 // VAULT</h3>
                </div>
                <div className="flex flex-col gap-1.5 font-mono text-[9px] text-[#D7E2EA]/60 leading-normal">
                  <div className="flex justify-between items-center bg-white/[0.01] border border-white/5 rounded px-2.5 py-1">
                    <span>🏆 TECHNOVATION 2026</span>
                    <span className="text-[8px] text-[#BE4C00]">WINNER</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/[0.01] border border-white/5 rounded px-2.5 py-1">
                    <span>🏆 BGI HACKATHON</span>
                    <span className="text-[8px] text-[#B600A8]">RUNNERUP</span>
                  </div>
                </div>
              </motion.div>

              {/* CARD 4 (BOTTOM-RIGHT): SOCIAL CONNECT */}
              <motion.div
                initial={{ opacity: 0, x: 180, y: 180, rotate: 15 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
                transition={cardTransition}
                onMouseEnter={() => setHoveredCard('connect')}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.04, rotate: 1, zIndex: 50, borderColor: 'rgba(182, 0, 168, 0.4)' }}
                className="absolute bottom-16 right-4 md:bottom-24 md:right-10 z-10 w-64 p-5 rounded-2xl border border-white/10 bg-[#0C0C0C]/80 backdrop-blur-2xl shadow-[0_20px_45px_-10px_rgba(0,0,0,0.8),inset_0_2px_15px_rgba(182,0,168,0.03)] cursor-pointer group transition-all duration-300"
              >
                <div className="absolute top-0.5 right-6 w-12 h-2.5 bg-gradient-to-r from-[#B600A8] to-[#BE4C00] rounded-b-md opacity-60" />
                <div className="flex items-center gap-3 border-b border-white/5 pb-2.5 mb-2.5">
                  <Network className="w-5 h-5 text-[#B600A8]" />
                  <h3 className="font-bold text-xs uppercase tracking-widest text-[#D7E2EA]/95">MOD_04 // CONNECT</h3>
                </div>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-[#D7E2EA]/60 leading-normal">
                  <p className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span>GITHUB</span>
                    <span className="text-[9px] text-[#D7E2EA]/40">@CHAUHANRUDRA24</span>
                  </p>
                  <p className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span>LINKEDIN</span>
                    <span className="text-[9px] text-[#D7E2EA]/40">@Chauhan-Rudra</span>
                  </p>
                </div>
              </motion.div>

              {/* Status Sticker */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                className="absolute top-4 left-[28%] bg-[#0f0f0f] border border-green-500/30 text-green-400 font-mono text-[10px] font-black uppercase tracking-wider py-1.5 px-3 rounded-lg shadow-md z-20 flex items-center gap-1.5 border-dashed"
              >
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span>CORE_LAUNCH: ARMED</span>
              </motion.div>

              {/* Overclock Sticker */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, rotate: 10 }}
                className="absolute bottom-10 left-[30%] bg-[#0f0f0f] border border-[#BE4C00]/30 text-[#BE4C00] font-mono text-[10px] font-black uppercase tracking-wider py-1.5 px-3 rounded-lg shadow-md z-20 flex items-center gap-1.5 border-dashed"
              >
                <Flame className="w-3.5 h-3.5 animate-pulse text-[#BE4C00]" />
                <span>SYS_SPEED: 120Hz</span>
              </motion.div>

              {/* CENTER CORE BOARD PANEL */}
              <motion.div
                layout
                className="relative z-30 p-8 md:p-12 w-full max-w-lg mx-4 rounded-3xl border border-white/10 bg-[#0C0C0C]/90 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_55px_rgba(182,0,168,0.1),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-white/15 transition-all duration-300"
              >
                {/* PCB clips */}
                <div className="absolute -top-3.5 left-1/4 w-8 h-7 bg-white/5 border border-white/10 rounded-md z-20 flex items-center justify-center">
                  <div className="w-1.5 h-3.5 bg-white/20 rounded-full" />
                </div>
                <div className="absolute -top-3.5 right-1/4 w-8 h-7 bg-white/5 border border-white/10 rounded-md z-20 flex items-center justify-center">
                  <div className="w-1.5 h-3.5 bg-white/20 rounded-full" />
                </div>

                <div className="text-center relative flex flex-col items-center">
                  <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-white font-mono text-[9px] sm:text-xs rounded-lg uppercase tracking-widest mb-5">
                    SYS_CORE_INIT // READY
                  </div>
                  
                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans mb-1 leading-none select-none">
                    RUDRA
                    <span className="block bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] bg-clip-text text-transparent transform -rotate-1 mt-1 pb-1">
                      CHAUHAN
                    </span>
                  </h1>
                  
                  <p className="font-mono text-[10px] sm:text-xs tracking-widest text-[#D7E2EA]/50 uppercase mt-4 max-w-xs mx-auto leading-relaxed border-t border-dashed border-white/10 pt-3">
                    Embedded Systems &amp; Web Engineer
                    <br />
                    <span className="text-[9px] bg-gradient-to-r from-[#B600A8]/20 to-[#BE4C00]/20 text-[#D7E2EA] px-2 py-0.5 border border-white/5 inline-block mt-2 rounded">
                      SYS_LOC: INDORE // GCET
                    </span>
                  </p>

                  <div className="mt-8 relative inline-block group cursor-pointer" id="enter-btn" onClick={handleBootTrigger}>
                    <svg className="absolute inset-0 w-full h-full text-white/5 border border-white/10 rounded-2xl group-hover:border-[#B600A8] transition-colors duration-300" preserveAspectRatio="none" viewBox="0 0 200 60">
                      <rect x="2" y="2" width="196" height="56" rx="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                    </svg>
                    <span className="relative z-10 block px-12 py-4 font-mono text-xs font-black tracking-widest text-[#D7E2EA] hover:text-white uppercase transition-colors select-none">
                      ENGAGE_SYSTEM_CORE ↵
                    </span>
                  </div>
                  
                  <p className="text-[9px] text-[#D7E2EA]/30 mt-3.5 font-mono font-medium tracking-wider">
                    OR STRIKE [ENTER] KEY ON DEVICE
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {/* =========================================================
              PHASE 2: DEDICATED FULL-SCREEN BOOT CHAMBER (BOOTING MODE)
              ========================================================= */}
          {bootState === 'booting' && (
            <motion.div
              key="boot-chamber"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="flex-grow flex-1 flex flex-col items-center justify-center z-30 w-full max-w-4xl mx-auto p-4 sm:p-8"
            >
              <div className="text-center flex flex-col items-center justify-center select-none">
                {/* Word 1: RUDRA */}
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.2em] text-white uppercase leading-none font-sans mb-3 flex items-center justify-center pl-[0.2em]">
                  {"RUDRA".split("").map((char, index) => {
                    const isRevealed = progress >= (index / 12) * 100;
                    return (
                      <motion.span
                        key={`rudra-${index}`}
                        initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                        animate={isRevealed 
                          ? { 
                              opacity: 1, 
                              y: 0, 
                              filter: 'blur(0px)',
                              textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.1)' 
                            } 
                          : { opacity: 0, y: 15, filter: 'blur(8px)' }
                        }
                        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </h2>

                {/* Word 2: CHAUHAN */}
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.2em] uppercase leading-none font-sans mb-12 flex items-center justify-center pl-[0.2em]">
                  {"CHAUHAN".split("").map((char, index) => {
                    const charIdx = index + 5;
                    const isRevealed = progress >= (charIdx / 12) * 100;
                    return (
                      <motion.span
                        key={`chauhan-${index}`}
                        initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                        animate={isRevealed 
                          ? { 
                              opacity: 1, 
                              y: 0, 
                              filter: 'blur(0px)',
                            } 
                          : { opacity: 0, y: 15, filter: 'blur(8px)' }
                        }
                        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                        className="inline-block bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] bg-clip-text text-transparent"
                        style={isRevealed ? {
                          filter: 'drop-shadow(0 0 20px rgba(182,0,168,0.25))'
                        } : {}}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </h2>

                {/* Progress Indicators */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col items-center gap-3 w-72 sm:w-80"
                >
                  <style>{`
                    @keyframes shimmer-loading {
                      0% { background-position: 0 0; }
                      100% { background-position: 20px 0; }
                    }
                    .shimmer-bar {
                      background-size: 20px 20px;
                      animation: shimmer-loading 0.8s linear infinite;
                    }
                  `}</style>

                  <div className="flex justify-between items-center text-[10px] font-mono text-[#D7E2EA]/45 w-full uppercase tracking-[0.2em] mb-0.5">
                    <span>Initializing System Core</span>
                    <span className="font-bold text-[#B600A8]">{progress}%</span>
                  </div>
                  
                  {/* Redesigned Progress Bar */}
                  <div className="h-3 w-full bg-black/60 border border-white/10 rounded-sm relative overflow-hidden p-[2px] flex items-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {/* Telemetry Segment Lines in background */}
                    <div className="absolute inset-0 flex justify-between pointer-events-none px-2 opacity-15">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-[1px] h-full bg-white" />
                      ))}
                    </div>

                    {/* Progress Bar Fill */}
                    <motion.div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] rounded-sm relative shadow-[0_0_10px_rgba(182,0,168,0.5)] flex items-center"
                      transition={{ ease: 'easeOut', duration: 0.1 }}
                    >
                      {/* Running Shimmer Highlights */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] shimmer-bar opacity-30" />
                      
                      {/* Laser tip glow */}
                      <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-white rounded-r-sm shadow-[0_0_8px_#fff,0_0_15px_#B600A8]" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* BOTTOM STATUS BAR (ONLY SHOWS IN IDLE SPLASH MODE) */}
          {bootState === 'idle' && (
            <div className="w-full flex items-center justify-between border-t border-white/5 pt-4 text-[9px] sm:text-xs font-mono text-[#D7E2EA]/35 z-10">
              <span>HOST: PORTFOLIO_SERVER</span>
              <span>ENVIRONMENT: LOCALHOST_5173</span>
              <span>MEMORY_OK: 100%</span>
              <span>JIT_CORE: COMPILED</span>
            </div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default HardwareIntro;
