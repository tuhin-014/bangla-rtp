"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";

const inputCls =
  "w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green";

export function SignInForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [city, setCity] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "no_config">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, display_name: displayName, city }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 503) {
        setStatus("no_config");
      } else if (res.ok) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Authentication failed. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-brand-green" />
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
            {mode === "signup" ? "Account created!" : "Welcome back!"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {mode === "signup"
              ? "Check your email to verify your account, then come back and sign in."
              : "You're signed in."}
          </p>
        </div>
        <Link href="/community" className="btn-primary text-sm">
          Go to Community →
        </Link>
      </div>
    );
  }

  if (status === "no_config") {
    return (
      <div className="card flex flex-col items-center gap-4 py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-2xl">
          🚧
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Community launching soon
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
            The live community feed is coming soon. In the meantime, you can browse the sample
            posts and explore other parts of BanglaRTP.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link href="/community" className="btn-primary text-sm">
            Browse Posts
          </Link>
          <Link href="/" className="btn-outline text-sm">
            Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      {/* Mode toggle */}
      <div className="flex rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
        <button
          type="button"
          onClick={() => setMode("signin")}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
            mode === "signin"
              ? "bg-brand-green text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setMode("signup")}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
            mode === "signup"
              ? "bg-brand-green text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          Create Account
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Display Name <span className="text-brand-red">*</span>
              </label>
              <input
                required
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="How you'll appear in the community"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                City
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={inputCls}
              >
                <option value="">Select your city…</option>
                {["Raleigh", "Durham", "Cary", "Morrisville", "Chapel Hill", "Apex", "Other"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email <span className="text-brand-red">*</span>
          </label>
          <div className="relative">
            <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={`${inputCls} pl-9`}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password <span className="text-brand-red">*</span>
          </label>
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "signup" ? "At least 8 characters" : "Your password"}
              className={`${inputCls} pr-9`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 p-3 text-sm text-red-700 dark:text-red-400">
            <AlertCircle size={14} className="shrink-0" />
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center py-3 text-sm"
        >
          {status === "loading"
            ? "Please wait…"
            : mode === "signin"
            ? "Sign In"
            : "Create Account"}
        </button>
      </form>

      <p className="text-xs text-center text-gray-400 mt-4">
        By signing up you agree to our{" "}
        <Link href="/about" className="text-brand-green hover:underline">community guidelines</Link>.
        BanglaRTP is a free, volunteer-run community resource.
      </p>
    </div>
  );
}
