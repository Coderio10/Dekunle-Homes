import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Projects | Dekunle Homes & Properties",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="A portfolio built on engineering discipline."
        description="Browse completed, ongoing and managed projects across construction, residential, commercial and property management."
      />
      <Projects />
      <CtaBanner />
    </main>
  );
}
