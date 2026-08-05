import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import ServiceIcon from "./ServiceIcons";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white" id="services">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end gap-10 flex-wrap mb-14">
          <Reveal>
            <SectionHead
              icon={
                <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4">
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="4" />
                </svg>
              }
              label="What We Do"
              title="Seven disciplines, one standard."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[320px] text-slate2 text-[15px] leading-[1.7]">
              Engineered and supervised, from the first site survey to the
              last tenant handover.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="h-full bg-white rounded-2xl shadow-card hover:shadow-card-hover p-8 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                  <ServiceIcon icon={s.icon} />
                </div>
                <h3 className="text-[18px] font-semibold text-navy mb-2.5">{s.title}</h3>
                <p className="text-[14px] text-slate2 leading-[1.65]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
