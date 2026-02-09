import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AudienceStrip } from "@/components/shared/AudienceStrip";
import { IndustryAlignmentBlock } from "@/components/shared/IndustryAlignmentBlock";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { EnhancedDomainCard } from "@/components/domains/EnhancedDomainCard";
import { getFeaturedPrograms } from "@/data/programs";
import { domains } from "@/data/domains";

const enterpriseBenefits = [
  "Custom cohort training for your workforce",
  "Faculty enablement and train-the-trainer",
  "Onsite, hybrid, or fully online delivery",
];

const Index = () => {
  const featuredPrograms = getFeaturedPrograms().slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container-content py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Industry-Aligned Engineering & STEM Training
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
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent" />
        </div>
      </section>

      {/* Audience Strip */}
      <AudienceStrip />

      {/* Featured Programs */}
      <section className="section-padding">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Domains */}
      <section className="section-padding gradient-section">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Engineering Domains
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
          <div className="bg-card rounded-2xl border border-divider p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Enterprise & Institutional Training
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Customized engineering and STEM training solutions for organizations, 
                  universities, and government agencies. We deliver cohort-based programs, 
                  curriculum customization, and faculty enablement aligned to industry workflows.
                </p>
                <ul className="mt-6 space-y-3">
                  {enterpriseBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
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
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-divider flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-display font-bold text-primary/20">
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