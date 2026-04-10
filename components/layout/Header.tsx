"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DualFlags } from "@/components/ui/CountryFlags";

// ── Nav structure ─────────────────────────────────────────────────────────────
const navGroups = [
  {
    label: "Discover",
    links: [
      { href: "/grocery",       label: "Halal Grocery" },
      { href: "/masjids",       label: "Masjids" },
      { href: "/restaurants",   label: "Restaurants" },
      { href: "/events",        label: "Events" },
      { href: "/organizations", label: "Organizations" },
      { href: "/entrepreneurs", label: "Entrepreneurs" },
      { href: "/directory",     label: "Directory" },
    ],
  },
  {
    label: "Community",
    links: [
      { href: "/community",  label: "Community Feed" },
      { href: "/marketplace", label: "Marketplace" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "/newcomer", label: "Newcomer Guide" },
      { href: "/heritage", label: "Our Heritage" },
      { href: "/anthems",  label: "National Anthems" },
    ],
  },
];

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

// ── Dropdown button ────────────────────────────────────────────────────────────
function NavDropdown({
  group,
  open,
  onOpen,
  onClose,
}: {
  group: (typeof navGroups)[number];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          open
            ? "bg-brand-green-50 text-brand-green dark:bg-brand-green/10 dark:text-green-400"
            : "text-gray-700 hover:bg-brand-green-50 hover:text-brand-green dark:text-gray-300 dark:hover:bg-brand-green/10 dark:hover:text-green-400"
        )}
        aria-expanded={open}
      >
        {group.label}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-150", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-44 rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
          <div className="py-1.5">
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green dark:text-gray-300 dark:hover:bg-brand-green/10 dark:hover:text-green-400 transition-colors"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Header ───────────────────────────────────────────────────────────────
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="page-container">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-brand-green flex-shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white text-xs font-bold">
              বা
            </span>
            <span className="text-lg">BanglaRTP</span>
            <DualFlags size="xs" className="hidden sm:inline-flex opacity-80" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Home */}
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-green-50 hover:text-brand-green dark:text-gray-300 dark:hover:bg-brand-green/10 dark:hover:text-green-400 transition-colors"
            >
              Home
            </Link>

            {/* Dropdown groups */}
            {navGroups.map((group) => (
              <NavDropdown
                key={group.label}
                group={group}
                open={openDropdown === group.label}
                onOpen={() => setOpenDropdown(group.label)}
                onClose={() => setOpenDropdown(null)}
              />
            ))}

            {/* About */}
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-green-50 hover:text-brand-green dark:text-gray-300 dark:hover:bg-brand-green/10 dark:hover:text-green-400 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 max-h-[80vh] overflow-y-auto">
          <nav className="page-container py-3 space-y-1">
            {/* Home */}
            <Link
              href="/"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-green-50 hover:text-brand-green dark:text-gray-300"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Grouped sections */}
            {navGroups.map((group) => (
              <div key={group.label}>
                <button
                  className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === group.label ? null : group.label)
                  }
                >
                  {group.label}
                  <ChevronDown
                    size={14}
                    className={cn(
                      "text-gray-400 transition-transform duration-150",
                      mobileExpanded === group.label && "rotate-180"
                    )}
                  />
                </button>
                {mobileExpanded === group.label && (
                  <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-brand-green-100 dark:border-brand-green/20 pl-3">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:text-brand-green dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileExpanded(null);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* About */}
            <Link
              href="/about"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-green-50 hover:text-brand-green dark:text-gray-300"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
