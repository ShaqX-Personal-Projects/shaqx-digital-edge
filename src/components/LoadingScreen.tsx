import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);
  const [scrambledText, setScrambledText] = useState("█████");
  const [isExiting, setIsExiting] = useState(false);

  const scrambleText = useCallback(() => {
    const target = "SHAQX";
    const chars = "!@#$%^&*()█▓▒░ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iteration = 0;
    const maxIterations = 15;

    const interval = setInterval(() => {
      setScrambledText(
        target
          .split("")
          .map((char, index) => {
            if (index < iteration / 2) return target[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setScrambledText(target);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 400),
      setTimeout(() => {
        setPhase(3);
        scrambleText();
      }, 800),
      setTimeout(() => setPhase(4), 1600),
      setTimeout(() => setIsExiting(true), 2200),
      setTimeout(() => onComplete(), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete, scrambleText]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-foreground overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Pulsing background layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-neutral-800 via-foreground to-foreground"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Animated diagonal lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`diag-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-background/30 to-transparent"
                style={{
                  width: "200%",
                  left: "-50%",
                  top: `${i * 5}%`,
                  transform: "rotate(-45deg)",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: phase >= 1 ? "100%" : "-100%" }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.05,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
          </div>

          {/* Morphing geometric shapes */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute border border-background/20"
                style={{
                  width: 300 + i * 100,
                  height: 300 + i * 100,
                  left: -(150 + i * 50),
                  top: -(150 + i * 50),
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{
                  opacity: phase >= 1 ? [0.1, 0.3, 0.1] : 0,
                  scale: phase >= 1 ? 1 : 0,
                  rotate: phase >= 1 ? [0, 90, 0] : 0,
                  borderRadius: phase >= 2 ? ["0%", "50%", "0%"] : "0%",
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Explosive particles */}
          {phase >= 2 && (
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => {
                const angle = (i / 30) * Math.PI * 2;
                const distance = 400 + Math.random() * 200;
                return (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-background"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance,
                      opacity: [1, 1, 0],
                      scale: [1, 2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: Math.random() * 0.3,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />
                );
              })}
            </div>
          )}

          {/* Glitch bars */}
          {phase >= 2 && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`glitch-${i}`}
                  className="absolute left-0 right-0 bg-background/10"
                  style={{ height: Math.random() * 4 + 1 }}
                  initial={{ 
                    y: Math.random() * window.innerHeight,
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: [0, 1, 1, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.1 + Math.random() * 0.2,
                    repeat: 3,
                    repeatDelay: 0.1,
                  }}
                />
              ))}
            </>
          )}

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-3xl bg-background/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: phase >= 3 ? [1, 1.5, 1] : 0,
                  opacity: phase >= 3 ? [0.5, 0.8, 0.5] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ width: 400, height: 200, left: -100, top: -50 }}
              />

              {/* Main text with scramble effect */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: phase >= 3 ? 1 : 0,
                  scale: phase >= 3 ? 1 : 0.5,
                }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.h1
                  className="text-7xl md:text-9xl font-display font-bold text-background tracking-tighter"
                  animate={{
                    x: phase >= 3 ? [0, -2, 2, -1, 1, 0] : 0,
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: phase >= 3 && phase < 4 ? Infinity : 0,
                    repeatDelay: 0.3,
                  }}
                >
                  {scrambledText}
                </motion.h1>

                {/* Glitch overlay texts */}
                <motion.h1
                  className="absolute inset-0 text-7xl md:text-9xl font-display font-bold tracking-tighter text-red-500/30"
                  style={{ clipPath: "inset(0 0 50% 0)" }}
                  animate={{
                    x: phase >= 3 ? [0, 4, -4, 0] : 0,
                  }}
                  transition={{
                    duration: 0.1,
                    repeat: phase >= 3 ? 10 : 0,
                    repeatDelay: 0.2,
                  }}
                >
                  {scrambledText}
                </motion.h1>
                <motion.h1
                  className="absolute inset-0 text-7xl md:text-9xl font-display font-bold tracking-tighter text-cyan-500/30"
                  style={{ clipPath: "inset(50% 0 0 0)" }}
                  animate={{
                    x: phase >= 3 ? [0, -4, 4, 0] : 0,
                  }}
                  transition={{
                    duration: 0.1,
                    repeat: phase >= 3 ? 10 : 0,
                    repeatDelay: 0.2,
                  }}
                >
                  {scrambledText}
                </motion.h1>
              </motion.div>

              {/* Scanning line */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-background to-transparent"
                initial={{ top: "0%", opacity: 0 }}
                animate={{
                  top: phase >= 3 ? ["0%", "100%", "0%"] : "0%",
                  opacity: phase >= 3 ? 1 : 0,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          {/* Corner markers */}
          {[
            { top: 0, left: 0, rotate: 0 },
            { top: 0, right: 0, rotate: 90 },
            { bottom: 0, right: 0, rotate: 180 },
            { bottom: 0, left: 0, rotate: 270 },
          ].map((pos, i) => (
            <motion.div
              key={`corner-${i}`}
              className="absolute w-20 h-20 m-8"
              style={pos}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: phase >= 2 ? 1 : 0,
                scale: phase >= 2 ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-px bg-background/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: phase >= 2 ? 1 : 0 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full w-px bg-background/50"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: phase >= 2 ? 1 : 0 }}
                style={{ transformOrigin: "top" }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              />
            </motion.div>
          ))}

          {/* Progress indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="w-2 h-2 rounded-full bg-background/30"
                  animate={{
                    backgroundColor:
                      phase > i
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.3)",
                    scale: phase === i + 1 ? [1, 1.5, 1] : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    scale: { duration: 0.5, repeat: Infinity },
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Final reveal - splits screen */}
          {phase >= 4 && (
            <>
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-foreground z-50"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-foreground z-50"
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
