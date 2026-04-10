"use client";

import { cn } from "@/lib/utils";

interface FilterBarProps<T extends string> {
  options: { value: T | "all"; label: string }[];
  value: T | "all";
  onChange: (value: T | "all") => void;
  label?: string;
}

export function FilterBar<T extends string>({
  options,
  value,
  onChange,
  label,
}: FilterBarProps<T>) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {label && (
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-1">
          {label}:
        </span>
      )}
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value as T | "all")}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors border",
            value === opt.value
              ? "bg-brand-green text-white border-brand-green"
              : "border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green dark:border-gray-700 dark:text-gray-300"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
