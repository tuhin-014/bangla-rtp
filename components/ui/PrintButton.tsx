"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn-outline text-sm flex items-center gap-1.5"
    >
      <Printer size={13} />
      Print
    </button>
  );
}
