import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { CaseCard } from "@/components/CaseCard";

const cases = [
  {
    title: "E-handelsplatform til modevirksomhed",
    category: "Webshop",
    description: "Komplet webshop-løsning med integreret lagerstyring, automatisk ordrehåndtering og synkronisering med fysiske butikker.",
    results: ["200% stigning i online salg", "50% hurtigere ordrebehandling", "Fuld lager-integration"],
  },
  {
    title: "SaaS Dashboard til salgsorganisation",
    category: "Software",
    description: "Internt dashboard til visualisering af salgsdata og KPI-tracking i realtid. Integration med CRM og økonomisystem.",
    results: ["Real-time data indsigt", "Integreret med 5+ systemer", "Automatiserede rapporter"],
  },
  {
    title: "Corporate website med SEO-fokus",
    category: "Website & SEO",
    description: "Nyt virksomhedswebsite designet til at konvertere besøgende til leads, kombineret med omfattende SEO-optimering.",
    results: ["Top 3 på Google", "65% flere henvendelser", "40% lavere bounce rate"],
  },
  {
    title: "Booking-system til konsulentfirma",
    category: "Software",
    description: "Skræddersyet booking-platform der håndterer klientbookings, ressourceallokering og fakturering.",
    results: ["90% mindre admin-tid", "Automatisk fakturering", "Integreret kalender"],
  },
  {
    title: "Webshop-migration og optimering",
    category: "Webshop & SEO",
    description: "Migration fra ældre platform til moderne løsning med fokus på hastighed, brugeroplevelse og søgemaskineoptimering.",
    results: ["70% hurtigere loadtid", "Bevaret SEO-værdi", "25% højere konvertering"],
  },
  {
    title: "Digital strategi for B2B virksomhed",
    category: "Rådgivning",
    description: "Omfattende digital strategi inklusiv teknologivalg, kanalstrategi og implementeringsplan over 18 måneder.",
    results: ["Klar digital roadmap", "Prioriteret backlog", "Reducerede IT-omkostninger"],
  },
];

const Cases = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block animate-fade-up">
              Cases & Resultater
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100">
              Projekter der har skabt værdi
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Her er et udvalg af de projekter vi har arbejdet på. 
              Hvert projekt er unikt – men fælles for dem alle er fokus på konkrete resultater.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="pb-20 md:pb-28 lg:pb-36">
        <div className="container-wide">
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

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Kunne dit projekt være det næste?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Lad os tage en snak om hvordan vi kan hjælpe dig med at opnå lignende resultater.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/kontakt">
              Start en samtale
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
