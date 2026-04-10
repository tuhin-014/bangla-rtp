"use client";

import { useState } from "react";
import { ShoppingBasket, MapPin, Phone, Clock, ExternalLink, CheckCircle } from "lucide-react";
import { groceryStores } from "@/data/grocery";
import { FilterBar } from "@/components/ui/FilterBar";
import { Badge } from "@/components/ui/Badge";
import type { City } from "@/lib/types";

const cities: { value: City | "all"; label: string }[] = [
  { value: "all", label: "All Cities" },
  { value: "Raleigh", label: "Raleigh" },
  { value: "Cary", label: "Cary" },
  { value: "Morrisville", label: "Morrisville" },
  { value: "Durham", label: "Durham" },
  { value: "Chapel Hill", label: "Chapel Hill" },
];

export default function GroceryPage() {
  const [city, setCity] = useState<City | "all">("all");

  const filtered = groceryStores.filter(
    (s) => s.approved && (city === "all" || s.city === city)
  );

  return (
    <div className="page-container py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <ShoppingBasket size={20} />
          <span className="text-sm font-medium uppercase tracking-wide">Halal Grocery</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          Halal Grocery Stores
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl">
          Halal meat, South Asian groceries, Bangladeshi brands — all within the Research Triangle.
          All stores carry halal products; stores marked with a badge are fully halal-certified.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-6">
        <FilterBar
          options={cities}
          value={city}
          onChange={setCity}
          label="Filter by city"
        />
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
        Showing {filtered.length} store{filtered.length !== 1 ? "s" : ""}
        {city !== "all" ? ` in ${city}` : ""}
      </p>

      {/* Store Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((store) => (
          <div key={store.id} className="card flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                {store.name}
              </h2>
              {store.halal_certified && (
                <Badge variant="green" className="shrink-0">
                  <CheckCircle size={10} className="mr-1" />
                  Halal Certified
                </Badge>
              )}
            </div>

            {store.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {store.description}
              </p>
            )}

            <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gray-400" />
                {store.address}
              </p>
              {store.phone && (
                <p className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-gray-400" />
                  <a href={`tel:${store.phone}`} className="hover:text-brand-green transition-colors">
                    {store.phone}
                  </a>
                </p>
              )}
              {store.hours && (
                <p className="flex items-start gap-2">
                  <Clock size={14} className="mt-0.5 shrink-0 text-gray-400" />
                  {store.hours}
                </p>
              )}
            </div>

            <div className="flex gap-2 mt-auto pt-2">
              <Badge variant="gray">{store.city}</Badge>
              <a
                href={store.maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-brand-green hover:underline"
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
          No stores found in {city}. Try &quot;All Cities&quot;.
        </p>
      )}

      {/* Suggest */}
      <div className="mt-12 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Know a halal grocery store we&apos;re missing?{" "}
          <a href="/about#contact" className="text-brand-green font-medium hover:underline">
            Suggest a listing →
          </a>
        </p>
      </div>
    </div>
  );
}
