import { SiteSidebar } from "../SiteSidebar";

export default function AboutPage() {
  return <main className="site-shell about-page">
    <SiteSidebar active="about" />

    <div className="page-content about-content">
      <section className="about-hero"><div className="section-title"><span className="section-emoji">💾</span><h1>About Me</h1></div></section>
      <section className="about-intro">
        <div className="about-copy"><p>Hey, I&apos;m Abhishek. I&apos;m an engineer, researcher, and builder working at the intersection of <a href="/#latest">AI</a>, software, and economics.</p><p>I use this site as a home for research notes, technical writing, and experiments—especially ideas that make complex systems clearer and more useful.</p><p>My approach is research-led and practical: learn deeply, build deliberately, and share what works.</p><p>As the site grows, you&apos;ll find articles in <a href="/shelves">Shelves</a> and hands-on work in <a href="/projects">Projects</a>.</p></div>
        <div className="about-photo"><img src="/images/about-photo.png" alt="Illustration of Abhishek Dey working at a laptop" /></div>
      </section>
      <section className="about-section"><h2>Contact</h2><p>Contact links will be added here soon.</p></section>
      <section className="about-section"><h2>What I&apos;m Doing Now</h2><p><em>Updated August 31st, 2026</em></p><ul><li>Exploring AI, software, and economics</li><li>Building this personal research space</li><li>Developing research-led software experiments</li></ul></section>
      <section className="about-section"><h2>Tools</h2><h3>Software</h3><p>This website is built with <a href="#">Next.js</a> and deployed with modern web tooling.</p><ul><li><strong>Coding:</strong> <a href="#">Visual Studio Code</a></li><li><strong>Terminal:</strong> <a href="#">iTerm2</a></li><li><strong>Notes:</strong> <a href="#">Obsidian</a></li></ul><h3>Hardware</h3><ul><li><strong>Coding PC:</strong> MacBook Air M3, 16 GB RAM</li><li><strong>Monitor:</strong> External display</li><li><strong>Keyboard:</strong> Mechanical keyboard</li></ul></section>
      <footer><div><a href="#">✉ Email signup</a><a href="#">◔ RSS feed</a><a href="#">🦋 Bluesky</a><a href="#">☕ Buy me a coffee</a></div><p>Made with <span>♥</span> by Abhishek Dey</p></footer>
    </div>
  </main>;
}
