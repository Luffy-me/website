import Link from "next/link";
import type { Project } from "./projects-data";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const href = project.href ?? `/projects/${project.slug}`;
  return <article className={`project-card project-${project.slug}${featured ? " project-card-featured" : ""}`}><div className="project-card-topline"><span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</span></div><div className="project-visual" aria-hidden="true"><span /><span /><span /><span /></div><h3><Link href={href}>{project.name}</Link></h3><p>{project.summary}</p><ul className="capability-list">{project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul><div className="tag-list" aria-label={`${project.name} technologies`}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-actions"><Link className="text-action" href={href}>Explore {project.name} <span aria-hidden="true">→</span></Link>{project.links?.live && <a className="text-action" href={project.links.live} target="_blank" rel="noreferrer">Chrome Web Store <span aria-hidden="true">↗</span></a>}{project.links?.source && <a className="text-action" href={project.links.source}>Source <span aria-hidden="true">↗</span></a>}</div></article>;
}
