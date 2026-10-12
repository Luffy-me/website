import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { profile } from "../../site-config";
import "../flappy-bird.css";

export const metadata: Metadata = {
  title: "Privacy Policy – Flappy Bird | Dey Intelligence",
  description: "Flappy Bird works fully offline, requests no permissions and collects no personal data. Plain-language privacy policy.",
  alternates: { canonical: "/flappy-bird/privacy", languages: { en: "/flappy-bird/privacy", ru: "/flappy-bird/privacy/ru" } },
  openGraph: { url: "/flappy-bird/privacy" },
};

export default function FlappyBirdPrivacyPage() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader active="work" />
    <main className="page-content fb-page" id="main-content">
      <article className="fb-policy">
        <p className="eyebrow"><Link href="/flappy-bird">← Flappy Bird</Link> · <Link href="/flappy-bird/privacy/ru" hrefLang="ru" lang="ru">Русская версия</Link></p>
        <h1>Privacy Policy</h1>
        <p>Flappy Bird for Android (package <code>com.deyintelligence.birdgame</code>), by {profile.brand}. Last updated: 11 October 2026 (app version 1.8.1).</p>
        <p className="fb-callout">The game collects no personal data and never connects to a network.</p>

        <h2>In plain language</h2>
        <ul>
          <li>The app <strong>collects no personal data</strong> of any kind.</li>
          <li>The app <strong>does not require internet access</strong> and never connects to any network or server.</li>
          <li>The app <strong>requests no permissions</strong> (no location, contacts, camera, microphone, storage or similar).</li>
          <li>The app contains <strong>no advertising, analytics, trackers or third-party SDKs</strong>.</li>
        </ul>

        <h2>What is stored on your device</h2>
        <p>The only information stored is:</p>
        <ul>
          <li>your top-10 scores with their dates, and simple statistics (games played, total score) for each difficulty;</li>
          <li>your sound, vibration, control, theme, difficulty and game-mode preferences;</li>
          <li>your world choices and unlocks, and your language and interface-theme choices;</li>
          <li>your collection: virtual coin balance, unlocked cosmetic items and characters, equipped look, character mastery and simple progress counters such as games played.</li>
        </ul>
        <p>This data is kept locally on your device in the app’s private storage, is never transmitted anywhere, and is deleted when you clear the app’s data or uninstall it.</p>

        <h2>Sharing</h2>
        <p>Because no data leaves your device, no data is shared with or sold to third parties.</p>

        <h2>Children</h2>
        <p>The app contains no content or features that collect information from anyone, including children.</p>

        <h2>Changes to this policy</h2>
        <p>If this ever changes, the updated policy will be published on this page with a new date, and together with the app update.</p>

        <h2>Contact</h2>
        <p>Questions about this policy: <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a></p>
        <p>Developer: {profile.brand}, {profile.name}.</p>
      </article>
      <SiteFooter />
    </main>
  </div>;
}
