import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Shield, 
  Building2, 
  Cog, 
  Zap, 
  Building, 
  ClipboardList, 
  Plane, 
  Globe,
  AlertTriangle,
  Award,
  GraduationCap
} from "lucide-react";
import {
  coreLicensureExams,
  domainCertifications,
  aviationCertifications,
  type CertificationCategory,
  type Certification,
} from "@/data/certifications";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="h-5 w-5" />,
  Building2: <Building2 className="h-5 w-5" />,
  Cog: <Cog className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  Building: <Building className="h-5 w-5" />,
  ClipboardList: <ClipboardList className="h-5 w-5" />,
  Plane: <Plane className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
};

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <Card className="group border-divider bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300">
    <CardContent className="p-4">
      <div className="flex items-center justify-between mb-3">
        <Badge className="bg-primary/20 text-primary border-primary/30 text-sm font-bold">
          {cert.shortName}
        </Badge>
        <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
          Coming Soon
        </Badge>
      </div>
      <h4 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
        {cert.name}
      </h4>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Award className="h-3 w-3 text-primary" />
        <span>{cert.outcome}</span>
      </div>
    </CardContent>
  </Card>
);
const CategorySection = ({ category, colorClass }: { category: CertificationCategory; colorClass: string }) => (
  <AccordionItem 
    value={category.id}
    className="border border-divider rounded-xl px-6 bg-card mb-3 overflow-hidden"
  >
    <AccordionTrigger className="hover:no-underline py-5">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-${colorClass}/20 text-${colorClass}`}>
          {iconMap[category.icon] || <Award className="h-5 w-5" />}
        </div>
        <div className="text-left">
          <span className="font-semibold text-foreground text-lg">{category.title}</span>
          <p className="text-sm text-muted-foreground font-normal mt-0.5">{category.description}</p>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="pb-6">
      <div className="grid gap-4 md:grid-cols-2">
        {category.certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);

const Certifications = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container-content">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                Professional Pathways
              </Badge>
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                Prep Support Coming Soon
              </Badge>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Engineering Licensure & Professional Exams
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Explore professional certification pathways. Preparation courses coming soon.
            </p>
            
            {/* Quick Stats - More Visual */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-lg">
              <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Shield className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="text-2xl font-bold text-foreground">3</span>
                <p className="text-xs text-muted-foreground">Core Exams</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-accent/10 border border-accent/20">
                <Award className="h-6 w-6 text-accent mx-auto mb-1" />
                <span className="text-2xl font-bold text-foreground">25+</span>
                <p className="text-xs text-muted-foreground">Certifications</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-accent-green/10 border border-accent-green/20">
                <Plane className="h-6 w-6 text-accent-green mx-auto mb-1" />
                <span className="text-2xl font-bold text-foreground">6</span>
                <p className="text-xs text-muted-foreground">Domains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Licensure Section */}
      <section className="py-10 border-b border-divider">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/20">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground">
              Core Engineering Licensure
            </h2>
            <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30 ml-auto">
              Prep Coming Soon
            </Badge>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            {coreLicensureExams.certifications.map((cert) => (
              <Card key={cert.id} className="group border-divider bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/20">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">
                      {cert.shortName}
                    </Badge>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>{cert.outcome}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.domains?.slice(0, 3).map((domain, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {domain}
                      </Badge>
                    ))}
                    {cert.domains && cert.domains.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{cert.domains.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domain-Specific Certifications */}
      <section className="py-10 border-b border-divider">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-accent/20">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground">
              Domain-Specific Certifications
            </h2>
            <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30 ml-auto">
              Prep Coming Soon
            </Badge>
          </div>
          
          <Accordion type="multiple" className="space-y-2">
            {domainCertifications.map((category) => (
              <CategorySection 
                key={category.id} 
                category={category} 
                colorClass={category.accentColor}
              />
            ))}
          </Accordion>
        </div>
      </section>

      {/* Aviation Domain */}
      <section className="py-10 border-b border-divider bg-gradient-to-b from-background to-secondary/20">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-accent-green/20">
              <Plane className="h-5 w-5 text-accent-green" />
            </div>
            <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground">
              Aviation Domain
            </h2>
            <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30 ml-auto">
              Prep Coming Soon
            </Badge>
          </div>
          
          <Accordion type="multiple" className="space-y-2">
            {aviationCertifications.map((category) => (
              <CategorySection 
                key={category.id} 
                category={category} 
                colorClass="accent"
              />
            ))}
          </Accordion>
        </div>
      </section>

      {/* Terminology Cards - Visual */}
      <section className="py-10">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-divider hover:border-primary/30 transition-colors">
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground text-sm">Licensure</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Legal authority (FE, PE, SE)
                </p>
              </CardContent>
            </Card>
            <Card className="border-divider hover:border-accent/30 transition-colors">
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-foreground text-sm">Certification</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Professional credentials (PMP)
                </p>
              </CardContent>
            </Card>
            <Card className="border-divider hover:border-accent-green/30 transition-colors">
              <CardContent className="p-4 text-center">
                <Cog className="h-8 w-8 text-accent-green mx-auto mb-2" />
                <h3 className="font-semibold text-foreground text-sm">Tool Training</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Software proficiency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Minimal Disclaimer - Footer Style */}
      <div className="border-t border-divider py-4 bg-secondary/20">
        <div className="container-content">
          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
            <AlertTriangle className="h-3 w-3" />
            Aliko Academy – STEM provides exam preparation support only. Licenses and certifications are issued by third-party authorities.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;