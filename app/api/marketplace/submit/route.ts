import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === "https://your-project-ref.supabase.co"
  ) {
    return NextResponse.json(
      { error: "Marketplace not yet configured." },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();
    const { type, title, description, price, category, city, contact_name, contact_phone, contact_email, whatsapp, photo_url } = body;

    if (!type || !title || !description || !contact_name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { createClient } = await import("@/lib/supabase/server");
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase.from("marketplace_listings").insert({
      type,
      title,
      description,
      price,
      category,
      city,
      contact_name,
      contact_phone,
      contact_email,
      whatsapp,
      photo_url,
      author_id: user?.id ?? null,
    });

    if (error) {
      if (error.code === "42501") {
        return NextResponse.json({ error: "auth_required" }, { status: 401 });
      }
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Marketplace submit error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
