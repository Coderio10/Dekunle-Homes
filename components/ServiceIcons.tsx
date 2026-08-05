import { Service } from "@/lib/data";

export default function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2 } as const;
  switch (icon) {
    case "construction":
      return (
        <svg viewBox="0 0 48 48" {...common} className="w-7 h-7">
          <rect x="8" y="8" width="32" height="32" />
          <path d="M8 20H40M20 8V40" />
        </svg>
      );
    case "development":
      return (
        <svg viewBox="0 0 48 48" {...common} className="w-7 h-7">
          <path d="M8 40V20L24 8L40 20V40H8Z" />
          <path d="M18 40V26H30V40" />
        </svg>
      );
    case "management":
      return (
        <svg viewBox="0 0 48 48" {...common} className="w-7 h-7">
          <rect x="10" y="14" width="28" height="24" />
          <path d="M10 22H38M18 14V38M30 14V38" />
        </svg>
      );
    case "land":
      return (
        <svg viewBox="0 0 48 48" {...common} className="w-7 h-7">
          <path d="M24 6L40 16V32L24 42L8 32V16L24 6Z" />
        </svg>
      );
    case "investment":
      return (
        <svg viewBox="0 0 48 48" {...common} className="w-7 h-7">
          <circle cx="16" cy="24" r="8" />
          <circle cx="32" cy="24" r="8" />
        </svg>
      );
    case "supervision":
      return (
        <svg viewBox="0 0 48 48" {...common} className="w-7 h-7">
          <path d="M12 36L24 12L36 36" />
          <path d="M17 26H31" />
        </svg>
      );
    case "consultancy":
      return (
        <svg viewBox="0 0 48 48" {...common} className="w-7 h-7">
          <rect x="10" y="10" width="28" height="28" rx="2" />
          <path d="M18 24H30M24 18V30" />
        </svg>
      );
  }
}
