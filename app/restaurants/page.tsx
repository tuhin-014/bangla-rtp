"use client";

import { useState } from "react";
import { UtensilsCrossed, MapPin, Phone, Clock, ExternalLink, CheckCircle, DollarSign } from "lucide-react";
import { restaurants } from "@/data/restaurants";
import { FilterBar } from "@/components/ui/FilterBar";
import { Badge } from "@/components/ui/Badge";
import type { CuisineType } from "@/lib/types";

const cuisines: { value: CuisineType | "all"; label: string }[] = [
  { value: "all", label: "All Cuisines" },
  { value: "Bangladeshi", label: "Bangladeshi" },
  { value: "Indian", label: "Indian" },
  { value: "Pakistani", label: "Pakistani" },
  { value: "Middle Eastern", label: "Middle Eastern" },
  { value: "Turkish", label: "Turkish" },
  { value: "Mediterranean", label: "Mediterranean" },
];

const priceColors: Record<string, string> = {
  $: "text-green-600",
  $$: "text-yellow-600",
  $$$: "text-red-500",
};

export default function RestaurantsPage() {
  const [cuisine, setCuisine] = useState<CuisineType | "all">("all");

  const filtered = restaurants.filter(
    (r) => r.approved && (cuisine === "all" || r.cuisine === cuisine)
  );

  return (
    <div className="page-container py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <UtensilsCrossed size={20} />
          <span className="text-sm font-medium uppercase tracking-wide">Halal Restaurants</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          Halal Restaurants
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl">
          From authentic Bangladeshi home cooking to Pakistani grills, Indian biryani, and Mediterranean — here&apos;s where to eat halal in the Triangle.
        </p>
      </div>

      <div className="mb-6">
        <FilterBar
          options={cuisines}
          value={cuisine}
          onChange={setCuisine}
          label="Cuisine"
        />
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
        {filtered.length} restaurant{filtered.length !== 1 ? "s" : ""}
        {cuisine !== "all" ? ` · ${cuisine}` : ""}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((r) => (
          <div key={r.id} className="card flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                {r.name}
              </h2>
              {r.halal_certified && (
                <Badge variant="green" className="shrink-0">
                  <CheckCircle size={10} className="mr-1" />
                  Halal
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {r.cuisine && <Badge variant="blue">{r.cuisine}</Badge>}
              {r.price_range && (
                <span className={`text-sm font-bold ${priceColors[r.price_range]}`}>
                  {r.price_range}
                </span>
              )}
              <Badge variant="gray">{r.city}</Badge>
            </div>

            {r.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {r.description}
              </p>
            )}

            <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gray-400" />
                {r.address}
              </p>
              {r.phone && (
                <p className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-gray-400" />
                  <a href={`tel:${r.phone}`} className="hover:text-brand-green transition-colors">
                    {r.phone}
                  </a>
                </p>
              )}
              {r.hours && (
                <p className="flex items-start gap-2">
                  <Clock size={14} className="mt-0.5 shrink-0 text-gray-400" />
                  <span className="text-xs">{r.hours}</span>
                </p>
              )}
            </div>

            <div className="mt-auto pt-2">
              <a
                href={r.maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-green hover:underline"
              >
                <ExternalLink size={12} />
                Directions
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-12">
          No restaurants found for that cuisine. Try &quot;All Cuisines&quot;.
        </p>
      )}

      <div className="mt-12 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Know a halal restaurant we&apos;re missing?{" "}
          <a href="/about#contact" className="text-brand-green font-medium hover:underline">
            Suggest a listing →
          </a>
        </p>
      </div>
    </div>
  );
}
