"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { PostCard } from "./PostCard";
import { cn } from "@/lib/utils";
import type { SamplePost, PostCategory } from "@/data/samplePosts";

interface Tab {
  value: PostCategory | "all";
  label: string;
  emoji: string;
}

interface CommunityFeedClientProps {
  posts: SamplePost[];
  tabs: Tab[];
}

export function CommunityFeedClient({ posts, tabs }: CommunityFeedClientProps) {
  const [activeTab, setActiveTab] = useState<PostCategory | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => {
        if (activeTab !== "all" && p.category !== activeTab) return false;
        if (q) {
          return (
            p.title.toLowerCase().includes(q) ||
            p.body.toLowerCase().includes(q) ||
            p.author_display_name.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [posts, activeTab, query]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-5">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search posts…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-4 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6 pb-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium border transition-colors whitespace-nowrap",
              activeTab === tab.value
                ? "bg-brand-green text-white border-brand-green"
                : "border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green dark:border-gray-700 dark:text-gray-300"
            )}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm text-gray-400 mb-5">
        {filtered.length} post{filtered.length !== 1 ? "s" : ""}
        {activeTab !== "all" ? ` · ${tabs.find((t) => t.value === activeTab)?.label}` : ""}
        {query ? ` matching "${query}"` : ""}
      </p>

      {/* Feed */}
      {filtered.length > 0 ? (
        <div className="space-y-4">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <EmptyState category={activeTab} query={query} />
      )}
    </div>
  );
}

function EmptyState({
  category,
  query,
}: {
  category: PostCategory | "all";
  query: string;
}) {
  return (
    <div className="py-20 text-center">
      <p className="text-4xl mb-4">💬</p>
      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
        {query ? `No posts matching "${query}"` : "No posts yet in this category"}
      </p>
      <p className="text-sm text-gray-400 mb-6">
        {query
          ? "Try different keywords or clear the search."
          : "Be the first to post — your community is waiting!"}
      </p>
      <a href="/community/new" className="btn-primary text-sm">
        ✏️ Write the first post
      </a>
    </div>
  );
}
