import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { TIMELINE, VALUES } from "@/lib/data";

export default function About() {
  return (
    <section className="bg-paper py-24 md:py-32" id="about">
      <div className="max-w-container mx-auto px-6 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <Reveal className="relative">
          <div className="relative h-[420px] lg:h-[560px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80&auto=format"
              alt="Engineering and architecture at Dekunle Homes"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative lg:absolute lg:-left-6 lg:-bottom-6 bg-navy text-white rounded-2xl shadow-card-hover p-7 max-w-[260px] mt-4 lg:mt-0">
            <b className="block font-display text-gold-soft text-[26px] font-bold mb-1.5">12+</b>
            <span className="text-[14px] leading-[1.5] font-medium">
              Years turning engineering discipline into lasting property value
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHead
              icon={
                <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4">
                  <rect x="30" y="30" width="34" height="34" transform="rotate(45 47 47)" stroke="currentColor" strokeWidth="4" />
                </svg>
              }
              label="Who We Are"
              title="An engineering firm that happens to build homes."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-[19px] md:text-[21px] font-medium leading-[1.5] text-navy border-l-[3px] border-gold pl-6 my-8">
              &ldquo;Fast, professionally executed, beautifully designed. No
              compromise.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-2.5 mb-12">
              {VALUES.map((v) => (
                <span
                  key={v}
                  className="rounded-full bg-white shadow-card px-5 py-2.5 text-[13.5px] font-semibold text-navy"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-4">
              {TIMELINE.map((t, i) => (
                <div key={t.title} className="bg-white rounded-2xl shadow-card p-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold-dark/10 text-gold-dark font-display font-bold text-[13px] mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-[15px] font-semibold text-navy mb-1.5">{t.title}</h4>
                  <p className="text-slate2 text-[13.5px] leading-[1.6]">{t.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
