"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { DualFlags } from "@/components/ui/CountryFlags";

const navLinks = [
  { href: "/grocery", label: "Halal Grocery" },
  { href: "/masjids", label: "Masjids" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/events", label: "Events" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/community", label: "Community" },
  { href: "/newcomer", label: "Newcomer Guide" },
  { href: "/directory", label: "Directory" },
  { href: "/entrepreneurs", label: "Entrepreneurs" },
  { href: "/organizations", label: "Organizations" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="page-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-brand-green">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white text-xs font-bold">
              বা
            </span>
            <span className="text-lg">BanglaRTP</span>
            <DualFlags size="xs" className="hidden sm:inline-flex opacity-80" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-brand-green dark:text-gray-300 dark:hover:bg-green-950 dark:hover:text-green-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
          <nav className="page-container py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-brand-green dark:text-gray-300 dark:hover:bg-green-950"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
