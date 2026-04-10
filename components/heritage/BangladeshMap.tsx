"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// Division centers derived from official GeoJSON bounds
// viewBox "0 0 500 630", bounds: lon 88.084–92.673, lat 20.671–26.447
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

// Accurate path derived from Natural Earth / world.geo.json GeoJSON (public domain).
// 36 real border points, scaled to viewBox 0 0 500 630 with 10px padding.
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

export function BangladeshMap({ className }: { className?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <svg
      viewBox="0 0 500 630"
      className={cn("w-full h-full", className)}
      aria-label="Map of Bangladesh showing 8 administrative divisions"
      role="img"
    >
      <defs>
        <filter id="map-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="3" stdDeviation="6" floodColor="#006A4E" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Country outline — accurate GeoJSON-derived path */}
      <path
        d={OUTLINE}
        fill="#006A4E"
        stroke="#004d37"
        strokeWidth="2.5"
        strokeLinejoin="round"
        filter="url(#map-shadow)"
      />

      {/* Division hover hit areas */}
      {DIVISIONS.map((div) => (
        <circle
          key={`hit-${div.id}`}
          cx={div.cx}
          cy={div.cy}
          r={38}
          fill="transparent"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setHovered(div.id)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}

      {/* Division dots */}
      {DIVISIONS.map((div) => (
        <circle
          key={`dot-${div.id}`}
          cx={div.cx}
          cy={div.cy}
          r={div.capital ? 7 : 5}
          fill={div.capital ? "#F42A41" : "white"}
          fillOpacity={div.capital ? 1 : 0.8}
          stroke={div.capital ? "white" : "rgba(0,74,55,0.6)"}
          strokeWidth="1.5"
          className="pointer-events-none"
          style={{ transition: "r 0.15s" }}
        />
      ))}

      {/* Division labels */}
      {DIVISIONS.map((div) => {
        const show = hovered === div.id || div.capital;
        return (
          <text
            key={`label-${div.id}`}
            x={div.cx}
            y={div.cy - (div.capital ? 13 : 11)}
            textAnchor="middle"
            fontSize={div.capital ? 15 : 13}
            fontWeight={div.capital ? "700" : "400"}
            fill="white"
            opacity={show ? 1 : 0.6}
            className="pointer-events-none select-none"
            style={{
              fontFamily: "system-ui, sans-serif",
              transition: "opacity 0.15s",
            }}
          >
            {div.name}
          </text>
        );
      })}

      {/* Capital star */}
      <text
        x={252.2}
        y={312}
        textAnchor="middle"
        fontSize="10"
        fill="rgba(255,255,255,0.55)"
        className="pointer-events-none select-none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        ★ Capital
      </text>
    </svg>
  );
}
