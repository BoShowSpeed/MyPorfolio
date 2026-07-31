import { Link } from "react-scroll";
import { Download, Mail, ArrowRight, MapPin } from "lucide-react";
import { profile, socials } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center px-5">
      <div className="mx-auto w-full max-w-5xl sm:px-8">
        <p className="mb-6 flex items-center gap-2 text-sm text-slate-400">
          <MapPin size={15} className="text-accent" />
          {profile.location} · Open to internships
        </p>

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
          Hi, I'm Soksambo Sun —
          <br />I build things for the web.
        </h1>

        <p className="mt-4 text-lg text-accent">
          Full-Stack Developer · Computer Science Student
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href={profile.cvUrl} download className="btn-primary">
            <Download size={17} /> Download CV
          </a>
          <Link to="projects" smooth duration={500} offset={-70} className="btn-ghost cursor-pointer">
            View Projects <ArrowRight size={16} />
          </Link>
          <Link to="contact" smooth duration={500} offset={-70} className="btn-ghost cursor-pointer">
            <Mail size={16} /> Contact
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-5 text-sm text-slate-500">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <span className="h-1 w-1 rounded-full bg-slate-700" />
          <a href={socials.email} className="hover:text-ink">
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
