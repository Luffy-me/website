import { MobileNavigation } from "../MobileNavigation";
import type { Metadata } from "next";
import { ProjectCard } from "../ProjectCard";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import { projects } from "../projects-data";

export const metadata: Metadata = { title: "Work — Dey Intelligence", description: "OpenHighlights, a local-first reading library by Dey Intelligence.", alternates: { canonical: "/projects" }, openGraph: { url: "/projects" } };

export default function ProjectsPage() {
  return <div className="site-shell projects-page"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <main className="page-content" id="main-content"><section className="projects-hero"><p className="eyebrow">Current product</p><h1>Work</h1><p>Private, local-first software for keeping the ideas that matter.</p></section><section className="project-grid projects-grid-full" aria-label="Projects">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</section><SiteFooter /></main>
  </div>;
}
