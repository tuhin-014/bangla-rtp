import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, Clock, ChevronLeft, Flag } from "lucide-react";
import { marketplaceListings, LISTING_TYPE_META } from "@/data/marketplaceListings";
import { timeAgo } from "@/lib/timeAgo";

export function generateStaticParams() {
  return marketplaceListings.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const listing = marketplaceListings.find((l) => l.id === params.id);
  if (!listing) return { title: "Listing Not Found" };
  return {
    title: `${listing.title} | BanglaRTP Marketplace`,
    description: listing.description.slice(0, 160),
  };
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = marketplaceListings.find((l) => l.id === params.id);
  if (!listing) notFound();

  const meta = LISTING_TYPE_META[listing.type];
  const related = marketplaceListings
    .filter((l) => l.id !== listing.id && l.type === listing.type && l.status === "active")
    .slice(0, 3);

  const whatsappHref = listing.whatsapp
    ? `https://wa.me/${listing.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <div className="page-container py-12">
      {/* Back */}
      <Link href="/marketplace" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-green mb-6 transition-colors">
        <ChevronLeft size={16} />
        Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Photo or placeholder */}
          {listing.photo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={listing.photo_url}
              alt={listing.title}
              className="w-full max-h-96 object-cover rounded-2xl"
            />
          ) : (
            <div className={`w-full h-48 rounded-2xl flex items-center justify-center text-7xl ${meta.bg}`}>
              {meta.emoji}
            </div>
          )}

          {/* Type badge + meta */}
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full ${meta.bg} ${meta.color}`}>
              {meta.emoji} {meta.label}
            </span>
            {listing.category && (
              <span className="text-sm text-gray-500 dark:text-gray-400">{listing.category}</span>
            )}
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <MapPin size={13} />
              {listing.city}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Clock size={13} />
              {timeAgo(listing.posted_at)}
            </span>
          </div>

          {/* Title + price */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-3">
              {listing.title}
            </h1>
            {listing.price && (
              <p className="text-2xl font-bold text-brand-green">{listing.price}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">
              Description
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
              {listing.description}
            </p>
          </div>

          {/* Report */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <button className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors">
              <Flag size={12} />
              Report this listing
            </button>
          </div>
        </div>

        {/* Sidebar — contact card */}
        <div className="space-y-5">
          <div className="card sticky top-20">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Contact {listing.contact_name}
            </h2>

            <div className="space-y-3">
              {listing.contact_phone && (
                <a
                  href={`tel:${listing.contact_phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 w-full rounded-xl bg-brand-green text-white px-4 py-3 text-sm font-medium hover:bg-brand-green/90 transition-colors"
                >
                  <Phone size={16} />
                  Call {listing.contact_phone}
                </a>
              )}
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full rounded-xl bg-emerald-500 text-white px-4 py-3 text-sm font-medium hover:bg-emerald-600 transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              )}
              {listing.contact_email && (
                <a
                  href={`mailto:${listing.contact_email}`}
                  className="flex items-center gap-3 w-full rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 text-sm font-medium hover:border-brand-green hover:text-brand-green transition-colors"
                >
                  <Mail size={16} />
                  {listing.contact_email}
                </a>
              )}
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Always meet in a safe public place. BanglaRTP is not responsible for transactions between members.
            </p>
          </div>

          {/* Post your own */}
          <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 p-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Have something to sell or offer?
            </p>
            <Link href="/marketplace/new" className="btn-primary text-sm w-full justify-center">
              Post a Listing →
            </Link>
          </div>
        </div>
      </div>

      {/* Related listings */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
            More {meta.label} listings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link key={r.id} href={`/marketplace/${r.id}`} className="card hover:shadow-md transition-shadow flex flex-col gap-2">
                <div className={`w-full h-16 rounded-lg flex items-center justify-center text-3xl ${meta.bg}`}>
                  {meta.emoji}
                </div>
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 line-clamp-2">{r.title}</p>
                {r.price && <p className="text-brand-green font-bold text-sm">{r.price}</p>}
                <p className="text-xs text-gray-400">{r.city} · {timeAgo(r.posted_at)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
