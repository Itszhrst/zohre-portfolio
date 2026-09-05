import {
  ArrowUpRight,
  Atom,
  Braces,
  Cloud,
  Figma,
  FileCode2,
  Flame,
  GitBranch,
  Hexagon,
  Palette,
  Sparkles,
  Terminal,
  Wind,
} from "lucide-react";

const TOOLS = [
  { icon: FileCode2, name: "PHP" },
  { icon: Palette, name: "Laravel" },
  { icon: Braces, name: "JavaScript" },
  { icon: Terminal, name: "TypeScript" },
  { icon: Atom, name: "React" },
  { icon: Hexagon, name: "WordPress" },
  { icon: Wind, name: "Tailwind CSS" },
  { icon: Cloud, name: "Node.js" },
  { icon: GitBranch, name: "Git & GitHub" },
  { icon: Figma, name: "Figma" },
  { icon: Braces, name: "VS Code" },
];

const STEPS = [
  { title: "Discover", copy: "Understanding the project, goals, users and requirements." },
  { title: "Plan", copy: "Planning the architecture, features and technical approach." },
  { title: "Develop", copy: "Building clean, maintainable and scalable features." },
  { title: "Deliver", copy: "Testing, optimizing and delivering a reliable final product." },
];

export function ToolkitProcess() {
  return (
    <section id="about" className="mx-auto mt-6 max-w-7xl px-5 pt-14 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card-surface p-6">
          <h2 className="display-xl text-3xl text-primary">My Toolkit</h2>
          <ul className="mt-6 grid grid-cols-4 gap-y-7 text-center">
            {TOOLS.map((t) => (
              <li key={t.name} className="group">
                <t.icon
                  className="mx-auto size-6 text-foreground transition-colors group-hover:text-primary"
                  strokeWidth={1.4}
                />
                <span className="mt-2 block text-[0.65rem] text-muted-foreground">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-surface p-6">
          <h2 className="display-xl text-3xl text-primary">Work Process</h2>
          <ol className="mt-6 space-y-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative flex gap-4 pb-1">
                <div className="flex flex-col items-center">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-primary/60 text-[0.6rem] font-bold text-primary tabular-nums">
                    0{i + 1}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="mt-1 w-px flex-1 border-l border-dashed border-border" />
                  )}
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-[0.12em] uppercase">{s.title}</h3>
                  <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius)] bg-[image:var(--gradient-primary)] p-7">
          <Sparkles className="absolute top-24 right-8 size-8 text-primary-foreground/70" />
          <h2 className="display-xl max-w-[10ch] text-4xl text-primary-foreground">
            Let's build something amazing together.
          </h2>
          <div className="mt-8">
            <p className="max-w-xs text-sm text-primary-foreground/80">
              I'm open to freelance projects, collaborations and new opportunities.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-8 rounded-md bg-background px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight className="size-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
