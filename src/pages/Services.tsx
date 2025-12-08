import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Search, MessageSquare, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

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
      "Brugervenlig CMS til nem opdatering",
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
    intro: "Vi hjælper dig med at finde de rigtige folk. Ikke som et traditionelt rekrutteringsbureau, men gennem vores netværk af dygtige specialister.",
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

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block animate-fade-up">
              Vores services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100">
              Alt hvad du har brug for. Intet du ikke har.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Vi tilbyder en fokuseret palette af services der dækker hele din digitale rejse – 
              fra strategi og udvikling til drift og optimering.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 md:pb-28 lg:pb-36">
        <div className="container-wide">
          <div className="space-y-0">
            {services.map((service, index) => (
              <article 
                key={service.id} 
                id={service.id}
                className="py-16 md:py-20 border-t border-border scroll-mt-24 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                  {/* Left Column */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 border border-border flex items-center justify-center">
                        <service.icon size={22} />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.intro}
                    </p>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        Hvad du får
                      </h3>
                      <ul className="space-y-3">
                        {service.whatYouGet.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        Hvem det er til
                      </h3>
                      <ul className="space-y-3">
                        {service.whoItsFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Har du brug for hjælp til et projekt?
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
            Lad os tage en snak om dine udfordringer og muligheder.
          </p>
          <Button 
            asChild 
            variant="hero-outline" 
            size="xl"
            className="border-background text-background hover:bg-background hover:text-foreground"
          >
            <Link to="/kontakt">
              Kontakt os
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
