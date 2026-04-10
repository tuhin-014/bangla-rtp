import { readFileSync } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata = { title: "First Week Guide" };

export default function FirstWeekPage() {
  const content = readFileSync(
    path.join(process.cwd(), "content/newcomer/first-week.md"),
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

      <article className="prose prose-gray dark:prose-invert max-w-3xl prose-headings:text-brand-green prose-a:text-brand-green prose-strong:text-gray-900 dark:prose-strong:text-gray-100">
        <MDXRemote source={content} />
      </article>

      <div className="mt-12 flex gap-4">
        <Link href="/newcomer/first-month" className="btn-primary text-sm">
          Next: First Month →
        </Link>
        <Link href="/newcomer" className="btn-outline text-sm">
          ← Back to overview
        </Link>
      </div>
    </div>
  );
}
