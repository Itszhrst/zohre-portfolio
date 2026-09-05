import heroPortrait from "@/assets/hero-portrait.png";

const STATS = [
  { value: "4+", label: "YEARS LEARNING" },
  { value: "5+", label: "PROJECTS" },
  { value: "2+", label: "MAIN STACKS" },
  { value: "100%", label: "CURIOUS" },
];

export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <div className="relative grid items-center gap-8 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-4">
        <div className="relative z-10">
          <h1 className="display-xl text-[clamp(3.5rem,12vw,9.5rem)]">
            <span className="block text-gradient-primary">Software</span>
            <span className="block">Developer</span>
          </h1>

          <p className="-mt-2 font-script text-[clamp(2.5rem,7vw,4.5rem)] leading-none text-primary sm:ml-[38%]">
            Portfolio
          </p>

          <p className="mt-6 max-w-xs text-sm font-medium tracking-wide text-primary-glow uppercase">
            I build &amp; develop
            <br />
            web application
            <br />
            that solve real problems.
          </p>

          <p className="mt-4 text-[0.7rem] tracking-[0.25em] text-primary/70 uppercase">
            BACKEND / PHP / LARAVEL / API / WORDPRESS / REACT / TYPESCRIPT / ✦
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,oklch(0.62_0.223_297/0.35),transparent_65%)]" />
          <img
            src={heroPortrait}
            alt="Portrait of the creative developer"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-lg [mask-image:linear-gradient(to_bottom,black_78%,transparent)]"
          />

          <div className="absolute bottom-24 left-0 hidden items-center gap-3 lg:flex">
            <span className="size-2.5 animate-pulse-dot rounded-full bg-primary" />
            <span className="text-[0.65rem] leading-tight font-bold tracking-[0.18em] uppercase">
              Available
              <br />
              For Freelance
            </span>
          </div>

          <div className="absolute right-2 -bottom-4 grid size-28 place-items-center rounded-full border border-border bg-background/60 backdrop-blur sm:size-32">
            <span className="font-display text-3xl text-primary">ZS</span>
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow">
              <defs>
                <path
                  id="badge-circle"
                  d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                  fill="none"
                />
              </defs>
              <text className="fill-muted-foreground text-[7.5px] tracking-[0.32em] uppercase">
                <textPath href="#badge-circle">
                  Software Developer • Code • Design •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-y-8 border-t border-border pt-8 sm:grid-cols-4 lg:ml-[22%]">
        {STATS.map((s) => (
          <div key={s.label}>
            <dt className="font-display text-3xl text-primary sm:text-4xl">{s.value}</dt>
            <dd className="mt-1 text-[0.65rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
