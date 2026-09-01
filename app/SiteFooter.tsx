import { profile } from "./site-config";
export function SiteFooter() { return <footer className="site-footer"><p><strong>{profile.brand}</strong> · A personal research and product studio by {profile.name}.</p><p>© 2026 {profile.name}</p></footer>; }
