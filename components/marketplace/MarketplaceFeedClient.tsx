"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Clock, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { timeAgo } from "@/lib/timeAgo";
import {
  type MarketplaceListing,
  type ListingType,
  LISTING_TYPE_META,
  LISTING_SUBCATEGORIES,
} from "@/data/marketplaceListings";

const CITIES = ["Raleigh", "Durham", "Cary", "Morrisville", "Chapel Hill", "Apex"];

const TYPE_TABS: { value: ListingType | "all"; label: string; emoji: string }[] = [
  { value: "all",         label: "All",            emoji: "🌐" },
  { value: "for_sale",    label: "For Sale",        emoji: "💰" },
  { value: "rental",      label: "Rentals",         emoji: "🏠" },
  { value: "job_offered", label: "Jobs",            emoji: "💼" },
  { value: "job_wanted",  label: "Job Seekers",     emoji: "🔍" },
  { value: "service",     label: "Services",        emoji: "🛠️" },
];

interface Props {
  listings: MarketplaceListing[];
  betaMode?: boolean;
}

export function MarketplaceFeedClient({ listings, betaMode }: Props) {
  const [activeType, setActiveType] = useState<ListingType | "all">("all");
  const [activeSubcat, setActiveSubcat] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string>("all");

  const subcats = useMemo(() => {
    if (activeType === "all") return [];
    return LISTING_SUBCATEGORIES[activeType] ?? [];
  }, [activeType]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return listings.filter((l) => {
      if (l.status !== "active") return false;
      if (activeType !== "all" && l.type !== activeType) return false;
      if (activeSubcat !== "all" && l.category !== activeSubcat) return false;
      if (cityFilter !== "all" && l.city !== cityFilter) return false;
      if (q) {
        return (
          l.title.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [listings, activeType, activeSubcat, cityFilter, query]);

  function handleTypeChange(type: ListingType | "all") {
    setActiveType(type);
    setActiveSubcat("all");
  }

  return (
    <div>
      {/* Beta banner */}
      {betaMode && (
        <div className="mb-6 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 px-4 py-3 text-sm text-amber-700 dark:text-amber-400">
          <span className="font-semibold">Marketplace beta</span> — Listings below are samples. Live submissions will open once the community launches.
        </div>
      )}

      {/* Controls row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search listings…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-4 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
          />
        </div>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        >
          <option value="all">All cities</option>
          {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Type tabs */}
      <div className="flex flex-wrap gap-2 mb-3 overflow-x-auto pb-1">
        {TYPE_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTypeChange(tab.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium border transition-colors whitespace-nowrap",
              activeType === tab.value
                ? "bg-brand-green text-white border-brand-green"
                : "border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green dark:border-gray-700 dark:text-gray-300"
            )}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* Subcategory tabs */}
      {subcats.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveSubcat("all")}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium border transition-colors",
              activeSubcat === "all"
                ? "bg-gray-800 text-white border-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100"
                : "border-gray-200 text-gray-500 hover:border-gray-400 dark:border-gray-700 dark:text-gray-400"
            )}
          >
            All
          </button>
          {subcats.map((sc) => (
            <button
              key={sc}
              onClick={() => setActiveSubcat(sc)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                activeSubcat === sc
                  ? "bg-gray-800 text-white border-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100"
                  : "border-gray-200 text-gray-500 hover:border-gray-400 dark:border-gray-700 dark:text-gray-400"
              )}
            >
              {sc}
            </button>
          ))}
        </div>
      )}

      {/* Count */}
      <p className="text-sm text-gray-400 mb-5">
        {filtered.length} listing{filtered.length !== 1 ? "s" : ""}
        {activeType !== "all" ? ` · ${TYPE_TABS.find((t) => t.value === activeType)?.label}` : ""}
        {query ? ` matching "${query}"` : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

function ListingCard({ listing }: { listing: MarketplaceListing }) {
  const meta = LISTING_TYPE_META[listing.type];
  return (
    <div className="card flex flex-col gap-3 hover:shadow-md transition-shadow">
      {/* Photo or emoji placeholder */}
      {listing.photo_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={listing.photo_url}
          alt={listing.title}
          className="w-full h-36 object-cover rounded-lg"
        />
      ) : (
        <div className={`w-full h-24 rounded-lg flex items-center justify-center text-4xl ${meta.bg}`}>
          {meta.emoji}
        </div>
      )}

      {/* Type badge + category */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${meta.bg} ${meta.color}`}>
          {meta.emoji} {meta.label}
        </span>
        {listing.category && (
          <span className="text-xs text-gray-400">{listing.category}</span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug line-clamp-2">
        {listing.title}
      </h3>

      {/* Price */}
      {listing.price && (
        <p className="text-lg font-bold text-brand-green">{listing.price}</p>
      )}

      {/* Meta */}
      <div className="flex items-center gap-3 text-xs text-gray-400 mt-auto">
        <span className="flex items-center gap-1">
          <MapPin size={11} />
          {listing.city}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={11} />
          {timeAgo(listing.posted_at)}
        </span>
      </div>

      <Link
        href={`/marketplace/${listing.id}`}
        className="btn-outline text-sm text-center justify-center"
      >
        View details →
      </Link>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="py-20 text-center">
      <p className="text-4xl mb-4">🛒</p>
      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
        No listings match your search
      </p>
      <p className="text-sm text-gray-400 mb-6">
        Try a different category or clear the filters.
      </p>
      <Link href="/marketplace/new" className="btn-primary text-sm inline-flex items-center gap-2">
        <Plus size={14} />
        Post a listing
      </Link>
    </div>
  );
}
