import { ArrowRight, ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const PROJECTS = [
  { img: project1, name: "LIMOLAB", tag: "Medical Appointment Platform" },
  { img: project2, name: "PATRIQ SHOP", tag: "E-commerce Website" },
];

export function Projects() {
  return (
    <section id="portfolio" className="mx-auto mt-20 max-w-7xl px-5 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="display-xl text-4xl text-primary sm:text-5xl">Featured Projects</h2>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-primary"
        >
          View all projects
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <article
            key={p.name}
            className="card-surface group overflow-hidden hover:-translate-y-1 hover:border-primary/60"
          >
            <div className="relative">
              <span className="absolute top-3 left-3 z-10 rounded bg-background/80 px-2.5 py-1 text-[0.65rem] font-bold backdrop-blur tabular-nums">
                0{i + 1}
              </span>
              <img
                src={p.img}
                alt={`${p.name} project preview`}
                width={1024}
                height={700}
                loading="lazy"
                className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-4">
              <div>
                <h3 className="text-xs font-bold tracking-[0.12em] uppercase">{p.name}</h3>
                <p className="mt-1 text-[0.75rem] text-muted-foreground">{p.tag}</p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
