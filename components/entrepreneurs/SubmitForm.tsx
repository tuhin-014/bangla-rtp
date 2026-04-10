"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const CATEGORIES = [
  "Catering",
  "Clothing & Fashion",
  "Tutoring",
  "Beauty",
  "Events",
  "Photography",
  "Handmade Crafts",
  "Baking",
  "Other",
] as const;

const CITIES = [
  "Raleigh",
  "Durham",
  "Cary",
  "Morrisville",
  "Chapel Hill",
  "Apex",
  "Carrboro",
  "Research Triangle Park",
  "Other / Statewide",
];

const PRICE_RANGES = ["$", "$$", "$$$", "Varies by project"];

type FormState = {
  business_name: string;
  owner_name: string;
  category: string;
  short_description: string;
  long_description: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  facebook: string;
  service_area: string[];
  years_in_business: string;
  price_range: string;
  photo_url: string;
  consent: boolean;
};

const INITIAL: FormState = {
  business_name: "",
  owner_name: "",
  category: "",
  short_description: "",
  long_description: "",
  phone: "",
  whatsapp: "",
  email: "",
  instagram: "",
  facebook: "",
  service_area: [],
  years_in_business: "",
  price_range: "",
  photo_url: "",
  consent: false,
};

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
        {required && <span className="text-brand-red ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green disabled:opacity-50";

export function EntrepreneurSubmitForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: keyof FormState, value: string | boolean | string[]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function toggleCity(city: string) {
    set(
      "service_area",
      form.service_area.includes(city)
        ? form.service_area.filter((c) => c !== city)
        : [...form.service_area, city]
    );
  }

  const shortDescLen = form.short_description.length;
  const longDescLen = form.long_description.length;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) {
      setErrorMsg("Please check the consent box before submitting.");
      return;
    }
    if (form.service_area.length === 0) {
      setErrorMsg("Please select at least one service area.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/entrepreneurs/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          years_in_business: form.years_in_business
            ? parseInt(form.years_in_business, 10)
            : null,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 py-14 text-center">
        <CheckCircle size={48} className="text-brand-green" />
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
            Submission received!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm">
            Thanks! Your listing will be reviewed and published within 48 hours. We&apos;ll email
            you when it&apos;s live.
          </p>
        </div>
        <div className="flex gap-3 mt-2">
          <Link href="/entrepreneurs" className="btn-primary text-sm">
            Browse Listings →
          </Link>
          <button
            onClick={() => setStatus("idle")}
            className="btn-outline text-sm"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      {/* Basic info */}
      <div className="space-y-4">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">
          Business Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Business Name" required>
            <input
              required
              type="text"
              value={form.business_name}
              onChange={(e) => set("business_name", e.target.value)}
              placeholder="e.g. Fatima's Home Kitchen"
              className={inputCls}
            />
          </Field>
          <Field label="Your Name" required>
            <input
              required
              type="text"
              value={form.owner_name}
              onChange={(e) => set("owner_name", e.target.value)}
              placeholder="Your full name"
              className={inputCls}
            />
          </Field>
        </div>

        <Field label="Category" required>
          <select
            required
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            className={inputCls}
          >
            <option value="">Select a category…</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Short Description"
          required
          hint={`${shortDescLen}/200 characters — shown on the listing card`}
        >
          <textarea
            required
            maxLength={200}
            rows={3}
            value={form.short_description}
            onChange={(e) => set("short_description", e.target.value)}
            placeholder="Describe your business in 1–2 sentences"
            className={`${inputCls} resize-none`}
          />
        </Field>

        <Field
          label="Full Description"
          hint={`${longDescLen}/1000 characters — optional, shown when someone clicks through`}
        >
          <textarea
            maxLength={1000}
            rows={5}
            value={form.long_description}
            onChange={(e) => set("long_description", e.target.value)}
            placeholder="Tell the community more about your services, experience, specialties, and how to order…"
            className={`${inputCls} resize-none`}
          />
        </Field>
      </div>

      {/* Contact */}
      <div className="space-y-4">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">
          Contact Information
        </h2>
        <p className="text-xs text-gray-400 -mt-2">
          Provide at least one contact method so customers can reach you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Phone">
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="(919) 555-0000"
              className={inputCls}
            />
          </Field>
          <Field label="WhatsApp Number" hint="If different from phone">
            <input
              type="tel"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              placeholder="(919) 555-0000"
              className={inputCls}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="your@email.com"
              className={inputCls}
            />
          </Field>
          <Field label="Instagram" hint="e.g. @yourhandle">
            <input
              type="text"
              value={form.instagram}
              onChange={(e) => set("instagram", e.target.value)}
              placeholder="@yourinstagram"
              className={inputCls}
            />
          </Field>
          <Field label="Facebook Page" hint="Full URL or page name">
            <input
              type="text"
              value={form.facebook}
              onChange={(e) => set("facebook", e.target.value)}
              placeholder="facebook.com/yourbusiness"
              className={inputCls}
            />
          </Field>
          <Field label="Photo / Logo URL" hint="Paste a link to an image (optional)">
            <input
              type="url"
              value={form.photo_url}
              onChange={(e) => set("photo_url", e.target.value)}
              placeholder="https://..."
              className={inputCls}
            />
          </Field>
        </div>
      </div>

      {/* Service area */}
      <div className="space-y-3">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">
          Service Area <span className="text-brand-red">*</span>
        </h2>
        <p className="text-xs text-gray-400">Select all cities where you offer your services.</p>
        <div className="flex flex-wrap gap-2">
          {CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => toggleCity(city)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
                form.service_area.includes(city)
                  ? "bg-brand-green text-white border-brand-green"
                  : "border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green dark:border-gray-700 dark:text-gray-300"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Extra details */}
      <div className="space-y-4">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">
          Extra Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Years in Business" hint="Approximate">
            <input
              type="number"
              min="0"
              max="50"
              value={form.years_in_business}
              onChange={(e) => set("years_in_business", e.target.value)}
              placeholder="e.g. 3"
              className={inputCls}
            />
          </Field>
          <Field label="Price Range" hint="Optional — helps customers know what to expect">
            <select
              value={form.price_range}
              onChange={(e) => set("price_range", e.target.value)}
              className={inputCls}
            >
              <option value="">Select…</option>
              {PRICE_RANGES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </div>

      {/* Consent */}
      <div className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green"
          />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            I agree to have this listing publicly displayed on BanglaRTP. I confirm that the
            information I&apos;ve provided is accurate, and I understand the listing will be
            reviewed before publishing. BanglaRTP reserves the right to edit or remove listings
            at any time.
          </span>
        </label>
      </div>

      {/* Error */}
      {(status === "error" || errorMsg) && (
        <div className="flex items-start gap-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-3 text-sm text-red-700 dark:text-red-400">
          <AlertCircle size={15} className="mt-0.5 shrink-0" />
          {errorMsg || "Something went wrong. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center text-sm py-3"
      >
        <Send size={14} />
        {status === "loading" ? "Submitting…" : "Submit Listing"}
      </button>

      <p className="text-xs text-center text-gray-400">
        Questions? Contact us at{" "}
        <Link href="/about#contact" className="text-brand-green hover:underline">
          bangla-rtp.vercel.app/about
        </Link>
      </p>
    </form>
  );
}
