import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-navy py-24 md:py-32" id="process">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHead
            icon={
              <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4">
                <path d="M10 50H90M70 30L90 50L70 70" stroke="currentColor" strokeWidth="4" />
              </svg>
            }
            label="Our Process"
            title="Six stages. No shortcuts."
            light
          />
        </Reveal>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.08}>
              <div className="bg-white/5 rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-full bg-gold-dark flex items-center justify-center font-display text-[13px] font-bold text-white mb-5">
                  {s.n}
                </div>
                <h4 className="text-[16px] text-white mb-2 font-semibold">{s.title}</h4>
                <p className="text-[13.5px] text-white/60 leading-[1.6]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
