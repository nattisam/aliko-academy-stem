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
  const levelClasses = {
    Beginner: "bg-accent-green/15 text-accent-green border-accent-green/40 font-bold",
    Intermediate: "bg-accent-orange/15 text-accent-orange border-accent-orange/40 font-bold",
    Professional: "bg-primary/15 text-primary border-primary/40 font-bold",
  };

  const deliveryClasses = {
    Online: "bg-accent/15 text-accent border-accent/40 font-bold",
    Hybrid: "bg-accent-green/15 text-accent-green border-accent-green/40 font-bold",
  };

  const softwareIcon = getSoftwareIcon(program.slug);
  const colorStyle = iconColorStyles[softwareIcon.color] || iconColorStyles["primary"];

  // Visual variant - icon-focused with minimal text
  if (variant === "visual") {
    return (
      <Link to={`/programs/${program.slug}`} className="group">
        <Card className={cn(
          "border transition-all duration-300 overflow-hidden h-full",
          "hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.03]",
          colorStyle.border,
          "bg-card hover:bg-surface-elevated"
        )}>
          <CardContent className="p-5 flex flex-col items-center text-center">
            {/* Software Icon */}
            <div className={cn(
              "w-16 h-16 rounded-xl flex items-center justify-center text-lg font-extrabold mb-3 transition-all",
              "border-2 group-hover:scale-110 shadow-md",
              colorStyle.bg,
              colorStyle.text,
              colorStyle.border
            )}>
              {softwareIcon.initials}
            </div>
            
            {/* Program Title */}
            <h3 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {program.title}
            </h3>
            
            {/* Vendor Tag */}
            <span className={cn("text-xs font-semibold mt-1", colorStyle.text)}>
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
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 border-2 shadow-md",
              colorStyle.bg,
              colorStyle.text,
              colorStyle.border
            )}>
              {softwareIcon.initials}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-foreground truncate text-base">
                {program.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                {program.shortDescription}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className={cn("text-xs", levelClasses[program.level])}>
              {program.level}
            </Badge>
            <Badge variant="outline" className={cn("text-xs", deliveryClasses[program.deliveryMode])}>
              {program.deliveryMode}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <Button asChild variant="ghost" size="sm" className="w-full justify-between font-bold">
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
      <CardContent className="p-7">
        <div className="flex items-start gap-4 mb-5">
          {/* Software Icon */}
          <div className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center text-base font-extrabold flex-shrink-0 border-2 transition-all group-hover:scale-110 shadow-lg",
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
            <span className={cn("text-xs font-bold", colorStyle.text)}>{softwareIcon.vendor}</span>
          </div>
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">
          {program.title}
        </h3>
        <p className="mt-3 text-base text-muted-foreground line-clamp-2 leading-relaxed">
          {program.shortDescription}
        </p>
        <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" />
            {program.durationWeeks} weeks
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-accent" />
            {program.weeklyHours} hrs/week
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-7 pt-0">
        <Button asChild variant="outline" className="w-full group font-bold">
          <Link to={`/programs/${program.slug}`}>
            View Program
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
