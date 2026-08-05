import Reveal from "./Reveal";
import { PARTNERS } from "@/lib/data";

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <Reveal>
          <p className="text-[13px] font-semibold tracking-wide text-slate2 uppercase mb-10 text-center">
            Trusted by institutions and partners
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="bg-paper rounded-2xl h-[100px] flex items-center justify-center px-5 grayscale opacity-55 hover:opacity-100 hover:grayscale-0 transition-all"
              >
                <span className="font-display font-bold text-[14px] text-navy tracking-wide text-center">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
