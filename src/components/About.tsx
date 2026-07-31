import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { about, profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading eyebrow="// who i am" title="About Me" />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-3"
        >
          <GlassCard hover={false} className="h-full p-7 md:p-9">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Sparkles size={22} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {profile.name}
                </h3>
                <p className="text-sm text-slate-400">
                  {profile.degree} · {profile.university}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300">
              {about.bio.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {about.facts.map((f) => (
                <div key={f.label} className="rounded-xl border border-ink/10 bg-ink/[0.03] p-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {f.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{f.value}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Cards column */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 lg:col-span-2"
        >
          <GlassCard className="p-6">
            <Target className="mb-3 text-secondary" size={26} />
            <h4 className="mb-1 font-display font-semibold text-ink">Career Goal</h4>
            <p className="text-sm text-slate-400">{about.goal}</p>
          </GlassCard>

          <GlassCard className="p-6">
            <Heart className="mb-3 text-accent" size={26} />
            <h4 className="mb-2 font-display font-semibold text-ink">What I Enjoy</h4>
            <div className="flex flex-wrap gap-2">
              {about.interests.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <GraduationCap className="mb-3 text-primary" size={26} />
            <h4 className="mb-1 font-display font-semibold text-ink">Education</h4>
            <p className="text-sm text-slate-400">
              {profile.degree} at {profile.university}.
              <br />
              <span className="text-slate-500">Expected Graduation: (TBA)</span>
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
