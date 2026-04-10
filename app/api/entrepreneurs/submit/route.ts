import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic validation
    const required = ["business_name", "owner_name", "category", "short_description"];
    for (const field of required) {
      if (!body[field]?.toString().trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    if (body.short_description?.length > 200) {
      return NextResponse.json(
        { error: "Short description exceeds 200 characters" },
        { status: 400 }
      );
    }
    if (body.long_description?.length > 1000) {
      return NextResponse.json(
        { error: "Long description exceeds 1000 characters" },
        { status: 400 }
      );
    }
    if (!Array.isArray(body.service_area) || body.service_area.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one service area" },
        { status: 400 }
      );
    }

    // Save to Supabase if configured
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );

      const { error } = await supabase.from("entrepreneurs").insert({
        business_name: body.business_name.trim(),
        owner_name: body.owner_name.trim(),
        category: body.category,
        short_description: body.short_description.trim(),
        long_description: body.long_description?.trim() || null,
        phone: body.phone?.trim() || null,
        whatsapp: body.whatsapp?.trim() || null,
        email: body.email?.trim() || null,
        instagram: body.instagram?.trim() || null,
        facebook: body.facebook?.trim() || null,
        service_area: body.service_area,
        years_in_business: body.years_in_business ?? null,
        price_range: body.price_range?.trim() || null,
        photo_url: body.photo_url?.trim() || null,
        approved: false,
      });

      if (error) {
        console.error("Supabase error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Entrepreneur submit error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
