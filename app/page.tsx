import Link from "next/link";
import { DualFlags, BangladeshFlag, USFlag } from "@/components/ui/CountryFlags";
import { BangladeshMap } from "@/components/heritage/BangladeshMap";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Award,
  MapPin,
} from "lucide-react";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { events } from "@/data/events";
import { formatDateShort, isUpcoming } from "@/lib/utils";

// ── Bir Sreshtho preview data ─────────────────────────────────────────────────
const birSreshthoPreview = [
  { initial: "ম", name: "Capt. Mohiuddin Jahangir", branch: "Army", martyred: "Dec 14, 1971" },
  { initial: "ম", name: "Flt Lt Matiur Rahman",     branch: "Air Force", martyred: "Aug 20, 1971" },
  { initial: "র", name: "LNk Munshi Abdur Rouf",    branch: "EPR",       martyred: "Apr 20, 1971" },
  { initial: "ন", name: "LNk Nur Mohammad Sheikh",  branch: "EPR",       martyred: "Sep 5, 1971"  },
  { initial: "হ", name: "Sep. Hamidur Rahman",      branch: "Army",      martyred: "Oct 28, 1971" },
  { initial: "ক", name: "Sep. Mostafa Kamal",       branch: "Army",      martyred: "Apr 18, 1971" },
  { initial: "র", name: "ERA Ruhul Amin",           branch: "Navy",      martyred: "Dec 10, 1971" },
];

// ── Key history moments ───────────────────────────────────────────────────────
const historyMoments = [
  {
    year: "1952",
    date: "February 21",
    title: "Language Movement",
    bangla: "ভাষা আন্দোলন",
    body: "Students were killed on the streets of Dhaka for the right to speak Bangla. Their sacrifice became the foundation of Bangladeshi identity — and later, a symbol for all humanity.",
    highlight: false,
  },
  {
    year: "1971",
    date: "March 26 – Dec 16",
    title: "Liberation War & Independence",
    bangla: "মুক্তিযুদ্ধ",
    body: "Nine months of brutal war, millions of sacrifices, and the courage of ordinary people transformed into freedom. On December 16, 1971 — Victory Day — Bangladesh was born.",
    highlight: true,
  },
  {
    year: "2000",
    date: "February 21",
    title: "International Mother Language Day",
    bangla: "আন্তর্জাতিক মাতৃভাষা দিবস",
    body: "UNESCO declared February 21 as International Mother Language Day — honoring the Language Martyrs and the right of every people to speak in their own tongue.",
    highlight: false,
  },
];

const eventTypeColors: Record<string, string> = {
  cultural:     "bg-orange-100 text-orange-700",
  religious:    "bg-teal-100 text-teal-700",
  sports:       "bg-blue-100 text-blue-700",
  educational:  "bg-purple-100 text-purple-700",
  professional: "bg-gray-100 text-gray-700",
  social:       "bg-pink-100 text-pink-700",
};

const directoryLinks = [
  { label: "Halal Grocery",   href: "/grocery" },
  { label: "Masjids",         href: "/masjids" },
  { label: "Restaurants",     href: "/restaurants" },
  { label: "Events",          href: "/events" },
  { label: "Community Feed",  href: "/community" },
  { label: "Marketplace",     href: "/marketplace" },
  { label: "Newcomer Guide",  href: "/newcomer" },
  { label: "Directory",       href: "/directory" },
  { label: "Organizations",   href: "/organizations" },
  { label: "Entrepreneurs",   href: "/entrepreneurs" },
];

export default function HomePage() {
  const upcomingEvents = events
    .filter((e) => e.approved && isUpcoming(e.date))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  return (
    <div>

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-green-50 via-white to-white">
        {/* Decorative accents */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full opacity-[0.07]"
          style={{ background: "#F42A41" }} />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-[0.05]"
          style={{ background: "#006A4E" }} />

        <div className="page-container relative py-24 sm:py-32 text-center">
          <DualFlags size="lg" variant="dark" className="justify-center mb-8" />

          <p className="font-bangla text-6xl sm:text-7xl font-bold text-brand-green leading-tight mb-4">
            স্বাগতম
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3 leading-snug">
            Welcome to the Bangladeshi community<br className="hidden sm:block" />
            in the Research Triangle
          </h1>

          <p className="text-base text-gray-500 dark:text-gray-400 italic mb-10">
            Where our roots meet our home
          </p>

          <Link
            href="#resources"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-green-light transition-colors"
          >
            Explore Resources <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. BANGLADESH AT A GLANCE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="page-container py-16">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <MapPin size={16} />
          <span className="text-xs font-semibold uppercase tracking-widest">Our Homeland</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-10">
          Bangladesh at a Glance
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="flex flex-col items-center">
            <div className="w-56 sm:w-72 mx-auto">
              <BangladeshMap />
            </div>
            <p className="mt-3 text-xs text-center text-gray-400 max-w-xs leading-relaxed">
              People&apos;s Republic of Bangladesh &mdash; hover a division to see its name
            </p>
          </div>

          {/* Facts */}
          <div className="space-y-4">
            {/* Country card */}
            <div className="rounded-2xl bg-brand-green text-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <BangladeshFlag className="h-8 rounded shadow" />
                <div>
                  <p className="font-bangla text-xl font-bold leading-tight">গণপ্রজাতন্ত্রী বাংলাদেশ</p>
                  <p className="text-green-200 text-xs">People&apos;s Republic of Bangladesh</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {[
                  ["Capital",       "Dhaka"],
                  ["Population",    "~170 million"],
                  ["Language",      "Bangla (Bengali)"],
                  ["Area",          "147,570 km²"],
                  ["Independence",  "December 16, 1971"],
                  ["Currency",      "Bangladeshi Taka"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-green-300 text-xs uppercase tracking-wide">{k}</p>
                    <p className="font-medium">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divisions */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                8 Administrative Divisions
              </p>
              <div className="flex flex-wrap gap-2">
                {["Dhaka ★", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"].map((d) => (
                  <span key={d} className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-50 dark:bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/heritage"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:underline"
            >
              Explore full heritage page → <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. OUR HISTORY — KEY MOMENTS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="page-container">
          <div className="flex items-center gap-2 text-brand-green mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest">History</span>
          </div>
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Key Moments</h2>
            <Link href="/heritage#history" className="text-sm font-medium text-brand-green hover:underline flex items-center gap-1">
              Full history <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {historyMoments.map((m) => (
              <div
                key={m.year}
                className={`rounded-2xl border p-6 flex flex-col gap-3 ${
                  m.highlight
                    ? "border-brand-red/30 bg-brand-red-50 dark:bg-brand-red/10"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`rounded-xl px-3 py-1 text-sm font-bold text-white ${m.highlight ? "bg-brand-red" : "bg-brand-green"}`}>
                    {m.year}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{m.date}</span>
                </div>
                <div>
                  <h3 className={`font-bold text-base ${m.highlight ? "text-brand-red" : "text-brand-green"}`}>
                    {m.title}
                  </h3>
                  <p className="font-bangla text-sm text-gray-500 dark:text-gray-400 mt-0.5">{m.bangla}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. NATIONAL ANTHEMS — AUDIO PREVIEW
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="page-container py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-brand-green uppercase tracking-widest mb-1">Music</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">National Anthems</h2>
          </div>
          <Link href="/anthems" className="text-sm font-medium text-brand-green hover:underline flex items-center gap-1">
            Full anthems page <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Amar Shonar Bangla */}
          <div className="rounded-2xl border border-brand-green/20 bg-brand-green-50 dark:bg-brand-green/10 dark:border-brand-green/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <BangladeshFlag className="h-9 rounded shadow border border-gray-200 dark:border-gray-700" />
              <div>
                <p className="font-bangla text-lg font-bold text-brand-green">আমার সোনার বাংলা</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">National Anthem of Bangladesh</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 italic">
              Written by Rabindranath Tagore, 1905 · Adopted 1972
            </p>
            <AudioPlayer
              srcMp3="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bc/Amar_Sonar_Bangla_-_official_vocal_music_of_the_National_anthem_of_Bangladesh.ogg/Amar_Sonar_Bangla_-_official_vocal_music_of_the_National_anthem_of_Bangladesh.ogg.mp3"
              srcOgg="https://upload.wikimedia.org/wikipedia/commons/b/bc/Amar_Sonar_Bangla_-_official_vocal_music_of_the_National_anthem_of_Bangladesh.ogg"
              caption="Audio: Public domain via Wikimedia Commons"
            />
          </div>

          {/* Star-Spangled Banner */}
          <div className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <USFlag className="h-9 rounded shadow border border-gray-200 dark:border-gray-700" />
              <div>
                <p className="text-lg font-bold text-gray-800 dark:text-gray-100">The Star-Spangled Banner</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">National Anthem of the United States</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 italic">
              Written by Francis Scott Key, 1814 · Adopted 1931
            </p>
            <AudioPlayer
              srcMp3="https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a4/The_Star-Spangled_Banner_-_U.S._Army_Band.ogg/The_Star-Spangled_Banner_-_U.S._Army_Band.ogg.mp3"
              srcOgg="https://upload.wikimedia.org/wikipedia/commons/a/a4/The_Star-Spangled_Banner_-_U.S._Army_Band.ogg"
              caption="Audio: Public domain via Wikimedia Commons (U.S. Army Band)"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. TWO NATIONS, ONE COMMUNITY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-green py-16">
        <div className="page-container">
          {/* Dual flags header */}
          <div className="flex justify-center items-center gap-5 mb-8">
            <BangladeshFlag className="h-14 rounded-lg shadow-lg border-2 border-white/20" />
            <span className="text-white text-3xl">🤝</span>
            <USFlag className="h-14 rounded-lg shadow-lg border-2 border-white/20" />
          </div>

          <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-3">
            Two Nations, One Community
          </h2>
          <p className="text-center text-green-200 text-sm italic mb-12 max-w-xl mx-auto">
            দুটি দেশ, একটি সম্প্রদায়
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-6">
              <p className="text-white leading-relaxed text-sm">
                The United States and Bangladesh share a friendship built on democratic values, cultural exchange, and shared dreams of freedom. Since Bangladesh&apos;s independence in 1971, the US has been a partner in development, education, and peace — and home to hundreds of thousands of Bangladeshi Americans.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-6">
              <p className="text-white leading-relaxed text-sm">
                For Bangladeshi families in the Research Triangle, America is home — a place of opportunity, safety, and community. BanglaRTP exists at the intersection of both worlds: honoring the heritage we carry and celebrating the nation we&apos;ve chosen to build our lives in.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "500,000+", label: "Bangladeshi Americans in the USA" },
              { value: "50+ years", label: "of US-Bangladesh diplomatic partnership" },
              { value: "5 cities",  label: "Raleigh · Durham · Cary · Morrisville · Chapel Hill" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-green-200 text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. BIR SRESHTHO PREVIEW
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="page-container py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-brand-red mb-1">
              <Award size={16} />
              <span className="text-xs font-semibold uppercase tracking-widest">Highest Military Honor</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              বীরশ্রেষ্ঠ — The Seven
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-md">
              Only 7 men have ever received Bangladesh&apos;s highest military award — all posthumously, all for extraordinary valor in 1971.
            </p>
          </div>
          <Link href="/heritage#bir-sreshtho" className="text-sm font-medium text-brand-green hover:underline flex items-center gap-1 shrink-0 ml-4">
            Learn more <ArrowRight size={13} />
          </Link>
        </div>

        {/* Horizontal scroll row */}
        <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-7">
          {birSreshthoPreview.map((hero, i) => (
            <Link
              key={hero.name}
              href="/heritage#bir-sreshtho"
              className="flex-shrink-0 w-36 sm:w-auto group flex flex-col items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-center hover:border-brand-green hover:shadow-md transition-all"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white text-xl font-bold shadow">
                {hero.initial}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-brand-green transition-colors">
                  {hero.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{hero.branch}</p>
                <p className="text-xs text-brand-red mt-0.5">{hero.martyred}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. UPCOMING EVENTS (compact)
      ══════════════════════════════════════════════════════════════════════ */}
      {upcomingEvents.length > 0 && (
        <section className="bg-gray-50 dark:bg-gray-900/50 py-12">
          <div className="page-container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">Upcoming Events</h2>
              <Link href="/events" className="text-sm font-medium text-brand-green hover:underline flex items-center gap-1">
                View all <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm">
                  <div className="bg-brand-green-50 dark:bg-brand-green/10 px-4 py-2.5 flex items-center justify-between border-b border-brand-green/10">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${eventTypeColors[event.event_type] || "bg-gray-100 text-gray-700"}`}>
                      {event.event_type}
                    </span>
                    <span className="text-xs font-semibold text-brand-green">{formatDateShort(event.date)}</span>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-snug mb-1">{event.title}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin size={10} className="shrink-0" /> {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          8. RESOURCE DIRECTORY CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="resources" className="page-container py-16 scroll-mt-20">
        <div className="rounded-2xl border border-brand-green/20 bg-brand-green-50 dark:bg-brand-green/10 p-8 sm:p-10 text-center">
          <div className="flex justify-center mb-4">
            <Menu size={28} className="text-brand-green" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            Need something? Find it in the menu above ↑
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Everything you need for life in the Research Triangle — all free, all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {directoryLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-brand-green/25 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-brand-green hover:bg-brand-green hover:text-white hover:border-brand-green transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Community Orgs strip
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-8">
        <div className="page-container text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Community Organizations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["TBSNC", "BANC", "BSA@NCSU", "BPOCNC", "MUNA", "BAIAN", "Trivuj", "RBT", "RTP Tigers", "Sundarban CC"].map((org) => (
              <Link
                key={org}
                href="/organizations"
                className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-brand-green hover:text-brand-green transition-colors"
              >
                {org}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
