import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";
import type { Lead, ServiceType } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message, source } = body as {
      name?: string;
      phone?: string;
      email?: string;
      service?: string;
      message?: string;
      source?: string;
    };

    // Validate required fields
    if (!name || !phone || !service) {
      return Response.json(
        { error: "الاسم والهاتف والخدمة حقول مطلوبة" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      name,
      phone,
      email: email || undefined,
      service: service as ServiceType,
      message: message || undefined,
      source: source || "website",
    };

    const { data, error } = await supabase
      .from("leads")
      .insert(lead)
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return Response.json(
        { error: "حدث خطأ أثناء حفظ البيانات" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Route handler error:", err);
    return Response.json({ error: "حدث خطأ غير متوقع" }, { status: 500 });
  }
}
