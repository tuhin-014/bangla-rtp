import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, MessageSquare, Flag, Phone } from "lucide-react";
import { ShareButton } from "@/components/community/ShareButton";
import { samplePosts, CATEGORY_META } from "@/data/samplePosts";
import { PostCard } from "@/components/community/PostCard";
import { CommentSection } from "@/components/community/CommentSection";
import { timeAgo } from "@/lib/timeAgo";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return samplePosts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = samplePosts.find((p) => p.id === params.id);
  return { title: post ? post.title : "Post" };
}

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const post = samplePosts.find((p) => p.id === params.id);
  if (!post) notFound();

  const meta = CATEGORY_META[post.category];

  // Related posts: same category, not this post
  const related = samplePosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="page-container py-12">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/community"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-green transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Back to Community
        </Link>

        {/* Post */}
        <article className="card mb-6">
          {/* Category + time */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                meta.bg,
                meta.color
              )}
            >
              {meta.emoji} {meta.label}
            </span>
            <span className="text-xs text-gray-400">{timeAgo(post.created_at)}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-snug">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-5 pb-5 border-b border-gray-100 dark:border-gray-800">
            <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white text-xs font-bold shrink-0">
              {post.author_display_name.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-gray-700 dark:text-gray-300">
                {post.author_display_name}
              </p>
              {post.city && (
                <p className="text-xs flex items-center gap-1">
                  <MapPin size={10} />
                  {post.city}
                </p>
              )}
            </div>
          </div>

          {/* Photo */}
          {post.photo_url && (
            <img
              src={post.photo_url}
              alt="Post photo"
              className="w-full rounded-lg mb-5 object-cover max-h-80"
            />
          )}

          {/* Body */}
          <div className="prose prose-sm prose-gray dark:prose-invert max-w-none mb-5">
            {post.body.split("\n").map((line, i) => (
              <p key={i} className="mb-2 last:mb-0 text-gray-700 dark:text-gray-300 leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          {/* Contact */}
          {post.contact_info && (
            <div className="rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 p-3 mb-4">
              <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-0.5 flex items-center gap-1">
                <Phone size={11} />
                Contact
              </p>
              <p className="text-sm text-green-800 dark:text-green-300">{post.contact_info}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <ShareButton />
            <Link
              href={`/community/${post.id}#comments`}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-green transition-colors"
            >
              <MessageSquare size={14} />
              {post.comment_count} comment{post.comment_count !== 1 ? "s" : ""}
            </Link>
            <button className="ml-auto inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors">
              <Flag size={12} />
              Report
            </button>
          </div>
        </article>

        {/* Comments */}
        <section id="comments">
          <CommentSection postId={post.id} commentCount={post.comment_count} />
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4">
              More in {meta.emoji} {meta.label}
            </h2>
            <div className="space-y-4">
              {related.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
