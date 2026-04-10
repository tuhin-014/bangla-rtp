import Link from "next/link";
import { DualFlags } from "@/components/ui/CountryFlags";
import {
  Briefcase,
  MessageSquare,
  ShoppingBasket,
  MoonStar,
  UtensilsCrossed,
  CalendarDays,
  BookOpen,
  Users,
  Building2,
  ShoppingCart,
  ArrowRight,
  MapPin,
  Music2,
  CheckCircle2,
  Sparkles,
  Heart,
  Globe,
  Landmark,
} from "lucide-react";
import { events } from "@/data/events";
import { formatDateShort, isUpcoming } from "@/lib/utils";

const featuredLinks = [
  {
    href: "/newcomer",
    icon: BookOpen,
    title: "Newcomer Guide",
    desc: "Your first week, month & year — SSN, DMV, schools, healthcare, and everything in between.",
    color: "bg-brand-green",
    textColor: "text-white",
    featured: true,
  },
  {
    href: "/grocery",
    icon: ShoppingBasket,
    title: "Halal Grocery",
    desc: "10+ stores nearby",
    color: "bg-brand-green-50",
    textColor: "text-brand-green",
    featured: false,
  },
  {
    href: "/masjids",
    icon: MoonStar,
    title: "Masjids",
    desc: "Prayers & community",
    color: "bg-brand-green-50",
    textColor: "text-brand-green",
    featured: false,
  },
  {
    href: "/restaurants",
    icon: UtensilsCrossed,
    title: "Halal Food",
    desc: "Deshi & halal restaurants",
    color: "bg-brand-red-50",
    textColor: "text-brand-red",
    featured: false,
  },
  {
    href: "/events",
    icon: CalendarDays,
    title: "Community Events",
    desc: "Eid, cricket & meetups",
    color: "bg-brand-red-50",
    textColor: "text-brand-red",
    featured: false,
  },
  {
    href: "/marketplace",
    icon: ShoppingCart,
    title: "Marketplace",
    desc: "Buy, sell, rent & hire",
    color: "bg-brand-green-50",
    textColor: "text-brand-green",
    featured: false,
  },
  {
    href: "/directory",
    icon: Users,
    title: "Community Directory",
    desc: "Doctors, lawyers, agents",
    color: "bg-brand-green-50",
    textColor: "text-brand-green",
    featured: false,
  },
  {
    href: "/organizations",
    icon: Building2,
    title: "Organizations",
    desc: "Cultural, religious & student",
    color: "bg-brand-red-50",
    textColor: "text-brand-red",
    featured: false,
  },
  {
    href: "/heritage",
    icon: Landmark,
    title: "Our Heritage",
    desc: "History, map & Bir Sreshtho",
    color: "bg-brand-green-50",
    textColor: "text-brand-green",
    featured: false,
  },
  {
    href: "/entrepreneurs",
    icon: Briefcase,
    title: "Entrepreneurs",
    desc: "Caterers, tutors & more",
    color: "bg-brand-red-50",
    textColor: "text-brand-red",
    featured: false,
  },
  {
    href: "/community",
    icon: MessageSquare,
    title: "Community Feed",
    desc: "Ask, offer, share",
    color: "bg-brand-green-50",
    textColor: "text-brand-green",
    featured: false,
  },
  {
    href: "/anthems",
    icon: Music2,
    title: "National Anthems",
    desc: "Two flags, one community",
    color: "bg-brand-red-50",
    textColor: "text-brand-red",
    featured: false,
  },
];

const stats = [
  { label: "Halal Restaurants", value: "28+" },
  { label: "Masjids", value: "9" },
  { label: "Community Orgs", value: "10+" },
  { label: "Families Served", value: "Free" },
];

const whyCards = [
  {
    icon: Heart,
    title: "Built by the community",
    desc: "Every listing, guide, and resource was gathered by Bangladeshis in RTP — for Bangladeshis in RTP.",
    color: "text-brand-red",
    bg: "bg-brand-red-50",
  },
  {
    icon: Globe,
    title: "Always free",
    desc: "No ads, no paywalls, no fees. BanglaRTP is and will always be a free resource for the community.",
    color: "text-brand-green",
    bg: "bg-brand-green-50",
  },
  {
    icon: Sparkles,
    title: "Two homes, one community",
    desc: "Proud of our Bangladeshi roots. Grateful for our American home. Building something in between.",
    color: "text-brand-green",
    bg: "bg-brand-green-50",
  },
];

const eventTypeColors: Record<string, string> = {
  cultural: "bg-orange-100 text-orange-700",
  religious: "bg-teal-100 text-teal-700",
  sports: "bg-blue-100 text-blue-700",
  educational: "bg-purple-100 text-purple-700",
  professional: "bg-gray-100 text-gray-700",
  social: "bg-pink-100 text-pink-700",
};

export default function HomePage() {
  const upcomingEvents = events
    .filter((e) => e.approved && isUpcoming(e.date))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  const [featured, ...rest] = featuredLinks;
  const row1 = rest.slice(0, 4);
  const row2 = rest.slice(4, 8);
  const row3 = rest.slice(8);

  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-green-50 via-white to-white">
        {/* Decorative red circle */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-10"
          style={{ background: "#F42A41" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full opacity-5"
          style={{ background: "#006A4E" }}
        />

        <div className="page-container relative py-20 sm:py-28 text-center">
          <DualFlags size="md" variant="dark" className="justify-center mb-6" />

          <p className="font-bangla text-5xl sm:text-6xl font-bold text-brand-green leading-tight mb-3">
            স্বাগতম
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3 leading-snug">
            Welcome to the Bangladeshi community<br className="hidden sm:block" /> in the Research Triangle
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Halal food, masjids, newcomer resources, events, and community — all free, built by and for Bangladeshis in Raleigh, Durham, Cary, Morrisville &amp; Chapel Hill.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link
              href="/newcomer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-green-light transition-colors"
            >
              <BookOpen size={16} />
              I&apos;m new here →
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-red px-6 py-3 text-sm font-semibold text-brand-red hover:bg-brand-red-50 transition-colors"
            >
              <CalendarDays size={16} />
              Explore community
            </Link>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {["28+ halal restaurants", "9 masjids", "10+ community orgs", "Free forever"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-brand-green/30 bg-brand-green-50 px-4 py-1.5 text-xs font-medium text-brand-green"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Grid ─────────────────────────────────────────────────── */}
      <section className="page-container py-14">
        <h2 className="section-heading mb-2">Find What You Need</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
          Your local Bangladeshi community hub in the Research Triangle.
        </p>

        {/* Large featured card + 4 small cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Featured: Newcomer Guide — spans 2 rows on lg */}
          <Link
            href={featured.href}
            className="col-span-2 lg:col-span-1 lg:row-span-2 group flex flex-col justify-between rounded-2xl bg-brand-green p-6 shadow-md hover:shadow-lg transition-all hover:bg-brand-green-light"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{featured.title}</h3>
              <p className="text-green-100 text-sm leading-relaxed">{featured.desc}</p>
            </div>
            <div className="mt-6 inline-flex items-center gap-1.5 text-white text-sm font-semibold">
              Open guide <ArrowRight size={14} />
            </div>
          </Link>

          {/* Row 1: 4 small cards (2 cols on mobile, fills the other 2 lg cols) */}
          {row1.map(({ href, icon: Icon, title, desc, color, textColor }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm hover:border-brand-green hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                <Icon size={20} className={textColor} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-brand-green transition-colors text-sm">
                  {title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2: 4 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {row2.map(({ href, icon: Icon, title, desc, color, textColor }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm hover:border-brand-green hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${color}`}>
                <Icon size={20} className={textColor} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-brand-green transition-colors text-sm">
                  {title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 3: remaining cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {row3.map(({ href, icon: Icon, title, desc, color, textColor }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm hover:border-brand-green hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${color}`}>
                <Icon size={20} className={textColor} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-brand-green transition-colors text-sm">
                  {title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <section className="bg-brand-green py-12">
        <div className="page-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <p className="text-4xl font-bold text-white mb-1">{value}</p>
                <p className="text-green-200 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ──────────────────────────────────────────────── */}
      <section className="page-container py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-heading">Upcoming Events</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Eid, cricket, cultural shows & community meetups</p>
          </div>
          <Link href="/events" className="text-sm font-medium text-brand-green hover:underline flex items-center gap-1 shrink-0">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
            <CalendarDays size={32} className="text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No upcoming events right now. Check back soon!</p>
            <Link href="/events" className="text-sm text-brand-green hover:underline mt-2 inline-block">Browse past events →</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                {/* Date bar */}
                <div className="bg-brand-green-50 dark:bg-brand-green/10 px-5 py-3 flex items-center justify-between border-b border-brand-green/10">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full capitalize ${eventTypeColors[event.event_type] || "bg-gray-100 text-gray-700"}`}>
                    {event.event_type}
                  </span>
                  <span className="text-xs font-semibold text-brand-green">{formatDateShort(event.date)}</span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-brand-green transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-1.5">
                    <MapPin size={13} className="mt-0.5 shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </p>
                  <p className="text-xs text-gray-400">{event.time}</p>
                  <Link href="/events" className="text-xs font-medium text-brand-green hover:underline mt-1">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Why BanglaRTP ────────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-gray-900/60 py-14">
        <div className="page-container">
          <h2 className="section-heading text-center mb-2">Why BanglaRTP?</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm">
            Built different — because the community deserves better.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whyCards.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newcomer CTA ─────────────────────────────────────────────────── */}
      <section className="page-container py-14">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-green to-brand-green-light p-8 sm:p-12 text-white">
          {/* Decorative red accent */}
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full opacity-20"
            style={{ background: "#F42A41" }}
          />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bangla text-2xl mb-1 opacity-90">নতুন এসেছেন?</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Just arrived in RTP?</h2>
              <p className="text-green-100 max-w-md text-sm leading-relaxed">
                Our free newcomer checklist walks you through your first week, first month, and first three months — SSN, DMV, schools, healthcare, and more.
              </p>
            </div>
            <Link
              href="/newcomer"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-green shadow-lg hover:bg-brand-green-50 transition-colors"
            >
              <CheckCircle2 size={16} />
              Open Newcomer Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ── Community Orgs strip ─────────────────────────────────────────── */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-8">
        <div className="page-container text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Community Organizations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["TBSNC", "BANC", "BSA@NCSU", "BPOCNC", "MUNA", "BAIAN", "Trivuj", "RBT", "RTP Tigers"].map((org) => (
              <span
                key={org}
                className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
