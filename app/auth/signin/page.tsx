import { SignInForm } from "@/components/community/SignInForm";
import { Lock } from "lucide-react";

export const metadata = { title: "Sign In" };

export default function SignInPage() {
  return (
    <div className="page-container py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white mb-4">
            <span className="font-bangla text-2xl font-bold">বা</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            Welcome to BanglaRTP
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Sign in to post in the community feed, leave comments, and connect with the
            Bangladeshi community in RTP.
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
