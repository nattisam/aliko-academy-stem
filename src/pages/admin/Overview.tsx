import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, FileText, MessageSquare, Users, Loader2 } from "lucide-react";

interface Stats {
  programs: number;
  applications: { total: number; new: number };
  inquiries: { total: number; new: number };
  users: number;
}

const Overview = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const [programs, applications, newApps, inquiries, newInq, users] = await Promise.all([
        supabase.from("programs").select("id", { count: "exact", head: true }),
        supabase.from("applications").select("id", { count: "exact", head: true }),
        supabase.from("applications").select("id", { count: "exact", head: true }).eq("status", "submitted"),
        supabase.from("inquiries").select("id", { count: "exact", head: true }),
        supabase.from("inquiries").select("id", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("profiles").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        programs: programs.count || 0,
        applications: { total: applications.count || 0, new: newApps.count || 0 },
        inquiries: { total: inquiries.count || 0, new: newInq.count || 0 },
        users: users.count || 0,
      });
      setLoading(false);
    };
    fetchStats();
  }, []);

  const cards = stats
    ? [
        { label: "Published Programs", value: stats.programs, icon: BookOpen, color: "text-primary", bg: "bg-primary/15" },
        { label: "Applications", value: stats.applications.total, sub: `${stats.applications.new} new`, icon: FileText, color: "text-accent-green", bg: "bg-accent-green/15" },
        { label: "Inquiries", value: stats.inquiries.total, sub: `${stats.inquiries.new} new`, icon: MessageSquare, color: "text-accent", bg: "bg-accent/15" },
        { label: "Users", value: stats.users, icon: Users, color: "text-primary", bg: "bg-primary/15" },
      ]
    : [];

  return (
    <AdminLayout title="Dashboard Overview">
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <Card key={c.label} className="border-divider bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <c.icon className={`h-6 w-6 ${c.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{c.value}</p>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    {c.sub && <p className={`text-xs font-bold ${c.color}`}>{c.sub}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default Overview;
