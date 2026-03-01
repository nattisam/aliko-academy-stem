import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Search } from "lucide-react";

interface ProgramRow {
  id: string;
  title: string;
  slug: string;
  domain: string;
  level: string;
  is_published: boolean;
  sort_order: number;
}

const AdminPrograms = () => {
  const [programs, setPrograms] = useState<ProgramRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchPrograms = async () => {
    const { data, error } = await supabase
      .from("programs")
      .select("id, title, slug, domain, level, is_published, sort_order")
      .order("domain")
      .order("sort_order");
    if (!error && data) setPrograms(data);
    setLoading(false);
  };

  useEffect(() => { fetchPrograms(); }, []);

  const togglePublish = async (id: string, current: boolean) => {
    const { error } = await supabase.from("programs").update({ is_published: !current }).eq("id", id);
    if (error) {
      toast.error("Failed to update");
      return;
    }
    setPrograms((prev) => prev.map((p) => (p.id === id ? { ...p, is_published: !current } : p)));
    toast.success(!current ? "Published" : "Unpublished");
  };

  const updateSortOrder = async (id: string, newOrder: number) => {
    const { error } = await supabase.from("programs").update({ sort_order: newOrder }).eq("id", id);
    if (error) toast.error("Failed to update sort order");
    else setPrograms((prev) => prev.map((p) => (p.id === id ? { ...p, sort_order: newOrder } : p)));
  };

  const filtered = programs.filter(
    (p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.domain.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Programs">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search programs..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-10" />
        </div>
        <Badge variant="outline" className="font-bold">{filtered.length} programs</Badge>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
      ) : (
        <div className="border border-divider rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30">
                <TableHead className="font-bold">Title</TableHead>
                <TableHead className="font-bold">Domain</TableHead>
                <TableHead className="font-bold">Level</TableHead>
                <TableHead className="font-bold">Order</TableHead>
                <TableHead className="font-bold">Published</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.title}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{p.domain}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{p.level}</Badge>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      className="w-16 h-8 text-center"
                      value={p.sort_order}
                      onChange={(e) => updateSortOrder(p.id, parseInt(e.target.value) || 0)}
                    />
                  </TableCell>
                  <TableCell>
                    <Switch checked={p.is_published} onCheckedChange={() => togglePublish(p.id, p.is_published)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminPrograms;
