import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MobileNavigation } from "../MobileNavigation";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import { profile } from "../site-config";
import "./flappy-bird.css";

// Fill this with the RuStore listing URL once the game is live. While it is
// empty the RuStore button is hidden and the status reads "Coming soon".
const rustoreUrl = "";

const title = "Flappy Bird – One-tap arcade for Android";
const description = "Flappy Bird is a one-tap arcade game for Android: guide the bird through the pipes and beat your best. Offline, no ads, no permissions, no data collection.";
const pageUrl = `${profile.siteUrl}/flappy-bird`;
const ogImage = "/images/flappy-bird/og.png";

export const metadata: Metadata = {
  title: `${title} | Dey Intelligence`,
  description,
  alternates: { canonical: "/flappy-bird" },
  openGraph: { type: "website", siteName: profile.brand, title, description, url: "/flappy-bird", images: [{ url: ogImage, width: 1200, height: 630, alt: "Flappy Bird app icon next to a screenshot of the main menu" }] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["SoftwareApplication", "VideoGame"],
  name: "Flappy Bird",
  description,
  url: pageUrl,
  image: `${profile.siteUrl}${ogImage}`,
  applicationCategory: "GameApplication",
  operatingSystem: "Android",
  inLanguage: ["ru", "en"],
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
  author: { "@type": "Organization", name: profile.brand, url: profile.siteUrl },
  ...(rustoreUrl ? { installUrl: rustoreUrl, sameAs: [rustoreUrl] } : {}),
};

const screenshots = [
  ["gameplay", "Night gameplay: the bird between two pipes, with the score, best-score and coin counters", "Gameplay"],
  ["menu", "Main menu with the Flappy Bird title, a Play button and tiles for scores, settings, collection and characters", "Main menu"],
  ["game-over", "Game over screen with medals and statistics", "Game over"],
  ["night", "The bird flying through a rainy night sky", "Night sky"],
] as const;

const features = [
  ["One-tap controls", "Each tap is one flap, and without taps the bird falls. Anyone can pick it up in seconds."],
  ["Rising difficulty", "The speed gradually increases: the higher your score, the tougher it gets."],
  ["Collectible characters", "Twelve characters with their own look and signature move, unlocked with coins and achievements. No loot boxes and no real-money purchases."],
  ["Your best, saved", "Top scores and statistics are kept on your device, with a per-difficulty view."],
  ["Made to be comfortable", "Left- and right-handed layouts, reduced motion, larger text, high-contrast obstacles and no flashing more than three times a second."],
  ["Russian and English", "Switch language inside the app, plus light, dark or automatic interface themes."],
];

const built = [
  ["Native Kotlin", "A native Android app with no game engine and no web view."],
  ["Drawn in code", "Every frame, from the sky and parallax clouds to the characters, is drawn programmatically on a Canvas."],
  ["Fully offline", "There is no network code, so there is nothing to connect, sync or leak."],
  ["Zero permissions", "The app asks for no permissions at all."],
  ["No ads, no data collection", "No advertising, analytics, trackers or third-party SDKs."],
  ["Built solo with AI assistance", "Designed, written and shipped by one person, using an AI-assisted workflow."],
];

export default function FlappyBirdPage() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <main className="page-content fb-page" id="main-content">
      <section className="fb-hero">
        <div>
          <p className="eyebrow">A Dey Intelligence product · Android game</p>
          <div className="fb-title">
            <Image className="fb-icon" src="/images/flappy-bird/icon-192.webp" width={192} height={192} alt="Flappy Bird app icon: a round yellow bird with a red crest on a blue sky" priority />
            <h1>Flappy Bird</h1>
          </div>
          <p className="fb-lede">One tap, endless sky. Guide the bird between the pipes and beat your best, offline, with no ads.</p>
          <p className={`fb-status${rustoreUrl ? " fb-status-live" : ""}`}>{rustoreUrl ? "Published on RuStore" : "Coming soon to RuStore"}</p>
          <div className="hero-actions">
            {rustoreUrl && <a className="button button-primary" href={rustoreUrl} target="_blank" rel="noreferrer">Get it on RuStore <span aria-hidden="true">↗</span></a>}
            <a className="text-action" href="#screenshots">See screenshots <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="fb-meta"><li>Android</li><li>Free</li><li>Works offline</li><li>No ads</li><li>No permissions</li></ul>
        </div>
        <Image className="fb-shot" src="/images/flappy-bird/menu.webp" width={540} height={960} sizes="(min-width: 900px) 288px, 70vw" alt="Main menu of Flappy Bird with a Play button" priority />
      </section>

      <section id="screenshots" className="ruled">
        <p className="eyebrow">Screenshots</p>
        <h2>A quick look.</h2>
        <ul className="fb-gallery">{screenshots.map(([file, alt, caption]) => <li key={file}><figure><Image className="fb-shot" src={`/images/flappy-bird/${file}.webp`} width={540} height={960} sizes="(min-width: 900px) 280px, 45vw" loading="lazy" alt={alt} /><figcaption>{caption}</figcaption></figure></li>)}</ul>
      </section>

      <section className="ruled">
        <p className="eyebrow">Features</p>
        <h2>Simple to start.<br />Hard to put down.</h2>
        <div className="fb-grid">{features.map(([name, body]) => <article className="fb-card" key={name}><h3>{name}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="ruled">
        <p className="eyebrow">How it was built</p>
        <h2>Small, native and private.</h2>
        <ul className="fb-built">{built.map(([name, body]) => <li key={name}><strong>{name}.</strong> {body}</li>)}</ul>
      </section>

      <section className="ruled">
        <p className="eyebrow">Privacy</p>
        <h2>Nothing is collected.<br />Nothing is sent.</h2>
        <p>The game works fully offline, requests no permissions and keeps scores, coins and settings on your device. <Link href="/flappy-bird/privacy">Read the privacy policy</Link> · <Link href="/flappy-bird/privacy/ru" hrefLang="ru" lang="ru">Политика конфиденциальности</Link></p>
        <p>An independent arcade game, not affiliated with any other games.</p>
      </section>

      <section className="fb-final">
        <p className="eyebrow">Free, offline and private</p>
        <div className="hero-actions">
          {rustoreUrl && <a className="button button-primary" href={rustoreUrl} target="_blank" rel="noreferrer">Get it on RuStore <span aria-hidden="true">↗</span></a>}
          <Link className="text-action" href="/projects">View all work <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  </div>;
}
