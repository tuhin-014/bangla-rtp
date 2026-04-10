"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  function handleShare() {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {});
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-green transition-colors"
    >
      {copied ? <Check size={14} className="text-brand-green" /> : <Share2 size={14} />}
      {copied ? "Copied!" : "Share"}
    </button>
  );
}
