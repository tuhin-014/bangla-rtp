"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  Search,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Plus,
  Clock,
  DollarSign,
  ExternalLink,
} from "lucide-react";
import { entrepreneurs } from "@/data/entrepreneurs";
import type { EntrepreneurCategory } from "@/data/entrepreneurs";
import { FilterBar } from "@/components/ui/FilterBar";
import { Badge } from "@/components/ui/Badge";

const CATEGORIES: { value: EntrepreneurCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "Catering", label: "Catering" },
  { value: "Clothing & Fashion", label: "Clothing" },
  { value: "Tutoring", label: "Tutoring" },
  { value: "Beauty", label: "Beauty & Henna" },
  { value: "Events", label: "Events" },
  { value: "Photography", label: "Photography" },
  { value: "Handmade Crafts", label: "Crafts" },
  { value: "Baking", label: "Baking" },
  { value: "Other", label: "Other" },
];

const CATEGORY_COLORS: Record<EntrepreneurCategory, string> = {
  Catering: "green",
  "Clothing & Fashion": "red",
  Tutoring: "blue",
  Beauty: "yellow",
  Events: "yellow",
  Photography: "gray",
  "Handmade Crafts": "blue",
  Baking: "red",
  Other: "gray",
} as const;

const CATEGORY_EMOJIS: Record<EntrepreneurCategory, string> = {
  Catering: "🍛",
  "Clothing & Fashion": "👗",
  Tutoring: "📚",
  Beauty: "💅",
  Events: "🎊",
  Photography: "📸",
  "Handmade Crafts": "🧵",
  Baking: "🎂",
  Other: "✨",
};

export default function EntrepreneursPage() {
  const [category, setCategory] = useState<EntrepreneurCategory | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entrepreneurs.filter((e) => {
      if (!e.approved) return false;
      if (category !== "all" && e.category !== category) return false;
      if (q) {
        return (
          e.business_name.toLowerCase().includes(q) ||
          e.owner_name.toLowerCase().includes(q) ||
          e.short_description.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [category, query]);

  return (
    <div className="page-container py-12">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-green mb-2">
            <Briefcase size={20} />
            <span className="text-sm font-medium uppercase tracking-wide">
              Community Marketplace
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            Local Entrepreneurs
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Home caterers, tailors, tutors, photographers, henna artists, bakers — talented
            Bangladeshis in RTP offering their services to the community.
          </p>
        </div>
        <Link href="/entrepreneurs/submit" className="btn-primary shrink-0 text-sm">
          <Plus size={15} />
          List Your Business
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search by name, service, or category…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-4 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        />
      </div>

      {/* Category filter */}
      <div className="mb-6">
        <FilterBar
          options={CATEGORIES}
          value={category}
          onChange={setCategory}
          label="Category"
        />
      </div>

      <p className="text-sm text-gray-400 mb-6">
        {filtered.length} listing{filtered.length !== 1 ? "s" : ""}
        {category !== "all" ? ` · ${category}` : ""}
        {query ? ` matching "${query}"` : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((biz) => (
            <EntrepreneurCard key={biz.id} biz={biz} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-gray-400 text-lg mb-2">No listings found.</p>
          <p className="text-gray-400 text-sm">Try a different category or search term.</p>
        </div>
      )}

      {/* CTA banner */}
      <div className="mt-14 rounded-2xl bg-gradient-to-r from-brand-green to-teal-600 p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-1">
            Run a home business or offer a service?
          </h2>
          <p className="text-green-100 text-sm max-w-md">
            List it here for free. Reach hundreds of Bangladeshi families in Cary, Morrisville,
            Raleigh, and Durham who are looking for exactly what you offer.
          </p>
        </div>
        <Link
          href="/entrepreneurs/submit"
          className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-green shadow-lg hover:bg-green-50 transition-colors"
        >
          <Plus size={15} />
          List Your Business — Free
        </Link>
      </div>
    </div>
  );
}

function EntrepreneurCard({ biz }: { biz: (typeof entrepreneurs)[number] }) {
  const emoji = CATEGORY_EMOJIS[biz.category];
  const badgeColor = CATEGORY_COLORS[biz.category] as
    | "green"
    | "red"
    | "gray"
    | "blue"
    | "yellow";

  return (
    <div className="card flex flex-col gap-3 hover:shadow-md hover:border-brand-green/40 transition-all">
      {/* Photo or placeholder */}
      <div className="w-full h-32 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shrink-0">
        {biz.photo_url ? (
          <Image
            src={biz.photo_url}
            alt={biz.business_name}
            width={400}
            height={128}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl opacity-60" aria-hidden="true">
            {emoji}
          </span>
        )}
      </div>

      {/* Name + badge */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
            {biz.business_name}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">by {biz.owner_name}</p>
        </div>
        <Badge variant={badgeColor} className="shrink-0 text-xs">
          {emoji} {biz.category}
        </Badge>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
        {biz.short_description}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
        {biz.service_area.length > 0 && (
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {biz.service_area.join(", ")}
          </span>
        )}
        {biz.years_in_business && (
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {biz.years_in_business}y experience
          </span>
        )}
        {biz.price_range && (
          <span className="flex items-center gap-1">
            <DollarSign size={11} />
            {biz.price_range}
          </span>
        )}
      </div>

      {/* Contact */}
      <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
        {(biz.phone || biz.whatsapp) && (
          <a
            href={`tel:${biz.phone || biz.whatsapp}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-brand-green hover:underline"
          >
            <Phone size={11} />
            Call / WhatsApp
          </a>
        )}
        {biz.email && (
          <a
            href={`mailto:${biz.email}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-brand-green hover:underline"
          >
            <Mail size={11} />
            Email
          </a>
        )}
        {biz.instagram && (
          <a
            href={`https://instagram.com/${biz.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-brand-green hover:underline"
          >
            <Instagram size={11} />
            Instagram
          </a>
        )}
      </div>
    </div>
  );
}
