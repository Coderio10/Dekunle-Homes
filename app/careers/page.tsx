import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Careers | Dekunle Homes & Properties",
};

const roles = [
  { title: "Site Engineer", location: "Lagos", type: "Full-time" },
  { title: "Property Manager", location: "Lagos", type: "Full-time" },
  { title: "Business Development Associate", location: "Abuja", type: "Full-time" },
  { title: "Quantity Surveyor", location: "Lagos", type: "Contract" },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        title="Build your career with engineers, not just salespeople."
        description="We hire people who care about the technical quality of what gets built, not only whether it sells."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <h2 className="text-[22px] font-bold text-navy mb-8">Open roles</h2>
          <div className="grid gap-4">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="flex flex-wrap items-center justify-between gap-4 bg-paper rounded-2xl px-7 py-6">
                  <div>
                    <h3 className="text-[17px] font-semibold text-navy">{r.title}</h3>
                    <span className="text-[13.5px] text-slate2">{r.location} · {r.type}</span>
                  </div>
                  <Button href="/contact" variant="outline">
                    Apply
                  </Button>
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
