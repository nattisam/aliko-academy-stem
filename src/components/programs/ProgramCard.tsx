import { Link } from "react-router-dom";
import { Program } from "@/data/programs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSoftwareIcon, iconColorStyles } from "@/data/softwareIcons";

interface ProgramCardProps {
  program: Program;
  variant?: "default" | "compact" | "visual";
}

export function ProgramCard({ program, variant = "default" }: ProgramCardProps) {
  // Enhanced contrast - brighter text colors
  const levelClasses = {
    Beginner: "bg-accent-green/12 text-[hsl(80_70%_70%)] border-accent-green/30",
    Intermediate: "bg-accent-orange/12 text-[hsl(40_95%_72%)] border-accent-orange/30",
    Professional: "bg-primary/12 text-[hsl(207_90%_72%)] border-primary/30",
  };

  const deliveryClasses = {
    Online: "bg-accent/12 text-[hsl(195_100%_75%)] border-accent/30",
    Hybrid: "bg-accent-green/12 text-[hsl(80_70%_70%)] border-accent-green/30",
  };

  const softwareIcon = getSoftwareIcon(program.slug);
  const colorStyle = iconColorStyles[softwareIcon.color] || iconColorStyles["primary"];

  // Visual variant - icon-focused with minimal text
  if (variant === "visual") {
    return (
      <Link to={`/programs/${program.slug}`} className="group">
        <Card className={cn(
          "border transition-all duration-300 overflow-hidden h-full",
          "hover:shadow-xl hover:-translate-y-1",
          colorStyle.border,
          "bg-card/80 hover:bg-card"
        )}>
          <CardContent className="p-4 flex flex-col items-center text-center">
            {/* Software Icon */}
            <div className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold mb-3 transition-all",
              "border-2 group-hover:scale-110",
              colorStyle.bg,
              colorStyle.text,
              colorStyle.border
            )}>
              {softwareIcon.initials}
            </div>
            
            {/* Program Title */}
            <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {program.title}
            </h3>
            
            {/* Vendor Tag */}
            <span className={cn("text-xs mt-1", colorStyle.text)}>
              {softwareIcon.vendor}
            </span>
            
            {/* Level Badge */}
            <Badge variant="outline" className={cn("text-[10px] mt-2", levelClasses[program.level])}>
              {program.level}
            </Badge>
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Card className="card-hover border-divider bg-card shimmer group">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            {/* Software Icon */}
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 border",
              colorStyle.bg,
              colorStyle.text,
              colorStyle.border
            )}>
              {softwareIcon.initials}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-foreground truncate">
                {program.title}
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                {program.shortDescription}
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className={cn("text-xs", levelClasses[program.level])}>
              {program.level}
            </Badge>
            <Badge variant="outline" className={cn("text-xs", deliveryClasses[program.deliveryMode])}>
              {program.deliveryMode}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button asChild variant="ghost" size="sm" className="w-full justify-between">
            <Link to={`/programs/${program.slug}`}>
              View Program
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="card-hover border-divider bg-card overflow-hidden shimmer group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {/* Software Icon */}
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 border-2 transition-all group-hover:scale-105",
            colorStyle.bg,
            colorStyle.text,
            colorStyle.border
          )}>
            {softwareIcon.initials}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Badge variant="outline" className={cn("text-xs", levelClasses[program.level])}>
                {program.level}
              </Badge>
              <Badge variant="outline" className={cn("text-xs", deliveryClasses[program.deliveryMode])}>
                {program.deliveryMode}
              </Badge>
            </div>
            <span className={cn("text-xs", colorStyle.text)}>{softwareIcon.vendor}</span>
          </div>
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground">
          {program.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {program.shortDescription}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {program.durationWeeks} weeks
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {program.weeklyHours} hrs/week
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full group">
          <Link to={`/programs/${program.slug}`}>
            View Program
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
