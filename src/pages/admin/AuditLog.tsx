import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface AuditRow {
  id: string;
  action: string;
  entity_type: string;
  entity_id: string | null;
  actor_user_id: string | null;
  metadata: any;
  created_at: string;
}

const AdminAudit = () => {
  const [logs, setLogs] = useState<AuditRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("audit_logs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100);
      if (!error && data) setLogs(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <AdminLayout title="Audit Log">
      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
      ) : logs.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">No audit logs yet.</div>
      ) : (
        <div className="border border-divider rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30">
                <TableHead className="font-bold">Timestamp</TableHead>
                <TableHead className="font-bold">Action</TableHead>
                <TableHead className="font-bold">Entity</TableHead>
                <TableHead className="font-bold">Actor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="text-sm text-muted-foreground">{new Date(log.created_at).toLocaleString()}</TableCell>
                  <TableCell><Badge variant="outline" className="text-xs">{log.action}</Badge></TableCell>
                  <TableCell className="text-sm">
                    {log.entity_type}
                    {log.entity_id && <span className="text-muted-foreground ml-1 text-xs">({log.entity_id.slice(0, 8)}…)</span>}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{log.actor_user_id?.slice(0, 8) || "system"}…</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminAudit;
