"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  source: string;
  className?: string;
}

const inputClass =
  "w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-3 text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all focus:border-[#00d4c8] focus:ring-2 focus:ring-[#00d4c8]/20";

export default function LeadForm({ source, className }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message, source }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setError(data.error || "حدث خطأ، يرجى المحاولة مرة أخرى");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("تعذّر الاتصال بالخادم، يرجى المحاولة لاحقاً");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div
        className={cn(
          "glass rounded-2xl p-8 text-center",
          className
        )}
      >
        <p className="text-xl font-semibold text-[#00d4c8]">
          تم الإرسال! سنتواصل معك خلال 24 ساعة ✓
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("glass rounded-2xl p-6 flex flex-col gap-4", className)}
      noValidate
    >
      {/* Name */}
      <div>
        <input
          type="text"
          required
          placeholder="اسمك الكريم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <input
          type="tel"
          required
          dir="ltr"
          placeholder="05xxxxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="بريدك الإلكتروني (اختياري)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div>
        <select
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={cn(inputClass, "cursor-pointer")}
        >
          <option value="" disabled>
            اختر الخدمة
          </option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="other">أخرى</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <textarea
          rows={4}
          placeholder="أخبرنا عن مشروعك..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(inputClass, "resize-none")}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#00d4c8] text-[#060d14] font-bold hover:bg-[#00a89f] transition-colors"
      >
        {loading ? "جارٍ الإرسال..." : "أرسل طلبك الآن"}
      </Button>
    </form>
  );
}
