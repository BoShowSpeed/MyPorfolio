import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile, socials } from "../data/portfolio";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-500">
          © {year} <span className="text-slate-300">{profile.name}</span>. Built with React,
          Tailwind & Framer Motion.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={socials.email}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-ink"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Back to top */}
      {show && (
        <button
          onClick={() => animateScroll.scrollToTop({ duration: 600, smooth: true })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-accent transition-colors hover:border-ink/25 hover:text-ink"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
