import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    // Only attempt exchange if Supabase is configured
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://your-project-ref.supabase.co" &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      try {
        const { createClient } = await import("@/lib/supabase/server");
        const supabase = createClient();
        await (supabase as any).auth.exchangeCodeForSession(code);
      } catch (err) {
        console.error("Auth callback error:", err);
        return NextResponse.redirect(`${origin}/auth/signin?error=callback_failed`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/community`);
}
