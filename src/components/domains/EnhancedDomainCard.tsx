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
import gisImg from "@/assets/domains/gis-infrastructure.jpg";
import aviationImg from "@/assets/domains/aviation-aerospace.jpg";

const domainImages: Record<string, string> = {
  "civil-structural": civilImg,
  electrical: electricalImg,
  mechanical: mechanicalImg,
  architectural: architecturalImg,
  "structural-bim": structuralImg,
  "project-controls": projectImg,
  "gis-international": gisImg,
  aviation: aviationImg,
};

// Color accents for each domain
const domainAccents: Record<string, { label: string; border: string; glow: string }> = {
  "civil-structural": {
    label: "text-accent-orange",
    border: "group-hover:border-accent-orange/60",
    glow: "group-hover:shadow-accent-orange/30",
  },
  electrical: {
    label: "text-[hsl(280_68%_70%)]",
    border: "group-hover:border-[hsl(280_68%_55%)]/60",
    glow: "group-hover:shadow-[hsl(280_68%_55%)]/30",
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
  "gis-international": {
    label: "text-accent-green",
    border: "group-hover:border-accent-green/60",
    glow: "group-hover:shadow-accent-green/30",
  },
  aviation: {
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
  const accent = domainAccents[domain.id] || domainAccents["civil-structural"];

  return (
    <Link
      to="/programs"
      className={cn(
        "group relative block overflow-hidden rounded-xl aspect-[4/3]",
        "transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl",
        accent.glow,
        className
      )}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={domain.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay - stronger for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-opacity duration-300" />
      
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
        <h3 className="font-display text-xl font-bold text-white leading-tight group-hover:text-glow transition-all duration-300">
          {domain.shortName}
        </h3>
        
        {/* Program count */}
        <p className="mt-2 text-sm text-white/80 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          {programCount} programs available
        </p>
      </div>
      
      {/* Hover Border Effect */}
      <div className={cn(
        "absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-500",
        accent.border
      )} />
    </Link>
  );
}
