import type { Metadata } from "next";
import Link from "next/link";
import { MobileNavigation } from "../MobileNavigation";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import "./openhighlights.css";

export const metadata: Metadata = {
  title: "OpenHighlights — Keep what matters",
  description: "A local-first Chrome extension for highlights, notes, offline reading, PDFs, and a library you own.",
  alternates: { canonical: "/openhighlights" },
  openGraph: {
    title: "OpenHighlights — Keep what matters",
    description: "A local-first Chrome extension for highlights, notes, offline reading, PDFs, and a library you own.",
    url: "/openhighlights",
    images: [{ url: "/openhighlights-og.svg", width: 1200, height: 630, alt: "OpenHighlights local-first reading library" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenHighlights — Keep what matters",
    description: "A local-first Chrome extension for highlights, notes, offline reading, PDFs, and a library you own.",
    images: ["/openhighlights-og.svg"],
  },
};

const features = [
  ["01", "Highlights that survive the page", "Save a passage, choose a color, and let OpenHighlights restore it when you return. If a page changes, repair a unique whitespace shift or edit the anchor yourself."],
  ["02", "A library, not a pile of tabs", "Search across highlights, notes, tags, saved pages, offline article text, PDF annotations, and indexed PDF text. Filter by source, color, date, or notes."],
  ["03", "Reading on your terms", "Keep a reading queue, capture a cleaned offline article with available images, and read it in a calmer local reader. Mark it read when you are done."],
  ["04", "PDFs belong in the same place", "Open a PDF in the extension’s own viewer, select its text, add color, notes, and tags, then find those annotations alongside the rest of your library."],
  ["05", "Move in, move out", "Import Web Highlights HTML or backup JSON with a preview. Export Markdown or HTML, or create a complete JSON backup with offline pages, attachments, annotations, and original PDFs."],
  ["06", "No app-imposed storage limit", "Your library stays on this device. Chrome and available device space still apply, but OpenHighlights does not impose an artificial item or 10 MB limit."],
];

function LibraryVisual() {
  return <div className="oh-window oh-library" aria-label="Illustration of the OpenHighlights library">
    <div className="oh-window-bar"><span className="oh-dots"><i /><i /><i /></span><span className="oh-window-title">OpenHighlights / Library</span><span className="oh-window-status">LOCAL</span></div>
    <div className="oh-library-body">
      <aside className="oh-mini-nav"><strong>Open<br />Highlights</strong><span className="is-active">▦ &nbsp; Library</span><span>◷ &nbsp; Queue</span><span>⌁ &nbsp; Repair</span><span>↥ &nbsp; Settings</span></aside>
      <div className="oh-library-main"><div className="oh-library-heading"><div><small>YOUR LIBRARY</small><h3>Ideas worth keeping.</h3></div><span className="oh-storage">2.4 MB local</span></div><div className="oh-search"><span>⌕</span> Search everything you saved <kbd>/</kbd></div><div className="oh-filters"><span>All tags⌄</span><span>All sources⌄</span><span>Any time⌄</span></div><div className="oh-result"><div className="oh-result-meta"><span>WEBPAGE</span><span>Today</span></div><strong>The quiet advantage of local software</strong><p>“Good tools make the important things easier to return to.”</p><div className="oh-tag-row"><em>#reading</em><em>#tools</em></div></div><div className="oh-result oh-result-pdf"><div className="oh-result-meta"><span>LOCAL DOCUMENT</span><span>Yesterday</span></div><strong>Designing for attention</strong><p>3 highlights · 1 note · Page 12</p><div className="oh-tag-row"><em>#research</em></div></div></div>
    </div>
  </div>;
}

function HighlightVisual() {
  return <div className="oh-window oh-reader" aria-label="Illustration of a highlighted article with note editor">
    <div className="oh-window-bar"><span className="oh-dots"><i /><i /><i /></span><span className="oh-window-title">The quiet advantage of local software</span><span className="oh-window-status">SAVED</span></div>
    <div className="oh-reader-page"><small>ESSAY · 8 MIN READ</small><h3>Make room for returning</h3><p>We build archives because attention is temporary. A good reading tool leaves a clear path back to the thought.</p><p>When the <mark>important sentence is easy to find again</mark>, reading becomes a practice rather than a tab count.</p><div className="oh-note-card"><div className="oh-note-head"><span className="oh-note-dot" /> HIGHLIGHT <span>•••</span></div><p>“This is the part I want to remember.”</p><div className="oh-note-input">Add a note…</div><div className="oh-note-tags">#reading &nbsp; #ideas</div></div></div>
  </div>;
}

function PdfVisual() {
  return <div className="oh-window oh-pdf" aria-label="Illustration of the OpenHighlights PDF viewer">
    <div className="oh-window-bar"><span className="oh-dots"><i /><i /><i /></span><span className="oh-window-title">Designing for attention.pdf</span><span className="oh-window-status">PAGE 12 / 48</span></div>
    <div className="oh-pdf-body"><div className="oh-pdf-toolbar"><span>‹</span><b>12</b><span>›</span><i /><span>⌕</span><span>−</span><span>+</span></div><div className="oh-paper"><small>DESIGNING FOR ATTENTION</small><h4>The cost of interruption</h4><div className="oh-lines"><span /><span className="short" /><mark /><span /><span /><span className="short" /><mark className="mint" /><span /></div></div><div className="oh-pdf-note"><span className="oh-note-dot mint" /><strong>PDF HIGHLIGHT</strong><p>A useful distinction between access and attention.</p><small>#research · note saved</small></div></div>
  </div>;
}

export default function OpenHighlightsPage() {
  return <div className="site-shell oh-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <main className="page-content oh-page" id="main-content">
      <section className="oh-hero"><div className="oh-hero-copy"><p className="eyebrow">A Dey Intelligence product · Chrome extension</p><h1>Keep the ideas<br /><em>worth returning to.</em></h1><p className="oh-lede">OpenHighlights is a local-first reading library for the passages, notes, and documents you do not want to lose between tabs.</p><div className="hero-actions"><a className="button button-primary" href="#see-it">See how it works <span aria-hidden="true">↓</span></a><span className="oh-coming">Chrome Web Store · Coming soon</span></div><div className="oh-trust-line"><span><b>Local by default</b> No upload path</span><span><b>Your formats</b> Markdown & JSON</span><span><b>Yours to keep</b> Export any time</span></div></div><div className="oh-hero-art"><div className="oh-orbit oh-orbit-one" /><div className="oh-orbit oh-orbit-two" /><div className="oh-hero-card"><span className="oh-card-label">OPENHIGHLIGHTS</span><strong>14</strong><span>thoughts kept close</span><div className="oh-card-line"><i /><i /><i /><i /></div><small>all on this device</small></div><div className="oh-hero-note">“The best<br />software leaves<br />you in control.”</div></div></section>
      <section className="oh-marquee" aria-label="Product principles"><span>CLIP</span><i>✦</i><span>ANNOTATE</span><i>✦</i><span>RETURN</span><i>✦</i><span>OWN</span><i>✦</i><span>CLIP</span></section>
      <section id="see-it" className="oh-visual-section ruled"><div className="oh-section-intro"><p className="eyebrow">A quieter workspace</p><h2>From a fleeting selection<br />to a durable library.</h2><p>OpenHighlights follows the way you actually read: notice something, give it context, then find it when it matters.</p></div><div className="oh-visual-grid"><LibraryVisual /><HighlightVisual /></div></section>
      <section className="oh-features ruled"><div className="oh-section-intro"><p className="eyebrow">Made for the long read</p><h2>Everything you need<br />to keep your place.</h2></div><div className="oh-feature-list">{features.map(([number, title, description]) => <article className="oh-feature" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
      <section className="oh-pdf-section ruled"><div className="oh-pdf-copy"><p className="eyebrow">Documents, without the detour</p><h2>PDFs are part<br />of the same thought.</h2><p>Keep papers and web research together. OpenHighlights stores PDF files locally, makes their text searchable as encountered, and keeps annotations anchored to the page.</p><a className="text-action" href="#privacy">See the privacy model <span aria-hidden="true">↘</span></a></div><PdfVisual /></section>
      <section className="oh-migration ruled"><div><p className="eyebrow">Switch without starting over</p><h2>Bring your reading<br />history with you.</h2></div><div className="oh-migration-copy"><p>If you are moving from Web Highlights, OpenHighlights can import its HTML exports or backup JSON with a review step before anything is added. Passages, titles, notes, tags, and saved-page text come across where the source format includes them.</p><p>Exact DOM anchors are not part of those exports, so imported passages may remain searchable without reappearing on the original page. That trade-off is shown up front—not hidden.</p><div className="oh-flow"><span>Export</span><i>→</i><span>Preview</span><i>→</i><span>Keep what fits</span></div></div></section>
      <section id="privacy" className="oh-privacy ruled" aria-labelledby="privacy-heading"><div className="oh-privacy-stamp">LOCAL<br /><strong>ONLY</strong></div><div><p className="eyebrow">Privacy policy</p><h2 id="privacy-heading">How OpenHighlights<br />handles your data.</h2><p>OpenHighlights stores highlights, notes, attachments, offline snapshots, and PDF files locally. There is no account, cloud sync, analytics, AI, or billing. Nothing in the extension sends your page text or PDF contents to a server.</p><p className="oh-fine-print">Chrome permissions and available device storage still apply. The extension runs on supported web pages and can be enabled for local files from Chrome’s extension settings.</p></div></section>
      <section className="oh-web-privacy ruled" aria-labelledby="web-privacy-heading"><div><p className="eyebrow">Web Highlights privacy note</p><h2 id="web-privacy-heading">A clear boundary<br />for imported data.</h2><p>When you import from Web Highlights, OpenHighlights reads only the file you choose and shows a preview before adding anything. The import stays in this browser profile and is used to create local highlights, saved-page text, notes, and tags.</p></div><div className="oh-web-privacy-card"><div className="oh-web-privacy-row"><strong>What is read</strong><span>The selected HTML export or backup JSON.</span></div><div className="oh-web-privacy-row"><strong>What is kept</strong><span>Supported passages, titles, notes, tags, URLs, and saved-page text.</span></div><div className="oh-web-privacy-row"><strong>What is not done</strong><span>No Web Highlights account access, background crawling, tracking, upload, or sharing.</span></div><p className="oh-fine-print">Imported HTML exports do not contain exact on-page anchors. OpenHighlights explains this limitation before you confirm the import.</p></div></section>
      <section className="oh-faq ruled"><div className="oh-section-intro"><p className="eyebrow">Questions, answered plainly</p><h2>Before you bring<br />your library over.</h2></div><div className="oh-faq-list"><details><summary>Is OpenHighlights available in the Chrome Web Store?</summary><p>Not yet. The first public submission is being prepared. This page will link to the official listing once it is actually published.</p></details><details><summary>Is my data uploaded anywhere?</summary><p>No. The product is designed for local storage in your browser profile. It does fetch images from a page when you explicitly save an offline copy, so those requests follow the source page’s normal access rules.</p></details><details><summary>Can I use it with local HTML files and PDFs?</summary><p>Yes. Local file access is an explicit Chrome opt-in. PDFs open in OpenHighlights’ own viewer, where selectable text can be annotated; scanned image-only PDFs need OCR elsewhere.</p></details><details><summary>What does “no app-imposed storage limit” mean?</summary><p>OpenHighlights does not impose an artificial item or 10 MB limit. Chrome quotas and available device space still set practical limits, especially for complete backups containing original PDFs.</p></details></div></section>
      <section className="oh-final-cta"><p className="eyebrow">Keep your place</p><h2>A better home for<br />the things you notice.</h2><p>OpenHighlights is coming to the Chrome Web Store. Until then, explore the product and keep this page bookmarked for the launch.</p><div className="hero-actions"><span className="button button-primary oh-disabled-cta" aria-label="OpenHighlights is coming soon">Coming soon to Chrome</span><Link className="text-action" href="/projects">More from Dey Intelligence <span aria-hidden="true">↗</span></Link></div></section>
      <SiteFooter />
    </main>
  </div>;
}
