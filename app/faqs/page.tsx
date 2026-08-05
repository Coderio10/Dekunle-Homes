import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQs | Dekunle Homes & Properties",
};

const faqs = [
  {
    q: "What makes Dekunle Homes different from other developers?",
    a: "Every project is engineered and supervised in-house before it is marketed, so the technical work happens ahead of the sale, not after it.",
  },
  {
    q: "How does joint investment work?",
    a: "Investors move through consultation, documented investment terms, supervised development, and finally distributed returns. Full details are on our Investment page.",
  },
  {
    q: "Do you manage properties you didn't build?",
    a: "Yes. Our property management team takes on residential and commercial assets regardless of who originally developed them.",
  },
  {
    q: "Which locations do you currently operate in?",
    a: "Our primary focus is Lagos, with active projects and opportunities extending to Abuja and select growth corridors.",
  },
  {
    q: "How do I start an enquiry?",
    a: "Use the contact form or reach us directly by phone, WhatsApp or email. We aim to respond within one business day.",
  },
];

export default function FAQsPage() {
  return (
    <main>
      <PageHero title="Frequently asked questions." />
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8 max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group rounded-2xl bg-paper px-6 py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between text-[16px] font-semibold text-navy">
                  {f.q}
                  <span className="text-gold-dark text-xl group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
                </summary>
                <p className="text-[14.5px] text-slate2 leading-[1.75] mt-4">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
