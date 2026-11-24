
"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LeadsPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  const adminUserId = "28a5648f-6a5e-4279-99ab-3b9889fcfeac";

  const fetchLeads = useCallback(async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
      return;
    }

    setLeads(data || []);
  }, []);

  useEffect(() => {
    async function checkAdmin() {
      const { data: { session }, error } =
        await supabase.auth.getSession();

      if (error || !session || session.user.id !== adminUserId) {
        router.replace("/admin/login");
        return;
      }

      setCheckingAuth(false);
      await fetchLeads();
    }

    checkAdmin();
  }, [router, fetchLeads]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  const filteredLeads = leads.filter(
    (lead: any) =>
      (lead.full_name || "").toLowerCase().includes(search.toLowerCase()) ||
      (lead.email || "").toLowerCase().includes(search.toLowerCase())
  );

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.log("Update error:", error);
    } else {
      fetchLeads();
    }
  }

  function exportToCSV() {
    const headers = ["Name", "Email", "Created", "Status", "Source"];

    const rows = filteredLeads.map((lead: any) => [
      lead.full_name,
      lead.email,
      lead.created_at,
      lead.status || "New",
      lead.source || "website",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row: any) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();

    window.URL.revokeObjectURL(url);
  }

  if (checkingAuth) {
    return <div className="p-6">Checking authentication...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">Leads</h1>

        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 w-full max-w-sm"
        />

        <button
          onClick={exportToCSV}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Export CSV
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created</th>
            <th>Status</th>
            <th>Environment</th>
          </tr>
        </thead>

        <tbody>
          {filteredLeads.map((lead: any) => (
            <tr key={lead.id}>
              <td>{lead.full_name}</td>
              <td>{lead.email}</td>
              <td>{lead.created_at}</td>

              <td>
                <select
                  value={lead.status || "New"}
                  onChange={(e) => updateStatus(lead.id, e.target.value)}
                  className="border px-2 py-1"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Enrolled">Enrolled</option>
                </select>
              </td>

              <td>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    lead.environment?.includes("sumanchandracoaching.com")
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {lead.environment?.includes("sumanchandracoaching.com")
                    ? "PRODUCTION"
                    : "DEVELOPMENT"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
