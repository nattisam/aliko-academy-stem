import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  programs, 
  getProgramsByDomain, 
  getDomainProgramCount,
  engineeringDomains,
  industryDomains,
  ProgramLevel,
  DeliveryMode,
  DomainCategory
} from "@/data/programs";
import { domains, getDomainByName } from "@/data/domains";
import { ArrowRight, Filter } from "lucide-react";

const Programs = () => {
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [deliveryFilter, setDeliveryFilter] = useState<string>("all");
  
  const filterPrograms = (domainPrograms: typeof programs) => {
    return domainPrograms.filter(p => {
      if (levelFilter !== "all" && p.level !== levelFilter) return false;
      if (deliveryFilter !== "all" && p.deliveryMode !== deliveryFilter) return false;
      return true;
    });
  };

  const totalFilteredCount = useMemo(() => {
    return programs.filter(p => {
      if (levelFilter !== "all" && p.level !== levelFilter) return false;
      if (deliveryFilter !== "all" && p.deliveryMode !== deliveryFilter) return false;
      return true;
    }).length;
  }, [levelFilter, deliveryFilter]);

  const renderDomainAccordion = (domainName: DomainCategory) => {
    const domain = getDomainByName(domainName);
    const domainPrograms = getProgramsByDomain(domainName);
    const filteredPrograms = filterPrograms(domainPrograms);
    
    if (filteredPrograms.length === 0) return null;

    return (
      <AccordionItem key={domainName} value={domainName} className="border border-divider rounded-lg px-4 mb-3 bg-card">
        <AccordionTrigger className="hover:no-underline py-4">
          <div className="flex items-center gap-4 text-left">
            <span className="font-display font-semibold text-lg text-foreground">
              {domainName}
            </span>
            <Badge variant="secondary" className="font-normal">
              {filteredPrograms.length} programs
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} variant="compact" />
            ))}
          </div>
          {domain && (
            <p className="mt-4 text-sm text-muted-foreground border-t border-divider pt-4">
              <span className="font-medium">Typical path:</span> {domain.progressionPath}
            </p>
          )}
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-content">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold text-foreground">
              Program Catalog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our comprehensive range of industry-aligned engineering and STEM 
              training programs. Filter by level, delivery mode, or browse by domain.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-divider bg-card sticky top-16 lg:top-20 z-40">
        <div className="container-content py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Filters:</span>
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-[160px] bg-background">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent className="bg-card border-divider">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
              </SelectContent>
            </Select>
            <Select value={deliveryFilter} onValueChange={setDeliveryFilter}>
              <SelectTrigger className="w-[160px] bg-background">
                <SelectValue placeholder="Delivery" />
              </SelectTrigger>
              <SelectContent className="bg-card border-divider">
                <SelectItem value="all">All Modes</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-muted-foreground ml-auto">
              {totalFilteredCount} programs found
            </span>
          </div>
        </div>
      </section>

      {/* Program Catalog */}
      <section className="section-padding">
        <div className="container-content">
          {/* Engineering Domains */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Engineering Domains
            </h2>
            <Accordion type="multiple" className="space-y-0">
              {engineeringDomains.map(renderDomainAccordion)}
            </Accordion>
          </div>

          {/* Industry & Regional Systems */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Industry & Regional Systems
            </h2>
            <Accordion type="multiple" className="space-y-0">
              {industryDomains.map(renderDomainAccordion)}
            </Accordion>
          </div>

          {/* No results */}
          {totalFilteredCount === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No programs match your current filters.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setLevelFilter("all");
                  setDeliveryFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-12 bg-card border-t border-divider">
        <div className="container-content text-center">
          <p className="text-muted-foreground mb-4">
            Looking for customized training for your organization?
          </p>
          <Button asChild variant="hero">
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

export default Programs;