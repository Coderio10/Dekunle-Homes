import { ReactNode } from "react";

export default function IconBadge({
  children,
  size = "md",
  tone = "coral",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  tone?: "coral" | "navy" | "coral-solid" | "navy-solid";
}) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  }[size];

  const toneClasses = {
    coral: "bg-gold/10 text-gold",
    navy: "bg-navy/8 text-navy",
    "coral-solid": "bg-gold-dark text-white",
    "navy-solid": "bg-navy text-white",
  }[tone];

  return (
    <div className={`${sizeClasses} ${toneClasses} rounded-full flex items-center justify-center shrink-0`}>
      {children}
    </div>
  );
}
