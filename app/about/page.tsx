import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Dekunle Homes & Properties",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Engineering discipline, applied to real estate."
        description="Dekunle Homes and Properties was built on the belief that construction and property development should be led by engineers first, and sold second."
      />
      <About />
      <WhyChooseUs />
      <CtaBanner />
    </main>
  );
}
