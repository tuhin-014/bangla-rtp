import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // If Supabase is not configured, return 503
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === "https://your-project-ref.supabase.co"
  ) {
    return NextResponse.json(
      { error: "Community features not yet configured. Coming soon!" },
      { status: 503 }
    );
  }

  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = createClient();

    // Check auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    const body = await req.json();
    const { title, body: postBody, category, contact_info, photo_url, city } = body;

    if (!title?.trim() || !postBody?.trim() || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const validCategories = ["needs", "offers", "help", "stories", "ride_share", "lost_found"];
    if (!validCategories.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("posts")
      .insert({
        author_id: user.id,
        title: title.trim().slice(0, 120),
        body: postBody.trim().slice(0, 3000),
        category,
        contact_info: contact_info?.trim() || null,
        photo_url: photo_url?.trim() || null,
        city: city || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Post insert error:", error);
      return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    console.error("Community post error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
