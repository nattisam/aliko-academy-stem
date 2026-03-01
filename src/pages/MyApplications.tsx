import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowRight, Clock, CheckCircle2, XCircle, AlertCircle, Loader2, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

interface ApplicationRow {
  id: string;
  full_name: string;
  email: string;
  status: string;
  created_at: string;
  program_id: string;
  programs?: { title: string; slug: string; domain: string } | null;
}

const statusConfig: Record<string, { label: string; icon: React.ComponentType<{className?: string}>; color: string }> = {
  draft: { label: "Draft", icon: Clock, color: "bg-muted text-muted-foreground border-divider" },
  submitted: { label: "Submitted", icon: Clock, color: "bg-primary/15 text-primary border-primary/30" },
  review: { label: "Under Review", icon: AlertCircle, color: "bg-accent/15 text-accent border-accent/30" },
  accepted: { label: "Accepted", icon: CheckCircle2, color: "bg-accent-green/15 text-accent-green border-accent-green/30" },
  waitlist: { label: "Waitlisted", icon: Clock, color: "bg-accent/15 text-accent border-accent/30" },
  rejected: { label: "Not Selected", icon: XCircle, color: "bg-destructive/15 text-destructive border-destructive/30" },
};

const MyApplications = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [applications, setApplications] = useState<ApplicationRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchApps = async () => {
      const { data, error } = await supabase
        .from("applications")
        .select("id, full_name, email, status, created_at, program_id, programs(title, slug, domain)")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (!error && data) setApplications(data as any);
      setLoading(false);
    };
    fetchApps();
  }, [user]);

  if (authLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return <Navigate to="/login?redirect=/my-applications" replace />;
  }

  return (
    <Layout>
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-content">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-4xl font-extrabold text-foreground">
                My <span className="text-primary">Applications</span>
              </h1>
              <p className="mt-3 text-muted-foreground">
                Track the status of your program applications.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : applications.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                No Applications Yet
              </h2>
              <p className="text-muted-foreground mb-8">
                Browse our programs and submit your first application.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/programs">
                  Browse Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => {
                const status = statusConfig[app.status] || statusConfig.submitted;
                const StatusIcon = status.icon;
                return (
                  <Card key={app.id} className="border-divider bg-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-bold text-foreground">
                            {app.programs?.title || "Program"}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {app.programs?.domain} · Applied {new Date(app.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="outline" className={cn("flex items-center gap-1.5 px-3 py-1.5 font-bold", status.color)}>
                          <StatusIcon className="h-3.5 w-3.5" />
                          {status.label}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MyApplications;
