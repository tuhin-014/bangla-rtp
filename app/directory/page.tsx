"use client";

import { useState } from "react";
import { Users, Phone, Mail, Globe, MapPin } from "lucide-react";
import { professionals } from "@/data/professionals";
import { FilterBar } from "@/components/ui/FilterBar";
import { Badge } from "@/components/ui/Badge";

type ProfessionFilter =
  | "all"
  | "Physician"
  | "Attorney"
  | "Real Estate Agent"
  | "Accountant / CPA"
  | "Daycare Provider"
  | "Tutor"
  | "Financial Advisor";

const professionFilters: { value: ProfessionFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "Physician", label: "Doctors" },
  { value: "Attorney", label: "Attorneys" },
  { value: "Real Estate Agent", label: "Real Estate" },
  { value: "Accountant / CPA", label: "CPA / Tax" },
  { value: "Financial Advisor", label: "Financial" },
  { value: "Daycare Provider", label: "Daycare" },
  { value: "Tutor", label: "Tutors" },
];

export default function DirectoryPage() {
  const [filter, setFilter] = useState<ProfessionFilter>("all");

  const filtered = professionals.filter(
    (p) => p.approved && (filter === "all" || p.profession === filter)
  );

  return (
    <div className="page-container py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <Users size={20} />
          <span className="text-sm font-medium uppercase tracking-wide">Community Directory</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          Bangla-Speaking Professionals
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl">
          Doctors, lawyers, real estate agents, CPAs, tutors, and more — who speak Bengali and understand our community. All listings are community-submitted and free.
        </p>
      </div>

      <div className="mb-8">
        <FilterBar
          options={professionFilters}
          value={filter}
          onChange={setFilter}
          label="Profession"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((pro) => (
          <div key={pro.id} className="card flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">{pro.name}</h2>
              {pro.practice_name && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{pro.practice_name}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="green">{pro.profession}</Badge>
              {pro.specialty && <Badge variant="gray">{pro.specialty}</Badge>}
            </div>

            <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-center gap-2">
                <MapPin size={13} className="text-gray-400 shrink-0" />
                {pro.city}
              </p>
              {pro.phone && (
                <p className="flex items-center gap-2">
                  <Phone size={13} className="text-gray-400 shrink-0" />
                  <a href={`tel:${pro.phone}`} className="hover:text-brand-green transition-colors">
                    {pro.phone}
                  </a>
                </p>
              )}
              {pro.email && (
                <p className="flex items-center gap-2">
                  <Mail size={13} className="text-gray-400 shrink-0" />
                  <a href={`mailto:${pro.email}`} className="hover:text-brand-green transition-colors truncate">
                    {pro.email}
                  </a>
                </p>
              )}
            </div>

            <div className="mt-auto">
              <p className="text-xs text-gray-400">
                Languages:{" "}
                <span className="text-gray-600 dark:text-gray-300">
                  {pro.languages.join(", ")}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-12">
          No listings found for that category.
        </p>
      )}

      <div className="mt-12 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 p-6 text-center">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
          Are you a Bangla-speaking professional?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Add yourself to the directory — it&apos;s free and helps newcomers find trusted help from the community.
        </p>
        <a href="/about#contact" className="btn-primary text-sm">
          Submit Your Listing →
        </a>
      </div>
    </div>
  );
}
