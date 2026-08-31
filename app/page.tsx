import { SiteSidebar } from "./SiteSidebar";

function SectionTitle({ icon, title, action }: { icon?: string; title: string; action?: string }) {
  return <div className="section-title">{icon && <span className="section-emoji">{icon}</span>}<h2>{title}</h2>{action && <a className="soft-button" href="#">{action}</a>}</div>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <SiteSidebar active="home" />

      <div className="page-content" id="top">
        <section className="hero" id="about">
          <div className="hero-copy"><h1>Hey, I&apos;m Abhishek Dey!</h1><p>Engineer. Researcher. Builder.<br />Working at the intersection of AI, software, and economics.</p></div>
          <div className="hero-art"><img src="/images/hero-illustration.png" alt="Illustration of Abhishek Dey working at a laptop" /></div>
        </section>
        <section className="timeline"><h2>A little about my work</h2>
          <div className="timeline-row"><time>Focus</time><p>Building thoughtful software and researching practical applications of artificial intelligence.</p></div>
          <div className="timeline-row"><time>Lens</time><p>Exploring the ways technology, incentives, and economics shape the systems we use.</p></div>
          <div className="timeline-row"><time>Here</time><p>A growing collection of research notes, experiments, and work in progress.</p></div>
          <p className="also"><a href="/about">More about me</a>: the tools I use, what I&apos;m working on, and ways to get in touch.</p>
        </section>

        <section id="latest" className="ruled"><SectionTitle title="Writing" /><p className="intro">Research articles, technical notes, and ideas in progress.</p><p className="empty-state">Articles coming soon.</p></section>

        <section id="projects" className="ruled"><SectionTitle icon="👾" title="Projects" action="All Projects" /><p className="intro">Open-source projects I&apos;ve worked on over the years.</p><p className="empty-state">Projects coming soon.</p></section>
        <footer><div><a href="#">✉ Email signup</a><a href="#">◔ RSS feed</a><a href="#">🦋 Bluesky</a><a href="#">☕ Buy me a coffee</a></div><p>Made with <span>♥</span> by Abhishek Dey</p></footer>
      </div>
    </main>
  );
}
