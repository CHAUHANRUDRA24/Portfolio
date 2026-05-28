

interface ContactButtonProps {
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className = '' }) => {
  return (
    <a
      href="mailto:shani.rudra024@gmail.com"
      className={`inline-block rounded-full transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      <span className="flex items-center justify-center px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base whitespace-nowrap">
        Contact Me
      </span>
    </a>
  );
};
