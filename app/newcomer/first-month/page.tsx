import { readFileSync } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata = { title: "First Month Guide" };

export default function FirstMonthPage() {
  const content = readFileSync(
    path.join(process.cwd(), "content/newcomer/first-month.md"),
    "utf-8"
  );

  return (
    <div className="page-container py-12">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/newcomer" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-green transition-colors">
          <ArrowLeft size={14} />
          Back to Newcomer Guide
        </Link>
        <PrintButton />
      </div>

      <article className="prose prose-gray dark:prose-invert max-w-3xl prose-headings:text-brand-green prose-a:text-brand-green">
        <MDXRemote source={content} />
      </article>

      <div className="mt-12 flex gap-4">
        <Link href="/newcomer/first-three-months" className="btn-primary text-sm">
          Next: First 3 Months →
        </Link>
        <Link href="/newcomer/first-week" className="btn-outline text-sm">
          ← First Week
        </Link>
      </div>
    </div>
  );
}
