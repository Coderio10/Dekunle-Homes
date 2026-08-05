import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | Dekunle Homes & Properties",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="A visual record of what we've built."
        description="Site photography from active construction, completed developments and managed properties."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover grayscale-[0.15]" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
