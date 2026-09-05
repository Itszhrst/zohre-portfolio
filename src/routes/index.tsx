import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/site-header";
import { Hero } from "@/components/portfolio/hero";
import { Services } from "@/components/portfolio/services";
import { Projects } from "@/components/portfolio/projects";
import { ToolkitProcess } from "@/components/portfolio/toolkit-process";
import { ContactFooter } from "@/components/portfolio/contact-footer";

const title = "Software Developer — Web Design & Development Portfolio";
const description =
  "Portfolio of a Software developer designing and coding fast, responsive websites, dashboards and digital experiences that inspire.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Projects />
        <ToolkitProcess />
      </main>
      <ContactFooter />
    </div>
  );
}
