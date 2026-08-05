export function Mark({ className = "w-9 h-9", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 24H32V76H8V24Z" stroke={color} strokeWidth="3" />
      <rect x="30" y="30" width="34" height="34" transform="rotate(45 47 47)" stroke={color} strokeWidth="3" />
      <circle cx="76" cy="50" r="20" stroke={color} strokeWidth="3" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${light ? "text-navy" : "text-white"}`}>
      <Mark />
      <span className="font-display font-bold text-[15px] leading-tight">
        Dekunle Homes
        <span className="block font-normal text-[10.5px] tracking-[0.14em] text-gold-soft uppercase mt-0.5">
          &amp; Properties
        </span>
      </span>
    </div>
  );
}
