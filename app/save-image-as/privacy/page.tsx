import type { Metadata } from "next";
import Link from "next/link";
import { MobileNavigation } from "../../MobileNavigation";
import { SiteFooter } from "../../SiteFooter";
import { SiteSidebar } from "../../SiteSidebar";
import { profile } from "../../site-config";
import "../save-image-as.css";

const contactEmail = "coffeewithcleoo@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy – Save Image As PNG | Dey Intelligence",
  description: "Save Image As PNG collects nothing and sends nothing. Plain-language privacy policy and permission explanations.",
  alternates: { canonical: "/save-image-as/privacy" },
};

const access = [
  ["The page you are on", "Only after you click the toolbar icon, use the right-click menu or press the shortcut (Chrome’s activeTab). Nothing runs on pages in the background.", "To find the image you point at, or list the images on the page."],
  ["An image’s data", "Only images you choose, only at that moment.", "To convert and save them."],
  ["Another website’s server", "Only to fetch an image you asked for, and only if you approve access to that site when Chrome asks (one site at a time).", "Some image servers do not allow other pages to read their images."],
  ["Browsing history, cookies, passwords, form data", "Never read. When a server needs your normal cookies to serve an image, the browser sends them exactly as it does when the page loads the image; the extension does not read or store them.", "Not applicable."],
];

const permissions = [
  ["contextMenus", "Adds the “Save image as” right-click entries."],
  ["downloads", "Saves the converted file or ZIP to your Downloads folder. It does not read your existing downloads."],
  ["storage", "Remembers your settings and presets locally, and short-lived job progress."],
  ["offscreen", "Browser extensions have no page of their own to process images in; this provides a hidden page that decodes and re-encodes images offline."],
  ["activeTab", "Temporary access to the current tab only after you act, so the image finder can run on that page."],
  ["scripting", "Injects the image finder and the confirmation message into the tab you acted on."],
  ["Optional site access", "Requested for one site at a time, at the moment an image server blocks other pages from reading its images, and only with your approval."],
];

export default function SaveImageAsPrivacyPage() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <main className="page-content sia-page" id="main-content">
      <article className="sia-policy">
        <p className="eyebrow"><Link href="/save-image-as">← Save Image As</Link></p>
        <h1>Privacy Policy</h1>
        <p>Save Image As PNG – Image Saver &amp; Converter, by {profile.brand}. Last updated: 5 October 2026.</p>
        <p className="sia-callout">The extension collects nothing and sends nothing.</p>

        <h2>In plain language</h2>
        <ul>
          <li>We do not collect, store, sell or share any personal data. There is no account, no sign-in, no analytics, no crash reporting, no telemetry and no advertising.</li>
          <li>We run no servers for this extension. It never contacts us or any third party.</li>
          <li>When you ask it to save, copy or preview an image, your browser downloads <strong>that image from the address it already has</strong> (the one the page uses), converts it on your computer, and saves it to your Downloads folder or puts it on your clipboard. The image never leaves your device.</li>
          <li>Your settings (default format, quality, file-name template, presets) are stored <strong>locally</strong> in your browser. They are not synced to any cloud and are removed when you uninstall.</li>
          <li>File names can include the page title or site name if you use <code>{"{title}"}</code> or <code>{"{site}"}</code> in the name template. This stays on your computer.</li>
          <li>EXIF and GPS metadata is removed from converted images by default, so sharing a photo does not reveal where it was taken. You can turn this off.</li>
        </ul>

        <h2>What the extension can access, and when</h2>
        <div className="sia-scroll"><table className="sia-table"><thead><tr><th>Data</th><th>Access</th><th>Why</th></tr></thead><tbody>{access.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody></table></div>

        <h2>Technical guarantees you can verify</h2>
        <ul>
          <li>No website access is requested at install, and there are no always-on content scripts, remotely hosted code or <code>eval</code>.</li>
          <li>Every page of the extension (popup, settings, converter) has a Content-Security-Policy with <code>connect-src &apos;none&apos;</code>, so it cannot make a network request.</li>
          <li>The extension’s settings page, under Privacy, shows these facts live from your installed copy.</li>
        </ul>

        <h2>Permissions explained</h2>
        <div className="sia-scroll"><table className="sia-table"><thead><tr><th>Permission</th><th>Why it is needed</th></tr></thead><tbody>{permissions.map(([a, b]) => <tr key={a}><td><code>{a}</code></td><td>{b}</td></tr>)}</tbody></table></div>

        <h2>Third parties</h2>
        <p>No third party receives any data. The extension includes two open-source libraries that run locally in your browser: fflate (ZIP files) and an AVIF encoder compiled to WebAssembly (jSquash / libaom).</p>

        <h2>Children</h2>
        <p>The extension collects no data from anyone, including children.</p>

        <h2>Changes to this policy</h2>
        <p>If this policy ever changes, the new version will be published on this page with an updated date. Because the extension has no network code of its own, any change that added data collection would also require a visible permission change that Chrome shows you before updating.</p>

        <h2>Contact</h2>
        <p>Questions about this policy: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
      </article>
      <SiteFooter />
    </main>
  </div>;
}
