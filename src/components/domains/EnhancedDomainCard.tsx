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

interface EnhancedDomainCardProps {
  domain: Domain;
  className?: string;
}

export function EnhancedDomainCard({ domain, className }: EnhancedDomainCardProps) {
  const programCount = getDomainProgramCount(domain.name);
  const image = domainImages[domain.id] || civilImg;

  return (
    <Link
      to={`/domains#${domain.id}`}
      className={cn(
        "group relative block overflow-hidden rounded-xl aspect-[4/3]",
        "transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20",
        className
      )}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={domain.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        {/* Label */}
        <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
          Engineering Domain
        </span>
        
        {/* Title */}
        <h3 className="font-display text-xl font-bold text-foreground leading-tight">
          {domain.shortName}
        </h3>
        
        {/* Program count */}
        <p className="mt-1 text-sm text-muted-foreground">
          {programCount} programs available
        </p>
      </div>
      
      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
    </Link>
  );
}
