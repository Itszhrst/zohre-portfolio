import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const NAV = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // مدیریت اسکرول هدر
  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // مدیریت تم اولیه (فقط در سمت کلاینت اجرا می‌شود تا از خطای Hydration جلوگیری شود)
  useEffect(() => {
    if (!mounted) return;
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mounted]);

  // تابع تغییر تم
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="font-display text-2xl leading-none text-primary">ZS</span>
          <span className="hidden h-6 w-px bg-border sm:block" />
          <span className="hidden text-xs font-bold tracking-[0.18em] uppercase sm:block">
            Software Developer
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-xs font-medium tracking-[0.14em] uppercase transition-colors hover:text-primary ${
                i === 0 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item}
              {i === 0 && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-6">
          <a
            href="#contact"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-xs font-bold tracking-[0.14em] text-primary-foreground uppercase transition-shadow hover:shadow-[var(--shadow-glow)] sm:inline-flex"
          >
            START A PROJECT
          </a>
          
          {/* دکمه تغییر تم با منطق SSR-safe */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )
            ) : (
              <Moon className="size-4" /> // حالت پیش‌فرض برای جلوگیری از خطای Hydration
            )}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm tracking-[0.14em] text-muted-foreground uppercase"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}