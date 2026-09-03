import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { navigationItems, profile } from "./site-config";

export function SiteSidebar({ active }: { active: string }) {
  return <aside className="sidebar">
    <div className="sidebar-section sidebar-brand-section">
      <Link className="brand" href="/"><LogoMark /><span><strong>Dey Intelligence</strong><small>by {profile.name}</small></span></Link>
      <div className="brand-actions"><ThemeToggle /></div>
    </div>
    <div className="sidebar-section">
      <p className="bio">A personal research and product studio by <a href="/about">{profile.name}</a>.</p>
    </div>
    <div className="sidebar-section">
      <nav aria-label="Primary navigation">
        {navigationItems.map((item) => <a key={item.href} className={active === item.label.toLowerCase() ? "active" : undefined} href={item.href}><span>{item.label}</span></a>)}
      </nav>
    </div>
    <div className="sidebar-footer">
      {(profile.links.email || profile.links.phone || profile.links.github || profile.links.linkedin) && <div className="sidebar-section"><div className="socials">{profile.links.email && <a href={`mailto:${profile.links.email}`} aria-label="Email">✉</a>}{profile.links.phone && <a href={`tel:${profile.links.phone}`} aria-label="Phone">☎</a>}{profile.links.github && <a href={profile.links.github} aria-label="GitHub">⌘</a>}{profile.links.linkedin && <a href={profile.links.linkedin} aria-label="LinkedIn">in</a>}</div></div>}
      {profile.links.resume && <div className="utility-links"><a href={profile.links.resume}>Resume</a></div>}
    </div>
  </aside>;
}
