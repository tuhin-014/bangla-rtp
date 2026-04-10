import Link from "next/link";
import { MessageSquare, Plus, Search } from "lucide-react";
import { samplePosts, CATEGORY_META, type PostCategory } from "@/data/samplePosts";
import { PostCard } from "@/components/community/PostCard";
import { CommunityFeedClient } from "@/components/community/FeedClient";

export const metadata = { title: "Community" };

const TABS: { value: PostCategory | "all"; label: string; emoji: string }[] = [
  { value: "all",        label: "All",          emoji: "✨" },
  { value: "needs",      label: "Needs",        emoji: "🙋" },
  { value: "offers",     label: "Offers",       emoji: "🎁" },
  { value: "help",       label: "Help",         emoji: "💙" },
  { value: "stories",    label: "Stories",      emoji: "📖" },
  { value: "ride_share", label: "Ride Share",   emoji: "🚗" },
  { value: "lost_found", label: "Lost & Found", emoji: "🔍" },
];

export default function CommunityPage() {
  return (
    <div className="page-container py-12">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-green mb-2">
            <MessageSquare size={20} />
            <span className="text-sm font-medium uppercase tracking-wide">Community Feed</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            Community
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Ask for help, share offers, find a ride, post a story, or reconnect with lost items.
            Your community — your voice.
          </p>
        </div>
        <Link href="/community/new" className="btn-primary shrink-0 text-sm">
          <Plus size={15} />
          New Post
        </Link>
      </div>

      {/* Interactive feed (search + filter + posts) */}
      <CommunityFeedClient posts={samplePosts} tabs={TABS} />
    </div>
  );
}
