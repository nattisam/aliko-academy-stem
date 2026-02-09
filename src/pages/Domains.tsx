import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Building, Home, Cog, Zap, Calendar, Globe } from "lucide-react";
import { domains } from "@/data/domains";
import { getProgramsByDomain } from "@/data/programs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Building,
  Home,
  Cog,
  Zap,
  Calendar,
  Globe,
};

const Domains = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-content">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold text-foreground">
              Engineering Domains
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our comprehensive training programs organized by engineering discipline. 
              Each domain offers a structured progression path from foundational to professional-level skills.
            </p>
          </div>
        </div>
      </section>

      {/* Domain Sections */}
      <section className="section-padding">
        <div className="container-content space-y-16">
          {domains.map((domain) => {
            const Icon = iconMap[domain.icon] || Building2;
            const domainPrograms = getProgramsByDomain(domain.name).slice(0, 4);

            return (
              <div key={domain.id} id={domain.id} className="scroll-mt-24">
                <Card className="border-divider overflow-hidden">
                  <CardContent className="p-0">
                    {/* Domain Header */}
                    <div className="p-6 lg:p-8 bg-card border-b border-divider">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-display text-2xl font-bold text-foreground">
                            {domain.name}
                          </h2>
                          <p className="mt-2 text-muted-foreground">
                            {domain.introText}
                          </p>
                          <div className="mt-4 p-3 bg-secondary/50 rounded-lg inline-block">
                            <p className="text-sm">
                              <span className="font-medium text-foreground">Suggested progression:</span>{" "}
                              <span className="text-muted-foreground">{domain.progressionPath}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Programs Grid */}
                    <div className="p-6 lg:p-8 bg-background">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                        Featured Programs
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {domainPrograms.map((program) => (
                          <ProgramCard key={program.id} program={program} variant="compact" />
                        ))}
                      </div>
                      {getProgramsByDomain(domain.name).length > 4 && (
                        <div className="mt-6 text-center">
                          <Button asChild variant="outline">
                            <Link to={`/programs?domain=${encodeURIComponent(domain.name)}`}>
                              View All {domain.shortName} Programs
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-card border-t border-divider">
        <div className="container-content text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Need a Customized Training Program?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We design custom training solutions for organizations and institutions 
            based on your specific technology and workforce needs.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/enterprise">
              Request Enterprise Training
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Domains;