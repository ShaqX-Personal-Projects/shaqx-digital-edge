import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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

// Contact info item with animation
const ContactInfoItem = ({ icon: Icon, title, content, href, index }: { 
  icon: typeof Mail; 
  title: string; 
  content: string; 
  href?: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const ContentWrapper = href ? 'a' : 'p';
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-4 group"
    >
      <motion.div 
        className="w-14 h-14 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300"
        whileHover={{ rotate: 5 }}
      >
        <Icon size={22} />
      </motion.div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <ContentWrapper 
          {...(href ? { href, className: "text-muted-foreground hover:text-foreground transition-colors" } : { className: "text-muted-foreground" })}
        >
          {content}
        </ContentWrapper>
      </div>
    </motion.div>
  );
};

// Process step with animation
const ProcessStep = ({ number, title, description, index }: { 
  number: string; 
  title: string; 
  description: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group cursor-default"
    >
      <motion.div 
        className="text-5xl md:text-6xl font-display font-bold text-muted-foreground/20 mb-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
      >
        {number}
      </motion.div>
      <h3 className="font-display text-lg font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Contact = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="min-h-[80vh] bg-background relative overflow-hidden">
        <motion.div 
          className="container-wide py-20 md:py-28"
          style={{ y: heroY }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden mb-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block"
                >
                  Kontakt
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", rotateX: 45 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95]"
                >
                  Lad os tale<br />
                  <span className="text-muted-foreground">sammen</span>
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-muted-foreground mb-12"
              >
                Har du et projekt i tankerne? Skriv kort hvad din udfordring er, 
                så vi kan forberede os på samtalen. Vi svarer altid inden for én arbejdsdag.
              </motion.p>

              <div className="space-y-8">
                <ContactInfoItem 
                  icon={Mail}
                  title="E-mail"
                  content="kontakt@shaqx.dk"
                  href="mailto:kontakt@shaqx.dk"
                  index={0}
                />
                <ContactInfoItem 
                  icon={Phone}
                  title="Telefon"
                  content="+45 12 34 56 78"
                  href="tel:+4512345678"
                  index={1}
                />
                <ContactInfoItem 
                  icon={MapPin}
                  title="Lokation"
                  content="Danmark"
                  index={2}
                />
              </div>
            </div>

            {/* Right Column - Form */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className="bg-card border border-border p-8 md:p-12 relative overflow-hidden"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-secondary/50"
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                />
                <h2 className="font-display text-2xl font-bold mb-8 relative z-10">
                  Send en besked
                </h2>
                <ContactForm />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-secondary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-wide relative z-10">
          <AnimatedText className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Hvad sker der efter du skriver?
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ProcessStep 
              number="01"
              title="Vi læser din besked"
              description="Vi gennemgår det du har skrevet og forbereder os på samtalen."
              index={0}
            />
            <ProcessStep 
              number="02"
              title="Vi vender tilbage"
              description="Du hører fra os inden for én arbejdsdag med forslag til et mødetidspunkt."
              index={1}
            />
            <ProcessStep 
              number="03"
              title="Vi mødes"
              description="Vi tager en uforpligtende snak om dine muligheder – online eller fysisk."
              index={2}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;