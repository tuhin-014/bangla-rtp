import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata = { title: "Newcomer Guide" };

const phases = [
  {
    id: "week",
    label: "First Week",
    color: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-900",
    iconColor: "text-blue-600",
    href: "/newcomer/first-week",
    items: [
      "Get a US phone number (prepaid SIM — no SSN needed)",
      "Open a bank account (passport + visa sufficient)",
      "Print your I-94 from i94.cbp.dhs.gov",
      "Apply for SSN at Durham SSA office (wait 10 business days after entry)",
      "Join TBSNC and community WhatsApp groups",
      "Attend Friday prayers at ICM, IAR, or a local masjid",
    ],
  },
  {
    id: "month",
    label: "First Month",
    color: "bg-purple-50 border-purple-200 dark:bg-purple-950/30 dark:border-purple-900",
    iconColor: "text-purple-600",
    href: "/newcomer/first-month",
    items: [
      "Get NC Driver's License (make appointment at ncdot.gov/dmv)",
      "Find permanent housing (Cary/Morrisville recommended for families)",
      "Enroll children in school (Wake County or Durham Public Schools)",
      "Set up utilities (Duke Energy, Spectrum internet)",
      "Enroll in health insurance (through employer or marketplace)",
      "Buy or borrow a car — public transit is limited",
      "Start building US credit history (secured credit card)",
    ],
  },
  {
    id: "months3",
    label: "First 3 Months",
    color: "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-900",
    iconColor: "text-green-600",
    href: "/newcomer/first-three-months",
    items: [
      "Find a primary care doctor and pediatrician (see Directory for Bangla speakers)",
      "Join TBSNC, BANC, or BPOCNC community organizations",
      "Set up remittances (Wise/Remitly for best rates to Bangladesh)",
      "Plan your tax return (IRS Free File or community CPA)",
      "If H-1B: start green card discussion with your employer",
      "Find halal daycare if needed (ask at ICM or community groups)",
      "Explore homebuying options (popular in Morrisville and Cary)",
    ],
  },
];

const quickContacts = [
  { label: "SSA Office (Durham)", value: "3220 Croasdaile Dr, Durham · 1-800-772-1213" },
  { label: "NC DMV (Cary)", value: "131 SW Cary Pkwy · appointment: ncdot.gov/dmv" },
  { label: "Wake County Schools", value: "wcpss.net · (919) 431-0000" },
  { label: "Durham Public Schools", value: "dpsnc.net · (919) 560-2000" },
  { label: "ICM (Islamic Center)", value: "1500 Morrisville Pkwy · (919) 481-9492" },
];

export default function NewcomerPage() {
  return (
    <div className="page-container py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <BookOpen size={20} />
          <span className="text-sm font-medium uppercase tracking-wide">Newcomer Guide</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3">
          Your First 90 Days in the Triangle
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Moving to a new country is overwhelming. This free checklist — built by Bangladeshis who&apos;ve done it — walks you through the most important steps in your first week, month, and three months in RTP.
        </p>
      </div>

      {/* Checklist phases */}
      <div className="space-y-6 mb-12">
        {phases.map((phase) => (
          <div key={phase.id} className={`rounded-xl border p-6 ${phase.color}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {phase.label}
              </h2>
              <Link
                href={phase.href}
                className={`text-sm font-medium flex items-center gap-1 ${phase.iconColor} hover:underline`}
              >
                Full guide <ArrowRight size={13} />
              </Link>
            </div>
            <ul className="space-y-2.5">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${phase.iconColor}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Quick contacts */}
      <section className="mb-10">
        <h2 className="section-heading mb-4">Key Contacts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickContacts.map((c) => (
            <div key={c.label} className="card p-4">
              <p className="text-xs font-semibold text-brand-green uppercase tracking-wide mb-0.5">
                {c.label}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed guides */}
      <section className="mb-10">
        <h2 className="section-heading mb-4">Detailed Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {phases.map((phase) => (
            <Link
              key={phase.id}
              href={phase.href}
              className="card hover:shadow-md hover:border-brand-green transition-all group"
            >
              <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-brand-green transition-colors mb-1">
                {phase.label}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {phase.items.length} action items →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Print CTA */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 dark:bg-gray-900">
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Need a printed copy?</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Print each guide for easy reference or share with newly-arrived family members.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Community help */}
      <div className="mt-8 rounded-xl bg-brand-green p-6 text-white text-center">
        <p className="font-semibold text-lg mb-1">Still have questions?</p>
        <p className="text-green-100 text-sm mb-4">
          The Bangladeshi community in RTP is incredibly welcoming. Reach out to TBSNC or come to Friday prayers at ICM — someone will be happy to help you navigate.
        </p>
        <Link href="/about#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-green hover:bg-green-50 transition-colors">
          Contact the Community →
        </Link>
      </div>
    </div>
  );
}
