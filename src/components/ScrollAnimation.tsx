import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'scale';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

const animations = {
  'fade': {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  'slide-up': {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  },
  'slide-right': {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  },
  'scale': {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  }
};

export const ScrollAnimation = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.5,
  once = true,
  className = ''
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-20% 0px -20% 0px" });
  
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
