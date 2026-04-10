import Link from "next/link";
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
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { events } from "@/data/events";
import { formatDateShort, isUpcoming } from "@/lib/utils";

const quickLinks = [
  {
    href: "/grocery",
    icon: ShoppingBasket,
    title: "Halal Grocery",
    desc: "10+ stores in the area",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  },
  {
    href: "/masjids",
    icon: MoonStar,
    title: "Masjids",
    desc: "Prayers & community",
    color: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-400",
  },
  {
    href: "/restaurants",
    icon: UtensilsCrossed,
    title: "Halal Food",
    desc: "Deshi & halal restaurants",
    color: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400",
  },
  {
    href: "/events",
    icon: CalendarDays,
    title: "Community Events",
    desc: "Eid, cricket, meetups",
    color: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  },
  {
    href: "/newcomer",
    icon: BookOpen,
    title: "Newcomer Guide",
    desc: "SSN, DMV, schools & more",
    color: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
  },
  {
    href: "/directory",
    icon: Users,
    title: "Community Directory",
    desc: "Doctors, lawyers, agents",
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400",
  },
  {
    href: "/entrepreneurs",
    icon: Briefcase,
    title: "Local Entrepreneurs",
    desc: "Caterers, tailors, tutors & more",
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  },
  {
    href: "/community",
    icon: MessageSquare,
    title: "Community Feed",
    desc: "Ask, offer, share, connect",
    color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400",
  },
  {
    href: "/organizations",
    icon: Building2,
    title: "Organizations",
    desc: "Cultural, religious & student orgs",
    color: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-400",
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

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-green via-brand-green-light to-teal-600 text-white">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 70%, #F42A41 0%, transparent 50%)" }}
        />
        <div className="page-container relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="font-bangla text-4xl font-bold mb-3 opacity-95 tracking-wide">
              স্বাগতম
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              New to RTP?<br />
              <span className="text-green-200">Everything a Bangladeshi family needs</span> — in one place.
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-xl">
              Halal grocery, masjids, restaurants, community events, newcomer resources — all free, built by and for the Bangladeshi community in the Research Triangle.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/newcomer" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-green shadow-md hover:bg-green-50 transition-colors">
                <BookOpen size={16} />
                I&apos;m new here →
              </Link>
              <Link href="/events" className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
                <CalendarDays size={16} />
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="page-container py-14">
        <h2 className="section-heading mb-2">Find What You Need</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Your local Bangladeshi community hub in Raleigh, Durham, Cary, Morrisville & Chapel Hill.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {quickLinks.map(({ href, icon: Icon, title, desc, color }) => (
            <Link
              key={href}
              href={href}
              className="card group flex flex-col gap-3 hover:border-brand-green hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-brand-green transition-colors">
                  {title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 dark:bg-gray-900 py-14">
        <div className="page-container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-heading">Upcoming Events</h2>
            <Link href="/events" className="text-sm font-medium text-brand-green hover:underline flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          {upcomingEvents.length === 0 ? (
            <p className="text-gray-500">No upcoming events right now. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="card flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${eventTypeColors[event.event_type] || "bg-gray-100 text-gray-700"}`}>
                      {event.event_type}
                    </span>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{formatDateShort(event.date)}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">{event.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-1.5">
                    <MapPin size={13} className="mt-0.5 shrink-0" />
                    <span className="line-clamp-2">{event.location}</span>
                  </p>
                  <p className="text-xs text-gray-400">{event.time}</p>
                  <Link href="/events" className="text-sm font-medium text-brand-green hover:underline mt-auto">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newcomer CTA */}
      <section className="page-container py-14">
        <div className="rounded-2xl bg-gradient-to-r from-brand-green to-teal-600 p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Just arrived in RTP?</h2>
            <p className="text-green-100 max-w-md">
              Our free newcomer checklist walks you through your first week, first month, and first three months — SSN, DMV, schools, healthcare, and more.
            </p>
          </div>
          <Link href="/newcomer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-green shadow-lg hover:bg-green-50 transition-colors">
            <CheckCircle2 size={16} />
            Open Newcomer Guide
          </Link>
        </div>
      </section>

      {/* Community Orgs */}
      <section className="bg-gray-50 dark:bg-gray-900 py-10">
        <div className="page-container text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium uppercase tracking-wide">
            Community Organizations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["TBSNC", "BANC", "BSA@NCSU", "BPOCNC", "MUNA", "BAIAN", "Trivuj", "RBT", "RTP Tigers"].map((org) => (
              <span key={org} className="rounded-full border border-gray-200 dark:border-gray-700 px-4 py-1.5 text-sm text-gray-600 dark:text-gray-300">
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
