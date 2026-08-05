import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "ghost-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-dark text-white hover:bg-navy",
  secondary:
    "bg-navy text-white hover:bg-navy-light",
  outline:
    "bg-transparent text-navy border border-navy/25 hover:border-navy hover:bg-navy/5",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
  "ghost-light":
    "bg-white/10 text-white hover:bg-white/20",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14.5px] px-7 min-h-[48px] transition-colors duration-200 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
