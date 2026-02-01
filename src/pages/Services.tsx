import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Search, MessageSquare, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const services = [
  {
    id: "software",
    icon: Code,
    title: "Software & Specialudvikling",
    intro: "Skræddersyet software der løser præcis de udfordringer du står med – ingen kompromiser, ingen halvløsninger.",
    whatYouGet: [
      "Webapplikationer og interne systemer",
      "API-integrationer og automatisering",
      "Datahåndtering og dashboards",
      "Mobilvenlige løsninger",
    ],
    whoItsFor: [
      "Virksomheder med unikke processer der ikke passer ind i standard-software",
      "Dem der vil automatisere tidskrævende manuelle opgaver",
      "Organisationer der har brug for at samle data fra flere kilder",
    ],
  },
  {
    id: "websites",
    icon: Globe,
    title: "Websites & Webshops",
    intro: "Hurtige, brugervenlige websites og webshops designet til at konvertere besøgende til betalende kunder.",
    whatYouGet: [
      "Responsivt design der virker på alle enheder",
      "Hurtig loadtid og optimeret performance",
      
      "E-commerce med betalingsløsninger",
    ],
    whoItsFor: [
      "Virksomheder der skal have et nyt eller opdateret website",
      "Butikker der vil udvide til online salg",
      "Dem der vil have et site der faktisk skaffer kunder",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Online Synlighed",
    intro: "Bliv fundet når dine potentielle kunder søger. Vi optimerer din online tilstedeværelse for bedre placeringer på Google.",
    whatYouGet: [
      "Teknisk SEO-audit og optimering",
      "Søgeordsanalyse og strategi",
      "On-page optimering af indhold",
      "Løbende rapportering og justering",
    ],
    whoItsFor: [
      "Virksomheder der ikke bliver fundet på Google",
      "Dem der vil have mere organisk trafik",
      "Businesses der vil reducere afhængighed af betalte annoncer",
    ],
  },
  {
    id: "raadgivning",
    icon: MessageSquare,
    title: "Rådgivning & Strategi",
    intro: "Ærlig og direkte sparring om teknologi, marketing og digital forretningsudvikling. Ingen buzzwords.",
    whatYouGet: [
      "Teknisk rådgivning og sparring",
      "Digital strategi og roadmap",
      "Vurdering af eksisterende løsninger",
      "Hjælp til valg af platforme og værktøjer",
    ],
    whoItsFor: [
      "Ledere der mangler teknisk indsigt",
      "Virksomheder der skal træffe store tekniske beslutninger",
      "Dem der er trætte af at få solgt løsninger de ikke har brug for",
    ],
  },
  {
    id: "support",
    icon: Settings,
    title: "Support & Drift",
    intro: "Løbende vedligeholdelse, opdateringer og teknisk support. Vi sørger for at tingene kører.",
    whatYouGet: [
      "Regelmæssige opdateringer og sikkerhedstjek",
      "Hurtig fejlretning når noget går galt",
      "Overvågning og backup",
      "Prioriteret support via telefon og mail",
    ],
    whoItsFor: [
      "Virksomheder med eksisterende digitale løsninger",
      "Dem der ikke har interne ressourcer til teknisk vedligeholdelse",
      "Alle der vil have ro i maven om at tingene virker",
    ],
  },
  {
    id: "rekruttering",
    icon: Users,
    title: "Rekruttering & Specialist-match",
    intro: "Vi hjælper dig med at finde de rigtige folk. Ikke som et traditionelt rekrutteringsfirma, men gennem vores netværk af dygtige specialister.",
    whatYouGet: [
      "Adgang til verificerede specialister i vores netværk",
      "Matching baseret på dine specifikke behov",
      "Hjælp til vurdering af kandidater",
      "Fleksible samarbejdsmodeller",
    ],
    whoItsFor: [
      "Virksomheder der mangler kompetencer til specifikke projekter",
      "Dem der har svært ved at finde de rigtige profiler",
      "Organisationer der har brug for hurtig adgang til specialviden",
    ],
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

// Service item with advanced animation
const ServiceItem = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;
  
  return (
    <motion.article
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="py-16 md:py-24 border-t border-border scroll-mt-24 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="w-14 h-14 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300"
              whileHover={{ rotate: 5 }}
            >
              <Icon size={24} />
            </motion.div>
            <motion.span 
              className="text-6xl font-display font-bold text-muted-foreground/20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              0{index + 1}
            </motion.span>
          </motion.div>
          <motion.h2 
            className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.title}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {service.intro}
          </motion.p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              Hvad du får
            </h3>
            <ul className="space-y-4">
              {service.whatYouGet.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              Hvem det er til
            </h3>
            <ul className="space-y-4">
              {service.whoItsFor.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                  />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

const Services = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <Layout>
      {/* Hero - Split Design */}
      <section ref={heroRef} className="min-h-[60vh] bg-background relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh]">
          {/* Left Column - Dark */}
          <motion.div 
            className="lg:col-span-5 bg-foreground text-background p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '30px 30px' }}
            />
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xs font-semibold uppercase tracking-wider text-background/50 block mb-4"
              >
                Vores services
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]"
              >
                <span className="text-background/40">6</span><br />
                services
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            style={{ y: heroY }}
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", rotateX: 45 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Alt hvad du har brug for.<br />
                <span className="text-muted-foreground">Intet du ikke har.</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Vi tilbyder en fokuseret palette af services der dækker hele din digitale rejse – 
              fra strategi og udvikling til drift og optimering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 md:pb-28 lg:pb-36 bg-background">
        <div className="container-wide">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimatedText>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-2xl mx-auto">
              Har du brug for hjælp<br />til et projekt?
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
              Lad os tage en snak om dine udfordringer og muligheder.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                asChild 
                variant="outline" 
                size="xl"
                className="border-background text-background hover:bg-background hover:text-foreground"
              >
                <Link to="/kontakt">
                  Kontakt os
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

export default Services;