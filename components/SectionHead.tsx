import { ReactNode } from "react";

export default function SectionHead({
  icon,
  label,
  title,
  description,
  light = false,
  className = "",
}: {
  icon: ReactNode;
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <div
        className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-5 ${
          light ? "bg-white/10" : "bg-gold-dark/10"
        }`}
      >
        <span className={light ? "text-gold-soft" : "text-gold-dark"}>{icon}</span>
        <b className={`text-[13px] font-semibold tracking-wide ${light ? "text-gold-soft" : "text-gold-dark"}`}>
          {label}
        </b>
      </div>
      <h2
        className={`text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[16px] leading-[1.7] ${
            light ? "text-white/65" : "text-slate2"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
