import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json({ error: "Missing type or data" }, { status: 400 });
    }

    // If Supabase is configured, save to DB
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );

      const { error } = await supabase.from("submissions").insert({
        type,
        data_json: data,
        submitted_by_email: data.email ?? null,
        status: "pending",
      });

      if (error) {
        console.error("Supabase error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
      }
    }

    // Always return success (gracefully degrade if no DB)
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Submit API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
