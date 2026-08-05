import Reveal from "./Reveal";
import { Mark } from "./Logo";

export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-navy pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <Reveal>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <Mark className="w-6 h-6 text-gold" />
          </div>
          <h1 className="text-white text-[32px] md:text-[46px] font-bold leading-[1.15] max-w-2xl">
            {title}
          </h1>
          {description && (
            <p className="text-white/65 text-[16px] leading-[1.7] max-w-xl mt-5">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
