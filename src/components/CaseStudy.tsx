import { motion } from "framer-motion";
import {
  Github,
  BookOpen,
  BarChart3,
  Terminal,
  Boxes,
  FlaskConical,
  Lightbulb,
  Rocket,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { caseStudy } from "../data/portfolio";

/* A titled block with a fade-up on scroll. */
function Block({
  icon: Icon,
  title,
  children,
}: {
  icon?: typeof Boxes;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="border-t border-line py-9"
    >
      <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-ink">
        {Icon && <Icon size={18} className="text-accent" />}
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

/* Re-themed evaluation scatter chart (best-chunk similarity per query). */
function EvalChart() {
  const inDomain = [
    [92, 120], [124, 103], [156, 92], [188, 112], [220, 80], [252, 107],
    [284, 72], [316, 96], [348, 66], [380, 117], [412, 86], [444, 100],
    [476, 78], [508, 110], [540, 90], [572, 105],
  ];
  const outDomain = [
    [252, 192], [348, 188], [444, 194],
  ];
  return (
    <svg
      viewBox="0 0 640 232"
      role="img"
      aria-label="Scatter plot of best-chunk similarity: in-domain queries cluster between 0.60 and 0.80, out-of-domain queries near 0.22 to 0.26, with the 0.30 threshold line in the gap between them."
      className="w-full"
    >
      <g fontFamily='"JetBrains Mono", monospace' fontSize="11" fill="#737373">
        <line x1="54" y1="18" x2="628" y2="18" stroke="#D4D4D4" />
        <line x1="54" y1="70" x2="628" y2="70" stroke="#ECECEC" />
        <line x1="54" y1="122" x2="628" y2="122" stroke="#ECECEC" />
        <line x1="54" y1="174" x2="628" y2="174" stroke="#ECECEC" />
        <line x1="54" y1="200" x2="628" y2="200" stroke="#D4D4D4" />
        <text x="46" y="22" textAnchor="end">1.0</text>
        <text x="46" y="74" textAnchor="end">0.8</text>
        <text x="46" y="126" textAnchor="end">0.6</text>
        <text x="46" y="178" textAnchor="end">0.4</text>
        <text x="46" y="204" textAnchor="end">0.2</text>
      </g>
      {/* threshold 0.30 */}
      <line x1="54" y1="177" x2="628" y2="177" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="626" y="171" textAnchor="end" fontFamily='"JetBrains Mono", monospace' fontSize="10.5" fill="#2563EB">
        threshold 0.30 — refuse below
      </text>
      {/* in-domain: filled */}
      <g fill="#0A0A0A">
        {inDomain.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4.5" />
        ))}
      </g>
      {/* out-of-domain: hollow */}
      <g fill="#FFFFFF" stroke="#737373" strokeWidth="1.5">
        {outDomain.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4.5" />
        ))}
      </g>
    </svg>
  );
}

export default function CaseStudy() {
  const cs = caseStudy;
  return (
    <section id="case-study" className="border-y border-line bg-base-800/40">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="eyebrow mb-3">// cs382 final project</p>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
            {cs.title}
          </h2>
          <p className="mt-2 text-lg text-accent">{cs.subtitle}</p>
          <p className="mt-1 font-mono text-sm text-slate-500">{cs.course}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">{cs.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {cs.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href={cs.links.source} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Github size={16} /> Source
            </a>
            <a href={cs.links.readme} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <BookOpen size={16} /> README
            </a>
            <a href={cs.links.evaluation} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <BarChart3 size={16} /> Evaluation
            </a>
          </div>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {cs.quickStats.map((s) => (
            <div key={s.label} className="card p-4 text-center">
              <p className="font-display text-2xl font-bold text-ink">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Why */}
        <Block icon={Lightbulb} title="Why I built it">
          <div className="space-y-3 leading-relaxed text-slate-400">
            {cs.why.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Block>

        {/* Problem & solution */}
        <Block title="Problem & solution">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card p-5">
              <h4 className="mb-2 text-sm font-semibold text-ink">Problem</h4>
              <p className="text-sm leading-relaxed text-slate-400">{cs.problem}</p>
            </div>
            <div className="card p-5">
              <h4 className="mb-2 text-sm font-semibold text-accent">Solution</h4>
              <p className="text-sm leading-relaxed text-slate-400">{cs.solution}</p>
            </div>
          </div>
        </Block>

        {/* Architecture */}
        <Block icon={Boxes} title="System architecture">
          <p className="mb-5 leading-relaxed text-slate-400">{cs.architectureIntro}</p>
          <ol className="space-y-0">
            {cs.modules.map((m, i) => (
              <li
                key={m.file}
                className="flex gap-4 border-t border-line py-3 first:border-t-0"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line font-mono text-xs text-slate-500">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {m.title}{" "}
                    <code className="ml-1 rounded bg-ink/[0.04] px-1.5 py-0.5 font-mono text-xs text-slate-400">
                      {m.file}
                    </code>
                  </p>
                  <p className="mt-0.5 text-sm text-slate-400">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        {/* Pipeline detail */}
        <Block title="The RAG pipeline, in detail">
          <div className="grid gap-4 sm:grid-cols-2">
            {cs.pipeline.map((step) => (
              <div key={step.n} className="card p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs text-accent">{step.n}</span>
                  <h4 className="text-sm font-semibold text-ink">{step.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Code */}
        <Block icon={Terminal} title="Programmatic interface">
          <pre className="overflow-x-auto rounded-xl border border-line bg-base-900 p-5 font-mono text-[13px] leading-relaxed text-slate-300">
            <code>{cs.code}</code>
          </pre>
        </Block>

        {/* Evaluation */}
        <Block icon={FlaskConical} title="Evaluation results">
          <p className="mb-5 leading-relaxed text-slate-400">{cs.evaluationIntro}</p>
          <div className="grid grid-cols-3 gap-4">
            {cs.metrics.map((m) => (
              <div key={m.label} className="card p-4 text-center">
                <p className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {m.value}
                  <span className="text-sm font-normal text-slate-500">{m.small}</span>
                </p>
                <p className="mt-1 text-xs text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-relaxed text-slate-400">{cs.finding}</p>
          <figure className="mt-6 card p-5">
            <figcaption className="mb-4 text-sm text-slate-400">{cs.chartCaption}</figcaption>
            <EvalChart />
            <p className="mt-3 text-xs text-slate-500">{cs.chartNote}</p>
          </figure>
        </Block>

        {/* Challenges */}
        <Block icon={AlertTriangle} title="Challenges">
          <ul className="space-y-3">
            {cs.challenges.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </Block>

        {/* Learned */}
        <Block icon={Lightbulb} title="What I learned">
          <ul className="space-y-3">
            {cs.learned.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </Block>

        {/* Future */}
        <Block icon={Rocket} title="Future improvements">
          <ul className="space-y-3">
            {cs.future.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                <ArrowRight size={15} className="mt-1 shrink-0 text-accent" />
                {c}
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </section>
  );
}
