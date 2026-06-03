

interface LiveProjectButtonProps {
  href?: string;
  className?: string;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href = '#',
  className = '',
  label = 'Live Project',
  onClick,
}) => {
  return (
    <a
      href={href}
      target={onClick ? undefined : (href.startsWith('#') ? undefined : '_blank')}
      rel={onClick ? undefined : (href.startsWith('#') ? undefined : 'noopener noreferrer')}
      onClick={onClick}
      className={`inline-block rounded-full border-2 border-textLight text-textLight font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-textLight/10 active:scale-95 text-center ${className}`}
    >
      {label}
    </a>
  );
};
