import Link from "next/link";
import { ShoppingCart, Plus } from "lucide-react";
import { marketplaceListings } from "@/data/marketplaceListings";
import { MarketplaceFeedClient } from "@/components/marketplace/MarketplaceFeedClient";

export const metadata = {
  title: "Community Marketplace | BanglaRTP",
  description:
    "Buy, sell, rent, find jobs, and offer services — the Bangladeshi community marketplace in Raleigh, Durham, Cary, Morrisville, and the Research Triangle.",
};

const betaMode =
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL === "https://your-project-ref.supabase.co";

export default function MarketplacePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green via-brand-green-light to-teal-600 text-white">
        <div className="page-container py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-green-200 mb-2">
                <ShoppingCart size={18} />
                <span className="text-sm font-medium uppercase tracking-wide">Community Marketplace</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">
                Buy, Sell, Rent, Hire
              </h1>
              <p className="text-green-100 max-w-xl">
                Furniture, sublets, jobs, services — your local Bangladeshi community marketplace in the Research Triangle. Free to post, free to browse.
              </p>
            </div>
            <Link
              href="/marketplace/new"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-brand-green font-semibold px-5 py-3 rounded-xl shadow-md hover:bg-green-50 transition-colors text-sm"
            >
              <Plus size={16} />
              Post a Listing
            </Link>
          </div>
        </div>
      </section>

      {/* Feed */}
      <div className="page-container py-10">
        <MarketplaceFeedClient listings={marketplaceListings} betaMode={betaMode} />
      </div>
    </div>
  );
}
