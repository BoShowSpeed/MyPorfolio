import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { timeline, type TimelineItem } from "../data/portfolio";

const iconFor: Record<TimelineItem["kind"], typeof GraduationCap> = {
  education: GraduationCap,
  experience: Briefcase,
  project: Rocket,
};

const colorFor: Record<TimelineItem["kind"], string> = {
  education: "text-primary border-primary/40 bg-primary/10",
  experience: "text-secondary border-secondary/40 bg-secondary/10",
  project: "text-accent border-accent/40 bg-accent/10",
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        eyebrow="// my journey"
        title="Experience & Education"
        subtitle="Education, internships, and projects on one timeline."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {timeline.map((item, i) => {
            const Icon = iconFor[item.kind];
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Node */}
                <span
                  className={`absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border ${colorFor[item.kind]} md:left-auto ${
                    isLeft ? "md:-right-4" : "md:-left-4"
                  }`}
                >
                  <Icon size={16} />
                </span>

                <div className="glass glass-hover rounded-2xl p-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {item.period}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary">{item.org}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                  {item.tags && (
                    <div
                      className={`mt-3 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}
                    >
                      {item.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
