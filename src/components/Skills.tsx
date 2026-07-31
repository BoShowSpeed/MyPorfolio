import { Wrench, HeartHandshake } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { skillCategories, tools, softSkills } from "../data/portfolio";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-slate-200">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-ink/[0.06]">
        <div className="h-full rounded-full bg-accent/80" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="// what i work with"
        title="Skills & Technologies"
        subtitle="A mix of languages, frameworks, and tools I use to build full-stack applications."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <GlassCard
            key={cat.title}
            hover={false}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="p-6"
          >
            <h3 className="mb-5 font-display text-lg font-semibold text-ink">{cat.title}</h3>
            <div className="space-y-4">
              {cat.items.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <GlassCard hover={false} className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <Wrench size={20} className="text-secondary" />
            <h3 className="font-display text-lg font-semibold text-ink">Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="chip glass-hover cursor-default">
                {t}
              </span>
            ))}
          </div>
        </GlassCard>

        <GlassCard hover={false} className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <HeartHandshake size={20} className="text-accent" />
            <h3 className="font-display text-lg font-semibold text-ink">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((t) => (
              <span key={t} className="chip glass-hover cursor-default">
                {t}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
