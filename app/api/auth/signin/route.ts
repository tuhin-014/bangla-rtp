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
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    const { createClient } = await import("@/lib/supabase/server");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signin error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
