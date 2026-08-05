import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | Dekunle Homes & Properties",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero title="Terms of Service." />
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8 max-w-3xl space-y-8 text-[15px] leading-[1.8] text-slate2">
          <p>
            This placeholder should be replaced with terms prepared by
            counsel before launch, covering use of this website, investment
            disclaimers, and the terms governing any property transaction
            initiated through Dekunle Homes and Properties.
          </p>
          <div>
            <h2 className="text-[19px] font-semibold text-navy mb-2">Use of this site</h2>
            <p>Content on this site is for general information and does not constitute a binding offer.</p>
          </div>
          <div>
            <h2 className="text-[19px] font-semibold text-navy mb-2">Investment disclaimer</h2>
            <p>All joint investment terms are subject to a separate signed agreement between Dekunle Homes and Properties and the investor.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
