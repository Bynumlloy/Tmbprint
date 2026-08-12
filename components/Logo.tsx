// components/Logo.tsx
//
// Usage:
//   <Logo />                    — full lockup (icon + TSMB + tagline), dark
//   <Logo theme="light" />      — light background variant
//   <Logo iconOnly />           — compass icon only (nav, favicon, etc.)
//   <Logo iconOnly size={32} /> — any size

interface LogoProps {
  size?: number;
  theme?: "dark" | "light";
  iconOnly?: boolean;
  className?: string;
}

export default function Logo({
  size = 44,
  theme = "dark",
  iconOnly = false,
  className,
}: LogoProps) {
  const isDark = theme === "dark";

  const teal   = isDark ? "#2dd4bf" : "#0d9488";
  const gold   = isDark ? "#C9A84C" : "#9a7830";
  const bg     = isDark ? "#08131F" : "#e8f4f2";
  const grid   = isDark ? "#2dd4bf" : "#0d9488";
  const center = isDark ? "#08131F" : "#e8f4f2";
  const id     = `tsmb-${theme}`;

  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!iconOnly}
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isDark ? "#0d1f35" : "#dff4f1"} />
          <stop offset="100%" stopColor={isDark ? "#060f1a" : "#c8ede8"} />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="64" height="64" rx="14" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="64" height="64" rx="14" fill={`url(#${id}-bg)`} />

      {/* Blueprint grid — subtle, clipped to tile */}
      <g clipPath={`url(#${id}-clip)`} opacity="0.07">
        {/* Vertical lines */}
        {[8, 16, 24, 32, 40, 48, 56].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="64" stroke={grid} strokeWidth="0.6" />
        ))}
        {/* Horizontal lines */}
        {[8, 16, 24, 32, 40, 48, 56].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="64" y2={y} stroke={grid} strokeWidth="0.6" />
        ))}
      </g>

      {/* Single clean outer circle */}
      <circle cx="32" cy="32" r="26" stroke={teal} strokeWidth="0.8" opacity="0.25" />

      {/* 4-point compass — north/south teal, east/west slightly recessed */}
      {/* North — tallest, most prominent = growth */}
      <polygon points="32,5 35.5,25 32,21 28.5,25" fill={teal} />
      {/* South */}
      <polygon points="32,59 35.5,39 32,43 28.5,39" fill={teal} opacity="0.35" />
      {/* East */}
      <polygon points="59,32 39,28.5 43,32 39,35.5" fill={teal} opacity="0.5" />
      {/* West */}
      <polygon points="5,32 25,28.5 21,32 25,35.5" fill={teal} opacity="0.5" />

      {/* Small gold accent marks on diagonals — minimal, not full points */}
      <circle cx="48.5" cy="15.5" r="1.8" fill={gold} opacity="0.85" />
      <circle cx="15.5" cy="15.5" r="1.8" fill={gold} opacity="0.85" />
      <circle cx="48.5" cy="48.5" r="1.8" fill={gold} opacity="0.45" />
      <circle cx="15.5" cy="48.5" r="1.8" fill={gold} opacity="0.45" />

      {/* Center clean ring */}
      <circle cx="32" cy="32" r="8.5" fill={center} stroke={teal} strokeWidth="1.2" />

      {/* Gold diamond — the focal point */}
      <polygon points="32,23.5 36.5,32 32,40.5 27.5,32" fill={gold} />

      {/* Tiny teal highlight on diamond */}
      <polygon points="32,23.5 36.5,32 32,29" fill={teal} opacity="0.35" />
    </svg>
  );

  if (iconOnly) return icon;

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
      }}
      aria-label="TSMB — The Smart Money Blueprint"
    >
      {icon}

      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {/* TSMB — dominant */}
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: teal,
            lineHeight: 1,
            textShadow: isDark ? "0 0 16px rgba(45,212,191,0.25)" : "none",
          }}
        >
          TSMB
        </span>

        {/* Tagline — clearly subordinate, ~30% weight of TSMB */}
        <span
          style={{
            fontSize: 7,
            fontWeight: 600,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: gold,
            lineHeight: 1,
            opacity: 0.9,
          }}
        >
          The Smart Money Blueprint
        </span>
      </div>
    </div>
  );
}
