import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => onComplete(), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-border/30"
              style={{ top: `${(i + 1) * 12.5}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: phase >= 1 ? 1 : 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-border/20"
              style={{ left: `${(i + 1) * 8.33}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: phase >= 1 ? 1 : 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.03,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          ))}
        </div>

        {/* Corner accents */}
        <motion.div
          className="absolute top-8 left-8 w-16 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-foreground"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 2 ? 1 : 0 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute top-0 left-0 h-full w-px bg-foreground"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: phase >= 2 ? 1 : 0 }}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
        >
          <motion.div
            className="absolute bottom-0 right-0 w-full h-px bg-foreground"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 2 ? 1 : 0 }}
            style={{ transformOrigin: "right" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute bottom-0 right-0 h-full w-px bg-foreground"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: phase >= 2 ? 1 : 0 }}
            style={{ transformOrigin: "bottom" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo text with stagger */}
          <div className="overflow-hidden">
            <motion.div className="flex">
              {"SHAQX".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-6xl md:text-8xl font-display font-bold tracking-tighter"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{
                    y: phase >= 2 ? 0 : 100,
                    opacity: phase >= 2 ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Underline */}
          <motion.div
            className="h-1 bg-foreground mt-4"
            initial={{ width: 0 }}
            animate={{ width: phase >= 3 ? "100%" : 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Tagline */}
          <div className="overflow-hidden mt-6">
            <motion.p
              className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: phase >= 3 ? 0 : 30,
                opacity: phase >= 3 ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              Digital Bureau
            </motion.p>
          </div>

          {/* Loading bar */}
          <motion.div
            className="mt-12 w-48 h-px bg-border overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
          >
            <motion.div
              className="h-full bg-foreground"
              initial={{ x: "-100%" }}
              animate={{ x: phase >= 4 ? "0%" : "-100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />
          </motion.div>
        </div>

        {/* Animated particles */}
        {phase >= 2 && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-foreground/40"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 10,
                  opacity: 0,
                }}
                animate={{
                  y: -10,
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  delay: i * 0.2,
                  ease: "linear",
                }}
              />
            ))}
          </>
        )}

        {/* Exit reveal curtains */}
        {phase >= 4 && (
          <>
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 bg-background z-20"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="absolute inset-y-0 right-0 w-1/2 bg-background z-20"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
