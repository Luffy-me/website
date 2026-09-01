import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MobileNavigation } from "./MobileNavigation";
import { ProjectCard } from "./ProjectCard";
import { SiteFooter } from "./SiteFooter";
import { SiteSidebar } from "./SiteSidebar";
import { projects } from "./projects-data";
import { currentlyReading } from "./reading-data";
import { profile, timeline } from "./site-config";

export const metadata: Metadata = {
  title: "Dey Intelligence — Abhishek Dey, AI Engineer",
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="home" /><MobileNavigation active="home" />
    <main className="page-content" id="main-content">
      <section className="hero"><div className="hero-copy"><p className="eyebrow">Dey Intelligence · Research & product studio</p><h1>{profile.name}</h1><p className="hero-role">{profile.role}</p><p>I build reliable AI systems, developer tools, and research-driven products at the intersection of software and economics.</p><div className="hero-actions"><a className="button button-primary" href="#featured-work">View selected work <span aria-hidden="true">↓</span></a>{profile.links.github && <a className="text-action" href={profile.links.github}>GitHub <span aria-hidden="true">↗</span></a>}{profile.links.resume && <a className="text-action" href={profile.links.resume}>Resume <span aria-hidden="true">↗</span></a>}</div></div><div className="hero-art"><Image src="/images/hero-illustration-chroma.png" alt="Illustration of Abhishek Dey working at a laptop" width={1536} height={1024} sizes="(min-width: 1020px) 320px, 78vw" priority /></div></section>
      <section className="capabilities" aria-label="Capabilities"><div><strong>AI systems</strong><span>Grounded, reliable product behavior</span></div><div><strong>Developer tools</strong><span>Useful software for technical workflows</span></div><div><strong>Research products</strong><span>Clear information for real decisions</span></div></section>
      <section className="timeline ruled" aria-labelledby="timeline-heading"><p className="eyebrow">Background</p><h2 id="timeline-heading">A brief timeline</h2><div className="timeline-list">{timeline.map((item) => <article className="timeline-entry" key={item.period}><p className="timeline-period">{item.period}</p><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></section>
      {currentlyReading && <section className="reading-preview ruled" aria-labelledby="reading-preview-heading"><div><p className="eyebrow">Currently reading</p><h2 id="reading-preview-heading">{currentlyReading.title}</h2><p className="reading-author">by {currentlyReading.author}</p><p>{currentlyReading.note}</p></div><Link className="soft-button" href="/reading">Reading shelf <span aria-hidden="true">→</span></Link></section>}
      <section id="featured-work" className="ruled"><div className="section-title"><h2>Featured work</h2><Link className="soft-button" href="/projects">All projects</Link></div><p className="intro">Practical products for monitoring, trusted information, and real-time conversation.</p><div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}</div></section>
      <section className="current-focus ruled"><p className="eyebrow">Current focus · updated {profile.currentFocusUpdated}</p><h2>Building at the boundary of reliable AI and useful software.</h2><p>Developing UniAssist, iterating on a Russian–English voice-interpreter prototype, and exploring information products where grounded answers matter.</p></section>
      {(profile.links.email || profile.links.phone || profile.links.github || profile.links.linkedin) && <section className="contact-section ruled"><h2>Contact</h2><p>For product, research, and collaboration conversations.</p><div className="hero-actions">{profile.links.email && <a className="button button-primary" href={`mailto:${profile.links.email}`}>Email Abhishek <span aria-hidden="true">↗</span></a>}{profile.links.phone && <a className="button button-secondary" href={`tel:${profile.links.phone}`}>Call +7 912 808 3769</a>}{profile.links.github && <a className="text-action" href={profile.links.github}>GitHub <span aria-hidden="true">↗</span></a>}{profile.links.linkedin && <a className="text-action" href={profile.links.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>}</div></section>}
      <SiteFooter />
    </main>
  </div>;
}
