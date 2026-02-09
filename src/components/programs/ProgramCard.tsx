import { Link } from "react-router-dom";
import { Program } from "@/data/programs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: Program;
  variant?: "default" | "compact";
}

export function ProgramCard({ program, variant = "default" }: ProgramCardProps) {
  const levelClasses = {
    Beginner: "bg-green-900/50 text-green-300 border-green-700/50",
    Intermediate: "bg-amber-900/50 text-amber-300 border-amber-700/50",
    Professional: "bg-purple-900/50 text-purple-300 border-purple-700/50",
  };

  const deliveryClasses = {
    Online: "bg-blue-900/50 text-blue-300 border-blue-700/50",
    Hybrid: "bg-teal-900/50 text-teal-300 border-teal-700/50",
  };

  if (variant === "compact") {
    return (
      <Card className="card-hover border-divider bg-card">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-foreground truncate">
                {program.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
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
    <Card className="card-hover border-divider bg-card overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="outline" className={cn("text-xs", levelClasses[program.level])}>
            {program.level}
          </Badge>
          <Badge variant="outline" className={cn("text-xs", deliveryClasses[program.deliveryMode])}>
            {program.deliveryMode}
          </Badge>
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