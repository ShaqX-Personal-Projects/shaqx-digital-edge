import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

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

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block animate-fade-up">
              Om ShaqX
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100">
              Vi bygger digitale løsninger uden støj og fluff
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              ShaqX er et dansk digitalt bureau med én mission: At hjælpe virksomheder 
              med at vokse digitalt – på en måde der rent faktisk giver resultater.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Vores vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For mange virksomheder kæmper med at navigere i den digitale jungle. 
                Der er for mange buzzwords, for mange løsninger der lover guld og grønne skove, 
                og alt for lidt fokus på hvad der faktisk virker.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ShaqX eksisterer for at ændre det. Vi skærer igennem støjen og leverer 
                løsninger der er bygget til formålet – ikke til at imponere på et salgsmøde.
              </p>
            </div>
            <div className="bg-card border border-border p-10">
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
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
              Vores proces
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Sådan arbejder vi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.number} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-display font-bold text-muted-foreground/30 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Det vi tror på
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10">
            <div className="bg-foreground p-10 text-center">
              <h3 className="font-display text-xl font-bold mb-4">Kvalitet over kvantitet</h3>
              <p className="text-background/70">
                Vi tager ikke flere projekter end vi kan håndtere ordentligt. 
                Hver kunde får vores fulde opmærksomhed.
              </p>
            </div>
            <div className="bg-foreground p-10 text-center">
              <h3 className="font-display text-xl font-bold mb-4">Ærlighed først</h3>
              <p className="text-background/70">
                Vi siger tingene som de er. Også selvom det betyder at fraråde 
                noget du troede du havde brug for.
              </p>
            </div>
            <div className="bg-foreground p-10 text-center">
              <h3 className="font-display text-xl font-bold mb-4">Resultater der tæller</h3>
              <p className="text-background/70">
                Alt hvad vi laver skal kunne måles. Ingen luftige løfter – 
                kun konkrete outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Lyder det som nogen du kunne arbejde med?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Lad os tage en snak og finde ud af om vi er det rette match.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/kontakt">
              Book et møde
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
