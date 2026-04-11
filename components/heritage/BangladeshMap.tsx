"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, MapPin, Users, Maximize2 } from "lucide-react";

// ── Division info ─────────────────────────────────────────────────────────────
const divisionInfo: Record<string, {
  name: string; bangla: string; capital: string;
  population: string; area: string; description: string; highlight: string;
}> = {
  Dhaka: {
    name: "Dhaka", bangla: "ঢাকা", capital: "Dhaka (National Capital)",
    population: "~44 million", area: "20,508 km²",
    description: "The capital division of Bangladesh and its political, economic, and cultural heart. Home to the national government, the iconic Jatiyo Sangsad Bhaban, and over 20 million people in the metropolitan area. Known for its vibrant culture, historic Old Dhaka, and bustling commerce.",
    highlight: "National capital",
  },
  Chittagong: {
    name: "Chittagong (Chattogram)", bangla: "চট্টগ্রাম", capital: "Chittagong",
    population: "~33 million", area: "33,909 km²",
    description: "Bangladesh's largest port and second-most populous division. Home to Cox's Bazar (the world's longest natural sea beach), the Chittagong Hill Tracts, and the country's major industrial hub. The port city drives much of Bangladesh's international trade.",
    highlight: "Major port and Cox's Bazar",
  },
  Rajshahi: {
    name: "Rajshahi", bangla: "রাজশাহী", capital: "Rajshahi",
    population: "~21 million", area: "18,174 km²",
    description: "Known as the \"silk city\" and one of Bangladesh's most educated regions. Famous for mango orchards, the Padma River, archaeological sites like Paharpur Buddhist Monastery (UNESCO World Heritage), and the renowned University of Rajshahi.",
    highlight: "Silk and mangoes",
  },
  Khulna: {
    name: "Khulna", bangla: "খুলনা", capital: "Khulna",
    population: "~17 million", area: "22,272 km²",
    description: "Gateway to the Sundarbans, the world's largest mangrove forest and home of the Royal Bengal Tiger. Includes the UNESCO World Heritage Shat Gombuj Masjid at Bagerhat and is a major center for shrimp farming and jute production.",
    highlight: "Sundarbans and Royal Bengal Tigers",
  },
  Sylhet: {
    name: "Sylhet", bangla: "সিলেট", capital: "Sylhet",
    population: "~11 million", area: "12,635 km²",
    description: "The tea capital of Bangladesh, famous for its rolling tea gardens, lush green hills, and natural beauty. Home to Ratargul Swamp Forest, Jaflong, and the shrine of Hazrat Shah Jalal. Also well known for the large Bangladeshi-origin diaspora in the UK.",
    highlight: "Tea gardens and natural beauty",
  },
  Barisal: {
    name: "Barisal (Barishal)", bangla: "বরিশাল", capital: "Barisal",
    population: "~9 million", area: "13,225 km²",
    description: "Known as the \"Venice of Bengal\" for its network of rivers, canals, and floating markets. An agricultural heartland producing rice, lentils, and guavas, with a rich cultural heritage and the famous floating guava market at Swarupkathi.",
    highlight: "Rivers and floating markets",
  },
  Rangpur: {
    name: "Rangpur", bangla: "রংপুর", capital: "Rangpur",
    population: "~18 million", area: "16,317 km²",
    description: "The northernmost division, known for its flat fertile plains and as a major rice-producing region. Home to the historic Tajhat Palace, the Kantajew Temple at Dinajpur with its terracotta artwork, and the unique culture of the Rangpuri people.",
    highlight: "Northern agricultural heartland",
  },
  Mymensingh: {
    name: "Mymensingh", bangla: "ময়মনসিংহ", capital: "Mymensingh",
    population: "~12 million", area: "10,485 km²",
    description: "Bangladesh's newest division (formed in 2015), known for the Mymensingh Gitika folk ballads, the Bangladesh Agricultural University, and the ancient ruins at Sherpur. A cultural and agricultural center with deep ties to Bengali folk traditions.",
    highlight: "Folk culture and agriculture",
  },
};

// ── Division centers (viewBox 0 0 500 630) ───────────────────────────────────
const DIVISIONS = [
  { id: "rangpur",    name: "Rangpur",    cx: 131.9, cy:  83.6 },
  { id: "rajshahi",   name: "Rajshahi",   cx:  74.4, cy: 226.1 },
  { id: "mymensingh", name: "Mymensingh", cx: 252.2, cy: 183.9 },
  { id: "dhaka",      name: "Dhaka",      cx: 252.2, cy: 289.5, capital: true },
  { id: "sylhet",     name: "Sylhet",     cx: 409.2, cy: 236.7 },
  { id: "khulna",     name: "Khulna",     cx: 147.6, cy: 395.1 },
  { id: "barisal",    name: "Barisal",    cx: 247.0, cy: 426.8 },
  { id: "chittagong", name: "Chittagong", cx: 398.7, cy: 426.8 },
];

const OUTLINE =
  "M490.0,475.3 L487.9,551.0 L451.3,535.0 L458.2,620.0 " +
  "L428.3,564.9 L422.3,511.1 L402.4,460.3 L358.6,398.8 " +
  "L262.3,394.6 L271.8,438.1 L239.0,496.9 L194.4,475.5 " +
  "L179.2,494.7 L149.6,483.2 L109.1,473.7 L92.8,386.8 " +
  "L56.6,307.3 L74.4,243.7 L10.0,215.4 L33.2,176.9 " +
  "L98.6,137.6 L23.1,81.7 L60.1,10.0 L142.9,55.6 " +
  "L192.9,60.8 L202.1,134.3 L301.6,148.8 L398.7,147.2 " +
  "L459.0,165.2 L410.7,254.6 L363.9,260.7 L331.6,320.8 " +
  "L388.9,375.6 L406.0,308.1 L434.9,307.7 Z";

// ── Info panel ────────────────────────────────────────────────────────────────
function DivisionPanel({
  name,
  onClose,
}: {
  name: string;
  onClose: () => void;
}) {
  const info = divisionInfo[name];
  if (!info) return null;

  return (
    <div className="flex flex-col rounded-2xl border border-brand-green/30 bg-white dark:bg-gray-900 shadow-lg overflow-hidden h-full">
      {/* Header */}
      <div className="bg-brand-green px-5 py-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-bangla text-2xl text-white font-bold leading-tight">{info.bangla}</p>
          <p className="text-green-200 text-sm mt-0.5">{info.name}</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors mt-0.5 flex-shrink-0"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 border-b border-gray-100 dark:border-gray-800">
        <div className="px-4 py-3 border-r border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-1.5 text-gray-400 mb-1">
            <Users size={11} />
            <span className="text-xs uppercase tracking-wide">Population</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{info.population}</p>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center gap-1.5 text-gray-400 mb-1">
            <Maximize2 size={11} />
            <span className="text-xs uppercase tracking-wide">Area</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{info.area}</p>
        </div>
      </div>

      {/* Capital */}
      <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800">
        <MapPin size={13} className="text-brand-red shrink-0" />
        <span className="text-sm text-gray-700 dark:text-gray-300">{info.capital}</span>
      </div>

      {/* Description */}
      <div className="px-4 py-4 flex-1">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{info.description}</p>
      </div>

      {/* Highlight tag */}
      <div className="px-4 pb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-50 dark:bg-brand-green/10 border border-brand-green/20 px-3 py-1 text-xs font-medium text-brand-green">
          ✦ {info.highlight}
        </span>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function BangladeshMap({ className }: { className?: string }) {
  const [hovered, setHovered]   = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const handleDotClick = (name: string) => {
    setSelected((prev) => (prev === name ? null : name));
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Map + panel layout: side-by-side on md+, stacked on mobile */}
      <div className={cn(
        "flex gap-6",
        selected ? "flex-col md:flex-row items-start" : "flex-col items-center"
      )}>

        {/* SVG map */}
        <div className={cn(
          "transition-all duration-300",
          selected ? "w-full md:w-56 lg:w-64 flex-shrink-0" : "w-full max-w-xs"
        )}>
          <svg
            viewBox="0 0 500 630"
            className="w-full h-full"
            aria-label="Interactive map of Bangladesh — click a division to learn more"
            role="img"
          >
            <defs>
              <filter id="map-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="2" dy="3" stdDeviation="6" floodColor="#006A4E" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Country outline */}
            <path
              d={OUTLINE}
              fill="#006A4E"
              stroke="#004d37"
              strokeWidth="2.5"
              strokeLinejoin="round"
              filter="url(#map-shadow)"
            />

            {/* Division hit areas + dots + labels */}
            {DIVISIONS.map((div) => {
              const isSelected = selected === div.name;
              const isHovered  = hovered  === div.name;
              const active     = isSelected || isHovered;

              return (
                <g key={div.id}>
                  {/* Large invisible hit area */}
                  <circle
                    cx={div.cx} cy={div.cy} r={40}
                    fill="transparent"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDotClick(div.name)}
                    onMouseEnter={() => setHovered(div.name)}
                    onMouseLeave={() => setHovered(null)}
                  />

                  {/* Pulse ring when selected */}
                  {isSelected && (
                    <circle
                      cx={div.cx} cy={div.cy}
                      r={div.capital ? 14 : 11}
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                    />
                  )}

                  {/* Dot */}
                  <circle
                    cx={div.cx} cy={div.cy}
                    r={div.capital ? (active ? 9 : 7) : (active ? 7 : 5)}
                    fill={div.capital ? "#F42A41" : (isSelected ? "white" : "white")}
                    fillOpacity={div.capital ? 1 : (isSelected ? 1 : 0.8)}
                    stroke={isSelected ? "#F42A41" : (div.capital ? "white" : "rgba(0,74,55,0.6)")}
                    strokeWidth={isSelected ? 2 : 1.5}
                    className="pointer-events-none"
                    style={{ transition: "r 0.15s" }}
                  />

                  {/* Label */}
                  <text
                    x={div.cx}
                    y={div.cy - (div.capital ? 13 : 11)}
                    textAnchor="middle"
                    fontSize={div.capital ? 15 : 13}
                    fontWeight={div.capital || isSelected ? "700" : "400"}
                    fill="white"
                    opacity={active || div.capital ? 1 : 0.6}
                    className="pointer-events-none select-none"
                    style={{ fontFamily: "system-ui, sans-serif", transition: "opacity 0.15s" }}
                  >
                    {div.name}
                  </text>

                  {/* "Click to learn more" tooltip on hover (not selected) */}
                  {isHovered && !isSelected && (
                    <text
                      x={div.cx}
                      y={div.cy + (div.capital ? 20 : 17)}
                      textAnchor="middle"
                      fontSize="10"
                      fill="rgba(255,255,255,0.75)"
                      className="pointer-events-none select-none"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      Click to learn more
                    </text>
                  )}
                </g>
              );
            })}

            {/* Capital star label */}
            {!selected && (
              <text x={252.2} y={312} textAnchor="middle" fontSize="10"
                fill="rgba(255,255,255,0.55)"
                className="pointer-events-none select-none"
                style={{ fontFamily: "system-ui, sans-serif" }}>
                ★ Capital
              </text>
            )}
          </svg>

          {/* Hint text */}
          {!selected && (
            <p className="mt-2 text-xs text-center text-gray-400">
              Click any division dot to explore it
            </p>
          )}
        </div>

        {/* Info panel */}
        {selected && (
          <div className="w-full md:flex-1">
            <DivisionPanel
              name={selected}
              onClose={() => setSelected(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
