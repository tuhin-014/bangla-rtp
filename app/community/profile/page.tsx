import Link from "next/link";
import { User, PenLine, Lock } from "lucide-react";

export const metadata = { title: "My Profile" };

export default function ProfilePage() {
  // Without auth configured, show a sign-in gate
  return (
    <div className="page-container py-12">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-green mb-2">
            <User size={20} />
            <span className="text-sm font-medium uppercase tracking-wide">Profile</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            My Profile
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            View and manage your posts and comments.
          </p>
        </div>

        <div className="card flex flex-col items-center gap-5 py-14 text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/40 flex items-center justify-center">
            <Lock size={28} className="text-brand-green" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Sign in to view your profile
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
              Create a free account to post in the community feed, track your conversations,
              and manage your listings.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="btn-primary text-sm">
              Sign in / Create account →
            </Link>
            <Link href="/community" className="btn-outline text-sm">
              Browse Community
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="card text-center py-6">
            <p className="text-2xl font-bold text-brand-green mb-1">0</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Posts</p>
          </div>
          <div className="card text-center py-6">
            <p className="text-2xl font-bold text-brand-green mb-1">0</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
