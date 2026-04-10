import Link from "next/link";
import { MessageSquare, MapPin, Flag } from "lucide-react";
import { CATEGORY_META, type SamplePost } from "@/data/samplePosts";
import { timeAgo } from "@/lib/timeAgo";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: SamplePost;
  showFullBody?: boolean;
}

export function PostCard({ post, showFullBody = false }: PostCardProps) {
  const meta = CATEGORY_META[post.category];
  const preview = showFullBody
    ? post.body
    : post.body.length > 220
    ? post.body.slice(0, 220).trimEnd() + "…"
    : post.body;

  return (
    <div className="card hover:shadow-md hover:border-brand-green/30 transition-all flex flex-col gap-3">
      {/* Category + time */}
      <div className="flex items-center justify-between gap-2">
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
      <Link href={`/community/${post.id}`} className="group">
        <h2 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-brand-green transition-colors">
          {post.title}
        </h2>
      </Link>

      {/* Body preview */}
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {preview}
      </p>

      {!showFullBody && post.body.length > 220 && (
        <Link
          href={`/community/${post.id}`}
          className="text-xs font-medium text-brand-green hover:underline -mt-1"
        >
          Read more →
        </Link>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800 mt-auto">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {post.author_display_name}
          </span>
          {post.city && (
            <span className="flex items-center gap-0.5">
              <MapPin size={10} />
              {post.city}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {post.comment_count > 0 && (
            <Link
              href={`/community/${post.id}`}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-brand-green transition-colors"
            >
              <MessageSquare size={12} />
              {post.comment_count}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
