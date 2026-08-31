import { ThemeToggle } from "./ThemeToggle";

type PageName = "home" | "projects" | "shelves" | "about";

const navigation = [
  { key: "home", href: "/#latest", label: "Blog", image: "/images/nav-blog.png" },
  { key: "shelves", href: "/shelves", label: "Shelves", image: "/images/nav-search.png" },
  { key: "projects", href: "/projects", label: "Projects", image: "/images/nav-projects.png" },
  { key: "about", href: "/about", label: "About me", image: "/images/nav-floppy.png" },
] as const;

export function SiteSidebar({ active }: { active: PageName }) {
  return <aside className="sidebar">
    <div className="sidebar-section sidebar-brand-section">
      <a className="brand" href="/"><img src="/images/nav-floppy.png" alt="" /><span>Abhishek Dey</span></a>
      <div className="brand-actions"><span className="accent-dot" aria-hidden="true" /><ThemeToggle /></div>
    </div>
    <div className="sidebar-section">
      <p className="bio">I&apos;m <a href="/about">Abhishek Dey</a>, an engineer, researcher, and builder exploring AI, software, and economics. <span aria-hidden="true">🌱</span></p>
    </div>
    <div className="sidebar-section">
      <nav aria-label="Primary navigation">
        {navigation.map((item) => <a key={item.key} className={active === item.key ? "active" : undefined} href={item.href}><img src={item.image} alt="" /><span>{item.label}</span></a>)}
      </nav>
    </div>
    <div className="sidebar-footer">
      <div className="sidebar-section"><div className="socials"><a href="#" aria-label="Email">✉</a><a href="#" aria-label="GitHub">♧</a><a href="#" aria-label="Bluesky">🦋</a><a href="#" aria-label="RSS">◔</a></div></div>
      <div className="utility-links"><a href="#">Resume</a><i aria-hidden="true" /><a href="#">Topics</a><i aria-hidden="true" /><a href="#">Source</a></div>
    </div>
  </aside>;
}
