import { EntrepreneurSubmitForm } from "@/components/entrepreneurs/SubmitForm";
import { Briefcase, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "List Your Business" };

const perks = [
  "100% free — no fees, no commissions",
  "Reach hundreds of Bangladeshi families in RTP",
  "Listings reviewed and posted within 48 hours",
  "Update or remove your listing anytime",
];

export default function EntrepreneurSubmitPage() {
  return (
    <div className="page-container py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-green mb-2">
            <Briefcase size={20} />
            <span className="text-sm font-medium uppercase tracking-wide">
              Free Business Listing
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3">
            List Your Business
          </h1>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Running a home business or offering a service to the RTP Bangladeshi community? Get
            listed for free. Your listing will appear on the{" "}
            <Link href="/entrepreneurs" className="text-brand-green hover:underline">
              Local Entrepreneurs
            </Link>{" "}
            page after a quick review (usually within 48 hours).
          </p>

          {/* Perks */}
          <ul className="space-y-2">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle2 size={15} className="text-brand-green shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <EntrepreneurSubmitForm />
      </div>
    </div>
  );
}
