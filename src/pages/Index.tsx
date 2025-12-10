import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import caseBjarne from "@/assets/case-bjarne.png";
import caseGashi from "@/assets/case-gashi.png";

const services = [
  {
    title: "Softwareudvikling",
    description: "Skræddersyet software der løser dine specifikke udfordringer.",
    href: "/services#software",
    number: "01",
  },
  {
    title: "Websites & Webshops",
    description: "Hurtige, brugervenlige sites der konverterer.",
    href: "/services#websites",
    number: "02",
  },
  {
    title: "SEO & Synlighed",
    description: "Bliv fundet på Google.",
    href: "/services#seo",
    number: "03",
  },
  {
    title: "Rådgivning & Strategi",
    description: "Ærlig sparring om digital forretningsudvikling.",
    href: "/services#raadgivning",
    number: "04",
  },
  {
    title: "Support & Drift",
    description: "Løbende vedligeholdelse og teknisk support.",
    href: "/services#support",
    number: "05",
  },
  {
    title: "Rekruttering",
    description: "Find de rigtige specialister.",
    href: "/services#rekruttering",
    number: "06",
  },
];

const cases = [
  {
    title: "Hair by Gashi",
    category: "Website",
    result: "Luksus",
    resultLabel: "frisøroplevelse",
    description: "Eksklusiv frisørwebsite i Aalborg med elegant sort/hvid æstetik, bookingsystem og galleri.",
    link: "https://hairbygashi.dk",
    image: caseGashi,
    isCta: false,
  },
  {
    title: "Bjarne Fra Ellegården",
    category: "Website",
    result: "Lokal",
    resultLabel: "tilstedeværelse",
    description: "Professionel website til havearbejde og anlæg på Læsø med fokus på lokal troværdighed.",
    link: "https://bjarnefraellegaarden.dk",
    image: caseBjarne,
    isCta: false,
  },
  {
    title: "Er det din tur?",
    category: "Dit projekt",
    result: "Næste",
    resultLabel: "succeshistorie",
    description: "Lad os skabe noget stort sammen. Vi er klar til at hjælpe dig med at nå dine digitale mål.",
    link: "/kontakt",
    image: undefined,
    isCta: true,
  },
];

// Reusable animated text component
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

// Animated line reveal
const LineReveal = ({ delay = 0 }: { delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-[1px] bg-border origin-left"
    />
  );
};

// Service item with hover animation
const ServiceItem = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={service.href}
        className="group block border-b border-border hover:bg-secondary transition-colors duration-500"
      >
        <div className="p-8 md:p-10 lg:p-12 flex items-center justify-between gap-8">
          <div className="flex items-start gap-8 md:gap-12">
            <motion.span 
              className="text-xs text-muted-foreground font-mono mt-1"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              {service.number}
            </motion.span>
            <div className="overflow-hidden">
              <motion.h3 
                className="font-display text-xl md:text-2xl font-bold mb-2"
                whileHover={{ x: 16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {service.title}
              </motion.h3>
              <p className="text-muted-foreground text-sm md:text-base max-w-md">
                {service.description}
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ x: 8, y: -8, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight 
              size={24} 
              className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" 
            />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

// Case card with stagger animation
const CaseCard = ({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // CTA card styling
  if (caseItem.isCta) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100, rotateX: 15 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 15 }}
        transition={{ 
          duration: 0.9, 
          delay: index * 0.2, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        whileHover={{ y: -12, transition: { duration: 0.4 } }}
        className="group block bg-foreground text-background border border-foreground cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="aspect-[4/3] bg-foreground/90 flex items-center justify-center relative overflow-hidden">
          <motion.span 
            className="font-display text-6xl md:text-7xl font-bold text-background/20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ?
          </motion.span>
        </div>
        <div className="p-8">
          <div className="flex items-start justify-between mb-3">
            <span className="text-xs text-background/60 uppercase tracking-wider">
              {caseItem.category}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold mb-3 text-background">
            {caseItem.title}
          </h3>
          <p className="text-background/70 text-sm mb-6">
            {caseItem.description}
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
  }
  
  return (
    <motion.a
      ref={ref}
      href={caseItem.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 100, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 15 }}
      transition={{ 
        duration: 0.9, 
        delay: index * 0.2, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -12, transition: { duration: 0.4 } }}
      className={`group block bg-background border border-border hover:border-foreground/30 transition-colors duration-500 cursor-pointer ${
        index === 0 ? 'lg:translate-y-16' : ''
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="aspect-[4/3] bg-muted flex items-center justify-center relative overflow-hidden">
        {caseItem.image ? (
          <img 
            src={caseItem.image} 
            alt={caseItem.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-muted-foreground text-sm relative z-10">Case billede</span>
        )}
        <motion.div 
          className="absolute inset-0 bg-foreground/10 group-hover:opacity-0 transition-opacity duration-500"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      <div className="p-8">
        <div className="flex items-start justify-between mb-3">
          <motion.span 
            className="text-xs text-muted-foreground uppercase tracking-wider inline-block"
            whileHover={{ letterSpacing: '0.2em' }}
            transition={{ duration: 0.3 }}
          >
            {caseItem.category}
          </motion.span>
          <ArrowUpRight 
            size={18} 
            className="text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" 
          />
        </div>
        <h3 className="font-display text-xl font-bold mb-3">
          {caseItem.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          {caseItem.description}
        </p>
        <div className="flex flex-col gap-1">
          <motion.span 
            className="font-display text-3xl md:text-4xl font-bold"
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {caseItem.result}
          </motion.span>
          <span className="text-muted-foreground text-sm">
            {caseItem.resultLabel}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

// Value item with number animation
const ValueItem = ({ number, title, description, index }: { number: string; title: string; description: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`p-8 md:p-12 lg:p-20 ${index < 2 ? 'border-b border-background/10' : ''}`}
    >
      <motion.span 
        className="font-display text-6xl md:text-7xl font-bold text-background/20 block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
      >
        {number}
      </motion.span>
      <motion.h3 
        className="font-display text-xl font-bold mt-4 mb-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-background/60"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Layout>
        {/* Hero Section - Asymmetric Split Layout with Parallax */}
        <section ref={heroRef} className="relative min-h-screen overflow-hidden">
          {/* Video Background with parallax */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ scale: heroScale }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div 
            className="relative z-10 min-h-screen flex"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            {/* Left side - Main headline */}
            <div className="w-full lg:w-[60%] flex flex-col justify-end p-8 md:p-12 lg:p-20 pb-32">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", rotateX: 45 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-[12vw] sm:text-[10vw] lg:text-[7vw] font-bold leading-[0.9] text-white"
                >
                  Digitale
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", rotateX: 45 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-[12vw] sm:text-[10vw] lg:text-[7vw] font-bold leading-[0.9] text-white"
                >
                  løsninger
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: "100%", rotateX: 45 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-[12vw] sm:text-[10vw] lg:text-[7vw] font-bold leading-[0.9] text-white/40"
                >
                  der virker
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-4 flex-wrap"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild variant="hero" size="xl">
                    <Link to="/kontakt">
                      Book møde
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight size={18} />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Floating info card */}
            <div className="hidden lg:flex w-[40%] items-end justify-end p-20">
              <motion.div
                initial={{ opacity: 0, x: 100, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)" }}
                className="bg-foreground text-background p-10 max-w-sm"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.p 
                  className="text-sm text-background/60 uppercase tracking-widest mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Hvem er vi
                </motion.p>
                <motion.p 
                  className="text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  En skarp dansk tech-virksomhed der bygger software, websites og webshops. 
                  Uden bullshit.
                </motion.p>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    to="/om"
                    className="inline-flex items-center gap-2 text-sm font-medium group"
                  >
                    Læs mere
                    <ArrowUpRight 
                      size={16} 
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-8 md:left-12 lg:left-20 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-4 text-white/60"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-12 h-[1px] bg-white/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
              />
              <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section - Staggered Grid */}
        <section className="bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left column - Title */}
            <div className="lg:col-span-4 bg-foreground text-background p-8 md:p-12 lg:p-16 lg:min-h-[80vh] flex flex-col justify-between overflow-hidden">
              <div>
                <AnimatedText delay={0}>
                  <span className="text-xs uppercase tracking-widest text-background/50 block mb-6">
                    Services
                  </span>
                </AnimatedText>
                <AnimatedText delay={0.1}>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                    Alt hvad<br />
                    du har<br />
                    brug for
                  </h2>
                </AnimatedText>
              </div>
              <AnimatedText delay={0.3} className="mt-12 lg:mt-0">
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-3 text-sm font-medium group"
                >
                  <motion.span 
                    className="w-12 h-[1px] bg-background/40"
                    whileHover={{ width: 80 }}
                    transition={{ duration: 0.3 }}
                  />
                  Se alle services
                </Link>
              </AnimatedText>
            </div>

            {/* Right column - Service list */}
            <div className="lg:col-span-8">
              {services.map((service, index) => (
                <ServiceItem key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section - Overlapping Cards */}
        <section className="section-padding bg-secondary overflow-hidden">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <AnimatedText>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                    Udvalgte projekter
                  </span>
                </AnimatedText>
                <AnimatedText delay={0.1}>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                    Cases
                  </h2>
                </AnimatedText>
              </div>
              <AnimatedText delay={0.2}>
                <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                  <Link 
                    to="/cases"
                    className="inline-flex items-center gap-3 text-sm font-medium group"
                  >
                    Se alle cases
                    <ArrowUpRight 
                      size={16} 
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                    />
                  </Link>
                </motion.div>
              </AnimatedText>
            </div>

            {/* Asymmetric case grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: '1000px' }}>
              {cases.map((caseItem, index) => (
                <CaseCard key={caseItem.title} caseItem={caseItem} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Statement */}
            <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center lg:min-h-[60vh] overflow-hidden">
              <AnimatedText>
                <span className="text-xs uppercase tracking-widest text-background/50 block mb-8">
                  Sådan arbejder vi
                </span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  Ingen fluff.<br />
                  Ingen buzzwords.<br />
                  <span className="text-background/40">Bare resultater.</span>
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-background/70 text-lg max-w-md">
                  Vi tager færre projekter og gør dem ordentligt. Du hører fra os inden for en arbejdsdag. Altid.
                </p>
              </AnimatedText>
            </div>

            {/* Right - Values list */}
            <div className="border-t lg:border-t-0 lg:border-l border-background/10">
              <ValueItem 
                number="01" 
                title="Kvalitet frem for volumen" 
                description="Vi tager færre projekter og gør dem ordentligt. Ingen halvfærdige løsninger."
                index={0}
              />
              <ValueItem 
                number="02" 
                title="Ærlig rådgivning" 
                description="Ingen bullshit. Vi siger hvad du har brug for at høre – ikke hvad der sælger bedst."
                index={1}
              />
              <ValueItem 
                number="03" 
                title="Hurtig kommunikation" 
                description="Du hører fra os inden for en arbejdsdag. Altid. Vi forsvinder ikke midt i projektet."
                index={2}
              />
            </div>
          </div>
        </section>

        {/* CTA Section - Bold Diagonal */}
        <section className="relative bg-background overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-secondary" 
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <div className="relative container-wide py-32 md:py-40 lg:py-52">
            <div className="max-w-3xl">
              <AnimatedText>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8">
                  Klar til at<br />
                  komme i gang?
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-lg">
                  Book et gratis og uforpligtende møde. Vi lover ikke at sælge dig noget du ikke har brug for.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Button asChild variant="hero" size="xl">
                    <Link to="/kontakt">
                      Book et møde
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatedText>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;