import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Investment from "@/components/Investment";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Investment | Dekunle Homes & Properties",
};

export default function InvestmentPage() {
  return (
    <main>
      <PageHero
        title="Invest in developments you can see engineered, not just marketed."
        description="Joint investment opportunities structured around documented terms, active supervision, and clear returns."
      />
      <Investment />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
