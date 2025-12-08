import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseCard } from "@/components/CaseCard";
import LoadingScreen from "@/components/LoadingScreen";
const services = [
  {
    title: "Softwareudvikling",
    description: "Skræddersyet software der løser dine specifikke udfordringer og automatiserer processer.",
    href: "/services#software",
  },
  {
    title: "Websites & Webshops",
    description: "Hurtige, brugervenlige websites og webshops der konverterer besøgende til kunder.",
    href: "/services#websites",
  },
  {
    title: "SEO & Synlighed",
    description: "Bliv fundet på Google. Vi optimerer din online tilstedeværelse for bedre rankings.",
    href: "/services#seo",
  },
  {
    title: "Rådgivning & Strategi",
    description: "Ærlig sparring om teknologi, marketing og digital forretningsudvikling.",
    href: "/services#raadgivning",
  },
  {
    title: "Support & Drift",
    description: "Løbende vedligeholdelse, opdateringer og teknisk support når du har brug for det.",
    href: "/services#support",
  },
  {
    title: "Rekruttering",
    description: "Vi hjælper dig med at finde de rigtige specialister gennem vores netværk.",
    href: "/services#rekruttering",
  },
];

const values = [
  {
    title: "Kvalitet frem for volumen",
    description: "Vi tager færre projekter og gør dem ordentligt. Ingen halvfærdige løsninger.",
  },
  {
    title: "Ærlig rådgivning",
    description: "Ingen bullshit. Vi siger hvad du har brug for at høre – ikke hvad der sælger bedst.",
  },
  {
    title: "Hurtig kommunikation",
    description: "Du hører fra os inden for en arbejdsdag. Altid. Vi forsvinder ikke midt i projektet.",
  },
];

const cases = [
  {
    title: "E-handelsplatform",
    category: "Webshop",
    description: "Komplet webshop-løsning med integreret lagerstyring og automatisk ordrehåndtering.",
    results: ["200% stigning i online salg", "50% hurtigere ordrebehandling"],
  },
  {
    title: "SaaS Dashboard",
    category: "Software",
    description: "Internt dashboard til visualisering af salgsdata og KPI-tracking i realtid.",
    results: ["Real-time data indsigt", "Integreret med 5+ systemer"],
  },
  {
    title: "Virksomhedswebsite",
    category: "Website & SEO",
    description: "Nyt website med fokus på konvertering og søgemaskineoptimering.",
    results: ["Top 3 på Google", "65% flere henvendelser"],
  },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6 md:mb-8 animate-fade-up">
              Digitale løsninger<br />
              der skaffer<br />
              <span className="text-muted-foreground">resultater</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-10 animate-fade-up delay-100">
              Vi bygger software, websites og webshops. Optimerer din SEO. 
              Giver ærlig rådgivning. Og sørger for at tingene rent faktisk virker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
              <Button asChild variant="hero" size="xl">
                <Link to="/kontakt">
                  Book et gratis møde
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/services">Se vores services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who is ShaqX */}
      <section className="py-20 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                Hvem er ShaqX?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Et skarpt dansk bureau med fokus på det der virker
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ShaqX er et ambitiøst digitalt bureau, der kombinerer teknisk ekspertise 
                med forretningsforståelse og marketing-knowhow. Vi hjælper virksomheder 
                med at vokse digitalt – uden støj, buzzwords og unødvendig kompleksitet. 
                Bare løsninger der virker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                Hvad vi tilbyder
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Services
              </h2>
            </div>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-sm font-medium group"
            >
              Se alle services
              <ArrowUpRight 
                size={16} 
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-background/60 mb-4 block">
              Sådan arbejder vi
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ingen fluff. Bare resultater.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div key={value.title} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 border border-background/20 flex items-center justify-center">
                    <Check size={16} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{value.title}</h3>
                </div>
                <p className="text-background/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                Udvalgte projekter
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Cases
              </h2>
            </div>
            <Link 
              to="/cases" 
              className="inline-flex items-center gap-2 text-sm font-medium group"
            >
              Se alle cases
              <ArrowUpRight 
                size={16} 
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <CaseCard
                key={caseItem.title}
                title={caseItem.title}
                category={caseItem.category}
                description={caseItem.description}
                results={caseItem.results}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Klar til at tage din virksomhed til næste niveau?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Book et gratis og uforpligtende møde, hvor vi kan drøfte dine muligheder.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/kontakt">
              Lad os tale sammen
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default Index;
