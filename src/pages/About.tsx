import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Intro-møde",
    description: "Vi starter med en uforpligtende snak om dine udfordringer, mål og ambitioner. Ingen salgstale – bare ærlig dialog.",
  },
  {
    number: "02",
    title: "Analyse & Strategi",
    description: "Vi dykker ned i din situation og udarbejder en klar plan med konkrete anbefalinger og realistiske tidsrammer.",
  },
  {
    number: "03",
    title: "Udvikling & Eksekvering",
    description: "Vi går i gang med at bygge løsningen. Du bliver holdt i loopet undervejs med regelmæssige opdateringer.",
  },
  {
    number: "04",
    title: "Drift & Optimering",
    description: "Efter lancering stopper vi ikke. Vi overvåger, optimerer og sørger for at tingene kører som de skal.",
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

// Process step with stagger animation
const ProcessStep = ({ step, index }: { step: typeof processSteps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <motion.div 
        className="absolute -left-4 top-0 w-[2px] h-full bg-border origin-top"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
      />
      <motion.div 
        className="text-7xl md:text-8xl font-display font-bold text-muted-foreground/10 absolute -top-6 -left-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
      >
        {step.number}
      </motion.div>
      <div className="relative pt-8 pl-8">
        <h3 className="font-display text-xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
          {step.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

// Value card with hover effect
const ValueCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 15 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-foreground p-10 text-center relative overflow-hidden group cursor-default"
    >
      <motion.div 
        className="absolute inset-0 bg-background/5"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <h3 className="font-display text-xl font-bold mb-4 relative z-10">{title}</h3>
      <p className="text-background/70 relative z-10">
        {description}
      </p>
    </motion.div>
  );
};

const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <Layout>
      {/* Hero - Asymmetric Split */}
      <section ref={heroRef} className="min-h-[70vh] bg-background relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-7 p-8 md:p-12 lg:p-20 flex flex-col justify-center"
            style={{ y: heroY }}
          >
            <div className="overflow-hidden mb-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block"
              >
                Om ShaqX
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", rotateX: 45 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[0.95]"
              >
                Vi bygger digitale<br />
                <span className="text-muted-foreground">løsninger uden</span><br />
                støj og fluff
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
            >
              ShaqX er et dansk digitalt bureau med én mission: At hjælpe virksomheder 
              med at vokse digitalt – på en måde der rent faktisk giver resultater.
            </motion.p>
          </motion.div>

          {/* Right Column - Decorative */}
          <motion.div 
            className="hidden lg:flex lg:col-span-5 bg-foreground items-center justify-center relative"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="font-display text-[20rem] font-bold text-background/5 select-none"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              X
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Vision - Overlapping Cards */}
      <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
            <div className="lg:col-span-6 lg:pr-16">
              <AnimatedText>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                  Vores vision
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  For mange virksomheder kæmper med at navigere i den digitale jungle. 
                  Der er for mange buzzwords, for mange løsninger der lover guld og grønne skove, 
                  og alt for lidt fokus på hvad der faktisk virker.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ShaqX eksisterer for at ændre det. Vi skærer igennem støjen og leverer 
                  løsninger der er bygget til formålet – ikke til at imponere på et salgsmøde.
                </p>
              </AnimatedText>
            </div>
            
            <motion.div 
              className="lg:col-span-6 lg:-mt-20"
              initial={{ opacity: 0, y: 100, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-card border border-border p-10 lg:p-12 shadow-2xl">
                <h3 className="font-display text-xl font-bold mb-6">Bag ShaqX</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  ShaqX er grundlagt med en baggrund i softwareudvikling, digital marketing 
                  og forretningsudvikling. Det er netop kombinationen af teknisk ekspertise 
                  og kommerciel forståelse der gør os i stand til at levere løsninger, 
                  der ikke bare fungerer teknisk – men som rent faktisk driver vækst.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vi arbejder tæt sammen med vores kunder og tror på langvarige partnerskaber 
                  frem for enkeltstående projekter.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process - Staggered Timeline */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <AnimatedText>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                  Vores proces
                </span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold sticky top-32">
                  Sådan<br />arbejder vi
                </h2>
              </AnimatedText>
            </div>

            <div className="lg:col-span-8 space-y-16 md:space-y-24">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-wide relative z-10">
          <AnimatedText className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Det vi tror på
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10">
            <ValueCard 
              title="Kvalitet over kvantitet" 
              description="Vi tager ikke flere projekter end vi kan håndtere ordentligt. Hver kunde får vores fulde opmærksomhed."
              index={0}
            />
            <ValueCard 
              title="Ærlighed først" 
              description="Vi siger tingene som de er. Også selvom det betyder at fraråde noget du troede du havde brug for."
              index={1}
            />
            <ValueCard 
              title="Resultater der tæller" 
              description="Alt hvad vi laver skal kunne måles. Ingen luftige løfter – kun konkrete outcomes."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-secondary" 
          style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="container-wide text-center relative z-10 py-20">
          <AnimatedText>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-2xl mx-auto">
              Lyder det som nogen<br />du kunne arbejde med?
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Lad os tage en snak og finde ud af om vi er det rette match.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/kontakt">
                  Book et møde
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

export default About;