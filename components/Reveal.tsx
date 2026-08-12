import { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{
        ["--reveal-y" as never]: `${y}px`,
        ["--reveal-delay" as never]: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
