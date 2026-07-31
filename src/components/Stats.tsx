import { stats } from "../data/portfolio";

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card px-4 py-8 text-center">
            <p className="font-display text-4xl font-bold text-accent md:text-5xl">
              {s.value}
              {s.suffix}
            </p>
            <p className="mt-2 text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
