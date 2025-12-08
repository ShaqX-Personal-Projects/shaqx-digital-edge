import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);
  const [irisOpen, setIrisOpen] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => {
        // Animate iris opening
        let start = 0;
        const duration = 800;
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing function for smooth animation
          const eased = 1 - Math.pow(1 - progress, 3);
          setIrisOpen(eased * 150);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, 1600),
      setTimeout(() => setPhase(4), 2400),
      setTimeout(() => onComplete(), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Generate iris blade clip path
  const generateIrisPath = (openAmount: number) => {
    const blades = 12;
    const points: string[] = [];
    const centerX = 50;
    const centerY = 50;
    
    for (let i = 0; i < blades; i++) {
      const angle = (i / blades) * Math.PI * 2;
      const nextAngle = ((i + 1) / blades) * Math.PI * 2;
      
      // Inner point (center or opening)
      const innerRadius = openAmount;
      const innerX = centerX + Math.cos(angle + 0.1) * innerRadius;
      const innerY = centerY + Math.sin(angle + 0.1) * innerRadius;
      
      // Outer point (edge of screen)
      const outerRadius = 100;
      const outerX = centerX + Math.cos(angle) * outerRadius;
      const outerY = centerY + Math.sin(angle) * outerRadius;
      
      const nextOuterX = centerX + Math.cos(nextAngle) * outerRadius;
      const nextOuterY = centerY + Math.sin(nextAngle) * outerRadius;
      
      const nextInnerX = centerX + Math.cos(nextAngle - 0.1) * innerRadius;
      const nextInnerY = centerY + Math.sin(nextAngle - 0.1) * innerRadius;
      
      points.push(`${innerX}% ${innerY}%`);
      points.push(`${outerX}% ${outerY}%`);
      points.push(`${nextOuterX}% ${nextOuterY}%`);
      points.push(`${nextInnerX}% ${nextInnerY}%`);
    }
    
    return `polygon(${points.join(', ')})`;
  };

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[100]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Background content layer */}
          <div className="absolute inset-0 bg-background flex items-center justify-center">
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

              <motion.div
                className="h-[2px] bg-foreground mt-6"
                initial={{ width: 0 }}
                animate={{ width: phase >= 2 ? 120 : 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />

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
          </div>

          {/* Iris overlay that opens like a camera */}
          {phase >= 3 && (
            <div 
              className="absolute inset-0 bg-foreground pointer-events-none"
              style={{
                clipPath: generateIrisPath(irisOpen),
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
