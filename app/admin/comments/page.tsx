
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type CommentStatus = "pending" | "approved" | "rejected";

type ArticleComment = {
  id: string;
  article_slug: string;
  author_name: string;
  comment: string;
  status: CommentStatus;
  created_at: string;
};

const adminUserId = "28a5648f-6a5e-4279-99ab-3b9889fcfeac";

const articleTitles: Record<string, string> = {
  "a-thanksgiving-letter-to-an-uncertain-world":
    "A Thanksgiving Letter to an Uncertain World",
  "from-dark-green-to-clear-blue": "From Dark Green to Clear Blue",
  "transformation-isnt-glamorous": "Transformation Isn't Glamorous",
  "whos-definition-of-success": "Whose Definition of Success Are You Living?",
  "your-job-isnt-your-purpose": "Your Job Isn't Your Purpose",
};

export default function CommentsAdminPage() {
  const router = useRouter();

  const [comments, setComments] = useState<ArticleComment[]>([]);
  const [filter, setFilter] = useState<"all" | CommentStatus>("pending");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState("");
  const [deletingId, setDeletingId] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const fetchComments = useCallback(async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("article_comments")
      .select(
        "id, article_slug, author_name, comment, status, created_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching comments:", error);
      setError("Unable to load comments. Please try again.");
    } else {
      setComments((data ?? []) as ArticleComment[]);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session || session.user.id !== adminUserId) {
        router.replace("/admin/login");
        return;
      }

      setCheckingAuth(false);
      await fetchComments();
    }

    void checkAdmin();
  }, [router, fetchComments]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  async function updateStatus(
    id: string,
    status: CommentStatus
  ) {
    setUpdatingId(id);
    setError("");
    setNotice("");

    const { error } = await supabase
      .from("article_comments")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Comment status update error:", error);
      setError("Unable to update the comment. Please try again.");
    } else {
      setNotice(`Comment ${status} successfully.`);
      await fetchComments();
    }

    setUpdatingId("");
  }

  async function deleteComment(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this comment?"
    );

    if (!confirmed) return;

    setDeletingId(id);
    setError("");
    setNotice("");

    const { error } = await supabase
      .from("article_comments")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Comment deletion error:", error);
      setError("Unable to delete the comment. Please try again.");
    } else {
      setNotice("Comment deleted successfully.");
      await fetchComments();
    }

    setDeletingId("");
  }

  const pendingCount = comments.filter(
    (item) => item.status === "pending"
  ).length;

  const approvedCount = comments.filter(
    (item) => item.status === "approved"
  ).length;

  const rejectedCount = comments.filter(
    (item) => item.status === "rejected"
  ).length;

  const filteredComments =
    filter === "all"
      ? comments
      : comments.filter((item) => item.status === filter);

  if (checkingAuth) {
    return <div className="p-6">Checking authentication...</div>;
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Article Comments
            </h1>
            <p className="text-gray-600 mt-2">
              Review and manage reader comments.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/leads"
              className="border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100"
            >
              Manage Leads
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-2xl font-bold text-slate-800">
              {comments.length}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Pending</p>
            <p className="text-2xl font-bold text-amber-600">
              {pendingCount}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Approved</p>
            <p className="text-2xl font-bold text-green-600">
              {approvedCount}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Rejected</p>
            <p className="text-2xl font-bold text-red-600">
              {rejectedCount}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {(["pending", "approved", "rejected", "all"] as const).map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                  filter === status
                    ? "bg-slate-800 text-white"
                    : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {status === "all" ? "All Comments" : status}
              </button>
            )
          )}
        </div>

        {notice && (
          <p className="bg-green-50 text-green-700 rounded-lg p-4 mb-5">
            {notice}
          </p>
        )}

        {error && (
          <p className="bg-red-50 text-red-700 rounded-lg p-4 mb-5">
            {error}
          </p>
        )}

        {loading && (
          <p className="text-gray-500 py-6">Loading comments...</p>
        )}

        {!loading && filteredComments.length === 0 && (
          <div className="bg-white rounded-xl p-8 text-center text-gray-500 shadow-sm">
            No comments found in this category.
          </div>
        )}

        <div className="space-y-5">
          {filteredComments.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200"
            >
              <div className="flex flex-wrap justify-between gap-3 mb-4">
                <div>
                  <h2 className="font-semibold text-lg text-slate-800">
                    {item.author_name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {articleTitles[item.article_slug] ||
                      item.article_slug}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(item.created_at).toLocaleString()}
                  </p>
                </div>

                <span
                  className={`h-fit px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                    item.status === "pending"
                      ? "bg-amber-100 text-amber-800"
                      : item.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-6">
                {item.comment}
              </p>

              <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-4">
                {item.status !== "approved" && (
                  <button
                    onClick={() => updateStatus(item.id, "approved")}
                    disabled={updatingId === item.id}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 disabled:opacity-50"
                  >
                    {updatingId === item.id
                      ? "Updating..."
                      : "Approve"}
                  </button>
                )}

                {item.status !== "rejected" && (
                  <button
                    onClick={() => updateStatus(item.id, "rejected")}
                    disabled={updatingId === item.id}
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-700 disabled:opacity-50"
                  >
                    {updatingId === item.id
                      ? "Updating..."
                      : "Reject"}
                  </button>
                )}

                <button
                  onClick={() => deleteComment(item.id)}
                  disabled={
                    deletingId === item.id || updatingId === item.id
                  }
                  className="border border-red-300 text-red-700 px-4 py-2 rounded-lg text-sm hover:bg-red-50 disabled:opacity-50"
                >
                  {deletingId === item.id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={() => void fetchComments()}
            disabled={loading}
            className="border border-slate-300 bg-white px-4 py-2 rounded-lg hover:bg-slate-100 disabled:opacity-50"
          >
            Refresh Comments
          </button>
        </div>
      </div>
    </main>
  );
}
