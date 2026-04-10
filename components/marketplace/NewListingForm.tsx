"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, AlertCircle } from "lucide-react";
import {
  LISTING_TYPE_META,
  LISTING_SUBCATEGORIES,
  type ListingType,
} from "@/data/marketplaceListings";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green";

const LISTING_TYPES = Object.entries(LISTING_TYPE_META) as [
  ListingType,
  (typeof LISTING_TYPE_META)[ListingType]
][];

const CITIES = ["Raleigh", "Durham", "Cary", "Morrisville", "Chapel Hill", "Apex", "Other"];

type Step = "pick_type" | "details";
type Status = "idle" | "loading" | "success" | "error" | "beta";

export function NewListingForm() {
  const [step, setStep] = useState<Step>("pick_type");
  const [listingType, setListingType] = useState<ListingType | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    city: "",
    contact_name: "",
    contact_phone: "",
    contact_email: "",
    whatsapp: "",
    photo_url: "",
  });

  function set(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!listingType) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/marketplace/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: listingType, ...form }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 503) {
        setStatus("beta");
      } else if (res.ok) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success" || status === "beta") {
    return (
      <div className="card flex flex-col items-center gap-4 py-14 text-center">
        <CheckCircle size={48} className="text-brand-green" />
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {status === "beta" ? "Got it — coming soon!" : "Listing submitted!"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
            {status === "beta"
              ? "The marketplace is launching soon. Your listing will be posted once the community goes live. Thanks for being an early member!"
              : "Your listing is live. The community can now find it on the marketplace."}
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link href="/marketplace" className="btn-primary text-sm">
            Browse Marketplace →
          </Link>
          <button onClick={() => { setStatus("idle"); setStep("pick_type"); setListingType(null); setForm({ title:"",description:"",price:"",category:"",city:"",contact_name:"",contact_phone:"",contact_email:"",whatsapp:"",photo_url:"" }); }} className="btn-outline text-sm">
            Post Another
          </button>
        </div>
      </div>
    );
  }

  // Step 1: Pick type
  if (step === "pick_type") {
    return (
      <div>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          What are you posting?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {LISTING_TYPES.map(([type, meta]) => (
            <button
              key={type}
              type="button"
              onClick={() => { setListingType(type); setStep("details"); }}
              className={cn(
                "text-left rounded-xl border-2 px-5 py-4 transition-all hover:shadow-md",
                meta.border,
                meta.bg
              )}
            >
              <div className="text-3xl mb-2">{meta.emoji}</div>
              <div className={`font-semibold text-base ${meta.color}`}>{meta.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {type === "for_sale"    && "Furniture, electronics, clothes, cars & more"}
                {type === "rental"      && "Apartments, rooms, sublets, item rentals"}
                {type === "job_offered" && "Post a job opening or hiring need"}
                {type === "job_wanted"  && "Share your skills, looking for employment"}
                {type === "service"     && "Tutoring, moving, henna, cooking & more"}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Step 2: Details form
  const subcats = listingType ? LISTING_SUBCATEGORIES[listingType] : [];
  const meta = listingType ? LISTING_TYPE_META[listingType] : null;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Back + type badge */}
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setStep("pick_type")} className="text-sm text-gray-400 hover:text-gray-600">
          ← Back
        </button>
        {meta && (
          <span className={`inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full ${meta.bg} ${meta.color}`}>
            {meta.emoji} {meta.label}
          </span>
        )}
      </div>

      {/* Category */}
      {subcats.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category <span className="text-brand-red">*</span>
          </label>
          <select required value={form.category} onChange={(e) => set("category", e.target.value)} className={inputCls}>
            <option value="">Select category…</option>
            {subcats.map((sc) => <option key={sc} value={sc}>{sc}</option>)}
          </select>
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title <span className="text-brand-red">*</span>
        </label>
        <input required type="text" maxLength={120} value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="Clear, descriptive title" className={inputCls} />
        <p className="text-xs text-gray-400 mt-1">{form.title.length}/120</p>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description <span className="text-brand-red">*</span>
        </label>
        <textarea required rows={5} maxLength={2000} value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="Include all relevant details…" className={`${inputCls} resize-none`} />
        <p className="text-xs text-gray-400 mt-1">{form.description.length}/2000</p>
      </div>

      {/* Price + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Price <span className="text-xs text-gray-400">(optional)</span>
          </label>
          <input type="text" value={form.price} onChange={(e) => set("price", e.target.value)} placeholder='e.g. $150, Free, $1,200/mo, Negotiable' className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            City
          </label>
          <select value={form.city} onChange={(e) => set("city", e.target.value)} className={inputCls}>
            <option value="">Select city…</option>
            {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Contact info */}
      <div className="rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-4 space-y-4">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Contact Info</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name <span className="text-brand-red">*</span>
            </label>
            <input required type="text" value={form.contact_name} onChange={(e) => set("contact_name", e.target.value)} placeholder="Your name or business name" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone
            </label>
            <input type="tel" value={form.contact_phone} onChange={(e) => set("contact_phone", e.target.value)} placeholder="(919) 555-0100" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              WhatsApp
            </label>
            <input type="tel" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="WhatsApp number" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email <span className="text-xs text-gray-400">(optional)</span>
            </label>
            <input type="email" value={form.contact_email} onChange={(e) => set("contact_email", e.target.value)} placeholder="your@email.com" className={inputCls} />
          </div>
        </div>
      </div>

      {/* Photo URL */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Photo URL <span className="text-xs text-gray-400">(optional)</span>
        </label>
        <input type="url" value={form.photo_url} onChange={(e) => set("photo_url", e.target.value)} placeholder="https://… link to an image" className={inputCls} />
      </div>

      {/* Guidelines */}
      <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 p-3 text-xs text-amber-700 dark:text-amber-400">
        <p className="font-semibold mb-1">Marketplace guidelines</p>
        <ul className="list-disc ml-4 space-y-0.5">
          <li>Be honest and accurate — describe items fairly</li>
          <li>No interest-based financial products without disclosure</li>
          <li>No illegal items, weapons, or prohibited goods</li>
          <li>Listings expire after 30 days</li>
        </ul>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 p-3 text-sm text-red-700 dark:text-red-400">
          <AlertCircle size={14} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-3 text-sm disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Post Listing"}
      </button>
    </form>
  );
}
