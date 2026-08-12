"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  note?: string;
  aspectRatio?: number;
};

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  note,
  aspectRatio = 16 / 9,
}: Props) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(next));
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (event: PointerEvent) => updateFromClientX(event.clientX);
    const handleUp = () => setDragging(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [dragging]);

  const clipPath = useMemo(() => `inset(0 ${100 - position}% 0 0)`, [position]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 5;

    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      setPosition((current) => clamp(current - step));
    }

    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      setPosition((current) => clamp(current + step));
    }

    if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    updateFromClientX(event.clientX);
    setDragging(true);
  };

  return (
    <div className="space-y-5">
      <div
        ref={trackRef}
        className="relative overflow-hidden rounded-3xl bg-paper shadow-card"
        style={{ aspectRatio }}
        onPointerDown={handlePointerDown}
      >
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />

        <div className="absolute inset-0" style={{ clipPath }}>
          <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-navy/22 via-transparent to-transparent pointer-events-none" />

        <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-navy/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-gold-soft" />
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-navy/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-gold-soft" />
          {afterLabel}
        </div>

        <div
          className="absolute inset-y-0 z-20 w-[44px] -translate-x-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="absolute inset-x-1/2 top-0 bottom-0 w-px bg-white/90 shadow-[0_0_0_1px_rgba(17,17,17,0.08)]" />
          <div
            role="slider"
            tabIndex={0}
            aria-label="Before and after image comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            aria-valuetext={`${Math.round(position)} percent revealed`}
            aria-orientation="horizontal"
            className="absolute left-0 top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white shadow-card outline-none transition-[transform,box-shadow] duration-200 hover:scale-105 focus-visible:scale-105 focus-visible:ring-4 focus-visible:ring-gold-soft/50 cursor-ew-resize"
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white">
              <span className="block h-5 w-0.5 rounded-full bg-white/90" />
            </span>
          </div>
        </div>
      </div>

      {note && <p className="text-[15.5px] leading-[1.8] text-slate2 max-w-3xl">{note}</p>}
    </div>
  );
}