import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  GraduationCap,
  Briefcase,
  Building2,
  ExternalLink,
  AlertCircle
} from "lucide-react";
import { getProgramBySlug } from "@/data/programs";
import { cn } from "@/lib/utils";

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const levelClasses = {
    Beginner: "bg-green-900/50 text-green-300 border-green-700/50",
    Intermediate: "bg-amber-900/50 text-amber-300 border-amber-700/50",
    Professional: "bg-purple-900/50 text-purple-300 border-purple-700/50",
  };

  const deliveryClasses = {
    Online: "bg-blue-900/50 text-blue-300 border-blue-700/50",
    Hybrid: "bg-teal-900/50 text-teal-300 border-teal-700/50",
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-divider bg-card">
        <div className="container-content py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/programs" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Programs
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium truncate">{program.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container-content">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline" className={cn(levelClasses[program.level])}>
                {program.level}
              </Badge>
              <Badge variant="outline" className={cn(deliveryClasses[program.deliveryMode])}>
                {program.deliveryMode}
              </Badge>
              <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                {program.domain}
              </Badge>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {program.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {program.fullDescription}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {program.durationWeeks} weeks
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {program.weeklyHours} hours/week
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Who This Is For */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Who This Program Is For
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Card className="border-divider">
                    <CardContent className="p-4 flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">Students</h3>
                        <p className="text-sm text-muted-foreground">Building industry-ready skills</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-divider">
                    <CardContent className="p-4 flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">Professionals</h3>
                        <p className="text-sm text-muted-foreground">Upskilling or transitioning</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-divider">
                    <CardContent className="p-4 flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">Organizations</h3>
                        <p className="text-sm text-muted-foreground">Workforce development</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Skills Gained */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Skills & Capabilities You Gain
                </h2>
                <ul className="space-y-3">
                  {program.skillsGained.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industry Applications */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Typical Industry Applications
                </h2>
                <div className="flex flex-wrap gap-2">
                  {program.industryApplications.map((app, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Curriculum Outline
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {program.curriculum.map((module, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`module-${index}`}
                      className="border border-divider rounded-lg px-4 bg-card"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <span className="font-medium text-foreground text-left">
                          {module.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Industry Alignment */}
              <div className="bg-secondary/50 rounded-xl p-6 border border-divider">
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  Industry Alignment
                </h2>
                <p className="text-muted-foreground">
                  {program.alignmentStatement}
                </p>
                {program.externalReferenceLink && (
                  <a 
                    href={program.externalReferenceLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Reference Resource
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Certification Disclaimer */}
              <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-amber-300">Certification Disclaimer</h3>
                    <p className="mt-1 text-sm text-amber-200/80">
                      Certification exams and credentials are administered by third-party vendors. 
                      Aliko Academy – STEM provides training and preparation only and does not 
                      guarantee exam outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Enrollment Card */}
                <Card className="border-divider">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                      Ready to Enroll?
                    </h3>
                    <div className="space-y-4">
                      <Button asChild className="w-full" size="lg" variant="hero">
                        <a href="https://lms.alikogroup.com" target="_blank" rel="noopener noreferrer">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild className="w-full" variant="outline">
                        <Link to="/enterprise">
                          Request Group Training
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Program Details */}
                <Card className="border-divider">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                      Program Details
                    </h3>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm text-muted-foreground">Level</dt>
                        <dd className="font-medium text-foreground">{program.level}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Delivery Mode</dt>
                        <dd className="font-medium text-foreground">{program.deliveryMode}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Duration</dt>
                        <dd className="font-medium text-foreground">{program.durationWeeks} weeks</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Weekly Commitment</dt>
                        <dd className="font-medium text-foreground">{program.weeklyHours} hours</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>

                {/* Prerequisites */}
                {program.prerequisites.length > 0 && (
                  <Card className="border-divider">
                    <CardContent className="p-6">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                        Prerequisites
                      </h3>
                      <ul className="space-y-2">
                        {program.prerequisites.map((prereq, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                            {prereq}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Programs */}
      <section className="py-8 border-t border-divider bg-card">
        <div className="container-content">
          <Button asChild variant="ghost">
            <Link to="/programs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Programs
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;