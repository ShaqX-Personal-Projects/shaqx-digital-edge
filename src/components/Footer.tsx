import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const footerLinks = {
  services: [
    { name: "Softwareudvikling", href: "/services#software" },
    { name: "Websites & Webshops", href: "/services#websites" },
    { name: "SEO & Synlighed", href: "/services#seo" },
    { name: "Rådgivning", href: "/services#raadgivning" },
  ],
  company: [
    { name: "Om ShaqX", href: "/om" },
    { name: "Cases", href: "/cases" },
    { name: "Kontakt", href: "/kontakt" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Klar til at<br />
              komme i gang?
            </h2>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-lg font-medium group"
            >
              Book et gratis møde
              <ArrowUpRight 
                size={20} 
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:justify-end">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-background/80 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-6">
                Virksomhed
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-background/80 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-background/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <img src={logoWhite} alt="ShaqX" className="h-24 w-auto" />
          <div className="text-sm text-background/60">
            © {new Date().getFullYear()} ShaqX. Alle rettigheder forbeholdes.
          </div>
        </div>
      </div>
    </footer>
  );
}
