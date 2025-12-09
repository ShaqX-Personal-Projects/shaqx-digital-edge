import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import caseBjarne from "@/assets/case-bjarne.png";
import caseGashi from "@/assets/case-gashi.png";

const cases = [
  {
    title: "Hair by Gashi",
    category: "Website",
    description: "Eksklusiv frisørwebsite i Aalborg med elegant sort/hvid æstetik, bookingsystem og galleri.",
    results: ["Luksus æstetik", "Integreret booking", "Mobil-optimeret"],
    link: "https://hairbygashi.dk",
    image: caseGashi,
  },
  {
    title: "Bjarne Fra Ellegården",
    category: "Website",
    description: "Professionel website til havearbejde og anlæg på Læsø med fokus på lokal troværdighed.",
    results: ["Lokal tilstedeværelse", "Klar kommunikation", "Responsive design"],
    link: "https://bjarnefraellegaarden.dk",
    image: caseBjarne,
  },
];

// Animated text component
const AnimatedText = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, skewY: 3 }}
      animate={isInView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0, y: 80, skewY: 3 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Case card with advanced animation
const CaseCard = ({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.a
      ref={ref}
      href={caseItem.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 100, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 10 }}
      transition={{ 
        duration: 0.9, 
        delay: index * 0.2, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -16, transition: { duration: 0.4 } }}
      className="group block bg-background border border-border hover:border-foreground/30 transition-colors duration-500 cursor-pointer overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image */}
      <div className="aspect-[16/10] bg-muted relative overflow-hidden">
        {caseItem.image ? (
          <motion.img 
            src={caseItem.image} 
            alt={caseItem.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
            Case billede
          </span>
        )}
        <motion.div 
          className="absolute inset-0 bg-foreground/20 group-hover:opacity-0 transition-opacity duration-500"
        />
        
        {/* Category badge */}
        <motion.div 
          className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            {caseItem.category}
          </span>
        </motion.div>
        
        {/* Arrow */}
        <motion.div 
          className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight 
            size={18} 
            className="text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
          />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-8">
        <motion.h3 
          className="font-display text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300"
        >
          {caseItem.title}
        </motion.h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {caseItem.description}
        </p>
        
        {/* Results */}
        <div className="flex flex-wrap gap-2">
          {caseItem.results.map((result, i) => (
            <motion.span 
              key={i}
              className="text-xs bg-secondary px-3 py-1.5 font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + i * 0.1 }}
            >
              {result}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

// CTA Card
const CtaCard = ({ index }: { index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 10 }}
      transition={{ 
        duration: 0.9, 
        delay: index * 0.2, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -16, transition: { duration: 0.4 } }}
      className="group block bg-foreground text-background border border-foreground cursor-pointer overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated background */}
      <div className="aspect-[16/10] bg-foreground/90 relative overflow-hidden flex items-center justify-center">
        <motion.span 
          className="font-display text-[12rem] font-bold text-background/10 select-none"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          ?
        </motion.span>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/5" />
      </div>
      
      {/* Content */}
      <div className="p-8">
        <span className="text-xs text-background/60 uppercase tracking-wider block mb-3">
          Dit projekt
        </span>
        <h3 className="font-display text-2xl font-bold mb-3 text-background">
          Er det din tur?
        </h3>
        <p className="text-background/70 mb-6 leading-relaxed">
          Lad os skabe noget stort sammen. Vi er klar til at hjælpe dig med at nå dine digitale mål.
        </p>
        <Link to="/kontakt">
          <Button variant="outline" className="bg-background text-foreground hover:bg-background/90 border-background">
            Book et møde
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const Cases = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="min-h-[50vh] bg-background relative overflow-hidden">
        <motion.div 
          className="container-wide py-20 md:py-28 lg:py-36"
          style={{ y: heroY }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="overflow-hidden mb-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block"
                >
                  Cases & Resultater
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", rotateX: 45 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95]"
                >
                  Projekter der har<br />
                  <span className="text-muted-foreground">skabt værdi</span>
                </motion.h1>
              </div>
            </div>
            
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg text-muted-foreground">
                Her er et udvalg af de projekter vi har arbejdet på. 
                Hvert projekt er unikt – men fælles for dem alle er fokus på konkrete resultater.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Decorative line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </section>

      {/* Cases Grid */}
      <section className="py-20 md:py-28 lg:py-36 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {cases.map((caseItem, index) => (
              <CaseCard key={caseItem.title} caseItem={caseItem} index={index} />
            ))}
            <CtaCard index={cases.length} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-background relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="container-wide text-center relative z-10">
          <AnimatedText>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-2xl mx-auto">
              Kunne dit projekt<br />være det næste?
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Lad os tage en snak om hvordan vi kan hjælpe dig med at opnå lignende resultater.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/kontakt">
                  Start en samtale
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </AnimatedText>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;