import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, ExternalLink, Star, ArrowDown } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects, type Project } from "../data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="card card-hover flex flex-col p-6"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
        {project.featured && (
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-accent">
            <Star size={12} className="fill-accent" /> Featured
          </span>
        )}
      </div>

      <p className="text-sm text-slate-400">{project.blurb}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-ink"
          >
            <Github size={16} /> Code
          </a>
        )}
        {project.featured ? (
          <Link
            to="case-study"
            smooth
            duration={500}
            offset={-70}
            className="inline-flex cursor-pointer items-center gap-1.5 font-medium text-accent transition-colors hover:text-ink"
          >
            <ArrowDown size={16} /> Read the full case study
          </Link>
        ) : (
          <a
            href={project.demo ?? project.github ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-accent"
          >
            <ExternalLink size={16} /> {project.demo ? "Live Demo" : "Details"}
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="// selected work"
        title="Featured Projects"
        subtitle="A few things I've built — from AI search to full-stack platforms and cloud deployments."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
