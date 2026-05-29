import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer 
      id="contact" 
      className="bg-darkBg text-textLight px-6 md:px-10 pt-20 pb-10 border-t border-white/5 relative z-30 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Contact Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:items-end">
          <FadeIn delay={0} y={30} className="max-w-xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B600A8]">
              Get In Touch
            </span>
            <h2 className="hero-heading font-black uppercase text-[2.5rem] sm:text-[4rem] md:text-[5rem] leading-none mt-2">
              Let&apos;s build together
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.15} y={30}>
            <a 
              href="mailto:shani.rudra024@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-[#B600A8] group-hover:scale-110 transition-transform" />
              <span className="font-medium uppercase tracking-wider text-sm sm:text-base">
                shani.rudra024@gmail.com
              </span>
            </a>
          </FadeIn>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Contact Info & Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Info Column 1 */}
          <FadeIn delay={0.1} y={20} className="flex flex-col gap-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#D7E2EA]/40">
              Details
            </h4>
            <ul className="flex flex-col gap-3 font-light text-sm sm:text-base text-textLight/70">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#7621B0]" />
                <span>+91 9879138147</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#BE4C00]" />
                <span>Lunawada, Gujarat, India</span>
              </li>
            </ul>
          </FadeIn>

          {/* Socials Column 2 */}
          <FadeIn delay={0.2} y={20} className="flex flex-col gap-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#D7E2EA]/40">
              Profiles
            </h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/CHAUHANRUDRA24" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/30 text-textLight hover:text-[#B600A8] transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/Chauhan-Rudra" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/30 text-textLight hover:text-[#7621B0] transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>

          {/* Education Column 3 */}
          <FadeIn delay={0.3} y={20} className="flex flex-col gap-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#D7E2EA]/40">
              Education
            </h4>
            <div className="flex flex-col gap-1 font-light text-xs sm:text-sm text-textLight/70">
              <span className="font-bold text-[#D7E2EA] text-sm">G H Patel College of Engineering</span>
              <span>B.Tech in ICT (2024 – 2028)</span>
            </div>
          </FadeIn>
        </div>

        {/* Footer Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-white/5 text-[10px] sm:text-xs text-textLight/40 font-light">
          <span>&copy; {new Date().getFullYear()} Rudra Chauhan. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <span>Built with React, Tailwind CSS & Framer Motion</span>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => {
                sessionStorage.removeItem('hasSeenIntro');
                window.location.reload();
              }}
              className="hover:text-[#00f0ff] hover:underline cursor-pointer transition-colors font-mono"
            >
              Reboot Core System
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
