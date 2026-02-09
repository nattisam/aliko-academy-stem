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
  GraduationCap,
  CheckCircle2,
  Users
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
  <Card className="border-divider bg-secondary/30 hover:bg-secondary/50 transition-colors">
    <CardContent className="p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h4 className="font-semibold text-foreground">{cert.name}</h4>
          <Badge variant="outline" className="mt-1 text-xs">
            {cert.shortName}
          </Badge>
        </div>
        <Badge variant="secondary" className="text-xs shrink-0">
          {cert.administeredBy}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
      
      <div className="space-y-3">
        <div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Who It's For</span>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {cert.whoItsFor.map((who, i) => (
              <Badge key={i} variant="outline" className="text-xs bg-background/50">
                {who}
              </Badge>
            ))}
          </div>
        </div>
        
        {cert.domains && (
          <div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Domains</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {cert.domains.map((domain, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {domain}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="pt-2 border-t border-divider">
          <div className="flex items-start gap-2">
            <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span className="text-sm text-foreground">{cert.outcome}</span>
          </div>
        </div>
        
        {cert.notes && (
          <p className="text-xs text-muted-foreground italic">📌 {cert.notes}</p>
        )}
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
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-content">
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
              Professional Pathways
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Engineering Licensure & Professional Exams
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              Engineering careers often require professional licensure or third-party certifications. 
              Aliko Academy – STEM provides training and preparation aligned with these pathways, 
              but does not issue licenses or certifications.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>3 Core Licensure Exams</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-5 w-5 text-accent" />
                <span>25+ Professional Certifications</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Plane className="h-5 w-5 text-accent-green" />
                <span>Aviation Domain Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Licensure Section */}
      <section className="section-padding border-b border-divider">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                Core Engineering Licensure
              </h2>
              <p className="text-muted-foreground">
                Administered by national or regional engineering boards
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-3">
            {coreLicensureExams.certifications.map((cert) => (
              <Card key={cert.id} className="border-divider bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">
                      {cert.shortName}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {cert.administeredBy}
                    </Badge>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                        <Users className="h-3 w-3" /> Who It's For
                      </span>
                      <ul className="mt-2 space-y-1">
                        {cert.whoItsFor.map((who, i) => (
                          <li key={i} className="text-sm text-foreground flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            {who}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {cert.domains && (
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Domains Covered</span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {cert.domains.slice(0, 4).map((domain, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {domain}
                            </Badge>
                          ))}
                          {cert.domains.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{cert.domains.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="pt-3 border-t border-divider">
                      <div className="flex items-start gap-2 bg-primary/10 rounded-lg p-3">
                        <GraduationCap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground font-medium">{cert.outcome}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domain-Specific Certifications */}
      <section className="section-padding border-b border-divider">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-accent/20">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                Domain-Specific Certifications
              </h2>
              <p className="text-muted-foreground">
                Professional certifications (non-licensure) highly valued in the industry
              </p>
            </div>
          </div>
          
          <Accordion type="multiple" className="space-y-3">
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
      <section className="section-padding border-b border-divider bg-gradient-to-b from-background to-secondary/20">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-accent-green/20">
              <Plane className="h-6 w-6 text-accent-green" />
            </div>
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                Aviation Domain
              </h2>
              <p className="text-muted-foreground">
                FAA, EASA, and aviation safety certifications (separate from general engineering)
              </p>
            </div>
          </div>
          
          <div className="bg-accent-green/10 border border-accent-green/30 rounded-lg p-4 mb-8">
            <p className="text-sm text-foreground">
              <strong>Note:</strong> Aviation certifications are explicitly separated from general engineering licensure. 
              These credentials are governed by aviation regulatory authorities (FAA, EASA, Transport Canada, ICAO) 
              and have distinct requirements and pathways.
            </p>
          </div>
          
          <Accordion type="multiple" className="space-y-3">
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

      {/* Disclaimer Section */}
      <section className="section-padding">
        <div className="container-content max-w-4xl">
          <Card className="border-amber-700/50 bg-amber-900/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <AlertTriangle className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-amber-300 mb-3">
                    Important Disclaimer
                  </h2>
                  <div className="space-y-3 text-amber-200/90">
                    <p>
                      <strong>Aliko Academy – STEM provides education and exam preparation support only.</strong>
                    </p>
                    <p>
                      Licenses and certifications are issued by third-party authorities including NCEES, PMI, 
                      Autodesk, FAA, EASA, and other recognized organizations. Completion of training does not 
                      guarantee exam success or licensure.
                    </p>
                    <p className="text-sm text-amber-200/70">
                      All exam and certification information provided is for educational purposes. 
                      Please refer to official certifying bodies for the most current requirements and procedures.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Terminology Clarification */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Card className="border-divider">
              <CardContent className="p-5 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Licensure</h3>
                <p className="text-sm text-muted-foreground">
                  Legal authority to practice engineering independently (FE, PE, SE)
                </p>
              </CardContent>
            </Card>
            <Card className="border-divider">
              <CardContent className="p-5 text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Certification</h3>
                <p className="text-sm text-muted-foreground">
                  Professional credential demonstrating expertise (PMP, Six Sigma)
                </p>
              </CardContent>
            </Card>
            <Card className="border-divider">
              <CardContent className="p-5 text-center">
                <Cog className="h-8 w-8 text-accent-green mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Tool Training</h3>
                <p className="text-sm text-muted-foreground">
                  Software proficiency credentials (Autodesk, SOLIDWORKS)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;
