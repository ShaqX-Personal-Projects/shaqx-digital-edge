import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseCardProps {
  title: string;
  category: string;
  description: string;
  results?: string[];
  index: number;
}

export function CaseCard({ title, category, description, results, index }: CaseCardProps) {
  return (
    <article
      className={cn(
        "group block border border-border bg-card hover:bg-secondary transition-all duration-300 hover-lift overflow-hidden",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Placeholder Image Area */}
      <div className="aspect-[16/10] bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm">Case billede</span>
      </div>
      
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
          <ArrowUpRight 
            size={18} 
            className="text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" 
          />
        </div>
        
        <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
        
        {results && results.length > 0 && (
          <ul className="space-y-2">
            {results.map((result, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="w-1 h-1 bg-foreground rounded-full" />
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
