import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Award, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Industry Alignment", description: "Training aligned with globally recognized engineering platforms and vendor ecosystems." },
  { icon: Users, title: "Structured Learning", description: "Progressive curriculum from foundational concepts to professional-level mastery." },
  { icon: Award, title: "Practical Focus", description: "Hands-on projects and real-world applications, not just theory." },
  { icon: Globe, title: "Global Standards", description: "Preparing professionals for international engineering practice." },
];

const About = () => {
  return (
    <Layout>
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-content">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold text-foreground">About Aliko Academy – STEM</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Aliko Academy – STEM is an industry systems training academy focused on engineering software 
              and systems mastery. We provide structured, instructor-supported training in BIM, CAD/CAE, 
              power systems, infrastructure tools, and project controls.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-divider">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-t border-divider">
        <div className="container-content text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/programs">Explore Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;