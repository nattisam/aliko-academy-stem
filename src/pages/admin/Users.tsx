import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserRow {
  id: string;
  full_name: string | null;
  phone: string | null;
  status: string;
  created_at: string;
  roles: string[];
}

const AdminUsers = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSuperadmin, setIsSuperadmin] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      // Check if current user is superadmin
      if (currentUser) {
        const { data: roleData } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", currentUser.id)
          .eq("role", "superadmin");
        setIsSuperadmin(!!roleData && roleData.length > 0);
      }

      const { data: profiles } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
      const { data: roles } = await supabase.from("user_roles").select("user_id, role");

      if (profiles) {
        const roleMap = new Map<string, string[]>();
        roles?.forEach((r) => {
          const existing = roleMap.get(r.user_id) || [];
          existing.push(r.role);
          roleMap.set(r.user_id, existing);
        });

        setUsers(
          profiles.map((p) => ({
            ...p,
            roles: roleMap.get(p.id) || ["student"],
          }))
        );
      }
      setLoading(false);
    };
    fetchUsers();
  }, [currentUser]);

  const changeRole = async (userId: string, newRole: string) => {
    // Delete existing role
    await supabase.from("user_roles").delete().eq("user_id", userId);
    // Insert new role
    const { error } = await supabase.from("user_roles").insert({ user_id: userId, role: newRole as any });
    if (error) {
      toast.error("Failed to change role");
      return;
    }
    setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, roles: [newRole] } : u)));
    toast.success(`Role changed to ${newRole}`);
  };

  const roleColors: Record<string, string> = {
    student: "bg-muted text-muted-foreground",
    admin: "bg-primary/15 text-primary border-primary/30",
    superadmin: "bg-accent-green/15 text-accent-green border-accent-green/30",
  };

  return (
    <AdminLayout title="Users">
      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
      ) : (
        <>
          <div className="mb-6">
            <Badge variant="outline" className="font-bold">{users.length} users</Badge>
          </div>
          <div className="border border-divider rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/30">
                  <TableHead className="font-bold">Name</TableHead>
                  <TableHead className="font-bold">Phone</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Joined</TableHead>
                  <TableHead className="font-bold">Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell className="font-medium">{u.full_name || "—"}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{u.phone || "—"}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs capitalize">{u.status}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{new Date(u.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {isSuperadmin ? (
                        <Select value={u.roles[0] || "student"} onValueChange={(v) => changeRole(u.id, v)}>
                          <SelectTrigger className="w-36 h-8">
                            <Badge variant="outline" className={cn("text-xs", roleColors[u.roles[0]] || "")}>{u.roles[0] || "student"}</Badge>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="superadmin">Superadmin</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <Badge variant="outline" className={cn("text-xs", roleColors[u.roles[0]] || "")}>{u.roles[0] || "student"}</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </AdminLayout>
  );
};

export default AdminUsers;
