import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Clock, D as ArrowUp, E as Atom, O as ArrowUpRight, S as Cloud, T as Boxes, _ as Github, a as Sun, b as Figma, c as Phone, d as Menu, f as MapPin, g as Hexagon, h as Instagram, i as Terminal, k as ArrowRight, l as Palette, m as Linkedin, n as X, o as Sparkles, p as Mail, r as Wind, s as Send, t as Zap, u as Moon, v as GitBranch, w as Braces, x as CodeXml, y as FileCodeCorner } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DaFndrPl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	"Home",
	"About",
	"Services",
	"Portfolio",
	"Blog",
	"Contact"
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		const savedTheme = localStorage.getItem("theme");
		const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
		setTheme(initialTheme);
		if (initialTheme === "dark") document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	}, [mounted]);
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		if (newTheme === "dark") document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl leading-none text-primary",
							children: "ZS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-6 w-px bg-border sm:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs font-bold tracking-[0.18em] uppercase sm:block",
							children: "Software Developer"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto hidden items-center gap-7 lg:flex",
					children: NAV.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.toLowerCase()}`,
						className: `relative text-xs font-medium tracking-[0.14em] uppercase transition-colors hover:text-primary ${i === 0 ? "text-primary" : "text-muted-foreground"}`,
						children: [item, i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-2 left-0 h-px w-full bg-primary" })]
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-3 lg:ml-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "hidden rounded-md bg-primary px-5 py-2.5 text-xs font-bold tracking-[0.14em] text-primary-foreground uppercase transition-shadow hover:shadow-[var(--shadow-glow)] sm:inline-flex",
							children: "START A PROJECT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Toggle theme",
							onClick: toggleTheme,
							className: "grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
							children: mounted ? theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Toggle menu",
							onClick: () => setOpen((v) => !v),
							className: "grid size-9 place-items-center rounded-full border border-border text-muted-foreground lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-background px-5 py-4 lg:hidden",
			children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${item.toLowerCase()}`,
				onClick: () => setOpen(false),
				className: "block py-2.5 text-sm tracking-[0.14em] text-muted-foreground uppercase",
				children: item
			}, item))
		})]
	});
}
var hero_portrait_default = "/assets/hero-portrait-5qiM-Zuk.png";
var STATS = [
	{
		value: "4+",
		label: "YEARS LEARNING"
	},
	{
		value: "5+",
		label: "PROJECTS"
	},
	{
		value: "2+",
		label: "MAIN STACKS"
	},
	{
		value: "100%",
		label: "CURIOUS"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative mx-auto max-w-7xl px-5 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid items-center gap-8 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl text-[clamp(3.5rem,12vw,9.5rem)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-gradient-primary",
							children: "Software"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Developer"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "-mt-2 font-script text-[clamp(2.5rem,7vw,4.5rem)] leading-none text-primary sm:ml-[38%]",
						children: "Portfolio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-xs text-sm font-medium tracking-wide text-primary-glow uppercase",
						children: [
							"I build & develop",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"web application",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"that solve real problems."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[0.7rem] tracking-[0.25em] text-primary/70 uppercase",
						children: "BACKEND / PHP / LARAVEL / API / WORDPRESS / REACT / TYPESCRIPT / ✦"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,oklch(0.62_0.223_297/0.35),transparent_65%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_portrait_default,
						alt: "Portrait of the creative developer",
						width: 1024,
						height: 1024,
						className: "mx-auto w-full max-w-lg [mask-image:linear-gradient(to_bottom,black_78%,transparent)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-24 left-0 hidden items-center gap-3 lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 animate-pulse-dot rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[0.65rem] leading-tight font-bold tracking-[0.18em] uppercase",
							children: [
								"Available",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"For Freelance"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-2 -bottom-4 grid size-28 place-items-center rounded-full border border-border bg-background/60 backdrop-blur sm:size-32",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl text-primary",
							children: "ZS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 100 100",
							className: "absolute inset-0 size-full animate-spin-slow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								id: "badge-circle",
								d: "M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0",
								fill: "none"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								className: "fill-muted-foreground text-[7.5px] tracking-[0.32em] uppercase",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
									href: "#badge-circle",
									children: "Software Developer • Code • Design •"
								})
							})]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-10 grid grid-cols-2 gap-y-8 border-t border-border pt-8 sm:grid-cols-4 lg:ml-[22%]",
			children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-display text-3xl text-primary sm:text-4xl",
				children: s.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-[0.65rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase",
				children: s.label
			})] }, s.label))
		})]
	});
}
var SERVICES = [
	{
		icon: Sparkles,
		title: "WEB DEVELOPMENT",
		copy: "Building modern, responsive and practical websites tailored to your needs."
	},
	{
		icon: CodeXml,
		title: "BACKEND DEVELOPMENT",
		copy: "Developing reliable backend systems, APIs and business logic with PHP and modern tools."
	},
	{
		icon: Boxes,
		title: "WORDPRESS",
		copy: "Custom WordPress websites, theme customization and plugin development."
	},
	{
		icon: Zap,
		title: "API & INTEGRATION",
		copy: "Connecting services, building REST APIs and integrating systems to work together smoothly."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "mx-auto mt-20 max-w-7xl border-t border-border px-5 pt-14 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[240px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "display-xl flex items-start gap-3 text-4xl text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"What",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"I Do"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-3 size-5" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
				children: "I build websites and web applications, from backend logic and APIs to clean interfaces and real-world features."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card-surface group flex flex-col p-6 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
							className: "size-7 text-primary",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-sm font-bold tracking-[0.12em] uppercase",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.8rem] leading-relaxed text-muted-foreground",
							children: s.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-8 text-xs text-muted-foreground/60 tabular-nums",
							children: ["0", i + 1]
						})
					]
				}, s.title))
			})]
		})
	});
}
var PROJECTS = [{
	img: "/assets/project-1-BIPJPh25.jpg",
	name: "LIMOLAB",
	tag: "Medical Appointment Platform"
}, {
	img: "/assets/project-2-CugiHKhL.jpg",
	name: "PATRIQ SHOP",
	tag: "E-commerce Website"
}];
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "portfolio",
		className: "mx-auto mt-20 max-w-7xl px-5 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-xl text-4xl text-primary sm:text-5xl",
				children: "Featured Projects"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				className: "group inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-primary",
				children: ["View all projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-4 md:grid-cols-3",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-surface group overflow-hidden hover:-translate-y-1 hover:border-primary/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute top-3 left-3 z-10 rounded bg-background/80 px-2.5 py-1 text-[0.65rem] font-bold backdrop-blur tabular-nums",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.img,
						alt: `${p.name} project preview`,
						width: 1024,
						height: 700,
						loading: "lazy",
						className: "aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-bold tracking-[0.12em] uppercase",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[0.75rem] text-muted-foreground",
						children: p.tag
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" })]
				})]
			}, p.name))
		})]
	});
}
var TOOLS = [
	{
		icon: FileCodeCorner,
		name: "PHP"
	},
	{
		icon: Palette,
		name: "Laravel"
	},
	{
		icon: Braces,
		name: "JavaScript"
	},
	{
		icon: Terminal,
		name: "TypeScript"
	},
	{
		icon: Atom,
		name: "React"
	},
	{
		icon: Hexagon,
		name: "WordPress"
	},
	{
		icon: Wind,
		name: "Tailwind CSS"
	},
	{
		icon: Cloud,
		name: "Node.js"
	},
	{
		icon: GitBranch,
		name: "Git & GitHub"
	},
	{
		icon: Figma,
		name: "Figma"
	},
	{
		icon: Braces,
		name: "VS Code"
	}
];
var STEPS = [
	{
		title: "Discover",
		copy: "Understanding the project, goals, users and requirements."
	},
	{
		title: "Plan",
		copy: "Planning the architecture, features and technical approach."
	},
	{
		title: "Develop",
		copy: "Building clean, maintainable and scalable features."
	},
	{
		title: "Deliver",
		copy: "Testing, optimizing and delivering a reliable final product."
	}
];
function ToolkitProcess() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "mx-auto mt-6 max-w-7xl px-5 pt-14 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-xl text-3xl text-primary",
						children: "My Toolkit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid grid-cols-4 gap-y-7 text-center",
						children: TOOLS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, {
								className: "mx-auto size-6 text-foreground transition-colors group-hover:text-primary",
								strokeWidth: 1.4
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-[0.65rem] text-muted-foreground",
								children: t.name
							})]
						}, t.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-xl text-3xl text-primary",
						children: "Work Process"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-5",
						children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative flex gap-4 pb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "grid size-7 shrink-0 place-items-center rounded-full border border-primary/60 text-[0.6rem] font-bold text-primary tabular-nums",
									children: ["0", i + 1]
								}), i < STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 w-px flex-1 border-l border-dashed border-border" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-bold tracking-[0.12em] uppercase",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[0.78rem] leading-relaxed text-muted-foreground",
								children: s.copy
							})] })]
						}, s.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col justify-between overflow-hidden rounded-[var(--radius)] bg-[image:var(--gradient-primary)] p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "absolute top-24 right-8 size-8 text-primary-foreground/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-xl max-w-[10ch] text-4xl text-primary-foreground",
							children: "Let's build something amazing together."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xs text-sm text-primary-foreground/80",
								children: "I'm open to freelance projects, collaborations and new opportunities."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "mt-6 inline-flex items-center gap-8 rounded-md bg-background px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-transform hover:-translate-y-0.5",
								children: ["Get in touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-primary" })]
							})]
						})
					]
				})
			]
		})
	});
}
var DETAILS = [
	{
		icon: Mail,
		label: "Email",
		value: "zohrehsetoudeh1@gmail.com",
		href: "mailto:zohrehsetoudeh1@gmail.com"
	},
	{
		icon: Phone,
		label: "Phone",
		value: "09055707582",
		href: "tel:09055707582"
	},
	{
		icon: MapPin,
		label: "Location",
		value: "Tehran / Iran"
	},
	{
		icon: Clock,
		label: "Availability",
		value: "Open for freelance projects"
	}
];
var SOCIALS = [
	{
		icon: Linkedin,
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/zohresotoudeh"
	},
	{
		icon: Github,
		name: "GitHub",
		url: "https://github.com/Itszhrst"
	},
	{
		icon: Instagram,
		name: "Instagram",
		url: "https://www.instagram.com/zohresotoudeh"
	},
	{
		icon: Send,
		name: "Telegram",
		url: "https://t.me/SotoudehZhre"
	}
];
function ContactFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "mx-auto mt-4 max-w-7xl px-5 pb-10 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-surface relative grid gap-10 p-7 pt-24 md:pt-7 lg:grid-cols-[1fr_auto_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-xl text-3xl text-primary",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-5 sm:grid-cols-2",
					children: DETAILS.map((d) => {
						const Icon = d.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "mt-0.5 size-4 shrink-0 text-primary",
								strokeWidth: 1.5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase",
								children: d.label
							}), d.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: d.href,
								className: "text-[0.82rem] transition-colors hover:text-primary",
								children: d.value
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.82rem]",
								children: d.value
							})] })]
						}, d.label);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -top-14 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:self-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative size-40 overflow-hidden rounded-full border border-primary/40 shadow-[var(--shadow-glow)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_portrait_default,
							alt: "Software developer avatar",
							width: 1024,
							height: 1024,
							loading: "lazy",
							className: "size-full scale-125 object-cover object-top"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[0.6rem] font-bold tracking-[0.14em] whitespace-nowrap text-primary-foreground uppercase",
						children: "OPEN FOR PROJECTS & OPPORTUNITIES"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:pl-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-xl text-3xl text-primary",
							children: "Let's Connect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-3",
							children: SOCIALS.map((social) => {
								const Icon = social.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: social.url,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": social.name,
									title: social.name,
									className: "grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}, social.name);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xs text-[0.82rem] leading-relaxed text-muted-foreground",
							children: "Let's connect, share ideas and build something useful."
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl text-primary",
						children: "ZS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.7rem] font-bold tracking-[0.16em] uppercase",
						children: "Software Developer"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.72rem] text-muted-foreground",
					children: "© 2026 Zohre Sotoudeh. All rights reserved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#home",
						"aria-label": "Back to top",
						className: "grid size-9 place-items-center rounded-md bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
					})
				})
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolkitProcess, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactFooter, {})
		]
	});
}
//#endregion
export { Index as component };
