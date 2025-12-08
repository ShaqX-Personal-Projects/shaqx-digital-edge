import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => onComplete(), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center origin-center"
          animate={{ 
            rotate: phase >= 3 ? 720 : 0,
            scale: phase >= 3 ? 0 : 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Subtle animated lines in background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-full bg-foreground"
                style={{ top: `${20 + i * 15}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: phase >= 1 ? 1 : 0 }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="relative flex flex-col items-center">
            {/* Logo reveal with clip mask */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground tracking-tighter"
                initial={{ y: "100%" }}
                animate={{ y: phase >= 1 ? "0%" : "100%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                SHAQX
              </motion.h1>
            </div>

            {/* Underline */}
            <motion.div
              className="h-[2px] bg-foreground mt-6"
              initial={{ width: 0 }}
              animate={{ width: phase >= 2 ? 120 : 0 }}
              transition={{
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* Tagline */}
            <div className="overflow-hidden mt-6">
              <motion.p
                className="text-muted-foreground text-sm tracking-[0.4em] uppercase"
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: phase >= 2 ? "0%" : "100%",
                  opacity: phase >= 2 ? 1 : 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                Digital Bureau
              </motion.p>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
