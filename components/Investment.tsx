import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Button from "./Button";
import { INVESTMENT_STEPS } from "@/lib/data";

export default function Investment() {
  return (
    <section className="py-24 md:py-32 bg-white" id="investment">
      <div className="max-w-container mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <SectionHead
              icon={
                <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4">
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="4" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="4" />
                </svg>
              }
              label="Investment Opportunities"
              title="Joint investment, built on transparency."
              description="Partner on selected developments and hold a real, documented stake, from acquisition through to returns."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {INVESTMENT_STEPS.map((s) => (
                <div key={s.n} className="bg-paper rounded-2xl p-6">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold-dark text-white font-display font-bold text-[13px] mb-4">
                    {s.n}
                  </span>
                  <h4 className="text-[16px] font-semibold text-navy mb-1.5">{s.title}</h4>
                  <p className="text-[13.5px] text-slate2 leading-[1.6]">{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9">
              <Button href="/contact" variant="secondary">
                Discuss an Investment
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative h-[340px] lg:h-[520px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80&auto=format"
              alt="Construction site representing investment growth"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-4 right-4 lg:-top-6 lg:-right-6 bg-white rounded-2xl shadow-card-hover p-5 text-center w-[130px]">
            <b className="block font-display text-[24px] font-bold text-navy">8+</b>
            <span className="block text-[11px] font-semibold text-slate2 mt-1">
              Active Opportunities
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
