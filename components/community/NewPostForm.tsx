"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, Lock, AlertCircle } from "lucide-react";
import { CATEGORY_META, type PostCategory } from "@/data/samplePosts";
import { cn } from "@/lib/utils";

const CATEGORIES = Object.entries(CATEGORY_META) as [
  PostCategory,
  (typeof CATEGORY_META)[PostCategory]
][];

const CITIES = [
  "Raleigh", "Durham", "Cary", "Morrisville", "Chapel Hill",
  "Apex", "Carrboro", "Research Triangle Park", "Other",
];

type FormState = {
  title: string;
  body: string;
  category: PostCategory | "";
  contact_info: string;
  photo_url: string;
  city: string;
};

const INITIAL: FormState = {
  title: "",
  body: "",
  category: "",
  contact_info: "",
  photo_url: "",
  city: "",
};

const inputCls =
  "w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green";

export function NewPostForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "auth_required" | "success" | "error">("idle");

  function set(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.category) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/community/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.status === 401 || res.status === 503) {
        setStatus("auth_required");
      } else if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 py-14 text-center">
        <CheckCircle size={48} className="text-brand-green" />
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
            Post submitted!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
            Your post is live. The community can now see and respond to it.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/community" className="btn-primary text-sm">
            View Feed →
          </Link>
          <button onClick={() => setStatus("idle")} className="btn-outline text-sm">
            Post Again
          </button>
        </div>
      </div>
    );
  }

  if (status === "auth_required") {
    return (
      <div className="card flex flex-col items-center gap-4 py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/40 flex items-center justify-center">
          <Lock size={28} className="text-brand-green" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Sign in to post
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
            Create a free account to share posts, ask questions, and connect with the Bangladeshi
            community in RTP.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/auth/signin" className="btn-primary text-sm">
            Sign in / Create account →
          </Link>
          <button onClick={() => setStatus("idle")} className="btn-outline text-sm">
            ← Back to form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Category <span className="text-brand-red">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {CATEGORIES.map(([cat, meta]) => (
            <button
              key={cat}
              type="button"
              onClick={() => set("category", cat)}
              className={cn(
                "rounded-xl border px-3 py-2.5 text-sm font-medium text-left transition-all",
                form.category === cat
                  ? "border-brand-green bg-green-50 dark:bg-green-950/40 text-brand-green"
                  : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-green/50"
              )}
            >
              <span className="text-base mr-1.5">{meta.emoji}</span>
              {meta.label}
            </button>
          ))}
        </div>
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title <span className="text-brand-red">*</span>
        </label>
        <input
          required
          type="text"
          maxLength={120}
          value={form.title}
          onChange={(e) => set("title", e.target.value)}
          placeholder="Clear, descriptive title"
          className={inputCls}
        />
        <p className="text-xs text-gray-400 mt-1">{form.title.length}/120</p>
      </div>

      {/* Body */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Post <span className="text-brand-red">*</span>
        </label>
        <textarea
          required
          rows={7}
          maxLength={3000}
          value={form.body}
          onChange={(e) => set("body", e.target.value)}
          placeholder="Write your post here… Be as detailed as helpful."
          className={`${inputCls} resize-none`}
        />
        <p className="text-xs text-gray-400 mt-1">{form.body.length}/3000</p>
      </div>

      {/* City + Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your City
          </label>
          <select
            value={form.city}
            onChange={(e) => set("city", e.target.value)}
            className={inputCls}
          >
            <option value="">Select city…</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Contact Info
          </label>
          <input
            type="text"
            value={form.contact_info}
            onChange={(e) => set("contact_info", e.target.value)}
            placeholder="Phone, WhatsApp, email…"
            className={inputCls}
          />
        </div>
      </div>

      {/* Photo URL */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Photo URL <span className="text-xs text-gray-400">(optional)</span>
        </label>
        <input
          type="url"
          value={form.photo_url}
          onChange={(e) => set("photo_url", e.target.value)}
          placeholder="https://… paste a link to an image"
          className={inputCls}
        />
      </div>

      {/* Guidelines */}
      <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 p-3 text-xs text-amber-700 dark:text-amber-400">
        <p className="font-semibold mb-1">Community guidelines</p>
        <ul className="list-disc ml-4 space-y-0.5">
          <li>Be respectful and kind — this is a community space</li>
          <li>No spam, advertising, or commercial promotions (use /entrepreneurs for that)</li>
          <li>Don't share other people's personal information without consent</li>
          <li>Posts may be removed if flagged by the community</li>
        </ul>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 p-3 text-sm text-red-700 dark:text-red-400">
          <AlertCircle size={14} className="shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !form.category}
        className="btn-primary w-full justify-center py-3 text-sm disabled:opacity-60"
      >
        <Send size={14} />
        {status === "loading" ? "Posting…" : "Post to Community"}
      </button>
    </form>
  );
}
