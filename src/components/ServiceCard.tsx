import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

export function ServiceCard({ title, description, href, index }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group block p-8 border border-border bg-card hover:bg-secondary transition-all duration-300 hover-lift",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-xs font-medium text-muted-foreground">
          0{index + 1}
        </span>
        <ArrowUpRight 
          size={20} 
          className="text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" 
        />
      </div>
      <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
