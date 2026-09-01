import { MobileNavigation } from "../MobileNavigation";
import type { Metadata } from "next";
import { ProjectCard } from "../ProjectCard";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import { projects } from "../projects-data";

export const metadata: Metadata = { title: "Work — Dey Intelligence", description: "Selected AI systems, developer tools, and research-driven products by Abhishek Dey.", alternates: { canonical: "/projects" }, openGraph: { url: "/projects" } };

export default function ProjectsPage() {
  return <div className="site-shell projects-page"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <main className="page-content" id="main-content"><section className="projects-hero"><div><img className="project-heading-icon" src="/images/projects-icon.png" alt="" /><h1>Work</h1></div><p>Software and research-driven products designed for specific, practical problems.</p></section><section className="project-grid projects-grid-full" aria-label="Projects">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</section><SiteFooter /></main>
  </div>;
}
