import { Link } from "react-router-dom";
import { Program } from "@/data/programs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Domain thumbnail imports
import civilThumb from "@/assets/programs/civil-engineering-thumb.jpg";
import electricalThumb from "@/assets/programs/electrical-engineering-thumb.jpg";
import mechanicalThumb from "@/assets/programs/mechanical-engineering-thumb.jpg";
import architecturalThumb from "@/assets/programs/architectural-engineering-thumb.jpg";

const domainThumbnails: Record<string, string> = {
  "Civil Engineering": civilThumb,
  "Structural / BIM & Infrastructure": civilThumb,
  "Architectural Engineering": architecturalThumb,
  "Mechanical Engineering": mechanicalThumb,
  "Chemical Engineering": mechanicalThumb,
  "Electrical Engineering": electricalThumb,
  "Construction Planning & Project Controls": civilThumb,
  "GIS & Infrastructure Intelligence": civilThumb,
  "Aviation & Aerospace Engineering": electricalThumb,
};

interface FeaturedProgramCardProps {
  program: Program;
}

export function FeaturedProgramCard({ program }: FeaturedProgramCardProps) {
  const thumbnail = domainThumbnails[program.domain] || civilThumb;
  const highlights = program.skillsGained.slice(0, 3);

  return (
    <Link
      to={`/programs/${program.slug}`}
      className="group block rounded-2xl overflow-hidden border border-divider bg-card h-full flex flex-col transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={thumbnail}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge
          variant="outline"
          className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground border-divider text-xs font-semibold"
        >
          {program.level}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-foreground leading-snug line-clamp-2">
          {program.title}
        </h3>

        <ul className="mt-3 space-y-1.5 flex-1">
          {highlights.map((skill, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="line-clamp-1">{skill}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-3 border-t border-divider flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium">
            {program.durationWeeks} weeks
          </span>
          <span className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
            View Program
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
