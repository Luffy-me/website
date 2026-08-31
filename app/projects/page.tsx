import { SiteSidebar } from "../SiteSidebar";

export default function ProjectsPage() {
  return <main className="site-shell projects-page">
    <SiteSidebar active="projects" />
    <div className="page-content">
      <section className="projects-hero"><div><img className="project-heading-icon" src="/images/projects-icon.png" alt="Pixel cat mascot" /><h1>Projects</h1></div><p>Experiments, software, and research-driven tools I&apos;m building along the way.</p></section>
      <section><p className="empty-state">Your projects will appear here.</p></section>
      <footer><div><a href="#">✉ Email signup</a><a href="#">◔ RSS feed</a><a href="#">🦋 Bluesky</a><a href="#">☕ Buy me a coffee</a></div><p>Made with <span>♥</span> by Abhishek Dey</p></footer>
    </div>
  </main>;
}
