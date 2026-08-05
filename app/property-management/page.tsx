import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Property Management | Dekunle Homes & Properties",
};

const services = [
  { title: "Tenant management", body: "Sourcing, screening and managing tenants across residential and commercial portfolios." },
  { title: "Maintenance & inspections", body: "Scheduled inspections and proactive maintenance to protect asset condition and value." },
  { title: "Rent collection & reporting", body: "Transparent rent collection with regular financial reporting to property owners." },
  { title: "Facility & vendor oversight", body: "Coordinated oversight of vendors, service providers and on-site facility staff." },
];

export default function PropertyManagementPage() {
  return (
    <main>
      <PageHero
        title="Property management that protects long-term value."
        description="We manage residential and commercial assets the way we build them: with documentation, accountability and an engineer's eye for condition."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format"
                alt="Managed property"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className={`py-6 ${i !== 0 ? "border-t border-navy/10" : ""}`}>
                  <h3 className="text-[18px] font-semibold text-navy mb-2">{s.title}</h3>
                  <p className="text-[14.5px] text-slate2 leading-[1.7]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </main>
  );
}
