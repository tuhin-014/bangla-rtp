import { NewPostForm } from "@/components/community/NewPostForm";
import { PenLine } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "New Post" };

export default function NewPostPage() {
  return (
    <div className="page-container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-green mb-2">
            <PenLine size={20} />
            <span className="text-sm font-medium uppercase tracking-wide">Community</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            New Post
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Share a need, make an offer, ask for help, or tell the community your story.
            Posts are public — visible to everyone on BanglaRTP.
          </p>
        </div>
        <NewPostForm />
      </div>
    </div>
  );
}
