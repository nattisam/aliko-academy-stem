import { Link } from "react-router-dom";
import { Domain } from "@/data/domains";
import { getDomainProgramCount } from "@/data/programs";
import { cn } from "@/lib/utils";

// Import domain images
import civilImg from "@/assets/domains/civil-engineering.jpg";
import electricalImg from "@/assets/domains/electrical-engineering.jpg";
import mechanicalImg from "@/assets/domains/mechanical-engineering.jpg";
import architecturalImg from "@/assets/domains/architectural-engineering.jpg";
import structuralImg from "@/assets/domains/structural-bim.jpg";
import projectImg from "@/assets/domains/project-controls.jpg";
import internationalImg from "@/assets/domains/international-systems.jpg";

const domainImages: Record<string, string> = {
  civil: civilImg,
  electrical: electricalImg,
  mechanical: mechanicalImg,
  architectural: architecturalImg,
  "structural-bim": structuralImg,
  "project-controls": projectImg,
  international: internationalImg,
};

// Color accents for each domain
const domainAccents: Record<string, { label: string; border: string; glow: string }> = {
  civil: {
    label: "text-accent-orange",
    border: "group-hover:border-accent-orange/60",
    glow: "group-hover:shadow-accent-orange/30",
  },
  electrical: {
    label: "text-accent-orange",
    border: "group-hover:border-accent-orange/60",
    glow: "group-hover:shadow-accent-orange/30",
  },
  mechanical: {
    label: "text-accent-green",
    border: "group-hover:border-accent-green/60",
    glow: "group-hover:shadow-accent-green/30",
  },
  architectural: {
    label: "text-accent",
    border: "group-hover:border-accent/60",
    glow: "group-hover:shadow-accent/30",
  },
  "structural-bim": {
    label: "text-primary",
    border: "group-hover:border-primary/60",
    glow: "group-hover:shadow-primary/30",
  },
  "project-controls": {
    label: "text-accent-orange",
    border: "group-hover:border-accent-orange/60",
    glow: "group-hover:shadow-accent-orange/30",
  },
  international: {
    label: "text-accent",
    border: "group-hover:border-accent/60",
    glow: "group-hover:shadow-accent/30",
  },
};

interface EnhancedDomainCardProps {
  domain: Domain;
  className?: string;
}

export function EnhancedDomainCard({ domain, className }: EnhancedDomainCardProps) {
  const programCount = getDomainProgramCount(domain.name);
  const image = domainImages[domain.id] || civilImg;
  const accent = domainAccents[domain.id] || domainAccents.civil;

  return (
    <Link
      to={`/domains#${domain.id}`}
      className={cn(
        "group relative block overflow-hidden rounded-xl aspect-[4/3]",
        "transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl",
        accent.glow,
        className
      )}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={domain.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
      
      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        {/* Label with accent color */}
        <span className={cn(
          "text-xs font-bold uppercase tracking-widest mb-2 transition-all duration-300",
          accent.label
        )}>
          Engineering Domain
        </span>
        
        {/* Title */}
        <h3 className="font-display text-xl font-bold text-foreground leading-tight group-hover:text-glow transition-all duration-300">
          {domain.shortName}
        </h3>
        
        {/* Program count with icon */}
        <p className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          {programCount} programs available
        </p>
      </div>
      
      {/* Hover Border Effect with accent color */}
      <div className={cn(
        "absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-500",
        accent.border
      )} />
    </Link>
  );
}
