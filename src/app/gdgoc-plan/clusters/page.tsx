import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Cloud,
  Code2,
  Database,
  Layers3,
  Palette,
  Smartphone,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GDGoC BUK Clusters | Session 1",
  description:
    "Cluster structure for GDGoC BUK Session 1, covering infrastructure, web, mobile, AI, visuals, data, and no-code.",
};

const clusterDetails = [
  {
    name: "Infrastructure",
    subtitle: "Cloud and DevOps",
    icon: Cloud,
    color: "#1A73E8",
    summary:
      "The backbone team for hosting, deployment, automation, cloud literacy, and reliable project operations.",
    focus: ["Cloud foundations", "CI/CD and deployment", "Linux and networking", "Monitoring and documentation"],
    outputs: ["Reusable deployment templates", "Cloud study circles", "Project hosting support"],
  },
  {
    name: "Web",
    subtitle: "Web 2 and Web 3",
    icon: Code2,
    color: "#1557B0",
    summary:
      "The product-building lane for websites, dashboards, APIs, blockchain basics, and campus-facing digital tools.",
    focus: ["Frontend and backend", "APIs and databases", "Authentication", "Smart contract introductions"],
    outputs: ["Club website modules", "Partner dashboards", "Hackathon web apps"],
  },
  {
    name: "Mobile",
    subtitle: "Android and cross-platform",
    icon: Smartphone,
    color: "#34A853",
    summary:
      "The mobile team turns student problems into phone-first experiences that can be tested quickly on campus.",
    focus: ["Android fundamentals", "React Native or Flutter", "Mobile UI patterns", "App testing and release prep"],
    outputs: ["Campus utility apps", "Mobile prototypes", "App demo sessions"],
  },
  {
    name: "AI & Prompt Engr",
    subtitle: "AI workflows and applied prompting",
    icon: Bot,
    color: "#F9AB00",
    summary:
      "The AI cluster teaches practical AI use, prompt engineering, agent workflows, and responsible AI habits.",
    focus: ["Prompt design", "AI-assisted coding", "RAG basics", "Responsible AI use"],
    outputs: ["Prompt playbooks", "AI workflow demos", "Build-with-AI project support"],
  },
  {
    name: "Visuals",
    subtitle: "Video Editing, Graphic Design, UI/UX",
    icon: Palette,
    color: "#EA4335",
    summary:
      "The storytelling team makes GDGoC visible through brand systems, event media, interface design, and recap content.",
    focus: ["Graphic design", "Video editing", "UI/UX foundations", "Brand consistency"],
    outputs: ["Event posters", "Recap videos", "Product mockups and design systems"],
  },
  {
    name: "Data Engr",
    subtitle: "Science and analysis",
    icon: Database,
    color: "#2E7D32",
    summary:
      "The data team tracks community growth, builds insight dashboards, and helps projects make sense of information.",
    focus: ["Data cleaning", "Analysis and visualization", "Dashboards", "Intro machine learning"],
    outputs: ["Impact dashboards", "Survey analysis", "Data project demos"],
  },
  {
    name: "NO CODE",
    subtitle: "Automation and product ops",
    icon: Workflow,
    color: "#5F6368",
    summary:
      "The inclusive builder lane for members who want to ship useful systems with forms, automations, websites, and tools.",
    focus: ["Forms and workflows", "Automation tools", "Notion and Airtable systems", "Rapid prototyping"],
    outputs: ["Registration systems", "Ops trackers", "No-code MVPs"],
  },
];

export default function GdgocClustersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 h-96 w-96 rounded-full bg-green-300/25 blur-3xl" />

      <section className="relative mx-auto max-w-7xl">
        <Link
          href="/gdgoc-plan/team"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" /> Back to team
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:p-10">
            <Layers3 className="mb-8 h-12 w-12 text-[#FBBC04]" />
            <p className="font-bold uppercase tracking-[0.35em] text-white/45">GDGoC Clusters</p>
            <h1 className="mt-4 font-clash text-5xl font-bold tracking-tight sm:text-6xl">
              Seven lanes for serious growth.
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Each cluster gives members a clear place to learn, contribute, ship projects, and mentor newer builders
              throughout Session 1.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-3xl font-black text-[#34A853]">7</p>
                <p className="mt-2 text-sm font-semibold text-white/65">Skill clusters</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-3xl font-black text-[#34A853]">1</p>
                <p className="mt-2 text-sm font-semibold text-white/65">Shared community</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {clusterDetails.map((cluster) => {
              const Icon = cluster.icon;

              return (
                <article
                  key={cluster.name}
                  className="rounded-[2rem] border border-slate-200 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: cluster.color }}>
                        {cluster.subtitle}
                      </p>
                      <h2 className="mt-2 font-clash text-3xl font-bold text-slate-950">{cluster.name}</h2>
                    </div>
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{ backgroundColor: cluster.color }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-slate-600">{cluster.summary}</p>

                  <div className="mt-5">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-slate-400">Focus areas</p>
                    <div className="flex flex-wrap gap-2">
                      {cluster.focus.map((item) => (
                        <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl bg-slate-50 p-4">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-slate-400">Expected outputs</p>
                    <ul className="space-y-2 text-sm leading-6 text-slate-600">
                      {cluster.outputs.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: cluster.color }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
