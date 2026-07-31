import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

// Below-the-fold sections are lazy-loaded for a faster first paint.
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const CaseStudy = lazy(() => import("../components/CaseStudy"));
const Stats = lazy(() => import("../components/Stats"));
const Services = lazy(() => import("../components/Services"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const Fallback = () => <div className="py-20 text-center text-slate-600">Loading…</div>;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<Fallback />}>
          <Skills />
          <Experience />
          <Projects />
          <CaseStudy />
          <Stats />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
