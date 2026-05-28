import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, scrollYProgress }) => {
  // Smooth sequential transition range for this specific character
  const start = index / total;
  const end = Math.min(1, start + 0.1); // Overlap for smoother transition

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder to preserve layout and width */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated span */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0 w-full h-full"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  // We want to calculate the global character index to stagger them correctly
  let globalCharIndex = 0;
  
  // Calculate total characters including spaces
  const totalChars = text.length;

  return (
    <span ref={containerRef} className={`inline-flex flex-wrap justify-center leading-relaxed ${className}`}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
            {wordChars.map((char, charIndex) => {
              const currentIndex = globalCharIndex;
              globalCharIndex++; // Increment global index for this character
              
              return (
                <Character
                  key={charIndex}
                  char={char}
                  index={currentIndex}
                  total={totalChars}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
            {/* Account for the space in the global character index */}
            {wordIndex < words.length - 1 && (
              <span className="hidden" aria-hidden="true">
                {(() => {
                  globalCharIndex++;
                  return null;
                })()}
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
};
export default AnimatedText;
