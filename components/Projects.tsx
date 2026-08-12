"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/data";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]["value"]>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.category === filter);

  return (
    <section className="bg-navy py-24 md:py-32" id="projects">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHead
            icon={
              <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4">
                <rect x="10" y="24" width="24" height="52" stroke="currentColor" strokeWidth="4" />
              </svg>
            }
            label="Featured Projects"
            title="A portfolio built on engineering discipline."
            light
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2.5 my-11">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full text-[13px] font-semibold px-5 min-h-[40px] transition-colors ${
                  filter === f.value
                    ? "bg-gold-dark text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <Link
                href={`/projects/${p.id}`}
                aria-label={`View details for ${p.name}`}
                className="relative block overflow-hidden h-[380px] rounded-2xl group cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold-soft/40"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-6 z-[2]">
                  <div className="inline-block text-[11px] font-bold tracking-wide text-white bg-gold-dark rounded-full px-3 py-1 mb-3">
                    {p.status}
                  </div>
                  <h3 className="text-white text-[19px] mb-1 font-semibold">{p.name}</h3>
                  <span className="text-white/65 text-[13px]">
                    {p.location} · {PROJECT_FILTERS.find((f) => f.value === p.category)?.label}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
