
"use client";

import { useCallback, useEffect, useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type ArticleComment = {
  id: string;
  author_name: string;
  comment: string;
  created_at: string;
};

export default function ArticleComments({
  articleSlug,
}: {
  articleSlug: string;
}) {
  const [comments, setComments] = useState<ArticleComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [comment, setComment] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadComments = useCallback(async () => {
    setLoading(true);
    setLoadError("");

    const { data, error } = await supabase
      .from("article_comments")
      .select("id, author_name, comment, created_at")
      .eq("article_slug", articleSlug)
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Unable to load comments:", error);
      setLoadError("Comments could not be loaded right now.");
    } else {
      setComments(data ?? []);
    }

    setLoading(false);
  }, [articleSlug]);

  useEffect(() => {
    void loadComments();
  }, [loadComments]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/article-comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          articleSlug,
          authorName,
          authorEmail,
          comment,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your comment.");
      }

      setMessage(
        "Thank you. Your comment has been submitted and will appear after moderation."
      );

      setAuthorName("");
      setAuthorEmail("");
      setComment("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mt-16 border-t border-slate-200 pt-12 max-w-3xl mx-auto w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
        Share Your Thoughts
      </h2>

      <p className="text-gray-600 leading-relaxed mb-8">
        What are your thoughts on this article? Share your perspective or
        experience. Comments are reviewed before they appear publicly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 mb-12">
        <div>
          <label
            htmlFor="comment-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Name
          </label>
          <input
            id="comment-name"
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="comment-email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Email
          </label>
          <input
            id="comment-email"
            type="email"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            required
            maxLength={254}
            autoComplete="email"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Your email address (not displayed publicly)"
          />
          <p className="text-xs text-gray-500 mt-2">
            Your email address will not be displayed publicly.
          </p>
        </div>

        <div>
          <label
            htmlFor="comment-text"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Comment
          </label>
          <textarea
            id="comment-text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            minLength={2}
            maxLength={3000}
            rows={5}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Write your thoughts here..."
          />
          <p className="text-xs text-gray-500 mt-2 text-right">
            {comment.length}/3000 characters
          </p>
        </div>

        {message && (
          <p className="text-green-700 bg-green-50 rounded-lg p-4">
            {message}
          </p>
        )}

        {error && (
          <p className="text-red-700 bg-red-50 rounded-lg p-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="bg-slate-800 text-white px-7 py-3 rounded-xl hover:bg-slate-700 transition disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Comment"}
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">
          Reader Comments ({comments.length})
        </h3>

        {loading && (
          <p className="text-gray-500">Loading comments...</p>
        )}

        {loadError && (
          <p className="text-red-700">{loadError}</p>
        )}

        {!loading && !loadError && comments.length === 0 && (
          <p className="text-gray-500">
            No comments yet. Be the first to share your thoughts.
          </p>
        )}

        <div className="space-y-6">
          {comments.map((item) => (
            <div
              key={item.id}
              className="border-b border-slate-200 pb-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="font-semibold text-slate-800">
                  {item.author_name}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(item.created_at).toLocaleDateString()}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
