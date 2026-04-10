import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === "https://your-project-ref.supabase.co"
  ) {
    return NextResponse.json(
      { error: "Auth not configured. Community features coming soon!" },
      { status: 503 }
    );
  }

  try {
    const { email, password, display_name, city } = await req.json();
    if (!email || !password || !display_name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { createClient } = await import("@/lib/supabase/server");
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: display_name },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/auth/callback`,
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Update profile city if provided
    if (data.user && city) {
      await supabase
        .from("profiles")
        .update({ city, display_name })
        .eq("id", data.user.id);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
