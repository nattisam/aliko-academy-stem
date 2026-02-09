import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ExternalLink, HelpCircle, BookOpen, Shield, Headphones } from "lucide-react";

const StudentLogin = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Student <span className="text-primary">Login</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Access your courses and learning portal through our Learning Management System.
            </p>
          </div>
        </div>
      </section>

      {/* Login CTA */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-lg mx-auto">
            <Card className="border-primary/20 bg-surface-elevated shadow-xl shadow-primary/5">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Ready to Learn?
                  </h2>
                  <p className="text-muted-foreground">
                    Click the button below to access the Aliko Academy LMS portal where you can view your enrolled courses, track progress, and access learning materials.
                  </p>
                </div>

                <Button
                  asChild
                  size="xl"
                  variant="hero"
                  className="w-full mb-4"
                >
                  <a href="https://lms.alikogroup.com" target="_blank" rel="noopener noreferrer">
                    Go to LMS Login
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                {/* Trust cues */}
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="h-3.5 w-3.5 text-accent-green" />
                    Secure Access
                  </span>
                  <span className="flex items-center gap-1">
                    <Headphones className="h-3.5 w-3.5 text-primary" />
                    Support Available
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Options */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Link to="/contact">
                <Card className="border-divider bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full group">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent-orange/15 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-accent-orange" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        Need Help?
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Having trouble logging in? Contact our support team.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/programs">
                <Card className="border-divider bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 h-full group">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                        New Student?
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Browse our programs and find the right course for you.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLogin;
