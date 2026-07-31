import { Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <SectionHeading
        eyebrow="// kind words"
        title="Testimonials"
        subtitle="What teammates and mentors have said about working with me."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <GlassCard
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col p-6"
          >
            <Quote className="mb-4 text-primary/60" size={30} />
            <p className="flex-1 text-sm leading-relaxed text-slate-300">"{t.quote}"</p>
            <div className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-base-700 font-display font-semibold text-accent">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
