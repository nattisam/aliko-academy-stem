import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface InquiryRow {
  id: string;
  type: string;
  full_name: string;
  email: string;
  org_name: string | null;
  message: string;
  status: string;
  created_at: string;
}

const inquiryStatuses = ["new", "contacted", "qualified", "closed"];
const statusColors: Record<string, string> = {
  new: "bg-primary/15 text-primary border-primary/30",
  contacted: "bg-accent/15 text-accent border-accent/30",
  qualified: "bg-accent-green/15 text-accent-green border-accent-green/30",
  closed: "bg-muted text-muted-foreground border-divider",
};

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState<InquiryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setInquiries(data);
      setLoading(false);
    };
    fetch();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase.from("inquiries").update({ status: newStatus as any }).eq("id", id);
    if (error) { toast.error("Update failed"); return; }
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i)));
    toast.success(`Status updated to ${newStatus}`);
  };

  const filtered = inquiries.filter((i) => {
    if (statusFilter !== "all" && i.status !== statusFilter) return false;
    if (search && !i.full_name.toLowerCase().includes(search.toLowerCase()) && !i.email.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <AdminLayout title="Inquiries">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-10" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40 h-10"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {inquiryStatuses.map((s) => <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>)}
          </SelectContent>
        </Select>
        <Badge variant="outline" className="font-bold">{filtered.length} inquiries</Badge>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
      ) : (
        <div className="border border-divider rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30">
                <TableHead className="font-bold">Contact</TableHead>
                <TableHead className="font-bold">Type</TableHead>
                <TableHead className="font-bold">Organization</TableHead>
                <TableHead className="font-bold">Date</TableHead>
                <TableHead className="font-bold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((i) => (
                <TableRow key={i.id}>
                  <TableCell>
                    <div className="font-medium">{i.full_name}</div>
                    <div className="text-xs text-muted-foreground">{i.email}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs capitalize">{i.type}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{i.org_name || "—"}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{new Date(i.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Select value={i.status} onValueChange={(v) => updateStatus(i.id, v)}>
                      <SelectTrigger className="w-32 h-8">
                        <Badge variant="outline" className={cn("text-xs", statusColors[i.status])}>{i.status}</Badge>
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryStatuses.map((s) => <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
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

export default AdminInquiries;
