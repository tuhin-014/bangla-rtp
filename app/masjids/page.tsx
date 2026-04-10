import { MoonStar, MapPin, Phone, ExternalLink, Clock } from "lucide-react";
import { masjids } from "@/data/masjids";
import { Badge } from "@/components/ui/Badge";

export const metadata = { title: "Masjids" };

export default function MasjidsPage() {
  return (
    <div className="page-container py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <MoonStar size={20} />
          <span className="text-sm font-medium uppercase tracking-wide">Places of Worship</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          Masjids in the Triangle
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl">
          Mosques and Islamic centers in Raleigh, Durham, Cary, and Morrisville — with prayer times, Jumu&apos;ah info, and contact details.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {masjids.map((masjid) => (
          <div key={masjid.id} className="card flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug text-lg">
                {masjid.name}
              </h2>
              <Badge variant="gray" className="shrink-0">{masjid.city}</Badge>
            </div>

            {masjid.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {masjid.description}
              </p>
            )}

            <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gray-400" />
                {masjid.address}
              </p>
              {masjid.phone && (
                <p className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-gray-400" />
                  <a href={`tel:${masjid.phone}`} className="hover:text-brand-green transition-colors">
                    {masjid.phone}
                  </a>
                </p>
              )}
              {masjid.jummah_time && (
                <p className="flex items-center gap-2">
                  <Clock size={14} className="shrink-0 text-gray-400" />
                  <span>Jumu&apos;ah: <strong>{masjid.jummah_time}</strong></span>
                </p>
              )}
            </div>

            <div className="flex gap-3 mt-auto pt-2 flex-wrap">
              <a
                href={masjid.maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-green hover:underline"
              >
                <ExternalLink size={12} />
                Directions
              </a>
              {masjid.website && (
                <a
                  href={masjid.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-brand-green hover:underline"
                >
                  <ExternalLink size={12} />
                  Website
                </a>
              )}
              {masjid.prayer_times_url && (
                <a
                  href={masjid.prayer_times_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-teal-600 hover:underline"
                >
                  <Clock size={12} />
                  Prayer Times
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Know a masjid we&apos;re missing?{" "}
          <a href="/about#contact" className="text-brand-green font-medium hover:underline">
            Suggest it →
          </a>
        </p>
      </div>
    </div>
  );
}
