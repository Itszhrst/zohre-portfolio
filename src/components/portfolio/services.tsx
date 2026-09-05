import { Code2, Boxes, Sparkles, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: Sparkles,
    title: "WEB DEVELOPMENT",
    copy: "Building modern, responsive and practical websites tailored to your needs.",
  },
  {
    icon: Code2,
    title: "BACKEND DEVELOPMENT",
    copy: "Developing reliable backend systems, APIs and business logic with PHP and modern tools.",
  },
  {
    icon: Boxes,
    title: "WORDPRESS",
    copy: "Custom WordPress websites, theme customization and plugin development.",
  },
  {
    icon: Zap,
    title: "API & INTEGRATION",
    copy: "Connecting services, building REST APIs and integrating systems to work together smoothly.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto mt-20 max-w-7xl border-t border-border px-5 pt-14 lg:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <div>
          <h2 className="display-xl flex items-start gap-3 text-4xl text-primary">
            <span>
              What
              <br />I Do
            </span>
            <Sparkles className="mt-3 size-5" />
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            I build websites and web applications, from backend logic and APIs to clean interfaces and real-world features.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="card-surface group flex flex-col p-6 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
            >
              <s.icon className="size-7 text-primary" strokeWidth={1.5} />
              <h3 className="mt-8 text-sm font-bold tracking-[0.12em] uppercase">{s.title}</h3>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-muted-foreground">{s.copy}</p>
              <span className="mt-8 text-xs text-muted-foreground/60 tabular-nums">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
