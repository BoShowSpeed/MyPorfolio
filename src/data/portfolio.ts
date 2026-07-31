/**
 * Single source of truth for all portfolio content.
 * Edit text, links, and lists here — components read from this file.
 */

export const profile = {
  name: "Soksambo Sun",
  firstName: "Soksambo",
  roles: [
    "Full-Stack Developer",
    "Computer Science Student",
    "Laravel & React Engineer",
    "Cloud & AI Enthusiast",
  ],
  tagline:
    "I build modern web applications and AI-driven systems that solve real-world problems — and stay honest about what they do.",
  location: "Phnom Penh, Cambodia",
  university: "Paragon International University (PIU)",
  degree: "Bachelor of Computer Science",
  email: "ssun6@paragoniu.edu.kh",
  // Prefixed with the Vite base URL so it resolves under /MyPorfolio/ on GitHub Pages.
  cvUrl: import.meta.env.BASE_URL + "Soksambo-Sun-CV.pdf",
};

export const socials = {
  github: "https://github.com/BoShowSpeed",
  email: "mailto:ssun6@paragoniu.edu.kh",
  linkedin: "https://www.linkedin.com/", // TODO: replace with your LinkedIn URL
};

export const about = {
  bio: [
    "I'm a Computer Science student at Paragon International University in Phnom Penh, passionate about software engineering, web development, cloud computing, artificial intelligence, and problem-solving.",
    "Most of my background is web development in PHP and Laravel; more recently I've moved into React, Python, retrieval, and applied AI. I like problems where the interesting part is correctness — making a system honest about what it does and doesn't know, rather than just making it look clever.",
    "During a four-month internship I did POS onboarding and technical support for real restaurant and hotel clients. The lesson that stuck wasn't technical: I learned to check my assumptions, test with real data, and ask before going deep. It made me faster, not slower.",
  ],
  interests: ["Search & Retrieval", "Applied AI", "Cloud Infrastructure", "Clean Architecture"],
  goal: "To become a professional full-stack software engineer while continuously improving my technical and communication skills.",
  facts: [
    { label: "Based in", value: "Phnom Penh, KH" },
    { label: "Focus", value: "Full-Stack · Cloud · AI" },
    { label: "Also", value: "PHP · Laravel · React" },
  ],
};

export type SkillCategory = {
  title: string;
  items: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "C++", level: 78 },
      { name: "Java", level: 72 },
      { name: "PHP", level: 88 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", level: 82 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", level: 88 },
      { name: "REST APIs", level: 84 },
      { name: "Authentication", level: 80 },
      { name: "MVC Architecture", level: 85 },
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "MySQL", level: 85 },
      { name: "Database Design", level: 82 },
      { name: "Cloud Computing", level: 74 },
    ],
  },
];

export const tools = ["Git", "GitHub", "VS Code", "Postman", "Composer", "npm"];

export const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Leadership",
  "Communication",
  "Critical Thinking",
  "Fast Learner",
];

export type TimelineItem = {
  kind: "education" | "experience" | "project";
  title: string;
  org: string;
  period: string;
  description: string;
  tags?: string[];
};

export const timeline: TimelineItem[] = [
  {
    kind: "education",
    title: "Bachelor of Computer Science",
    org: "Paragon International University",
    period: "2024 — Present",
    description:
      "Studying software engineering, data structures, databases, and cloud computing while building full-stack projects.",
    tags: ["Software Engineering", "Databases", "Cloud"],
  },
  {
    kind: "project",
    title: "Grounded Answers — RAG Search System",
    org: "CS382 Final Project",
    period: "2026",
    description:
      "A Retrieval-Augmented Generation system over a 143-document corpus that answers only from its sources, cites them, and refuses when it doesn't know.",
    tags: ["Python", "Embeddings", "Streamlit"],
  },
  {
    kind: "experience",
    title: "POS Onboarding & Technical Support",
    org: "Internship · 4 months",
    period: "2026",
    description:
      "Onboarded restaurant and hotel clients onto a POS platform: data prep, CSV imports, QR scan-order-pay setup, and staff training. Traced and fixed a KHR/USD exchange-rate bug at the configuration level.",
    tags: ["Data Prep", "POS Config", "Client Support"],
  },
  {
    kind: "project",
    title: "Airline Management System",
    org: "Course Project",
    period: "2025",
    description:
      "Flight management and booking platform with a React frontend and a Laravel REST API, backed by a relational database.",
    tags: ["React", "Laravel", "MySQL"],
  },
  {
    kind: "experience",
    title: "Python Essentials 1 — Cisco / OpenEDG",
    org: "Certification",
    period: "2026",
    description:
      "Completed the certification while shifting focus toward Python for AI and data work.",
    tags: ["Python", "Certification"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  accent: "primary" | "secondary" | "accent";
};

export const projects: Project[] = [
  {
    title: "Grounded Answers — RAG Search",
    blurb: "AI search that cites its sources and refuses when it doesn't know.",
    description:
      "A Retrieval-Augmented Generation system over a 143-document astronomy corpus (~7,469 chunks). Semantic retrieval with sentence-transformer embeddings, a confidence gate, and grounded generation with inline [n] citations plus an offline extractive fallback.",
    tech: ["Python", "sentence-transformers", "NumPy", "Streamlit", "Gemini API"],
    github: "https://github.com/BoShowSpeed/SearchEngineFinalProject-Soksambo-Sun-",
    featured: true,
    accent: "primary",
  },
  {
    title: "Crowd-Sourced Knowledge Base",
    blurb: "Full-stack knowledge-sharing platform with an admin dashboard.",
    description:
      "A community platform for sharing articles: Laravel backend, REST API, authentication, category management, article CRUD, and an admin dashboard — all behind a responsive UI.",
    tech: ["Laravel", "PHP", "REST API", "MySQL", "Auth"],
    github: socials.github,
    accent: "accent",
  },
  {
    title: "Airline Management System",
    blurb: "Flight management & booking with a React + Laravel architecture.",
    description:
      "A booking platform with flight management, a clean API architecture, and database integration. React on the frontend, Laravel on the backend.",
    tech: ["React", "Laravel", "REST API", "MySQL"],
    github: socials.github,
    accent: "secondary",
  },
  {
    title: "Cloud Computing Projects",
    blurb: "Production deployments on DigitalOcean with Apache & Linux.",
    description:
      "Hands-on cloud infrastructure work: deploying web apps and databases on DigitalOcean droplets, configuring Apache on Linux, managing virtual machines, and experimenting with load balancing.",
    tech: ["DigitalOcean", "Apache", "Linux", "VMs", "Load Balancing"],
    github: socials.github,
    accent: "primary",
  },
];

/* ------------------------------------------------------------------ */
/*  CS382 Final Project — RAG-Based AI Search System (deep-dive)       */
/* ------------------------------------------------------------------ */

export const caseStudy = {
  title: "Grounded Answers",
  subtitle: "A Retrieval-Augmented Generation search system",
  course: "CS382 Final Project · 2026",
  summary:
    "A RAG search system over a 143-document corpus that answers only from its sources, cites every claim, and refuses when the answer isn't in the documents — the opposite of a chatbot that confidently makes things up.",
  tech: ["Python", "sentence-transformers", "NumPy", "Streamlit", "Gemini API"],
  links: {
    source: "https://github.com/BoShowSpeed/SearchEngineFinalProject-Soksambo-Sun-",
    readme:
      "https://github.com/BoShowSpeed/SearchEngineFinalProject-Soksambo-Sun-/blob/main/README.md",
    evaluation:
      "https://github.com/BoShowSpeed/SearchEngineFinalProject-Soksambo-Sun-/blob/main/evaluation/EVALUATION.md",
  },

  quickStats: [
    { value: "143", label: "Source documents" },
    { value: "7,469", label: "Indexed chunks" },
    { value: "384", label: "Vector dimensions" },
    { value: "0.30", label: "Confidence gate" },
  ],

  why: [
    "The brief was to build a real RAG system, but the part I actually cared about was the failure mode. A chatbot with general knowledge will happily answer anything, true or not. I wanted the opposite: a system that treats a fixed set of documents as its only source of truth, shows exactly which passages it used, and says “I couldn't find that in the documents” when the answer isn't there.",
    "I picked astronomy because it's a domain where facts are precise and easy to check, and where a lot of documents overlap — Venus shows up in a short note and a long encyclopedia article — which makes retrieval genuinely hard instead of a toy lookup.",
  ],

  problem:
    "Keyword search can't tell that “the largest moon” is about Ganymede, and a language model on its own invents citations. I needed semantic retrieval plus generation that stays strictly inside the retrieved text.",
  solution:
    "Embed every chunk with a sentence-transformer, retrieve the top-k by cosine similarity, gate on a confidence threshold, and prompt the LLM to answer only from those chunks with inline [n] citations — with an offline extractive fallback.",

  architectureIntro:
    "Six separable modules, one responsibility each, with every tunable value (chunk size, top-k, threshold, model names) in a single config.py so each decision lives in one place and is easy to justify.",
  modules: [
    { file: "src/ingest.py", title: "Ingest & chunk", desc: "Load .txt documents from disk, split sentence-aware." },
    { file: "src/embed.py", title: "Embed", desc: "Encode each chunk to a 384-dim vector; cache to disk so relaunch is instant." },
    { file: "src/vector_store.py", title: "Vector store", desc: "Hold vectors in memory, run exact cosine top-k search." },
    { file: "src/retrieve.py", title: "Retrieve", desc: "Embed the query, return top-k, apply the confidence gate." },
    { file: "src/generate.py", title: "Generate", desc: "Prompt Gemini to answer only from the chunks; fall back to extractive." },
    { file: "app.py", title: "Interface", desc: "Streamlit: query box, answer, expandable sources, top-k slider." },
  ],

  pipeline: [
    { n: "01", title: "Document ingestion", desc: "143 documents (~7,469 chunks) mixing hand-written notes with Wikipedia articles (CC BY-SA 4.0). Swapping the folder re-points the whole system at a new domain." },
    { n: "02", title: "Chunking", desc: "Sentence-aware, ~90 words per chunk with ~20 words of overlap. Big enough to hold one idea, small enough to stay on a single topic. Fixed-character slicing was rejected — it cuts sentences and pollutes embeddings." },
    { n: "03", title: "Embeddings", desc: "all-MiniLM-L6-v2, 384-dim, L2-normalized so cosine similarity is a single dot product. Local, no API key, fast enough for a live demo — and real embeddings, not TF-IDF." },
    { n: "04", title: "Vector search", desc: "Exact in-memory cosine similarity. For a few thousand chunks it's instant and dependency-free; FAISS/Chroma is the documented upgrade path at millions of chunks." },
    { n: "05", title: "Top-K retrieval", desc: "Default top_k = 4, adjustable from the UI. Retrieving four rather than one keeps the correct document in front of the generator even when a broader article outranks it at position 1." },
    { n: "06", title: "Confidence threshold", desc: "If the best chunk scores below 0.30, the system refuses instead of hallucinating. This single gate is what makes graceful failure work." },
  ],

  code: `# build once, then query
from src.retrieve import RagIndex
from src.generate import generate_answer

index   = RagIndex().build()
results = index.retrieve(query, top_k=4)      # List[SearchResult]: chunk, source, score

if index.is_confident(results):               # best score >= 0.30 ?
    out = generate_answer(query, results)     # {answer, provider, sources}, cited [n]
else:
    out = "I couldn't find that in the documents."  # graceful failure`,

  evaluationIntro:
    "19 test queries — 16 in-domain (several deliberately hard near-neighbour cases) and 3 out-of-domain. Because two documents can each fully answer a query, ground truth is scored as a set of acceptable sources, not one golden file.",
  metrics: [
    { value: "11", small: "/16", label: "Retrieval hit@1" },
    { value: "15", small: "/16", label: "Retrieval hit@4" },
    { value: "19", small: "/19", label: "Answer / refuse decisions" },
  ],
  finding:
    "The gap between hit@1 and hit@4 is the finding I care about most: on five queries a broad, keyword-dense article (like wiki_planet.txt) outranks the specific answer document at position 1 — but top_k = 4 keeps the right document in front of the generator in four of those five. That's the clearest argument for adding a re-ranking step.",
  chartCaption:
    "Best-chunk similarity per query. The 0.30 gate sits in the empty gap between the two groups.",
  chartNote:
    "In-domain (16), all ≥ 0.60 · out-of-domain (3), ~0.22–0.26 · known peaks: wiki_planet 0.79, wiki_pluto 0.74.",

  challenges: [
    "Growing the corpus lowered top-1 accuracy. Going from 86 to 7,469 chunks dropped hit@1, because broad articles started out-ranking the specific answer document. Counter-intuitive, and it reframed the problem from “get more data” to “rank better.”",
    "The threshold wasn't portable. At 0.25 on a small corpus, a cookie-recipe query crept to 0.255 and got wrongly answered once the index grew. Similarity scores aren't calibrated probabilities, so the gate had to be re-tuned to 0.30.",
    "Keeping the demo bulletproof. A live demo can't depend on an API key or network, so generation had to degrade to a fully offline extractive path without changing anything downstream.",
  ],
  learned: [
    "Retrieval is a ranking problem, not a lookup. The hard part isn't finding a relevant chunk — it's making the right one win against a plausible neighbour.",
    "Grounding is discipline, not magic. The system prompt, the citation format, and the extractive fallback together are what separate RAG from a chatbot that sounds confident.",
    "Isolated layers make change cheap. Re-tuning the threshold or swapping the corpus touched exactly one file each — the modular split paid for itself.",
  ],
  future: [
    "Cross-encoder re-ranking over the top-k, which the evaluation shows would help more than adding data.",
    "A calibrated confidence score so the refuse threshold generalizes across domains instead of being hand-tuned.",
    "PDF and HTML ingestion (only .txt is wired up today) and a persistent vector store like FAISS or Chroma for larger corpora.",
  ],
};

export const stats = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Technologies Learned", value: 18, suffix: "+" },
  { label: "GitHub Repositories", value: 25, suffix: "+" },
  { label: "Years Learning to Code", value: 3, suffix: "" },
];

export const services = [
  {
    icon: "Layout",
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps built with React, Tailwind, and clean component architecture.",
  },
  {
    icon: "Server",
    title: "Backend Development",
    description:
      "Robust server-side systems with Laravel and PHP — auth, business logic, and an MVC structure that scales.",
  },
  {
    icon: "Webhook",
    title: "REST API Development",
    description:
      "Well-structured, documented REST APIs that cleanly connect frontends, mobile clients, and services.",
  },
  {
    icon: "Database",
    title: "Database Design",
    description:
      "Normalized relational schemas, sensible indexing, and reliable MySQL data models built to last.",
  },
  {
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "Interfaces that feel right on desktop, laptop, tablet, and mobile — accessible and fast everywhere.",
  },
];

/**
 * Placeholder testimonials — swap for real quotes when you collect them.
 */
export const testimonials = [
  {
    quote:
      "Soksambo is the person who reads the error message twice and actually fixes the root cause. Dependable on any part of the stack.",
    name: "Project Teammate",
    role: "CS382 Group",
  },
  {
    quote:
      "Clear communicator and a fast learner. He picked up our POS workflow quickly and made client onboarding noticeably smoother.",
    name: "Internship Supervisor",
    role: "POS Platform",
  },
  {
    quote:
      "Careful about correctness and honest about trade-offs. That mindset shows up in everything he ships.",
    name: "Study Partner",
    role: "Paragon International University",
  },
];

export const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Case Study", to: "case-study" },
  { label: "Services", to: "services" },
  { label: "Contact", to: "contact" },
];
