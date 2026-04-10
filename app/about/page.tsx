import Link from "next/link";
import { Heart, Mail, AlertCircle, Building2 } from "lucide-react";
import { ContactForm } from "@/components/about/ContactForm";
import { BangladeshFlag, USFlag } from "@/components/ui/CountryFlags";

export const metadata = { title: "About | BanglaRTP" };

export default function AboutPage() {
  return (
    <div className="page-container py-12">
      {/* Mission */}
      <section className="mb-14 max-w-3xl">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <Heart size={20} />
          <span className="text-sm font-medium uppercase tracking-wide">Our Mission</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          About BanglaRTP
        </h1>
        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            BanglaRTP is a <strong className="text-gray-900 dark:text-gray-100">free, community-built resource</strong> for Bangladeshis living in or moving to the Research Triangle area of North Carolina — Raleigh, Durham, Chapel Hill, Cary, Morrisville, and surrounding communities.
          </p>
          <p>
            The RTP area is home to a vibrant and growing Bangladeshi community — from NC State and UNC students, to H-1B tech workers at Cisco, Red Hat, SAS, and IBM, to long-time families who have built their lives here. Yet for newcomers, finding halal food, a Bengali-speaking doctor, or the right school can feel overwhelming.
          </p>
          <p>
            BanglaRTP was built to solve that. Every resource here is free. There are no ads, no paywalls, no fees. The goal is simple: make it easier for every Bangladeshi family to find what they need and feel at home in RTP.
          </p>
          <p>
            This site is maintained by community volunteers. If you see outdated info, missing listings, or want to contribute — please reach out.
          </p>
        </div>
      </section>

      {/* Two homes */}
      <section className="mb-14">
        <div className="rounded-2xl bg-gradient-to-r from-brand-green/10 to-brand-red/10 dark:from-brand-green/20 dark:to-brand-red/20 border border-brand-green/20 dark:border-brand-green/30 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-4 shrink-0">
            <BangladeshFlag className="h-16 rounded-lg shadow border border-white/30" />
            <span className="text-3xl">🤝</span>
            <USFlag className="h-16 rounded-lg shadow border border-gray-200 dark:border-gray-700" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
              Honoring our two homes
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Bangladesh — the land of our roots, our language, and our culture.
              The United States — the country we have built our futures in. BanglaRTP exists at the
              intersection of both.{" "}
              <Link href="/anthems" className="text-brand-green font-medium hover:underline">
                Listen to both national anthems →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Community Orgs */}
      <section className="mb-14">
        <h2 className="section-heading mb-2">Community Organizations</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          These organizations are the backbone of the RTP Bangladeshi community. BanglaRTP was built to complement their work — TBSNC, BANC, BSA@NCSU, BPOCNC, MUNA, and more.
        </p>
        <Link
          href="/organizations"
          className="inline-flex items-center gap-2 btn-primary text-sm"
        >
          <Building2 size={16} />
          View All Organizations →
        </Link>
      </section>

      {/* Contact / Corrections */}
      <section id="contact" className="mb-14 scroll-mt-20">
        <h2 className="section-heading mb-2">Contact Us</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Found incorrect information? Want to add a listing? Submitting an event? We read every message.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Have a home business or service to offer?{" "}
          <a href="/entrepreneurs/submit" className="text-brand-green font-medium hover:underline">
            List it free on our Entrepreneurs directory →
          </a>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
              <AlertCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
              <div className="text-sm text-blue-800 dark:text-blue-300">
                <p className="font-semibold mb-1">Corrections & Updates</p>
                <p>If a business has closed, hours changed, or information is wrong — please let us know. We aim to fix corrections within 48 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
              <Mail size={18} className="text-green-700 mt-0.5 shrink-0" />
              <div className="text-sm text-green-800 dark:text-green-300">
                <p className="font-semibold mb-1">New Listings</p>
                <p>Submit new halal grocery stores, restaurants, masjids, professionals, or events. All submissions are reviewed before publishing.</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Built by community */}
      <section className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 text-center">
        <p className="font-bangla text-3xl text-brand-green mb-2">আমাদের জন্য, আমাদের দ্বারা</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm italic mb-1">
          &ldquo;By us, for us&rdquo;
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
          BanglaRTP is not affiliated with any business or government agency. It is a volunteer community project. Always verify critical information independently.
        </p>
      </section>
    </div>
  );
}
