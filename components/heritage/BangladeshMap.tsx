"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// Division centers (approximate, in SVG coordinate space)
// viewBox "0 0 520 660": x = (lon - 87.9) * 107, y = (26.7 - lat) * 107
const DIVISIONS = [
  { id: "rangpur",    name: "Rangpur",    cx: 145, cy: 102 },
  { id: "rajshahi",   name: "Rajshahi",   cx:  88, cy: 246 },
  { id: "mymensingh", name: "Mymensingh", cx: 262, cy: 200 },
  { id: "dhaka",      name: "Dhaka",      cx: 267, cy: 310, capital: true },
  { id: "sylhet",     name: "Sylhet",     cx: 422, cy: 252 },
  { id: "khulna",     name: "Khulna",     cx: 155, cy: 408 },
  { id: "barisal",    name: "Barisal",    cx: 258, cy: 455 },
  { id: "chittagong", name: "Chittagong", cx: 418, cy: 450 },
];

// Simplified but recognizable outline of Bangladesh, clockwise from NW corner.
// Coordinates derived from WGS-84 border points mapped to the viewBox.
const OUTLINE =
  "M18,7 L64,7 L118,13 L171,32 L203,37 " +
  "L246,64 L278,80 L299,113 L331,150 L363,182 " +
  // Sylhet protrusion NE
  "L406,171 L465,193 L471,257 " +
  // Down Tripura / Mizoram
  "L439,321 L428,396 " +
  // Chittagong coast
  "L452,428 L490,471 L479,535 " +
  // Cox's Bazar tip
  "L449,599 L439,638 " +
  // Bay of Bengal coast going west
  "L385,577 L332,556 L289,567 " +
  "L246,503 L203,482 L160,503 " +
  // Sundarbans
  "L128,514 L118,493 L86,471 L64,428 " +
  // West border going north
  "L54,385 L32,342 L21,289 L11,235 " +
  "L16,182 L19,128 L18,64 Z";

export function BangladeshMap({ className }: { className?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <svg
      viewBox="0 0 520 660"
      className={cn("w-full h-full", className)}
      aria-label="Map of Bangladesh showing 8 administrative divisions"
      role="img"
    >
      {/* Drop shadow filter */}
      <defs>
        <filter id="map-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="3" stdDeviation="6" floodColor="#006A4E" floodOpacity="0.25" />
        </filter>
        {/* River blue */}
        <style>{`
          .division-label {
            font-family: system-ui, sans-serif;
            font-size: 13px;
            fill: rgba(255,255,255,0.92);
            pointer-events: none;
            user-select: none;
          }
          .division-label.capital {
            font-size: 15px;
            font-weight: 700;
            fill: white;
          }
          .division-dot {
            cursor: pointer;
            transition: r 0.15s;
          }
        `}</style>
      </defs>

      {/* Country fill */}
      <path
        d={OUTLINE}
        fill="#006A4E"
        stroke="#004d37"
        strokeWidth="2.5"
        strokeLinejoin="round"
        filter="url(#map-shadow)"
      />

      {/* Simplified major rivers (Padma/Meghna/Jamuna) */}
      {/* Jamuna: NW to Dhaka area */}
      <path d="M145,60 Q165,120 180,180 Q200,240 230,290 Q250,320 267,310"
        fill="none" stroke="#80C4A8" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
      {/* Meghna: Dhaka to coast */}
      <path d="M267,310 Q272,360 278,410 Q270,460 260,500"
        fill="none" stroke="#80C4A8" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />

      {/* Division hover areas (invisible, just for interaction) */}
      {DIVISIONS.map((div) => (
        <circle
          key={`hit-${div.id}`}
          cx={div.cx}
          cy={div.cy}
          r={40}
          fill="transparent"
          className="division-dot"
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
          r={div.capital ? (hovered === div.id ? 9 : 7) : (hovered === div.id ? 7 : 5)}
          fill={div.capital ? "#F42A41" : "white"}
          fillOpacity={div.capital ? 1 : 0.75}
          stroke={div.capital ? "white" : "#006A4E"}
          strokeWidth="1.5"
          style={{ transition: "r 0.15s" }}
          className="pointer-events-none"
        />
      ))}

      {/* Division labels */}
      {DIVISIONS.map((div) => {
        const show = hovered === div.id || div.capital;
        const y = div.capital ? div.cy - 14 : div.cy - 12;
        return (
          <text
            key={`label-${div.id}`}
            x={div.cx}
            y={y}
            textAnchor="middle"
            className={`division-label${div.capital ? " capital" : ""}`}
            opacity={show ? 1 : 0.55}
            style={{ transition: "opacity 0.15s" }}
          >
            {div.name}
          </text>
        );
      })}

      {/* Capital star indicator */}
      <text x={267} y={335} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" className="pointer-events-none select-none">
        ★ Capital
      </text>
    </svg>
  );
}
