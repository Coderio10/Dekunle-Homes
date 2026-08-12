import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About & Services | Dekunle Homes & Properties",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Engineering discipline, applied to real estate."
        description="Dekunle Homes and Properties was built on the belief that construction, development and property management should be led by engineers first, and sold second."
      />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <CtaBanner />
    </main>
  );
}
