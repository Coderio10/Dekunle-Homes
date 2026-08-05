"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLDivElement>(".testi-card");
    const width = (card?.offsetWidth ?? 500) + 24;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-28 bg-paper">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHead
            icon={
              <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4">
                <rect x="20" y="30" width="60" height="40" stroke="currentColor" strokeWidth="4" />
              </svg>
            }
            label="Testimonials"
            title="What our clients and partners say."
          />
        </Reveal>

        <Reveal delay={0.1} className="relative mt-12">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="testi-card shrink-0 w-[min(560px,88vw)] bg-white rounded-3xl shadow-card p-9 md:p-10 flex flex-col justify-between"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
                  <Quote size={20} fill="currentColor" strokeWidth={0} />
                </div>
                <p className="text-[16.5px] leading-[1.7] text-navy font-medium">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3.5 mt-7">
                  <div className="w-11 h-11 rounded-full bg-navy text-gold-soft flex items-center justify-center font-display font-bold text-[13px]">
                    {t.initials}
                  </div>
                  <div>
                    <b className="block text-[14.5px] text-navy">{t.name}</b>
                    <span className="text-[12.5px] text-slate2">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button
              aria-label="Previous testimonial"
              onClick={() => scroll(-1)}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-navy transition-colors group"
            >
              <ArrowLeft size={16} className="text-navy group-hover:text-white" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => scroll(1)}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-navy transition-colors group"
            >
              <ArrowRight size={16} className="text-navy group-hover:text-white" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
