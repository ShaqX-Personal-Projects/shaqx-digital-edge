import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie_consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay before showing banner
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-wide">
            <div className="bg-foreground text-background p-6 md:p-8 shadow-2xl relative">
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 text-background/60 hover:text-background transition-colors"
                aria-label="Luk"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-1 pr-8 md:pr-0">
                  <h3 className="font-display text-lg font-bold mb-2">
                    Vi bruger cookies
                  </h3>
                  <p className="text-background/80 text-sm leading-relaxed">
                    Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside. 
                    Ved at fortsætte med at bruge siden accepterer du vores brug af cookies.{" "}
                    <Link
                      to="/cookie-policy"
                      className="underline hover:no-underline"
                    >
                      Læs mere
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="border-background/30 text-background hover:bg-background/10 hover:text-background"
                  >
                    Afvis
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Accepter alle
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
