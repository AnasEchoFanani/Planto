import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  type?: 'leaf' | 'dots' | 'pulse';
}

export function LoadingSpinner({ 
  size = 40, 
  color = '#22c55e',
  type = 'leaf' 
}: LoadingSpinnerProps) {
  if (type === 'dots') {
    return (
      <div className="flex space-x-2 justify-center items-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="rounded-full"
            style={{
              width: size / 3,
              height: size / 3,
              backgroundColor: color
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className="relative" style={{ width: size, height: size }}>
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ borderColor: color, borderWidth: 2 }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
    );
  }

  // Leaf animation (default)
  return (
    <div 
      className="relative"
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            width: '100%',
            height: '100%',
            color: color
          }}
        >
          <motion.path
            d="M12 2C7.582 2 4 5.582 4 10c0 3.418 2.618 6.236 6 6.618V20h4v-3.382c3.382-.382 6-3.2 6-6.618 0-4.418-3.582-8-8-8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default LoadingSpinner;
