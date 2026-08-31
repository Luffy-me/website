import { SiteSidebar } from "../SiteSidebar";

export default function ShelvesPage() {
  return <main className="site-shell projects-page shelves-page">
    <SiteSidebar active="shelves" />
    <div className="page-content">
      <section className="projects-hero"><div><span className="section-emoji">🔎</span><h1>Shelves</h1></div><p>Hand-picked paths through everything I&apos;ve written.</p></section>
    </div>
  </main>;
}
