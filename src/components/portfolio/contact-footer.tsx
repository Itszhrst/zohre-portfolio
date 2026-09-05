import {
  ArrowUp,
  Clock,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "zohrehsetoudeh1@gmail.com",
    href: "mailto:zohrehsetoudeh1@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09055707582",
    href: "tel:09055707582",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tehran / Iran",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open for freelance projects",
  },
];

const SOCIALS = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zohresotoudeh",
  },
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/Itszhrst",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://www.instagram.com/zohresotoudeh",
  },
  {
    icon: Send,
    name: "Telegram",
    url: "https://t.me/SotoudehZhre",
  },
];

export function ContactFooter() {
  return (
    <footer id="contact" className="mx-auto mt-4 max-w-7xl px-5 pb-10 lg:px-8">
      <div className="card-surface relative grid gap-10 p-7 pt-24 md:pt-7 lg:grid-cols-[1fr_auto_1fr]">
        <div>
          <h2 className="display-xl text-3xl text-primary">Contact</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {DETAILS.map((d) => {
              const Icon = d.icon;

              return (
                <li key={d.label} className="flex gap-3">
                  <Icon
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.5}
                  />

                  <div>
                    <p className="text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                      {d.label}
                    </p>

                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-[0.82rem] transition-colors hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-[0.82rem]">{d.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="absolute -top-14 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:self-center">
          <div className="relative size-40 overflow-hidden rounded-full border border-primary/40 shadow-[var(--shadow-glow)]">
            <img
              src={heroPortrait}
              alt="Software developer avatar"
              width={1024}
              height={1024}
              loading="lazy"
              className="size-full scale-125 object-cover object-top"
            />
          </div>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[0.6rem] font-bold tracking-[0.14em] whitespace-nowrap text-primary-foreground uppercase">
            OPEN FOR PROJECTS & OPPORTUNITIES
          </span>
        </div>

        <div className="md:pl-6">
          <h2 className="display-xl text-3xl text-primary">Let's Connect</h2>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
          <p className="mt-6 max-w-xs text-[0.82rem] leading-relaxed text-muted-foreground">
            Let's connect, share ideas and build something useful.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl text-primary">ZS</span>
          <span className="text-[0.7rem] font-bold tracking-[0.16em] uppercase">
            Software Developer
          </span>
        </div>
        <p className="text-[0.72rem] text-muted-foreground">
          © 2026 Zohre Sotoudeh. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#home"
            aria-label="Back to top"
            className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
