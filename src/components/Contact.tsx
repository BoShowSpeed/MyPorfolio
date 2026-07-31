import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { profile, socials } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  // No backend: compose a mailto so the form works anywhere.
  // Swap this for a real endpoint (Formspree, EmailJS, or your API) when ready.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${encodeURIComponent(
      form.message
    )}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio contact"
    )}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-ink/10 bg-ink/[0.04] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-primary/60 focus:bg-ink/[0.06]";

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="// say hello"
        title="Get In Touch"
        subtitle="Open to internships, part-time roles, and interesting projects. Let's talk."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4 lg:col-span-2"
        >
          <GlassCard hover={false} className="p-6">
            <h3 className="mb-4 font-display text-lg font-semibold text-ink">
              Contact Details
            </h3>
            <a
              href={socials.email}
              className="mb-4 flex items-center gap-3 text-slate-300 transition-colors hover:text-ink"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Mail size={18} />
              </span>
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-slate-300">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/15 text-secondary">
                <MapPin size={18} />
              </span>
              {profile.location}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 text-slate-300 transition-all hover:border-primary/50 hover:text-ink"
              >
                <Github size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 text-slate-300 transition-all hover:border-primary/50 hover:text-ink"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socials.email}
                aria-label="Email"
                className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 text-slate-300 transition-all hover:border-primary/50 hover:text-ink"
              >
                <Mail size={20} />
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 md:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
            />
          </div>
          <input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={`${field} mt-4`}
          />
          <textarea
            required
            rows={5}
            placeholder="Your message..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${field} mt-4 resize-none`}
          />
          <button type="submit" className="btn-primary mt-5 w-full">
            <Send size={18} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
