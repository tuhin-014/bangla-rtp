import { ShoppingCart } from "lucide-react";
import { NewListingForm } from "@/components/marketplace/NewListingForm";

export const metadata = { title: "Post a Listing | BanglaRTP Marketplace" };

export default function NewListingPage() {
  return (
    <div className="page-container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-green mb-2">
            <ShoppingCart size={20} />
            <span className="text-sm font-medium uppercase tracking-wide">Marketplace</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            Post a Listing
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sell an item, list a rental, post a job, or offer a service — free for the community.
          </p>
        </div>
        <NewListingForm />
      </div>
    </div>
  );
}
