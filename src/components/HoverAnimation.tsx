import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverAnimationProps {
  children: ReactNode;
  animation?: 'lift' | 'scale' | 'glow' | 'tilt' | 'bounce';
  className?: string;
  whileHover?: any; // Custom hover animation
  whileTap?: any; // Custom tap animation
}

const animations = {
  'lift': {
    whileHover: { y: -8, transition: { type: "spring", stiffness: 400 } },
    whileTap: { y: -4 }
  },
  'scale': {
    whileHover: { scale: 1.05, transition: { type: "spring", stiffness: 400 } },
    whileTap: { scale: 0.95 }
  },
  'glow': {
    whileHover: { 
      boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
      transition: { duration: 0.2 }
    },
    whileTap: { 
      boxShadow: "0 0 10px rgba(0, 255, 0, 0.2)" 
    }
  },
  'tilt': {
    whileHover: { 
      rotate: 2,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 }
    },
    whileTap: { 
      rotate: 1,
      scale: 0.98
    }
  },
  'bounce': {
    whileHover: {
      y: [0, -8, -4, -6, -5],
      transition: {
        duration: 0.6,
        times: [0, 0.2, 0.4, 0.6, 1],
        ease: "easeOut"
      }
    },
    whileTap: { y: -2 }
  }
};

export const HoverAnimation = ({
  children,
  animation = 'scale',
  className = '',
  whileHover,
  whileTap
}: HoverAnimationProps) => {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      className={className}
      whileHover={whileHover || selectedAnimation.whileHover}
      whileTap={whileTap || selectedAnimation.whileTap}
      style={{ transformOrigin: 'center' }}
    >
      {children}
    </motion.div>
  );
};
