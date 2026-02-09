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
import { ArrowRight, Filter, Building2, Building, Cog, Zap, Calendar, Globe, Home, Layers, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Building,
  Home,
  Cog,
  Zap,
  Calendar,
  Globe,
  Plane,
};

// Enhanced contrast - brighter text colors for dark backgrounds
const domainColorMap: Record<string, { bg: string; border: string; text: string; headerBg: string }> = {
  "Civil Engineering": {
    bg: "bg-accent-orange/10",
    border: "border-accent-orange/30",
    text: "text-[hsl(40_95%_72%)]",
    headerBg: "bg-gradient-to-r from-accent-orange/12 to-transparent"
  },
  "Structural / BIM & Infrastructure": {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-[hsl(207_90%_72%)]",
    headerBg: "bg-gradient-to-r from-primary/12 to-transparent"
  },
  "Architectural Engineering": {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-[hsl(195_100%_75%)]",
    headerBg: "bg-gradient-to-r from-accent/12 to-transparent"
  },
  "Mechanical Engineering": {
    bg: "bg-accent-green/10",
    border: "border-accent-green/30",
    text: "text-[hsl(80_70%_70%)]",
    headerBg: "bg-gradient-to-r from-accent-green/12 to-transparent"
  },
  "Electrical Engineering": {
    bg: "bg-[hsl(280_68%_55%)]/10",
    border: "border-[hsl(280_68%_55%)]/30",
    text: "text-[hsl(280_68%_78%)]",
    headerBg: "bg-gradient-to-r from-[hsl(280_68%_55%)]/12 to-transparent"
  },
  "Construction Planning & Project Controls": {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-[hsl(207_90%_72%)]",
    headerBg: "bg-gradient-to-r from-primary/12 to-transparent"
  },
  "GIS & Infrastructure Intelligence": {
    bg: "bg-accent-green/10",
    border: "border-accent-green/30",
    text: "text-[hsl(80_70%_70%)]",
    headerBg: "bg-gradient-to-r from-accent-green/12 to-transparent"
  },
  "Aviation & Aerospace Engineering": {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-[hsl(195_100%_75%)]",
    headerBg: "bg-gradient-to-r from-accent/12 to-transparent"
  }
};

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
    const colorStyle = domainColorMap[domainName] || domainColorMap["Civil Engineering"];
    const Icon = domain ? iconMap[domain.icon] || Building2 : Building2;
    
    if (filteredPrograms.length === 0) return null;

    return (
      <AccordionItem 
        key={domainName} 
        value={domainName} 
        className={cn(
          "border rounded-2xl overflow-hidden mb-4 transition-all duration-300",
          colorStyle.border,
          "data-[state=open]:shadow-lg"
        )}
      >
        <AccordionTrigger className={cn(
          "hover:no-underline px-6 py-5",
          colorStyle.headerBg,
          "data-[state=open]:border-b",
          colorStyle.border
        )}>
          <div className="flex items-center gap-4 text-left">
            <div className={cn(
              "h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 border",
              colorStyle.bg,
              colorStyle.border
            )}>
              <Icon className={cn("h-5 w-5", colorStyle.text)} />
            </div>
            <div>
              <span className="font-display font-semibold text-lg text-foreground">
                {domainName}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <Badge variant="outline" className={cn("text-xs font-normal", colorStyle.bg, colorStyle.text, colorStyle.border)}>
                  {filteredPrograms.length} programs
                </Badge>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-6 bg-card/50">
          {/* Visual Grid - Software Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} variant="visual" />
            ))}
          </div>
          
          {domain && (
            <div className={cn(
              "mt-6 p-3 rounded-lg border",
              colorStyle.bg,
              colorStyle.border
            )}>
              <p className="text-sm text-muted-foreground">
                <span className={cn("font-medium", colorStyle.text)}>Suggested path:</span>{" "}
                {domain.progressionPath}
              </p>
            </div>
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Program Catalog
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Engineering <span className="text-glow text-primary">Software Training</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse our comprehensive software training programs by domain. 
              Click each domain to explore available courses.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-divider bg-card/80 backdrop-blur-sm sticky top-16 lg:top-20 z-40">
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
            <div className={cn(
              "ml-auto px-3 py-1.5 rounded-full text-sm font-medium",
              "bg-primary/10 text-primary border border-primary/30"
            )}>
              {totalFilteredCount} programs
            </div>
          </div>
        </div>
      </section>

      {/* Program Catalog */}
      <section className="section-padding">
        <div className="container-content">
          {/* Engineering Domains */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              Engineering Domains
            </h2>
            <Accordion type="single" collapsible className="space-y-0">
              {engineeringDomains.map(renderDomainAccordion)}
            </Accordion>
          </div>

          {/* Industry & Regional Systems */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Globe className="h-6 w-6 text-accent-green" />
              Industry & Regional Systems
            </h2>
            <Accordion type="single" collapsible className="space-y-0">
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
