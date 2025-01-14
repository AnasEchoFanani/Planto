import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  delay?: number;
}

export const AnimationWrapper = ({ children, delay = 0 }: AnimationWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
