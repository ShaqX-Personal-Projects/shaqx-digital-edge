import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2300),
      setTimeout(() => onComplete(), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Vertical bars that slide away */}
          <div className="absolute inset-0 flex">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-foreground"
                initial={{ scaleY: 1 }}
                animate={{ 
                  scaleY: phase >= 3 ? 0 : 1,
                }}
                style={{ 
                  transformOrigin: i % 2 === 0 ? "top" : "bottom",
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              {/* Logo */}
              <div className="overflow-hidden">
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-background mix-blend-difference tracking-tighter"
                  initial={{ y: "110%" }}
                  animate={{ y: phase >= 1 ? "0%" : "110%" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  SHAQX
                </motion.h1>
              </div>

              {/* Tagline */}
              <div className="overflow-hidden mt-4">
                <motion.p
                  className="text-background mix-blend-difference text-sm tracking-[0.3em] uppercase"
                  initial={{ y: "110%" }}
                  animate={{ y: phase >= 2 ? "0%" : "110%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  Digital Bureau
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
