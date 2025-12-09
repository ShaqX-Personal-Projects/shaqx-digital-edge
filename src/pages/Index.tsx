import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";

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
    title: "E-handelsplatform",
    category: "Webshop",
    result: "+200%",
    resultLabel: "online salg",
  },
  {
    title: "SaaS Dashboard",
    category: "Software",
    result: "5+",
    resultLabel: "integrationer",
  },
  {
    title: "Virksomhedswebsite",
    category: "Website & SEO",
    result: "Top 3",
    resultLabel: "på Google",
  },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Layout>
        {/* Hero Section - Asymmetric Split Layout */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10 min-h-screen flex">
            {/* Left side - Main headline */}
            <div className="w-full lg:w-[60%] flex flex-col justify-end p-8 md:p-12 lg:p-20 pb-32">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="font-display text-[12vw] sm:text-[10vw] lg:text-[7vw] font-bold leading-[0.9] text-white mb-8">
                  Digitale<br />
                  løsninger<br />
                  <span className="text-white/40">der virker</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex gap-4 flex-wrap"
              >
                <Button asChild variant="hero" size="xl">
                  <Link to="/kontakt">
                    Book møde
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Right side - Floating info card */}
            <div className="hidden lg:flex w-[40%] items-end justify-end p-20">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-foreground text-background p-10 max-w-sm"
              >
                <p className="text-sm text-background/60 uppercase tracking-widest mb-4">
                  Hvem er vi
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Et skarpt dansk bureau der bygger software, websites og webshops. 
                  Uden bullshit.
                </p>
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
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-8 md:left-12 lg:left-20 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-4 text-white/60">
              <div className="w-12 h-[1px] bg-white/40" />
              <span className="text-xs uppercase tracking-widest">Scroll</span>
            </div>
          </motion.div>
        </section>

        {/* Services Section - Staggered Grid */}
        <section className="bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left column - Title */}
            <div className="lg:col-span-4 bg-foreground text-background p-8 md:p-12 lg:p-16 lg:min-h-[80vh] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-background/50 block mb-6">
                  Services
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                  Alt hvad<br />
                  du har<br />
                  brug for
                </h2>
              </div>
              <div className="mt-12 lg:mt-0">
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-3 text-sm font-medium group"
                >
                  <span className="w-12 h-[1px] bg-background/40 group-hover:w-20 transition-all duration-300" />
                  Se alle services
                </Link>
              </div>
            </div>

            {/* Right column - Service list */}
            <div className="lg:col-span-8">
              {services.map((service, index) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group block border-b border-border hover:bg-secondary transition-colors duration-300"
                >
                  <div className="p-8 md:p-10 lg:p-12 flex items-center justify-between gap-8">
                    <div className="flex items-start gap-8 md:gap-12">
                      <span className="text-xs text-muted-foreground font-mono mt-1">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base max-w-md">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight 
                      size={24} 
                      className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" 
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section - Overlapping Cards */}
        <section className="section-padding bg-secondary overflow-hidden">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                  Udvalgte projekter
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                  Cases
                </h2>
              </div>
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
            </div>

            {/* Asymmetric case grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cases.map((caseItem, index) => (
                <motion.article
                  key={caseItem.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`group bg-background border border-border hover:border-foreground/20 transition-all duration-500 ${
                    index === 0 ? 'lg:translate-y-12' : index === 2 ? 'lg:-translate-y-8' : ''
                  }`}
                >
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors duration-500" />
                    <span className="text-muted-foreground text-sm">Case billede</span>
                  </div>
                  <div className="p-8">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {caseItem.category}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-3 mb-6">
                      {caseItem.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl md:text-5xl font-bold">
                        {caseItem.result}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {caseItem.resultLabel}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Horizontal Scroll on Mobile, Split on Desktop */}
        <section className="bg-foreground text-background">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Statement */}
            <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center lg:min-h-[60vh]">
              <span className="text-xs uppercase tracking-widest text-background/50 block mb-8">
                Sådan arbejder vi
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Ingen fluff.<br />
                Ingen buzzwords.<br />
                <span className="text-background/40">Bare resultater.</span>
              </h2>
              <p className="text-background/70 text-lg max-w-md">
                Vi tager færre projekter og gør dem ordentligt. Du hører fra os inden for en arbejdsdag. Altid.
              </p>
            </div>

            {/* Right - Values list */}
            <div className="border-t lg:border-t-0 lg:border-l border-background/10">
              <div className="p-8 md:p-12 lg:p-20 border-b border-background/10">
                <span className="font-display text-6xl md:text-7xl font-bold text-background/20">01</span>
                <h3 className="font-display text-xl font-bold mt-4 mb-3">Kvalitet frem for volumen</h3>
                <p className="text-background/60">Vi tager færre projekter og gør dem ordentligt. Ingen halvfærdige løsninger.</p>
              </div>
              <div className="p-8 md:p-12 lg:p-20 border-b border-background/10">
                <span className="font-display text-6xl md:text-7xl font-bold text-background/20">02</span>
                <h3 className="font-display text-xl font-bold mt-4 mb-3">Ærlig rådgivning</h3>
                <p className="text-background/60">Ingen bullshit. Vi siger hvad du har brug for at høre – ikke hvad der sælger bedst.</p>
              </div>
              <div className="p-8 md:p-12 lg:p-20">
                <span className="font-display text-6xl md:text-7xl font-bold text-background/20">03</span>
                <h3 className="font-display text-xl font-bold mt-4 mb-3">Hurtig kommunikation</h3>
                <p className="text-background/60">Du hører fra os inden for en arbejdsdag. Altid. Vi forsvinder ikke midt i projektet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Bold Diagonal */}
        <section className="relative bg-background overflow-hidden">
          <div className="absolute inset-0 bg-secondary" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }} />
          <div className="relative container-wide py-32 md:py-40 lg:py-52">
            <div className="max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8"
              >
                Klar til at<br />
                komme i gang?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-muted-foreground text-lg md:text-xl mb-10 max-w-lg"
              >
                Book et gratis og uforpligtende møde. Vi lover ikke at sælge dig noget du ikke har brug for.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Button asChild variant="hero" size="xl">
                  <Link to="/kontakt">
                    Book et møde
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;