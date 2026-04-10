import Link from "next/link";

const links = {
  community: [
    { href: "/grocery", label: "Halal Grocery" },
    { href: "/masjids", label: "Masjids" },
    { href: "/restaurants", label: "Halal Restaurants" },
    { href: "/events", label: "Community Events" },
  ],
  resources: [
    { href: "/newcomer", label: "Newcomer Guide" },
    { href: "/directory", label: "Community Directory" },
    { href: "/about", label: "About & Contact" },
    { href: "/entrepreneurs", label: "Local Entrepreneurs" },
  ],
  orgs: [
    { href: "https://www.tbsnc.org", label: "TBSNC" },
    { href: "https://www.bancnc.org", label: "BANC" },
    { href: "https://orgs.ncsu.edu/bsa", label: "BSA@NCSU" },
    { href: "#", label: "BPOCNC" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 mt-16">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-brand-green mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white text-xs font-bold">বা</span>
              <span className="text-lg">BanglaRTP</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              A free community resource for Bangladeshis in the Research Triangle. Made with love by and for the community.
            </p>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Community</h3>
            <ul className="space-y-2">
              {links.community.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-500 hover:text-brand-green dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-500 hover:text-brand-green dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Orgs */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Community Orgs</h3>
            <ul className="space-y-2">
              {links.orgs.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-brand-green dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} BanglaRTP. Free and open for the community.
          </p>
          <p className="text-xs text-gray-400">
            See an error?{" "}
            <Link href="/about#contact" className="text-brand-green hover:underline">
              Let us know
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
