import { Mail, Phone, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block animate-fade-up">
                Kontakt
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100">
                Lad os tale sammen
              </h1>
              <p className="text-lg text-muted-foreground mb-10 animate-fade-up delay-200">
                Har du et projekt i tankerne? Skriv kort hvad din udfordring er, 
                så vi kan forberede os på samtalen. Vi svarer altid inden for én arbejdsdag.
              </p>

              <div className="space-y-6 animate-fade-up delay-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">E-mail</h3>
                    <a 
                      href="mailto:kontakt@shaqx.dk" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      kontakt@shaqx.dk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <a 
                      href="tel:+4512345678" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +45 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Lokation</h3>
                    <p className="text-muted-foreground">
                      Danmark
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="animate-fade-up delay-200">
              <div className="bg-card border border-border p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold mb-6">
                  Send en besked
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Hvad sker der efter du skriver?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
              <div>
                <div className="text-4xl font-display font-bold text-muted-foreground/30 mb-3">01</div>
                <h3 className="font-display text-lg font-bold mb-2">Vi læser din besked</h3>
                <p className="text-muted-foreground text-sm">
                  Vi gennemgår det du har skrevet og forbereder os på samtalen.
                </p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-muted-foreground/30 mb-3">02</div>
                <h3 className="font-display text-lg font-bold mb-2">Vi vender tilbage</h3>
                <p className="text-muted-foreground text-sm">
                  Du hører fra os inden for én arbejdsdag med forslag til et mødetidspunkt.
                </p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-muted-foreground/30 mb-3">03</div>
                <h3 className="font-display text-lg font-bold mb-2">Vi mødes</h3>
                <p className="text-muted-foreground text-sm">
                  Vi tager en uforpligtende snak om dine muligheder – online eller fysisk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
