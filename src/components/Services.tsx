import { Layout, Server, Webhook, Database, Smartphone, type LucideIcon } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { services } from "../data/portfolio";

const icons: Record<string, LucideIcon> = {
  Layout,
  Server,
  Webhook,
  Database,
  Smartphone,
};

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <SectionHeading
        eyebrow="// what i offer"
        title="Services"
        subtitle="How I can help turn an idea into a working, reliable product."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon] ?? Layout;
          return (
            <GlassCard
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group p-7"
            >
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-line bg-base-700 text-accent">
                <Icon size={26} />
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
