import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MobileNavigation } from "../MobileNavigation";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import "./save-image-as.css";

// Set this to the Chrome Web Store listing URL once the extension is published.
const chromeWebStoreUrl: string | null = null;

const title = "Save Image As PNG – Image Saver & Converter";
const description = "Right-click any image and save it as PNG, JPG, WebP or AVIF. Grab all images as a ZIP, copy as PNG, shrink to a target file size. Offline, no tracking, no account.";

export const metadata: Metadata = {
  title: `${title} | Dey Intelligence`,
  description,
  alternates: { canonical: "/save-image-as" },
  openGraph: { title, description, url: "/save-image-as", images: [{ url: "/images/save-image-as/popup-light.png", alt: "Save Image As: Grab all images panel" }] },
};

const features = [
  ["Right-click, any format", "Save as PNG, JPG, WebP, AVIF, or keep the original. Transparency stays in PNG, WebP and AVIF; JPG fills it with the colour you choose."],
  ["Finds images others miss", "Lazy-loaded photos, srcset and picture, CSS backgrounds, canvas, inline SVG, blob images, shadow DOM and iframes."],
  ["Best quality mode", "Looks for the largest version of the image and tells you which one it used, instead of saving a blurry thumbnail."],
  ["Grab all images", "See every image on the page with sizes and formats, filter by size or type, then download them all or as a single ZIP."],
  ["Pick mode", "Image hidden under a transparent overlay? Click the crosshair and pick it directly."],
  ["Target file size", "Need it under 500 KB for an upload form? Set a target and it finds the best quality that fits."],
  ["Compare before saving", "See original versus converted size, format and dimensions, and how much you save."],
  ["Copy as PNG", "One click to paste an image straight into docs and chat tools."],
  ["Presets and shortcut", "Save presets like “Web JPG 1600px 80%” and press Alt+Shift+S to save the image under your cursor."],
];

const privacyRows = [
  ["Website access at install", "None. Access to a site is requested one site at a time, only if an image server blocks other pages, and you can refuse."],
  ["Permissions", "Context menus, downloads, storage, offscreen, activeTab, scripting."],
  ["Scripts on pages", "None in the background. The image finder runs only after you click."],
  ["Network from its own pages", "Blocked by policy (connect-src 'none'), so the popup and settings cannot send anything anywhere."],
  ["Remote code, analytics, accounts", "None."],
  ["Metadata", "EXIF and GPS data is removed from converted images by default."],
];

const faq = [
  ["Does it work offline?", "Yes for images already loaded in your browser. Conversion happens on your computer; no server is involved."],
  ["Why does it sometimes ask for access to a website?", "Some image servers do not allow other pages to read their images. When that happens, the extension asks Chrome for access to that one site, only then. You can say no and nothing is saved."],
  ["Are animated GIFs supported?", "They are saved as their first frame when converting. Choose “Original” to keep the animation."],
  ["Is there a size limit?", "Images over 64 megapixels or 128 MB are refused with a clear message so your browser does not freeze. “Original” still works for those."],
  ["Does it work in Edge, Brave and other browsers?", "It is built for Chrome and works with Chromium-based browsers that support Chrome extensions."],
];

function GetButton({ label }: { label: string }) {
  return chromeWebStoreUrl ? (
    <a className="button button-primary" href={chromeWebStoreUrl} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>
  ) : (
    <span className="sia-soon">Coming soon to the Chrome Web Store</span>
  );
}

export default function SaveImageAsPage() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <main className="page-content sia-page" id="main-content">
      <section className="sia-hero">
        <div>
          <p className="eyebrow">A Dey Intelligence product · Chrome extension</p>
          <h1>Save any image as <em>PNG, JPG, WebP or AVIF.</em></h1>
          <p className="sia-lede">Right-click, pick a format, done. It converts on your computer, works offline, and never tracks you.</p>
          <div className="hero-actions"><GetButton label="Add to Chrome" /><a className="text-action" href="#features">See what it does <span aria-hidden="true">↓</span></a></div>
          <ul className="sia-badges"><li>No tracking</li><li>No account</li><li>Works offline</li><li>No site access at install</li></ul>
        </div>
        <Image className="sia-shot" src="/images/save-image-as/popup-light.png" width={450} height={720} alt="The Grab all images panel showing a grid of thumbnails with size and format labels" priority />
      </section>

      <section id="features" className="ruled">
        <p className="eyebrow">Everything people need from an image saver</p>
        <h2>WebP and AVIF are everywhere.<br />Your tools still reject them.</h2>
        <div className="sia-grid">{features.map(([name, body]) => <article className="sia-card" key={name}><h3>{name}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="ruled">
        <p className="eyebrow">How it works</p>
        <h2>Three steps, no setup.</h2>
        <ol className="sia-steps">
          <li><strong>Right-click an image</strong><span>Choose “Save image as” and pick PNG, JPG, WebP or AVIF.</span></li>
          <li><strong>It converts locally</strong><span>The image is processed inside your browser. It never goes to a server.</span></li>
          <li><strong>It lands in Downloads</strong><span>With a clean, safe file name, using your template and optional subfolder.</span></li>
        </ol>
      </section>

      <section className="ruled sia-two">
        <div>
          <p className="eyebrow">Compare view</p>
          <h2>See the saving before you commit.</h2>
          <p>The compare view shows the original and the converted image side by side, with format, dimensions and file size.</p>
        </div>
        <Image className="sia-shot" src="/images/save-image-as/compare.png" width={450} height={720} alt="Compare dialog showing a 256 KB PNG against a 2.2 KB WebP" />
      </section>

      <section className="ruled">
        <p className="eyebrow">Private by design, and you can check</p>
        <h2>Nothing is collected.<br />Nothing is sent.</h2>
        <p>There are no servers and no analytics. The only network request is for an image you asked to save, to that image’s own address.</p>
        <div className="sia-scroll"><table className="sia-table"><tbody>{privacyRows.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody></table></div>
        <p>The extension’s settings page shows these facts live from your installed copy. <Link href="/save-image-as/privacy">Read the full privacy policy</Link>.</p>
      </section>

      <section className="ruled sia-faq">
        <p className="eyebrow">Questions</p>
        <h2>Good to know.</h2>
        {faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </section>

      <section className="sia-final">
        <p className="eyebrow">Free and private</p>
        <h2>Stop fighting<br />WebP and AVIF.</h2>
        <div className="hero-actions"><GetButton label="Get Save Image As" /><Link className="text-action" href="/projects">View all work <span aria-hidden="true">→</span></Link></div>
      </section>
      <SiteFooter />
    </main>
  </div>;
}
