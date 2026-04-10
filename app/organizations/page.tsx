import Link from "next/link";
import { ExternalLink, Mail, Phone, Globe, Building2 } from "lucide-react";
import { organizations, ORG_TYPE_META, type OrgType } from "@/data/organizations";

export const metadata = {
  title: "Community Organizations | BanglaRTP",
  description:
    "Bangladeshi cultural, religious, student, and professional organizations in the Research Triangle — Raleigh, Durham, Cary, Morrisville, Chapel Hill.",
};

const ALL_TYPES: OrgType[] = ["cultural", "religious", "student", "professional", "youth"];

export default function OrganizationsPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const activeType = (searchParams.type as OrgType) || null;
  const filtered = activeType
    ? organizations.filter((o) => o.type === activeType)
    : organizations;

  return (
    <div className="page-container py-12">
      {/* Header */}
      <div className="mb-10 max-w-2xl">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <Building2 size={20} />
          <span className="text-sm font-medium uppercase tracking-wide">RTP Bangladeshi Community</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3">
          Community Organizations
        </h1>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          Cultural, religious, student, and professional organizations serving Bangladeshis
          in Raleigh, Durham, Cary, Morrisville, and the greater Research Triangle.
        </p>
      </div>

      {/* Type filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/organizations"
          className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
            !activeType
              ? "bg-brand-green text-white border-brand-green"
              : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-green"
          }`}
        >
          All ({organizations.length})
        </Link>
        {ALL_TYPES.map((type) => {
          const meta = ORG_TYPE_META[type];
          const count = organizations.filter((o) => o.type === type).length;
          if (count === 0) return null;
          return (
            <Link
              key={type}
              href={`/organizations?type=${type}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
                activeType === type
                  ? "bg-brand-green text-white border-brand-green"
                  : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-green"
              }`}
            >
              {meta.emoji} {meta.label} ({count})
            </Link>
          );
        })}
      </div>

      {/* Org cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((org) => {
          const meta = ORG_TYPE_META[org.type];
          return (
            <div key={org.id} className="card flex flex-col gap-3">
              {/* Type badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${meta.bg} ${meta.color}`}
                >
                  <span>{meta.emoji}</span>
                  {meta.label}
                </span>
                {org.foundedYear && (
                  <span className="text-xs text-gray-400">est. {org.foundedYear}</span>
                )}
              </div>

              {/* Name */}
              <div>
                <h2 className="text-lg font-bold text-brand-green leading-tight">{org.name}</h2>
                {org.fullName && org.fullName !== org.name && (
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-0.5">
                    {org.fullName}
                  </p>
                )}
                {org.city && (
                  <p className="text-xs text-gray-400 mt-0.5">{org.city}</p>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                {org.description}
              </p>

              {/* Links */}
              {(org.website || org.facebook || org.email || org.phone) && (
                <div className="flex flex-wrap gap-3 pt-1 border-t border-gray-100 dark:border-gray-800">
                  {org.website && (
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-green hover:underline"
                    >
                      <Globe size={13} />
                      Website
                    </a>
                  )}
                  {org.facebook && (
                    <a
                      href={org.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-green hover:underline"
                    >
                      <ExternalLink size={13} />
                      Facebook
                    </a>
                  )}
                  {org.email && (
                    <a
                      href={`mailto:${org.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-green hover:underline"
                    >
                      <Mail size={13} />
                      {org.email}
                    </a>
                  )}
                  {org.phone && (
                    <a
                      href={`tel:${org.phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-brand-green"
                    >
                      <Phone size={13} />
                      {org.phone}
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 py-8 text-center">
          No organizations found for this category.
        </p>
      )}

      {/* Footer note */}
      <div className="mt-12 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 p-5 text-sm text-amber-700 dark:text-amber-400">
        <p className="font-semibold mb-1">Know of an organization we&apos;re missing?</p>
        <p>
          This list is community-maintained. If you know of a Bangladeshi organization in RTP that isn&apos;t listed,{" "}
          <Link href="/about#contact" className="font-medium underline underline-offset-2">
            let us know
          </Link>{" "}
          and we&apos;ll add it.
        </p>
      </div>
    </div>
  );
}
