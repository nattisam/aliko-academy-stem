import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Building2, ArrowRight } from "lucide-react";

const audiences = [
  {
    id: "students",
    icon: GraduationCap,
    title: "Students & Graduates",
    description: "Start your engineering career with practical software skills",
    link: "/programs",
    linkText: "Explore Programs",
  },
  {
    id: "professionals",
    icon: Briefcase,
    title: "Professionals",
    description: "Upskill or transition to advanced engineering tools",
    link: "/programs",
    linkText: "Find Your Path",
  },
  {
    id: "organizations",
    icon: Building2,
    title: "Organizations & Universities",
    description: "Custom training and workforce development solutions",
    link: "/enterprise",
    linkText: "Enterprise Training",
  },
];

export function AudienceStrip() {
  return (
    <section className="section-padding bg-surface-elevated border-y border-divider">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <Link key={audience.id} to={audience.link}>
                <Card className="card-hover border-divider h-full group">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                      {audience.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {audience.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                      {audience.linkText}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}