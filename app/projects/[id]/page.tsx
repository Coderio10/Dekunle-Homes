import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import Counter from "@/components/Counter";
import SectionHead from "@/components/SectionHead";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) return notFound();

  const caseStudyNote =
    project.beforeAfterNote ??
    (project.scopeOfWork?.length
      ? `Work on this project focused on ${project.scopeOfWork.slice(0, 3).join(", ").replace(/, ([^,]*)$/, ", and $1")}. The site was reworked to improve the way it functions and the way it reads from the street.`
      : `The site was reworked to improve the way it functions and the way it reads from the street.`);

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
        <div className="max-w-container mx-auto px-6 md:px-8">
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
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <Reveal>
            <SectionHead
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M4 15h6V9H4v6Zm10 0h6V6h-6v9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              }
              label="Before & After"
              title="The site before, and the result after delivery."
              description="Drag the handle or use the keyboard to compare the two states."
            />
          </Reveal>

          <div className="mt-10">
            <BeforeAfterSlider
              beforeSrc={project.beforeImage}
              afterSrc={project.afterImage}
              beforeAlt={project.beforeAlt}
              afterAlt={project.afterAlt}
              beforeLabel={project.beforeLabel}
              afterLabel={project.afterLabel}
              note={caseStudyNote}
            />
          </div>
        </div>
      </section>

      {project.scopeOfWork?.length ? (
        <section className="pb-20 md:pb-28">
          <div className="max-w-container mx-auto px-6 md:px-8">
            <Reveal>
              <SectionHead
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d="M6 7h12M6 12h12M6 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                }
                label="Scope of Work"
                title="Key actions delivered on this project."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.scopeOfWork.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[13.5px] font-medium text-navy"
                  >
                    <span className="h-2 w-2 rounded-full bg-gold-dark" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {project.outcomeStats?.length ? (
        <section className="pb-20 md:pb-28">
          <div className="max-w-container mx-auto px-6 md:px-8">
            <Reveal>
              <SectionHead
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d="M5 19V9M12 19V5M19 19v-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                }
                label="Outcome / Results"
                title="What the delivered work achieved."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {project.outcomeStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white shadow-card-hover p-6">
                    <b className="block font-display text-[32px] md:text-[36px] text-navy font-bold leading-none">
                      <Counter target={stat.value} suffix={stat.suffix ?? ""} />
                    </b>
                    <span className="block text-[13px] text-slate2 mt-2 leading-[1.5]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {project.galleryImages?.length ? (
        <section className="pb-20 md:pb-28">
          <div className="max-w-container mx-auto px-6 md:px-8">
            <Reveal>
              <SectionHead
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d="M5 7h14v10H5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M8 11l2-2 4 4 2-2 2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Gallery"
                title="Additional views from the project."
              />
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.galleryImages.map((image, index) => (
                <Reveal key={image} delay={index * 0.06}>
                  <div className="relative overflow-hidden rounded-2xl h-[260px] group shadow-card">
                    <Image
                      src={image}
                      alt={`${project.name} gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-20 md:pb-28">
        <div className="max-w-container mx-auto px-6 md:px-8 grid lg:grid-cols-[2fr_1fr] gap-14 items-start">
          <div />
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
                <div className="flex justify-between border-b border-navy/10 pb-3">
                  <dt className="text-slate2">Role</dt>
                  <dd className="text-navy font-medium text-right">{project.role}</dd>
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
