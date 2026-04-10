"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MessageSquare, Lock } from "lucide-react";
import { timeAgo } from "@/lib/timeAgo";

// Sample static comments for demo — keyed by post id
const SAMPLE_COMMENTS: Record<string, { id: string; author: string; body: string; created_at: string }[]> = {
  "post-1": [
    { id: "c1", author: "Salma H.", body: "Dr. Farzana Rahman at UNC Children's in Morrisville speaks Bengali! She's in our Community Directory. (919) 555-0202", created_at: new Date(Date.now() - 90 * 60 * 1000).toISOString() },
    { id: "c2", author: "Kabir A.", body: "WakeMed Cary has a Bengali-speaking nurse navigator who can help coordinate. Ask at the front desk.", created_at: new Date(Date.now() - 75 * 60 * 1000).toISOString() },
    { id: "c3", author: "Nadia R.", body: "JazakAllah for posting this! I had the same problem when we first arrived. Try calling ahead and asking if there's a Bengali-speaking staff member on duty.", created_at: new Date(Date.now() - 45 * 60 * 1000).toISOString() },
    { id: "c4", author: "Rina B.", body: "Duke Primary Care in Morrisville also has South Asian staff who can help. They've been really good with our kids.", created_at: new Date(Date.now() - 20 * 60 * 1000).toISOString() },
  ],
  "post-6": [
    { id: "c5", author: "Imran K.", body: "Great list! I'd add: don't wait to get your NC driver's license — the written test is easy and you need it for everything.", created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString() },
    { id: "c6", author: "Dilruba M.", body: "The Costco membership pays for itself quickly — especially for diapers and grocery runs. Also their pharmacy has the best medication prices.", created_at: new Date(Date.now() - 48 * 60 * 1000).toISOString() },
    { id: "c7", author: "Shakil R.", body: "Amazing tips bhai. I wish I had this when I arrived! The SSN point is so important — I tried going after only 5 days and was told to come back.", created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString() },
  ],
};

interface CommentSectionProps {
  postId: string;
  commentCount: number;
}

export function CommentSection({ postId, commentCount }: CommentSectionProps) {
  const [newComment, setNewComment] = useState("");
  const [localComments, setLocalComments] = useState<{ id: string; author: string; body: string; created_at: string }[]>([]);
  const [signInNotice, setSignInNotice] = useState(false);

  const existingComments = SAMPLE_COMMENTS[postId] ?? [];
  const allComments = [...existingComments, ...localComments];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In demo mode without auth, show sign-in notice
    setSignInNotice(true);
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-5 flex items-center gap-2">
        <MessageSquare size={18} />
        Comments ({allComments.length || commentCount})
      </h2>

      {/* Comment list */}
      {allComments.length > 0 && (
        <div className="space-y-4 mb-6">
          {allComments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300 shrink-0 mt-0.5">
                {comment.author.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {comment.author}
                  </span>
                  <span className="text-xs text-gray-400">{timeAgo(comment.created_at)}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {comment.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sign-in notice */}
      {signInNotice && (
        <div className="rounded-xl border border-brand-green/30 bg-green-50 dark:bg-green-950/30 p-4 mb-5 text-sm text-green-800 dark:text-green-300">
          <p className="font-semibold mb-1">Sign in to comment</p>
          <p className="text-green-700 dark:text-green-400 text-xs mb-3">
            Create a free account to join the conversation and help your community.
          </p>
          <Link href="/auth/signin" className="btn-primary text-xs py-1.5">
            Sign in / Create account →
          </Link>
        </div>
      )}

      {/* Comment form */}
      {!signInNotice && (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 mt-0.5">
            <Lock size={12} className="text-gray-400" />
          </div>
          <div className="flex-1">
            <textarea
              rows={3}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment… (sign in required)"
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green resize-none"
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-400">
                <Link href="/auth/signin" className="text-brand-green hover:underline">
                  Sign in
                </Link>{" "}
                to comment
              </p>
              <button type="submit" className="btn-primary text-xs py-1.5 px-4">
                <Send size={12} />
                Comment
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
