import Link from "next/link";
import { BangladeshMap } from "@/components/heritage/BangladeshMap";
import { MapPin, BookOpen, Award, ChevronRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Heritage | BanglaRTP",
  description:
    "Explore Bangladesh's history, geography, and the extraordinary seven freedom fighters awarded the Bir Sreshtho — Bangladesh's highest military honor.",
};

// ── Wonders data ──────────────────────────────────────────────────────────────
const wonders = [
  {
    emoji: "🏛️",
    title: "Jatiyo Sangsad Bhaban",
    bangla: "জাতীয় সংসদ ভবন",
    subtitle: "National Parliament Building",
    location: "Sher-e-Bangla Nagar, Dhaka",
    type: "Architecture",
    typeBg: "bg-blue-100 text-blue-700",
    description:
      "Designed by American architect Louis Kahn, this iconic modernist masterpiece is considered one of the finest architectural achievements of the 20th century. The complex of bold geometric forms serves as the seat of Bangladesh's national parliament and is a symbol of the country's democratic aspirations.",
  },
  {
    emoji: "⚪",
    title: "Jatiyo Smriti Soudho",
    bangla: "জাতীয় স্মৃতি সৌধ",
    subtitle: "National Martyrs' Memorial",
    location: "Savar, Dhaka",
    type: "Historic",
    typeBg: "bg-brand-red-100 text-brand-red",
    description:
      "A towering 150-foot monument honoring the millions of martyrs who gave their lives in the 1971 Liberation War. Its seven triangular pylons rise together to form a soaring peak, symbolizing the pivotal moments of the Bangladeshi independence movement.",
  },
  {
    emoji: "🌊",
    title: "Cox's Bazar",
    bangla: "কক্সবাজার",
    subtitle: "World's Longest Natural Sea Beach",
    location: "Chittagong Division",
    type: "Nature",
    typeBg: "bg-teal-100 text-teal-700",
    description:
      "The world's longest natural sea beach, stretching 120 kilometers (75 miles) along the Bay of Bengal. Golden sand, gentle waves, and stunning sunsets make it Bangladesh's most beloved seaside destination and a major tourist draw.",
  },
  {
    emoji: "🐅",
    title: "The Sundarbans",
    bangla: "সুন্দরবন",
    subtitle: "World's Largest Mangrove Forest",
    location: "Khulna Division",
    type: "UNESCO",
    typeBg: "bg-green-100 text-green-700",
    description:
      "The world's largest mangrove forest and UNESCO World Heritage site, home to the iconic Royal Bengal Tiger. This vast delta of 10,000 square kilometers of tangled waterways, mudflats, and forest supports incredible biodiversity including crocodiles, spotted deer, and hundreds of bird species.",
  },
  {
    emoji: "🕌",
    title: "Shat Gombuj Masjid",
    bangla: "ষাট গম্বুজ মসজিদ",
    subtitle: "Sixty Dome Mosque",
    location: "Bagerhat, Khulna Division",
    type: "UNESCO",
    typeBg: "bg-green-100 text-green-700",
    description:
      "A 15th-century UNESCO World Heritage mosque built during the Bengal Sultanate, featuring 77 squat domes (traditionally counted as 60). Constructed by the Muslim saint Khan Jahan Ali around 1459, it is the largest historical mosque in Bangladesh and a masterpiece of medieval Islamic architecture in the subcontinent.",
  },
  {
    emoji: "🍃",
    title: "Sylhet Tea Gardens",
    bangla: "সিলেটের চা বাগান",
    subtitle: "Rolling Hills of Green",
    location: "Sylhet Division",
    type: "Nature",
    typeBg: "bg-teal-100 text-teal-700",
    description:
      "The rolling green hills of Sylhet are home to Bangladesh's sprawling tea estates, some of the oldest in South Asia. The region produces some of the world's finest tea and offers visitors breathtaking landscapes of terraced plantations, making it a jewel of Bangladeshi agricultural heritage.",
  },
];

// ── Timeline data ─────────────────────────────────────────────────────────────
const timeline = [
  {
    year: "1947",
    title: "Partition of India",
    body: "British India is partitioned into India and Pakistan. East Bengal becomes East Pakistan — geographically separated from West Pakistan by over 1,600 km, yet ruled from Karachi and Islamabad.",
  },
  {
    year: "1952",
    date: "February 21",
    title: "Language Movement — ভাষা আন্দোলন",
    body: "Pakistani authorities impose Urdu as the sole state language. Students and activists in Dhaka protest on February 21, 1952. Police open fire on the procession near Dhaka Medical College, killing Abul Barkat, Rafiquddin Ahmed, and others. The Shaheed Minar (Martyrs' Monument) is built in their memory. UNESCO later declares February 21 International Mother Language Day.",
    highlight: true,
  },
  {
    year: "1970",
    title: "Landslide Election",
    body: "Sheikh Mujibur Rahman's Awami League wins a sweeping majority in Pakistan's general elections — enough to form a government alone. West Pakistan's military establishment refuses to transfer power.",
  },
  {
    year: "1971",
    date: "March 7",
    title: "Historic Speech — ঐতিহাসিক ভাষণ",
    body: "Sheikh Mujibur Rahman delivers his iconic speech at the Racecourse Ground in Dhaka: \"এবারের সংগ্রাম আমাদের মুক্তির সংগ্রাম, এবারের সংগ্রাম স্বাধীনতার সংগ্রাম।\" — \"This struggle is for our liberation; this struggle is for independence.\" The speech galvanizes the nation.",
  },
  {
    year: "1971",
    date: "March 25–26",
    title: "Operation Searchlight & Declaration of Independence",
    body: "On the night of March 25, the Pakistan Army launches Operation Searchlight — a systematic military crackdown on Bengali civilians, students, and intellectuals in Dhaka. In the early hours of March 26, Sheikh Mujibur Rahman transmits a declaration of independence before being arrested. Major Ziaur Rahman broadcasts the declaration from Chittagong on March 27.",
    highlight: true,
  },
  {
    year: "1971",
    date: "March–December",
    title: "Liberation War — মুক্তিযুদ্ধ",
    body: "Nine months of brutal war. The Mukti Bahini (freedom fighters) fight the Pakistan Army alongside India's armed forces. Approximately 3 million Bangladeshis are killed. An estimated 200,000–400,000 women are subjected to sexual violence. Ten million refugees flee to India. The Birangona (war heroines) and muktijoddhas (freedom fighters) become the founding symbols of the nation.",
  },
  {
    year: "1971",
    date: "December 16",
    title: "Victory Day — বিজয় দিবস",
    body: "Pakistani Lt. General A.A.K. Niazi signs the instrument of surrender in Dhaka, in the presence of Indian General Jagjit Singh Aurora and Mukti Bahini commander General M.A.G. Osmani. Bangladesh emerges as a free and independent nation. December 16 is celebrated as Victory Day (Bijoy Dibosh) every year.",
    highlight: true,
  },
  {
    year: "1972",
    title: "Constitution & New Nation",
    body: "Bangladesh adopts its constitution on November 4, 1972, enshrining democracy, nationalism, secularism, and socialism as founding principles. Sheikh Mujibur Rahman — hailed as Bangabandhu (Friend of Bengal) — serves as the first Prime Minister. Dhaka becomes the capital of the new republic.",
  },
  {
    year: "2000",
    title: "International Mother Language Day",
    body: "UNESCO officially declares February 21 as International Mother Language Day, honoring the sacrifice of the language martyrs of 1952 and promoting linguistic diversity worldwide. Bangladesh's Language Movement becomes a symbol of linguistic rights for all humanity.",
  },
];

// ── Bir Sreshtho data ─────────────────────────────────────────────────────────
const birSreshtho = [
  {
    id: 1,
    name: "Captain Mohiuddin Jahangir",
    bangla: "ক্যাপ্টেন মহিউদ্দিন জাহাঙ্গীর",
    initial: "ম",
    rank: "Captain",
    branch: "Bangladesh Army · East Bengal Regiment",
    sector: "Sector 7",
    martyred: "December 14, 1971",
    location: "Chapai Nawabganj",
    contribution:
      "Led a frontal assault on a fortified Pakistani bunker on the banks of the Mahananda River to open the path for the Allied advance. Killed while clearing the enemy position under heavy fire. Buried at the site of his final battle — his tomb in Chapai Nawabganj is a national monument.",
    legacy: "\"He gave his life for freedom on the banks of the Mahananda.\"",
  },
  {
    id: 2,
    name: "Flight Lieutenant Matiur Rahman",
    bangla: "ফ্লাইট লেফটেন্যান্ট মতিউর রহমান",
    initial: "ম",
    rank: "Flight Lieutenant",
    branch: "Pakistan Air Force (defected)",
    sector: "Air — Pakistan",
    martyred: "August 20, 1971",
    location: "Near Thatta, Sindh, Pakistan",
    contribution:
      "In a remarkable act of defiance, attempted to hijack a Pakistani T-33 training jet from Masrur Air Base to fly it to India and join the Liberation War. Killed when the aircraft crashed during a struggle for control. His body was returned to Bangladesh in 2006 and reburied with full state honors in Dhaka Cantonment.",
    legacy: "\"He reached across a thousand miles to fight for his homeland.\"",
  },
  {
    id: 3,
    name: "Lance Naik Munshi Abdur Rouf",
    bangla: "ল্যান্স নায়েক মুন্সি আব্দুর রউফ",
    initial: "র",
    rank: "Lance Naik",
    branch: "East Pakistan Rifles (EPR)",
    sector: "Rangamati",
    martyred: "April 20, 1971",
    location: "Buri Ghat, Rangamati",
    contribution:
      "One of the first freedom fighters to sacrifice his life. Held his ground against advancing Pakistani forces with a light machine gun near the Kaptai river, allowing his comrades to retreat safely. Killed by a mortar shell while providing covering fire. He was among the earliest to take up arms.",
    legacy: "\"He held the line so others could live to fight.\"",
  },
  {
    id: 4,
    name: "Lance Naik Nur Mohammad Sheikh",
    bangla: "ল্যান্স নায়েক নূর মোহাম্মদ শেখ",
    initial: "ন",
    rank: "Lance Naik",
    branch: "East Pakistan Rifles",
    sector: "Jessore",
    martyred: "September 5, 1971",
    location: "Goalhati, Jessore",
    contribution:
      "Carried a wounded comrade on his back while under withering enemy fire. Despite being shot multiple times, refused to abandon his fallen brother or his post. Continued to engage the enemy with his remaining strength, holding the position until death. A symbol of both courage and devotion.",
    legacy: "\"He bore the weight of a friend and the fury of an army — and did not yield.\"",
  },
  {
    id: 5,
    name: "Sepoy Hamidur Rahman",
    bangla: "সিপাহী হামিদুর রহমান",
    initial: "হ",
    rank: "Sepoy",
    branch: "East Bengal Regiment",
    sector: "Moulvibazar",
    martyred: "October 28, 1971",
    location: "Dhalai, Moulvibazar",
    contribution:
      "The youngest of the seven Bir Sreshtho — only 18 years old. Destroyed a fortified Pakistani army machine-gun bunker with a grenade, clearing the path for his unit's advance. Killed moments later in fierce hand-to-hand combat. His body was returned from Tripura, India in 2007 and reburied with national honors.",
    legacy: "\"He was 18 years old and he walked into history.\"",
  },
  {
    id: 6,
    name: "Sepoy Mohammad Mostafa Kamal",
    bangla: "সিপাহী মোহাম্মদ মোস্তফা কামাল",
    initial: "ক",
    rank: "Sepoy",
    branch: "East Bengal Regiment",
    sector: "Brahmanbaria",
    martyred: "April 18, 1971",
    location: "Daruin, Brahmanbaria",
    contribution:
      "Among the earliest to fall in battle. Refused to retreat from his forward position despite being overwhelmed by Pakistani forces. Single-handedly held off a determined enemy advance with his light machine gun, allowing his entire unit to withdraw safely. Killed at his post after exhausting his ammunition.",
    legacy: "\"He stayed so every man behind him could go home.\"",
  },
  {
    id: 7,
    name: "Engine Room Artificer Mohammad Ruhul Amin",
    bangla: "ইঞ্জিন রুম আর্টিফিশার মোহাম্মদ রুহুল আমিন",
    initial: "র",
    rank: "Engine Room Artificer",
    branch: "Bangladesh Navy",
    sector: "Khulna — Naval",
    martyred: "December 10, 1971",
    location: "Rupsha River, Khulna",
    contribution:
      "Chief Engineer of gunboat BNS Palash. During a Pakistani air strike, continued to operate the engine room through fire and flooding — keeping the vessel functional so the crew could fight and escape. Killed ensuring the survivors could reach safety. The only Bir Sreshtho from the Bangladesh Navy.",
    legacy: "\"The engine room was his battlefield, and he never abandoned his post.\"",
  },
];

export default function HeritagePage() {
  return (
    <div>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-green-50 via-white to-white py-16">
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-10"
          style={{ background: "#F42A41" }}
        />
        <div className="page-container relative text-center max-w-3xl mx-auto">
          <p className="font-bangla text-5xl font-bold text-brand-green mb-2">
            বীর বাংলাদেশ
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            Our Heritage
          </h1>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Bangladesh was born through sacrifice, language, and an unyielding spirit. Explore the land,
            the history, and the seven extraordinary men who gave everything for freedom.
          </p>

          {/* Jump nav */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "#map",       label: "Bangladesh Map", icon: MapPin },
              { href: "#wonders",   label: "Wonders",        icon: Sparkles },
              { href: "#history",   label: "History",        icon: BookOpen },
              { href: "#bir-sreshtho", label: "Bir Sreshtho", icon: Award },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-green/30 bg-brand-green-50 dark:bg-brand-green/10 px-5 py-2.5 text-sm font-medium text-brand-green hover:bg-brand-green hover:text-white transition-colors"
              >
                <Icon size={15} />
                {label}
                <ChevronRight size={13} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1: Map ────────────────────────────────────────────────── */}
      <section id="map" className="page-container py-16 scroll-mt-20">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <MapPin size={18} />
          <span className="text-sm font-semibold uppercase tracking-wide">Geography</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
          Bangladesh on the Map
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs mx-auto">
              <BangladeshMap className="drop-shadow-lg" />
            </div>
            <p className="mt-4 text-xs text-center text-gray-400 max-w-xs leading-relaxed">
              People&apos;s Republic of Bangladesh &mdash; Capital: Dhaka &mdash;
              Area: 147,570 km² &mdash; Population: ~170 million
            </p>
            <p className="mt-1 text-xs text-center text-gray-400">
              Hover over each division to see its name.
            </p>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-brand-green text-white p-6">
              <p className="font-bangla text-2xl font-bold mb-1">বাংলাদেশ</p>
              <p className="text-green-200 text-sm mb-4">People&apos;s Republic of Bangladesh</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Capital", "Dhaka"],
                  ["Area", "147,570 km²"],
                  ["Population", "~170 million"],
                  ["Language", "Bangla (Bengali)"],
                  ["Currency", "Bangladeshi Taka"],
                  ["Independence", "December 16, 1971"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-green-300 text-xs uppercase tracking-wide">{k}</p>
                    <p className="text-white font-medium">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">8 Administrative Divisions</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Dhaka ★", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"].map((d) => (
                  <div key={d} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-brand-green inline-block shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-red/20 bg-brand-red-50 dark:bg-brand-red/10 p-5">
              <p className="font-bangla text-xl text-brand-green font-bold mb-1">আমার সোনার বাংলা</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                &ldquo;My Bengal of gold, I love you&rdquo;
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                — Opening line of Bangladesh&apos;s national anthem, written by Rabindranath Tagore.{" "}
                <Link href="/anthems" className="text-brand-green hover:underline font-medium">
                  Listen to the anthem →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 1b: Wonders of Bangladesh ────────────────────────────── */}
      <section id="wonders" className="page-container py-16 scroll-mt-20">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <Sparkles size={18} />
          <span className="text-sm font-semibold uppercase tracking-wide">Landmarks &amp; Wonders</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          Wonders of Bangladesh — <span className="font-bangla font-normal">ঐতিহ্যবাহী বাংলাদেশ</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-2xl">
          Bangladesh is home to architectural marvels, natural wonders, and cultural treasures that tell the story of our land.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wonders.map((w) => (
            <div
              key={w.title}
              className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-brand-cream dark:bg-gray-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              {/* Accent bar */}
              <div className="h-1.5 bg-brand-green w-full" />

              <div className="p-6 flex flex-col flex-1 gap-3">
                {/* Emoji + type badge */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-4xl leading-none">{w.emoji}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${w.typeBg}`}>
                    {w.type}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-brand-green text-lg leading-tight group-hover:text-brand-green-light transition-colors">
                    {w.title}
                  </h3>
                  <p className="font-bangla text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {w.bangla}
                  </p>
                  <p className="text-xs text-gray-400 italic mt-0.5">{w.subtitle}</p>
                </div>

                {/* Location */}
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                  <MapPin size={11} className="shrink-0 text-brand-green" />
                  {w.location}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                  {w.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: History Timeline ───────────────────────────────────── */}
      <section id="history" className="bg-gray-50 dark:bg-gray-900/50 py-16 scroll-mt-20">
        <div className="page-container">
          <div className="flex items-center gap-2 text-brand-green mb-2">
            <BookOpen size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">History</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-10">
            The Road to Independence
          </h2>

          <div className="relative max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-0.5 bg-brand-green-100 dark:bg-brand-green/20" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-6">
                  {/* Year badge */}
                  <div className="flex-shrink-0 flex flex-col items-center" style={{ width: "6.5rem" }}>
                    <div className={`z-10 rounded-xl px-3 py-1.5 text-center text-sm font-bold shadow-sm ${
                      item.highlight
                        ? "bg-brand-red text-white"
                        : "bg-brand-green text-white"
                    }`}>
                      {item.year}
                    </div>
                    {item.date && (
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center leading-tight">
                        {item.date}
                      </p>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 rounded-2xl border p-5 shadow-sm mb-1 ${
                    item.highlight
                      ? "border-brand-red/30 bg-brand-red-50 dark:bg-brand-red/10 dark:border-brand-red/20"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                  }`}>
                    <h3 className={`font-bold mb-2 ${
                      item.highlight ? "text-brand-red" : "text-brand-green"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Bir Sreshtho ────────────────────────────────────────── */}
      <section id="bir-sreshtho" className="page-container py-16 scroll-mt-20">
        <div className="flex items-center gap-2 text-brand-red mb-2">
          <Award size={18} />
          <span className="text-sm font-semibold uppercase tracking-wide">Highest Military Honor</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          বীরশ্রেষ্ঠ — The Seven Bir Sreshtho
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-2 max-w-2xl">
          <em>Bir Sreshtho</em> (বীরশ্রেষ্ঠ — "Bravest of the Brave") is the highest military award
          of Bangladesh. Only seven men have ever received it — all posthumously, all for acts of
          extraordinary valor during the 1971 Liberation War.
        </p>
        <p className="text-sm text-brand-red font-medium mb-10">
          All seven were killed in action. All seven are national heroes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {birSreshtho.map((hero) => (
            <div
              key={hero.id}
              className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-brand-green w-full" />

              <div className="p-6 flex flex-col flex-1 gap-3">
                {/* Avatar + name */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-brand-green flex items-center justify-center text-white text-2xl font-bold shadow">
                    {hero.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green leading-tight text-base">
                      {hero.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-bangla">
                      {hero.bangla}
                    </p>
                  </div>
                </div>

                {/* Rank & branch */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-brand-green-50 dark:bg-brand-green/10 px-2.5 py-0.5 text-xs font-medium text-brand-green">
                    {hero.rank}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs text-gray-600 dark:text-gray-300">
                    {hero.sector}
                  </span>
                </div>

                {/* Branch */}
                <p className="text-xs text-gray-500 dark:text-gray-400">{hero.branch}</p>

                {/* Martyred */}
                <p className="text-sm font-semibold text-brand-red flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block shrink-0" />
                  Martyred: {hero.martyred}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <MapPin size={11} className="shrink-0" />
                  {hero.location}
                </p>

                {/* Contribution */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                  {hero.contribution}
                </p>

                {/* Legacy quote */}
                <div className="rounded-xl bg-brand-green-50 dark:bg-brand-green/10 border border-brand-green/20 px-4 py-3 mt-auto">
                  <p className="text-xs text-brand-green italic leading-relaxed">
                    {hero.legacy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 rounded-2xl border border-brand-red/20 bg-brand-red-50 dark:bg-brand-red/10 p-6 text-center max-w-2xl mx-auto">
          <p className="font-bangla text-2xl text-brand-red mb-2">তাদের আত্মত্যাগ ভুলি নাই</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-1">
            &ldquo;We have not forgotten their sacrifice.&rdquo;
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            The Bir Sreshtho award was established in 1973. The full classification of freedom fighters
            includes four tiers: Bir Sreshtho (7), Bir Uttam (68), Bir Bikrom (175), and Bir Pratik (426).
          </p>
        </div>
      </section>

      {/* ── Footer CTA ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="page-container max-w-3xl mx-auto text-center">
          <p className="font-bangla text-3xl text-brand-green font-bold mb-2">আমাদের গর্ব, আমাদের শিকড়</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm italic mb-6">
            &ldquo;Our pride, our roots&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/anthems" className="btn-primary text-sm">
              Listen to the National Anthem →
            </Link>
            <Link href="/" className="btn-outline text-sm">
              Back to BanglaRTP
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
