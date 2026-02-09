import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AudienceStrip } from "@/components/shared/AudienceStrip";
import { IndustryAlignmentBlock } from "@/components/shared/IndustryAlignmentBlock";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { EnhancedDomainCard } from "@/components/domains/EnhancedDomainCard";
import { getFeaturedPrograms, programs } from "@/data/programs";
import { domains } from "@/data/domains";

const enterpriseBenefits = [
  "Custom cohort training for your workforce",
  "Faculty enablement and train-the-trainer",
  "Onsite, hybrid, or fully online delivery",
];

// Domain filter tabs with accent colors
const domainFilters = [
  { id: "all", label: "All Programs", color: "primary" },
  { id: "civil", label: "Civil", color: "accent-orange" },
  { id: "structural-bim", label: "Structural & BIM", color: "primary" },
  { id: "mechanical", label: "Mechanical", color: "accent-green" },
  { id: "electrical", label: "Electrical", color: "electrical" },
  { id: "architectural", label: "Architectural", color: "accent" },
  { id: "project-controls", label: "Project Controls", color: "accent-orange" },
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const featuredPrograms = getFeaturedPrograms();
  
  const filteredPrograms = useMemo(() => {
    if (activeFilter === "all") {
      return featuredPrograms.slice(0, 6);
    }
    const domain = domains.find(d => d.id === activeFilter);
    if (!domain) return featuredPrograms.slice(0, 6);
    
    const domainPrograms = programs.filter(p => p.domain === domain.name);
    return domainPrograms.slice(0, 6);
  }, [activeFilter, featuredPrograms]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container-content py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Industry-Aligned{" "}
              <span className="text-primary text-glow">Engineering</span> &{" "}
              <span className="text-accent">STEM</span> Training
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl">
              Master globally used engineering software and systems—BIM, CAD/CAE, 
              power systems, and infrastructure tools—through structured, 
              instructor-supported training.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl" variant="hero">
                <Link to="/programs">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/enterprise">
                  Request Enterprise Training
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative floating elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-40">
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-accent/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 right-32 w-20 h-20 rounded-full bg-accent-green/20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 right-60 w-16 h-16 rounded-full bg-accent-orange/20 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </section>

      {/* Audience Strip */}
      <AudienceStrip />

      {/* Featured Programs */}
      <section className="section-padding">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Featured Programs
              </h2>
              <p className="mt-2 text-muted-foreground">
                Popular training programs across engineering disciplines
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/programs">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Domain Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {domainFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeFilter === filter.id 
                    ? `bg-${filter.color} text-${filter.color === 'primary' ? 'primary-foreground' : filter.color === 'accent' ? 'accent-foreground' : 'background'} shadow-lg shadow-${filter.color}/30` 
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted border border-divider'
                  }
                `}
                style={activeFilter === filter.id ? {
                  backgroundColor: filter.color === 'primary' ? 'hsl(var(--primary))' :
                                   filter.color === 'accent' ? 'hsl(var(--accent))' :
                                   filter.color === 'accent-green' ? 'hsl(var(--accent-green))' :
                                   filter.color === 'accent-orange' ? 'hsl(var(--accent-orange))' :
                                   filter.color === 'electrical' ? 'hsl(var(--electrical))' :
                                   'hsl(var(--primary))',
                  color: 'white',
                  boxShadow: `0 10px 25px -5px hsl(var(--${filter.color}) / 0.3)`
                } : undefined}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          
          {filteredPrograms.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No programs found in this domain. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Engineering Domains */}
      <section className="section-padding gradient-section">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">
              <span className="text-accent-green">Engineering</span> Domains
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explore programs organized by engineering discipline and industry systems
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {domains.map((domain) => (
              <EnhancedDomainCard key={domain.id} domain={domain} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/domains">
                View All Domains
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Alignment */}
      <IndustryAlignmentBlock />

      {/* Enterprise Training Preview */}
      <section className="section-padding">
        <div className="container-content">
          <div className="bg-card rounded-2xl border border-divider p-8 lg:p-12 border-gradient-animated">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  <span className="text-accent-orange">Enterprise</span> & Institutional Training
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Customized engineering and STEM training solutions for organizations, 
                  universities, and government agencies. We deliver cohort-based programs, 
                  curriculum customization, and faculty enablement aligned to industry workflows.
                </p>
                <ul className="mt-6 space-y-3">
                  {enterpriseBenefits.map((benefit, index) => {
                    const iconColors = ["text-primary", "text-accent", "text-accent-green"];
                    return (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className={`h-5 w-5 ${iconColors[index % iconColors.length]} mt-0.5 flex-shrink-0`} />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/enterprise">
                      Request Training Proposal
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/15 via-accent/10 to-accent-green/10 border border-divider flex items-center justify-center relative overflow-hidden">
                  {/* Multi-color glow orbs */}
                  <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/30 blur-2xl" />
                  <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-accent-orange/30 blur-2xl" />
                  <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-accent-green/30 blur-xl" />
                  <div className="text-center p-8 relative z-10">
                    <div className="text-6xl font-display font-bold text-primary">
                      500+
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      Professionals trained annually
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;