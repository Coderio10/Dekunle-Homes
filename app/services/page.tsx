import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Services | Dekunle Homes & Properties",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Seven disciplines. One standard of execution."
        description="From land acquisition to long-term property management, every service is delivered under the same engineering-first philosophy."
      />
      <Services />
      <Process />
      <CtaBanner />
    </main>
  );
}
