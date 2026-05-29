import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Cpu, FileCode, Award, Network, Flame, Terminal, Activity, Server, Shield, Zap } from 'lucide-react';

interface HardwareIntroProps {
  onComplete: () => void;
}

export const HardwareIntro: React.FC<HardwareIntroProps> = ({ onComplete }) => {
  const [bootState, setBootState] = useState<'idle' | 'booting' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [systemMetrics, setSystemMetrics] = useState({
    voltage: 3.32,
    current: 124,
    temp: 42.1,
    frequency: 240,
    noise: 0.15,
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const consoleBottomRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

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

  // Procedural audio generation using Web Audio API
  const playBeep = (freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.04) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = type;
      osc.frequency.value = freq;
      
      gainNode.gain.setValueAtTime(volume, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  };

  // Setup metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics(() => ({
        voltage: +(3.3 + Math.random() * 0.04).toFixed(2),
        current: Math.floor(121 + Math.random() * 10),
        temp: +(41.8 + Math.random() * 1.1).toFixed(1),
        frequency: Math.random() > 0.95 ? 245 : 240,
        noise: +(0.1 + Math.random() * 0.06).toFixed(3),
      }));
    }, 600);
    return () => clearInterval(interval);
  }, []);

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

  // Keep terminal logs scrolled down
  useEffect(() => {
    consoleBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [consoleLogs]);

  const handleBootTrigger = () => {
    if (bootState !== 'idle') return;
    setBootState('booting');
    playBeep(780, 0.2, 'triangle', 0.05);

    // Audio Power up sweep
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 1.8);
      gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.0);
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 2.0);
    } catch (e) {}

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
        setConsoleLogs(prev => [...prev, step.log]);
        playBeep(450 + step.progress * 8, 0.05, 'sine', 0.02);
        
        if (step.progress === 100) {
          setTimeout(() => {
            playBeep(1200, 0.4, 'sine', 0.08);
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
          className="fixed inset-0 z-[9999] bg-[#070707] overflow-hidden flex flex-col justify-between p-4 sm:p-8 text-[#D7E2EA] select-none font-sans"
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full max-w-5xl flex-grow flex-1 min-h-0 flex flex-col justify-between py-4 z-30 mx-auto"
            >
              {/* Telemetry Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#B600A8] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest font-black">
                    SYSTEM_BOOT_CHAMBER // RUDRA_CHAUHAN_CORE
                  </span>
                </div>
                <div className="flex items-center gap-6 font-mono text-xs text-[#D7E2EA]/60">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#BE4C00]" />
                    <span>SYS_OVERCLOCK: ENGAGED</span>
                  </div>
                  <span className="text-[#B600A8] font-bold">{progress}%</span>
                </div>
              </div>

              {/* Core Workbench split section */}
              <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden max-h-[68vh]">
                
                {/* LEFT SIDE: COMMAND DIAGNOSTIC LOG FEED */}
                <div className="lg:col-span-5 flex flex-col justify-between border border-white/10 bg-[#0C0C0C]/65 backdrop-blur-xl rounded-2xl p-5 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-2.5">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#B600A8]" />
                      <span className="text-xs uppercase font-bold tracking-widest text-[#D7E2EA]/85 font-mono">DIAGNOSTIC_FEED</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#D7E2EA]/30">BAUD_115200</span>
                  </div>

                  {/* LOG WRAPPER */}
                  <div className="flex-grow overflow-y-auto text-[10px] sm:text-xs leading-5 flex flex-col gap-1.5 pr-2 font-mono scrollbar-thin">
                    {consoleLogs.map((log, index) => {
                      const isOk = log.startsWith('[OK]');
                      const isSys = log.startsWith('⚡') || log.startsWith('🤖');
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.1 }}
                          className={`pl-2.5 border-l-2 py-0.5 rounded-r transition-colors ${
                            isOk 
                              ? 'border-green-500/30 text-[#D7E2EA]/90 hover:bg-green-500/[0.02]' 
                              : isSys 
                                ? 'border-[#B600A8]/30 text-[#D7E2EA] font-semibold'
                                : 'border-[#7621B0]/20 text-[#D7E2EA]/80 hover:bg-white/[0.01]'
                          }`}
                        >
                          <span className={`${isOk ? 'text-green-400' : 'text-[#B600A8]'} mr-1.5 select-none`}>
                            {isOk ? '✔' : '&gt;'}
                          </span>
                          {log}
                        </motion.div>
                      );
                    })}
                    <div ref={consoleBottomRef} />
                  </div>

                  <div className="border-t border-white/5 pt-2.5 mt-2.5 text-[9px] text-[#D7E2EA]/30 flex justify-between font-mono">
                    <span>BUFFER_LINE_LIMIT: 2048</span>
                    <span className="animate-pulse flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> COMPILE_RUNNING
                    </span>
                  </div>
                </div>

                {/* CENTER COMPONENT: MICROCHIP BLUEPRINT SCANNER */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center border border-white/10 bg-[#0C0C0C]/65 backdrop-blur-xl rounded-2xl p-6 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                  
                  {/* Glowing calibration vector lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(182,0,168,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(182,0,168,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                  
                  {/* Moving scanning radar bar */}
                  <motion.div
                    animate={{ y: [-150, 150] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                    className="absolute inset-x-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#B600A8] to-transparent shadow-[0_0_12px_#B600A8] pointer-events-none z-10"
                  />

                  {/* SVG detailed microchip blueprint blueprint */}
                  <div className="w-full aspect-square max-w-[200px] relative flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
                      className="w-full h-full text-white/80"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                        {/* Silicon Die Layer */}
                        <rect x="20" y="20" width="60" height="60" rx="12" fill="none" stroke="url(#bootLoaderGlow)" strokeWidth="2" className="opacity-95" />
                        <rect x="32" y="32" width="36" height="36" rx="8" fill="none" stroke="#7621B0" strokeWidth="1.5" className="opacity-70" strokeDasharray="3 2" />
                        <circle cx="50" cy="50" r="10" fill="none" stroke="#B600A8" strokeWidth="1.5" className="opacity-90" />
                        
                        {/* Motherboard trace extensions */}
                        <line x1="8" y1="35" x2="20" y2="35" stroke="#B600A8" strokeWidth="1.5" />
                        <line x1="8" y1="50" x2="20" y2="50" stroke="#7621B0" strokeWidth="1.5" />
                        <line x1="8" y1="65" x2="20" y2="65" stroke="#BE4C00" strokeWidth="1.5" />
                        <line x1="80" y1="35" x2="92" y2="35" stroke="#7621B0" strokeWidth="1.5" />
                        <line x1="80" y1="50" x2="92" y2="50" stroke="#BE4C00" strokeWidth="1.5" />
                        <line x1="80" y1="65" x2="92" y2="65" stroke="#B600A8" strokeWidth="1.5" />
                        <line x1="35" y1="8" x2="35" y2="20" stroke="#BE4C00" strokeWidth="1.5" />
                        <line x1="50" y1="8" x2="50" y2="20" stroke="#B600A8" strokeWidth="1.5" />
                        <line x1="65" y1="8" x2="65" y2="20" stroke="#7621B0" strokeWidth="1.5" />
                        <line x1="35" y1="80" x2="35" y2="92" stroke="#B600A8" strokeWidth="1.5" />
                        <line x1="50" y1="80" x2="50" y2="92" stroke="#7621B0" strokeWidth="1.5" />
                        <line x1="65" y1="80" x2="65" y2="92" stroke="#BE4C00" strokeWidth="1.5" />
                      </svg>
                    </motion.div>
                    
                    {/* Pulsing neon core status light */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none font-mono">
                      <div className="w-12 h-12 rounded-full border border-[#B600A8]/30 flex flex-col items-center justify-center bg-black/80 shadow-[0_0_20px_rgba(182,0,168,0.2)]">
                        <span className="text-[10px] font-black text-white tracking-widest leading-none">R</span>
                        <span className="text-[8px] font-bold text-[#BE4C00] tracking-widest leading-none mt-0.5">C</span>
                      </div>
                      <div className="w-3.5 h-3.5 bg-[#B600A8]/20 rounded-full absolute -z-10 animate-ping" />
                    </div>
                  </div>

                  <div className="mt-6 text-center w-full">
                    <div className="text-sm font-black tracking-widest font-mono text-white uppercase mb-1">
                      RUDRA CHAUHAN
                    </div>
                    <h4 className="text-[10px] uppercase tracking-widest font-black font-mono text-[#D7E2EA]/60 flex items-center gap-1.5 justify-center">
                      <Shield className="w-3.5 h-3.5 text-[#7621B0]" /> SECURE_BOOTLOADER
                    </h4>
                    <p className="text-[9px] text-[#D7E2EA]/40 font-mono mt-1">VOLTS: STABLE // TEMP: 42.1°C</p>
                  </div>
                </div>

                {/* RIGHT SIDE: ADVANCED TELEMETRY CHARTS & OSCILLOSCOPE */}
                <div className="lg:col-span-3 flex flex-col gap-4 overflow-hidden">
                  
                  {/* DIGITAL DIALS CONTAINER */}
                  <div className="border border-white/10 bg-[#0C0C0C]/65 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <Server className="w-4 h-4 text-[#BE4C00]" />
                      <span className="text-xs uppercase font-bold tracking-widest text-[#D7E2EA]/85 font-mono">TELEMETRY_LOG</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-center text-xs font-mono">
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-center">
                        <span className="text-[8px] text-[#D7E2EA]/40 uppercase tracking-wider">CORE_VOLTS</span>
                        <span className="font-bold text-[#BE4C00] text-xs sm:text-sm mt-0.5">{systemMetrics.voltage} V</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-center">
                        <span className="text-[8px] text-[#D7E2EA]/40 uppercase tracking-wider">LOAD_CURRENT</span>
                        <span className="font-bold text-[#7621B0] text-xs sm:text-sm mt-0.5">{systemMetrics.current} mA</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-center">
                        <span className="text-[8px] text-[#D7E2EA]/40 uppercase tracking-wider">CLOCK_FREQ</span>
                        <span className="font-bold text-textLight text-xs sm:text-sm mt-0.5">{systemMetrics.frequency} MHz</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-center">
                        <span className="text-[8px] text-[#D7E2EA]/40 uppercase tracking-wider">CORE_TEMP</span>
                        <span className="font-bold text-[#B600A8] text-xs sm:text-sm mt-0.5">{systemMetrics.temp} °C</span>
                      </div>
                    </div>
                  </div>

                  {/* WAVEFORM ANALYZER */}
                  <div className="border border-white/10 bg-[#0C0C0C]/65 backdrop-blur-xl rounded-2xl p-4 flex-grow flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <Zap className="w-4 h-4 text-[#B600A8]" />
                      <span className="text-xs uppercase font-bold tracking-widest text-[#D7E2EA]/85 font-mono">WAVEFORM_ANALYZER</span>
                    </div>

                    {/* Procedural wave SVG drawing */}
                    <div className="border border-white/5 rounded-xl bg-black/60 flex items-center justify-center h-28 relative overflow-hidden my-3">
                      <svg viewBox="0 0 100 40" className="w-full h-full text-[#B600A8] opacity-75">
                        <motion.path
                          d={`M 0,20 Q 25,${10 + Math.sin(progress) * 8} 50,20 T 100,20`}
                          fill="none"
                          stroke="url(#waveGradient)"
                          strokeWidth="2"
                          animate={{ d: [
                            `M 0,20 Q 25,${10 + Math.sin(progress) * 8} 50,20 T 100,20`,
                            `M 0,20 Q 25,${30 - Math.sin(progress) * 8} 50,20 T 100,20`,
                            `M 0,20 Q 25,${10 + Math.sin(progress) * 8} 50,20 T 100,20`
                          ] }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        />
                      </svg>
                    </div>

                    <div className="text-[9px] font-mono text-[#D7E2EA]/30 flex justify-between">
                      <span>NOISE: {systemMetrics.noise} mV</span>
                      <span>FREQ: STABLE</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* BOTTOM LOAD CONTROLLER FOR CHIP COMPILING */}
              <div className="w-full flex flex-col gap-2.5 mt-4 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#D7E2EA]/45 uppercase tracking-widest text-[9px] sm:text-xs">
                    COMPILING WORKBENCH MODULES... DO NOT DISCONNECT POWER
                  </span>
                  <span className="font-bold text-[#B600A8]">{progress}%</span>
                </div>

                {/* Glowing load track bar */}
                <div className="w-full h-3 border border-white/10 rounded-full p-[2px] bg-black/60 overflow-hidden relative shadow-[inset_0_1px_5px_rgba(0,0,0,0.5)]">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'easeInOut', duration: 0.1 }}
                    className="h-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] rounded-full relative shadow-[0_0_15px_rgba(182,0,168,0.5)]"
                  >
                    <div className="absolute top-0 right-0 w-3 h-full bg-white rounded-full blur-[1px] animate-pulse" />
                  </motion.div>
                </div>
              </div>
              
              <defs>
                <linearGradient id="bootLoaderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B600A8" />
                  <stop offset="50%" stopColor="#7621B0" />
                  <stop offset="100%" stopColor="#BE4C00" />
                </linearGradient>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7621B0" />
                  <stop offset="50%" stopColor="#B600A8" />
                  <stop offset="100%" stopColor="#BE4C00" />
                </linearGradient>
              </defs>
            </motion.div>
          )}
          {bootState === 'booting' && (
            <div className="w-full h-4 z-10 opacity-0 pointer-events-none" />
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
