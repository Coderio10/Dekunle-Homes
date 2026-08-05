import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog | Dekunle Homes & Properties",
};

const posts = [
  {
    title: "Why engineering oversight should come before the sale",
    excerpt: "A look at how most developers sequence their process, and why we do it differently.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&q=80&auto=format",
  },
  {
    title: "What to check before you invest in a joint development",
    excerpt: "Questions every prospective investor should ask before committing capital.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800&q=80&auto=format",
  },
  {
    title: "Property management is risk management",
    excerpt: "How proactive inspections and maintenance protect asset value over time.",
    image: "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=800&q=80&auto=format",
  },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title="Notes on engineering, real estate and investment."
        description="Perspectives from our engineering and development teams."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article>
                <div className="relative h-56 mb-5 rounded-2xl overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <h3 className="text-[18px] font-semibold text-navy mb-2 leading-[1.35]">{post.title}</h3>
                <p className="text-[14px] text-slate2 leading-[1.65]">{post.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
