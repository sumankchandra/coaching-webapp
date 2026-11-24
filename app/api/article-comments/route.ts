import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const allowedSlugs = [
  "a-thanksgiving-letter-to-an-uncertain-world",
  "from-dark-green-to-clear-blue",
  "transformation-isnt-glamorous",
  "whos-definition-of-success",
  "your-job-isnt-your-purpose",
];

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const articleSlug =
      typeof body.articleSlug === "string" ? body.articleSlug.trim() : "";
    const authorName =
      typeof body.authorName === "string" ? body.authorName.trim() : "";
    const authorEmail =
      typeof body.authorEmail === "string"
        ? body.authorEmail.trim().toLowerCase()
        : "";
    const comment =
      typeof body.comment === "string" ? body.comment.trim() : "";

    if (!allowedSlugs.includes(articleSlug)) {
      return NextResponse.json(
        { error: "Invalid article." },
        { status: 400 }
      );
    }

    if (authorName.length < 2 || authorName.length > 80) {
      return NextResponse.json(
        { error: "Name must be between 2 and 80 characters." },
        { status: 400 }
      );
    }

    if (
      authorEmail.length > 254 ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(authorEmail)
    ) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (comment.length < 2 || comment.length > 3000) {
      return NextResponse.json(
        { error: "Comment must be between 2 and 3000 characters." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("article_comments").insert({
      article_slug: articleSlug,
      author_name: authorName,
      author_email: authorEmail,
      comment,
      status: "pending",
    });

    if (error) {
      console.error("Comment submission error:", error);

      return NextResponse.json(
        { error: "Unable to submit your comment. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Your comment has been submitted for moderation." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}