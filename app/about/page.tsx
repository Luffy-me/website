import { MobileNavigation } from "../MobileNavigation";
import type { Metadata } from "next";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import { profile } from "../site-config";

export const metadata: Metadata = { title: "About — Dey Intelligence", description: "About Abhishek Dey, an AI engineer and product builder working across software, research, and economics.", alternates: { canonical: "/about" }, openGraph: { url: "/about" } };

export default function AboutPage() {
  return <div className="site-shell about-page"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="about" /><MobileNavigation active="about" />
    <main className="page-content about-content" id="main-content"><section className="about-hero"><div className="section-title"><img className="section-icon" src="/images/nav-floppy.png" alt="" /><h1>About</h1></div></section><section className="about-intro"><div className="about-copy"><p>I&apos;m Abhishek Dey, an AI engineer and product builder with a background in computer science, economics, and international business. I build practical AI systems, developer tools, and information products.</p><p>My work starts with a clear problem, turns research into useful constraints, and focuses on software people can rely on.</p></div><div className="about-photo"><img src="/images/about-photo.png" alt="Illustration of Abhishek Dey working at a laptop" /></div></section><section className="about-section"><p className="eyebrow">Currently · updated {profile.currentFocusUpdated}</p><h2>Currently</h2><ul><li>Developing a verified-source assistant for international students.</li><li>Prototyping real-time Russian–English interpretation on iOS.</li><li>Exploring how economics and incentives shape useful AI products.</li></ul></section><section className="about-section"><h2>Tools</h2><p>I work primarily with TypeScript, React, browser APIs, retrieval-augmented generation, and native speech interfaces—choosing the smallest reliable system for the job.</p></section>{(profile.links.email || profile.links.linkedin) && <section className="about-section"><h2>Contact</h2>{profile.links.email && <p><a href={`mailto:${profile.links.email}`}>Email Abhishek</a></p>}{profile.links.linkedin && <p><a href={profile.links.linkedin}>LinkedIn</a></p>}</section>}<SiteFooter /></main>
  </div>;
}
