import Reveal from "./Reveal";
import Button from "./Button";

export default function CtaBanner() {
  return (
    <section className="bg-navy py-24 md:py-32 text-center relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-8 relative">
        <Reveal>
          <h2 className="text-white text-[30px] md:text-[44px] lg:text-[50px] font-bold max-w-3xl mx-auto mb-8 leading-[1.15]">
            Let&rsquo;s build something that lasts.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact" variant="primary">
              Partner With Us
            </Button>
            <Button href="/projects" variant="outline-light">
              View Our Work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
