import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { COMPARISON } from "@/lib/data";
import { Check, X } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-paper py-24 md:py-32" id="why">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHead
            icon={
              <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4">
                <circle cx="35" cy="50" r="18" stroke="currentColor" strokeWidth="4" />
                <rect x="55" y="32" width="26" height="36" stroke="currentColor" strokeWidth="4" />
              </svg>
            }
            label="Why Choose Us"
            title="The difference is in how the work is supervised."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 items-stretch mt-14">
            <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
              <h4 className="font-display text-[13px] tracking-wide uppercase text-slate2 mb-6">
                Traditional Developer
              </h4>
              {COMPARISON.traditional.map((t, i) => (
                <div
                  key={t}
                  className={`flex items-start gap-3 py-4 ${i !== 0 ? "border-t border-navy/8" : ""}`}
                >
                  <X size={18} className="text-slate-400 shrink-0 mt-0.5" />
                  <p className="text-[14.5px] leading-[1.6] text-slate2">{t}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center justify-center px-6">
              <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12 text-gold">
                <rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="bg-navy text-white rounded-3xl shadow-card-hover p-8 lg:p-10">
              <h4 className="font-display text-[13px] tracking-wide uppercase text-gold-soft mb-6">
                Dekunle Homes &amp; Properties
              </h4>
              {COMPARISON.dekunle.map((t, i) => (
                <div
                  key={t}
                  className={`flex items-start gap-3 py-4 ${i !== 0 ? "border-t border-white/12" : ""}`}
                >
                  <Check size={18} className="text-gold shrink-0 mt-0.5" />
                  <p className="text-[14.5px] leading-[1.6] text-white/80">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
