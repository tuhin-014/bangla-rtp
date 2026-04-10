import { cn } from "@/lib/utils";

// ── Bangladesh flag (official 10:6 ratio, red circle offset left of center)
export function BangladeshFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 60"
      className={cn("inline-block", className)}
      aria-label="Flag of Bangladesh"
      role="img"
    >
      <rect width="100" height="60" fill="#006A4E" />
      <circle cx="45" cy="30" r="18" fill="#F42A41" />
    </svg>
  );
}

// ── US flag (simplified: 13 stripes + blue canton with 5×6 star grid)
export function USFlag({ className }: { className?: string }) {
  const stripeH = 100 / 13;
  const stripes = Array.from({ length: 13 }, (_, i) => i);

  // 50 stars: 6 rows of 5 + 5 rows of 4 (offset), simplified as 5×5 grid of ★
  const stars: { x: number; y: number }[] = [];
  const cantonW = 40;
  const cantonH = (7 / 13) * 100;
  for (let row = 0; row < 9; row++) {
    const cols = row % 2 === 0 ? 6 : 5;
    const offsetX = row % 2 === 0 ? 0 : (cantonW / 12);
    for (let col = 0; col < cols; col++) {
      stars.push({
        x: offsetX + col * (cantonW / (cols === 6 ? 6 : 5)) + (cantonW / (cols === 6 ? 12 : 10)),
        y: row * (cantonH / 9) + cantonH / 18,
      });
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 52.6"
      className={cn("inline-block", className)}
      aria-label="Flag of the United States"
      role="img"
    >
      {/* 13 stripes */}
      {stripes.map((i) => (
        <rect
          key={i}
          x="0"
          y={i * stripeH * 0.526}
          width="100"
          height={stripeH * 0.526}
          fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
        />
      ))}
      {/* Blue canton */}
      <rect x="0" y="0" width={cantonW} height={cantonH * 0.526} fill="#3C3B6E" />
      {/* Stars */}
      {stars.map((s, i) => (
        <text
          key={i}
          x={s.x}
          y={s.y * 0.526 + 1.5}
          fontSize="3"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
        >
          ★
        </text>
      ))}
    </svg>
  );
}

// ── Dual flags side by side
export function DualFlags({
  className,
  size = "sm",
  variant = "dark",
}: {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "dark" | "light";
}) {
  const sizeMap = {
    xs: "h-4 rounded-sm",
    sm: "h-6 rounded",
    md: "h-10 rounded-md",
    lg: "h-16 rounded-lg",
  };
  const borderCls = variant === "light" ? "border-white/20" : "border-gray-200 dark:border-gray-700";
  const flagCls = cn(sizeMap[size], "shadow-sm border", borderCls);
  const heartCls = variant === "light" ? "text-white/70" : "text-gray-400";

  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <BangladeshFlag className={flagCls} />
      <span className={cn("text-xs", heartCls)}>🤝</span>
      <USFlag className={flagCls} />
    </span>
  );
}
