import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) return notFound();

  return (
    <main>
      <section className="relative h-[56vh] min-h-[380px]">
        <Image src={project.image} alt={project.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-navy/10" />
        <div className="absolute bottom-0 left-0 right-0 pt-32 pb-12">
          <div className="max-w-container mx-auto px-6 md:px-8">
            <Link href="/projects" className="text-white/70 text-[13.5px] hover:text-gold-soft">
              ← Back to Projects
            </Link>
            <div className="inline-block text-[11px] font-bold tracking-wide text-white bg-gold-dark rounded-full px-3 py-1 mt-6 mb-3">
              {project.status}
            </div>
            <h1 className="text-white text-[32px] md:text-[46px] font-bold">{project.name}</h1>
            <p className="text-white/70 mt-2 text-[15px]">
              {project.location} · {PROJECT_FILTERS.find((f) => f.value === project.category)?.label}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8 grid lg:grid-cols-[2fr_1fr] gap-14">
          <Reveal>
            <h2 className="text-[24px] font-bold text-navy mb-5">Project overview</h2>
            <p className="text-slate2 text-[15.5px] leading-[1.8] mb-4">
              Engineered and supervised in-house from planning through to{" "}
              {project.status.toLowerCase()}, with structural and MEP design
              reviewed before ground was broken.
            </p>
            <p className="text-slate2 text-[15.5px] leading-[1.8]">
              Interested in a similar development or investment stake? Our
              team can walk you through current opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-paper p-8">
              <h3 className="text-[15px] font-display font-bold text-navy mb-5">Project details</h3>
              <dl className="space-y-4 text-[14px]">
                <div className="flex justify-between border-b border-navy/10 pb-3">
                  <dt className="text-slate2">Location</dt>
                  <dd className="text-navy font-medium">{project.location}</dd>
                </div>
                <div className="flex justify-between border-b border-navy/10 pb-3">
                  <dt className="text-slate2">Category</dt>
                  <dd className="text-navy font-medium">
                    {PROJECT_FILTERS.find((f) => f.value === project.category)?.label}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate2">Status</dt>
                  <dd className="text-navy font-medium">{project.status}</dd>
                </div>
              </dl>
              <Button href="/contact" variant="secondary" className="w-full mt-7">
                Enquire About This Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
