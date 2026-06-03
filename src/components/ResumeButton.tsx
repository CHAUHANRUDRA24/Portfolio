import React from 'react';

interface ResumeButtonProps {
  className?: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({ className = '' }) => {
  return (
    <a
      href="/Rudra_Chauhan_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 whitespace-nowrap gap-2 sm:gap-3 ${className}`}
      style={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Document Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className="w-4 h-4 sm:w-5 sm:h-5 text-textLight/80 transition-transform group-hover:-translate-y-0.5 duration-200"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" 
        />
      </svg>
      <span>Resume</span>
    </a>
  );
};

export default ResumeButton;
