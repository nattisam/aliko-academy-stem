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
import { ArrowRight, Filter, Building2, Building, Cog, FlaskConical, Zap, Calendar, Globe, Home, Layers, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, Building, Home, Cog, FlaskConical, Zap, Calendar, Globe, Plane,
};

const domainColorMap: Record<string, { bg: string; border: string; text: string; headerBg: string; shadow: string }> = {
  "Civil Engineering": {
    bg: "bg-accent-green/12", border: "border-accent-green/35", text: "text-accent-green",
    headerBg: "bg-gradient-to-r from-accent-green/15 to-transparent", shadow: "shadow-accent-green/15"
  },
  "Structural / BIM & Infrastructure": {
    bg: "bg-primary/12", border: "border-primary/35", text: "text-primary",
    headerBg: "bg-gradient-to-r from-primary/15 to-transparent", shadow: "shadow-primary/15"
  },
  "Architectural Engineering": {
    bg: "bg-accent/12", border: "border-accent/35", text: "text-accent",
    headerBg: "bg-gradient-to-r from-accent/15 to-transparent", shadow: "shadow-accent/15"
  },
  "Mechanical Engineering": {
    bg: "bg-accent-green/12", border: "border-accent-green/35", text: "text-accent-green",
    headerBg: "bg-gradient-to-r from-accent-green/15 to-transparent", shadow: "shadow-accent-green/15"
  },
  "Chemical Engineering": {
    bg: "bg-accent/12", border: "border-accent/35", text: "text-accent",
    headerBg: "bg-gradient-to-r from-accent/15 to-transparent", shadow: "shadow-accent/15"
  },
  "Electrical Engineering": {
    bg: "bg-[hsl(280_68%_60%)]/12", border: "border-[hsl(280_68%_60%)]/35", text: "text-[hsl(280_68%_75%)]",
    headerBg: "bg-gradient-to-r from-[hsl(280_68%_60%)]/15 to-transparent", shadow: "shadow-[hsl(280_68%_60%)]/15"
  },
  "Construction Planning & Project Controls": {
    bg: "bg-primary/12", border: "border-primary/35", text: "text-primary",
    headerBg: "bg-gradient-to-r from-primary/15 to-transparent", shadow: "shadow-primary/15"
  },
  "GIS & Infrastructure Intelligence": {
    bg: "bg-accent-green/12", border: "border-accent-green/35", text: "text-accent-green",
    headerBg: "bg-gradient-to-r from-accent-green/15 to-transparent", shadow: "shadow-accent-green/15"
  },
  "Aviation & Aerospace Engineering": {
    bg: "bg-accent/12", border: "border-accent/35", text: "text-accent",
    headerBg: "bg-gradient-to-r from-accent/15 to-transparent", shadow: "shadow-accent/15"
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
          "border-2 rounded-2xl overflow-hidden mb-5 transition-all duration-300",
          colorStyle.border,
          `data-[state=open]:shadow-xl data-[state=open]:${colorStyle.shadow}`
        )}
      >
        <AccordionTrigger className={cn(
          "hover:no-underline px-7 py-6",
          colorStyle.headerBg,
          "data-[state=open]:border-b",
          colorStyle.border
        )}>
          <div className="flex items-center gap-5 text-left">
            <div className={cn(
              "h-13 w-13 rounded-xl flex items-center justify-center flex-shrink-0 border-2 shadow-md",
              colorStyle.bg,
              colorStyle.border
            )} style={{ height: '3.25rem', width: '3.25rem' }}>
              <Icon className={cn("h-6 w-6", colorStyle.text)} />
            </div>
            <div>
              <span className={cn("font-display font-bold text-xl", colorStyle.text)}>
                {domainName}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className={cn("text-xs font-bold", colorStyle.bg, colorStyle.text, colorStyle.border)}>
                  {filteredPrograms.length} programs
                </Badge>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-7 py-7 bg-card/50">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} variant="visual" />
            ))}
          </div>
          
          {domain && (
            <div className={cn(
              "mt-7 p-4 rounded-xl border-2",
              colorStyle.bg,
              colorStyle.border
            )}>
              <p className="text-sm text-muted-foreground">
                <span className={cn("font-bold", colorStyle.text)}>Suggested path:</span>{" "}
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
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-content">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-14 w-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Layers className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                Program Catalog
              </span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Engineering <span className="text-primary">Software Training</span>
            </h1>
            <p className="mt-5 text-xl text-muted-foreground leading-relaxed">
              Browse our comprehensive software training programs by domain. 
              Click each domain to explore available courses.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-divider bg-surface-elevated backdrop-blur-sm sticky top-18 lg:top-20 z-40">
        <div className="container-content py-5">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold">
              <Filter className="h-4 w-4" />
              <span>Filters:</span>
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-[170px] bg-background h-11 font-bold"><SelectValue placeholder="Level" /></SelectTrigger>
              <SelectContent className="bg-card border-divider">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
              </SelectContent>
            </Select>
            <Select value={deliveryFilter} onValueChange={setDeliveryFilter}>
              <SelectTrigger className="w-[170px] bg-background h-11 font-bold"><SelectValue placeholder="Delivery" /></SelectTrigger>
              <SelectContent className="bg-card border-divider">
                <SelectItem value="all">All Modes</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
            <div className="ml-auto px-4 py-2 rounded-full text-sm font-bold bg-primary/15 text-primary border border-primary/30">
              {totalFilteredCount} programs
            </div>
          </div>
        </div>
      </section>

      {/* Program Catalog */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mb-14">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
              <Building2 className="h-7 w-7 text-primary" />
              <span>Engineering <span className="text-primary">Domains</span></span>
            </h2>
            <Accordion type="single" collapsible className="space-y-0">
              {engineeringDomains.map(renderDomainAccordion)}
            </Accordion>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
              <Globe className="h-7 w-7 text-accent-green" />
              <span>Industry & <span className="text-accent-green">Regional Systems</span></span>
            </h2>
            <Accordion type="single" collapsible className="space-y-0">
              {industryDomains.map(renderDomainAccordion)}
            </Accordion>
          </div>

          {totalFilteredCount === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No programs match your current filters.</p>
              <Button variant="outline" className="mt-4" onClick={() => { setLevelFilter("all"); setDeliveryFilter("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 bg-surface-elevated border-t border-divider">
        <div className="container-content text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Looking for customized training?
          </h3>
          <Button asChild variant="hero" size="lg">
            <Link to="/enterprise">
              Request Enterprise Training
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
