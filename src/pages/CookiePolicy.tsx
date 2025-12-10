import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function CookiePolicy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide">
          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sidst opdateret: {new Date().toLocaleDateString('da-DK', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide">
          <div className="max-w-3xl space-y-12">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Hvad er cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies er små tekstfiler, der gemmes på din computer, tablet eller smartphone, 
                når du besøger vores hjemmeside. Cookies hjælper os med at huske dine præferencer 
                og forbedre din oplevelse på siden.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Hvordan bruger vi cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi bruger cookies til følgende formål:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Nødvendige cookies:</strong> Disse cookies er essentielle for at hjemmesiden kan fungere korrekt.</li>
                <li><strong>Præference cookies:</strong> Disse cookies husker dine valg og præferencer, f.eks. sprog.</li>
                <li><strong>Statistik cookies:</strong> Disse cookies hjælper os med at forstå, hvordan besøgende bruger vores hjemmeside.</li>
                <li><strong>Marketing cookies:</strong> Disse cookies bruges til at vise relevante annoncer baseret på dine interesser.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Hvilke cookies bruger vi?</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">Cookie</th>
                      <th className="text-left py-3 pr-4 font-semibold">Type</th>
                      <th className="text-left py-3 pr-4 font-semibold">Formål</th>
                      <th className="text-left py-3 font-semibold">Udløber</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">cookie_consent</td>
                      <td className="py-3 pr-4">Nødvendig</td>
                      <td className="py-3 pr-4">Gemmer dit cookie-samtykke</td>
                      <td className="py-3">1 år</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Sådan administrerer du cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Du kan til enhver tid ændre eller tilbagetrække dit samtykke til cookies ved at 
                slette cookies i din browser. Bemærk, at dette kan påvirke funktionaliteten på 
                vores hjemmeside.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                De fleste browsere giver dig mulighed for at:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Se hvilke cookies der er gemt på din enhed</li>
                <li>Slette enkelte eller alle cookies</li>
                <li>Blokere cookies fra specifikke eller alle hjemmesider</li>
                <li>Blokere tredjepartscookies</li>
                <li>Acceptere alle cookies</li>
                <li>Blive adviseret, når en hjemmeside vil gemme en cookie</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Dine rettigheder</h2>
              <p className="text-muted-foreground leading-relaxed">
                I henhold til GDPR har du ret til at få adgang til, rette eller slette de personlige 
                oplysninger, vi har om dig. Du har også ret til at gøre indsigelse mod behandlingen 
                af dine data og anmode om begrænsning af behandlingen.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Kontakt os</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hvis du har spørgsmål om vores cookie policy eller behandling af dine personlige 
                oplysninger, er du velkommen til at kontakte os på{" "}
                <a href="mailto:info@shaqx.com" className="text-foreground underline hover:no-underline">
                  info@shaqx.com
                </a>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="p-6 bg-muted/50 border border-border">
                <h3 className="font-semibold mb-2">ShaqX</h3>
                <p className="text-muted-foreground">CVR: 45847136</p>
                <p className="text-muted-foreground">E-mail: info@shaqx.com</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
