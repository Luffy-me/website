import { MobileNavigation } from "../MobileNavigation";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import { profile } from "../site-config";

export const metadata: Metadata = { title: "About — Dey Intelligence", description: "About Abhishek Dey, an AI engineer and product builder working across software, research, and economics.", alternates: { canonical: "/about" }, openGraph: { url: "/about" } };

export default function AboutPage() {
  return <div className="site-shell about-page"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="about" /><MobileNavigation active="about" />
    <main className="page-content about-content" id="main-content"><section className="about-hero"><p className="eyebrow">The person behind Dey Intelligence</p><h1>About</h1></section><section className="about-intro"><div className="about-copy"><p>I&apos;m Abhishek Dey, an AI engineer and product builder with a background in computer science, economics, and international business. I build practical AI systems, developer tools, and information products.</p><p>My work starts with a clear problem, turns research into useful constraints, and focuses on software people can rely on.</p></div><div className="about-photo"><Image src="/images/about-photo.png" alt="Illustration of Abhishek Dey working at a laptop" width={1254} height={1254} sizes="(min-width: 1020px) 336px, 80vw" /></div></section><section className="about-section"><p className="eyebrow">Currently · updated {profile.currentFocusUpdated}</p><h2>Currently</h2><ul><li>Developing a verified-source assistant for international students.</li><li>Prototyping real-time Russian–English interpretation on iOS.</li><li>Exploring how economics and incentives shape useful AI products.</li></ul></section><section className="about-section"><h2>Tools</h2><p>I work primarily with TypeScript, React, browser APIs, retrieval-augmented generation, and native speech interfaces—choosing the smallest reliable system for the job.</p></section>{(profile.links.email || profile.links.phone || profile.links.github || profile.links.linkedin) && <section className="about-section"><h2>Contact</h2><div className="contact-links">{profile.links.email && <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>}{profile.links.phone && <a href={`tel:${profile.links.phone}`}>+7 912 808 3769</a>}{profile.links.github && <a href={profile.links.github}>GitHub</a>}{profile.links.linkedin && <a href={profile.links.linkedin}>LinkedIn</a>}</div></section>}<SiteFooter /></main>
  </div>;
}
