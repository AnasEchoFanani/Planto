import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect, useState, useCallback, useRef } from 'react';

interface LoadingOverlayProps {
  isLoading: boolean;
}

export function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  const animateWaterDrop = useCallback(async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    while (isAnimatingRef.current) {
      const randomX = Math.random() * 700 + 50;
      await controls.start({
        opacity: [0, 1, 0],
        y: [0, 100],
        x: randomX,
        transition: {
          duration: 0.8,
          ease: "easeIn"
        }
      });
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    }
  }, [controls]);

  useEffect(() => {
    if (isLoading && !animationRef.current) {
      setProgress(0);
      animationRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (animationRef.current) {
              clearInterval(animationRef.current);
              animationRef.current = null;
            }
            return 100;
          }
          return prev + 0.5;
        });
      }, 20);

      animateWaterDrop();

      return () => {
        if (animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }
        isAnimatingRef.current = false;
      };
    }
  }, [isLoading, animateWaterDrop]);

  // Convert progress (0-100) to y-position (300-0)
  const waterLevel = 300 - (progress * 300 / 100);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-sm z-50"
        >
          <div className="relative w-[800px] h-[300px]">
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 bg-green-500/20 rounded-full blur-[120px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Water drop effect */}
            <motion.div
              animate={controls}
              className="absolute top-0 w-1 h-6 opacity-0"
              style={{
                background: 'linear-gradient(180deg, rgba(34,197,94,0) 0%, rgba(34,197,94,0.3) 100%)',
                borderRadius: '50%',
                filter: 'blur(2px)',
              }}
            />

            {/* SVG Animation */}
            <svg 
              viewBox="0 0 800 300" 
              className="w-full h-full relative z-10"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Wave gradient */}
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#22c55e" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.8" />
                </linearGradient>

                {/* Ripple effect */}
                <filter id="ripple" x="-50%" y="-50%" width="200%" height="200%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.015 0.1"
                    numOctaves="3"
                    result="noise"
                  >
                    <animate
                      attributeName="baseFrequency"
                      values="0.015 0.1;0.015 0.15;0.015 0.1"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="20"
                    result="ripple"
                  />
                  <feGaussianBlur in="ripple" stdDeviation="0.5" />
                </filter>

                {/* Text mask with glow */}
                <filter id="text-glow">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feComposite in="blur" in2="SourceGraphic" operator="over" />
                </filter>

                <mask id="text-mask">
                  <rect width="800" height="300" fill="black" />
                  <text
                    x="400"
                    y="150"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    filter="url(#text-glow)"
                    style={{
                      fontSize: '140px',
                      fontFamily: 'system-ui, sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    Planto
                  </text>
                </mask>

                {/* Clip path for water level */}
                <clipPath id="water-level-clip">
                  <rect x="0" y={waterLevel} width="800" height={300 - waterLevel} />
                </clipPath>

                {/* Shine gradient */}
                <linearGradient id="shine-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)">
                    <animate
                      attributeName="offset"
                      values="-1;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="45%" stopColor="rgba(255,255,255,0)">
                    <animate
                      attributeName="offset"
                      values="-0.5;1.5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="50%" stopColor="rgba(255,255,255,0.5)">
                    <animate
                      attributeName="offset"
                      values="0;2"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="55%" stopColor="rgba(255,255,255,0)">
                    <animate
                      attributeName="offset"
                      values="0.5;2.5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="rgba(255,255,255,0)">
                    <animate
                      attributeName="offset"
                      values="1;3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>

              {/* Text outline with glow */}
              <g filter="url(#text-glow)">
                <text
                  x="400"
                  y="150"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontSize: '140px',
                    fontFamily: 'system-ui, sans-serif',
                    fontWeight: 'bold',
                    fill: 'none',
                    stroke: 'white',
                    strokeWidth: '1',
                  }}
                >
                  Planto
                </text>
              </g>

              {/* Water fill effect */}
              <g mask="url(#text-mask)" clipPath="url(#water-level-clip)">
                {/* Base water layer */}
                <rect
                  width="800"
                  height="300"
                  fill="url(#wave-gradient)"
                  filter="url(#ripple)"
                />

                {/* Wave layers */}
                {[0, 1, 2, 3].map((i) => (
                  <g key={i}>
                    <path
                      fill="url(#wave-gradient)"
                      opacity={0.8 - i * 0.15}
                      filter="url(#ripple)"
                    >
                      <animate
                        attributeName="d"
                        values={`
                          M0,${waterLevel + i * 15} 
                          C200,${waterLevel - 30 + i * 15} 
                          400,${waterLevel + 30 + i * 15} 
                          600,${waterLevel + i * 15}
                          L800,${waterLevel + i * 15} 
                          L800,300 
                          L0,300 Z;

                          M0,${waterLevel + i * 15} 
                          C200,${waterLevel + 30 + i * 15} 
                          400,${waterLevel - 30 + i * 15} 
                          600,${waterLevel + 30 + i * 15}
                          L800,${waterLevel + i * 15} 
                          L800,300 
                          L0,300 Z;

                          M0,${waterLevel + i * 15} 
                          C200,${waterLevel - 30 + i * 15} 
                          400,${waterLevel + 30 + i * 15} 
                          600,${waterLevel + i * 15}
                          L800,${waterLevel + i * 15} 
                          L800,300 
                          L0,300 Z
                        `}
                        dur={`${3 + i * 0.5}s`}
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                      />
                    </path>
                  </g>
                ))}

                {/* Shine effect */}
                <rect
                  width="800"
                  height="300"
                  fill="url(#shine-gradient)"
                  opacity="0.4"
                />
              </g>

            </svg>

            {/* Floating bubbles */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-500/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.min(70 + Math.random() * 10, 100 - (progress / 100 * 30))}%`,
                }}
                animate={{
                  y: [-20, -120 - Math.random() * 100],
                  x: [0, (Math.random() - 0.5) * 60],
                  scale: [0, 1 + Math.random() * 0.5, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 1.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingOverlay;
