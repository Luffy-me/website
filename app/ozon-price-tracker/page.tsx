import type { Metadata } from "next";
import Link from "next/link";
import { MobileNavigation } from "../MobileNavigation";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import "./ozon-price-tracker.css";

export const metadata: Metadata = {
  title: "Ozon Price Tracker — Know when the price is right",
  description: "A private Chrome extension for tracking Ozon price history, setting target alerts, and buying with context.",
  alternates: { canonical: "/ozon-price-tracker" },
  openGraph: { title: "Ozon Price Tracker — Know when the price is right", description: "Track Ozon prices over time and act when a real deal arrives.", url: "/ozon-price-tracker" },
};

const features = [
  ["01", "A history behind every price", "See how a product’s price has moved instead of judging a single snapshot. Each update becomes part of a clear, useful timeline."],
  ["02", "Targets that wait for you", "Choose the price you are willing to pay. The tracker keeps watch and surfaces the moment your target is reached."],
  ["03", "One calm dashboard", "Review tracked products, current prices, changes, and alert status without reopening a trail of marketplace tabs."],
  ["04", "Your data stays portable", "Price history is stored locally in your browser and can be exported or imported whenever you want a backup."],
];

function DashboardVisual() {
  return <div className="op-window" aria-label="Illustration of the Ozon Price Tracker dashboard">
    <div className="op-window-bar"><span className="op-dots"><i /><i /><i /></span><span>Ozon Price Tracker</span><b>LIVE</b></div>
    <div className="op-dashboard">
      <aside><div className="op-logo">OP</div><span className="active">Overview</span><span>Tracked items</span><span>Price alerts</span><span>Data</span></aside>
      <div className="op-main"><div className="op-heading"><div><small>GOOD AFTERNOON</small><h3>Your watchlist</h3></div><button>+ Track product</button></div>
        <div className="op-metrics"><div><small>TRACKING</small><strong>12</strong><span>products</span></div><div><small>PRICE DROPS</small><strong>4</strong><span>this week</span></div><div className="hot"><small>BEST DROP</small><strong>−18%</strong><span>since added</span></div></div>
        <div className="op-product"><div className="op-product-img">01</div><div><small>Electronics</small><strong>Wireless headphones</strong><span>Updated 8 min ago</span></div><div className="op-price"><small>CURRENT PRICE</small><strong>7 490 ₽</strong><span>↓ 1 600 ₽</span></div></div>
      </div>
    </div>
  </div>;
}

function ChartVisual() {
  return <div className="op-chart-card" aria-label="Illustration of a product price history chart"><div className="op-chart-head"><div><small>PRICE HISTORY</small><h3>See the deal<br />before you believe it.</h3></div><span>Last 90 days⌄</span></div><div className="op-chart-price"><strong>7 490 ₽</strong><em>−17.6%</em></div><div className="op-chart"><span className="line one" /><span className="line two" /><span className="line three" /><svg viewBox="0 0 600 180" preserveAspectRatio="none" aria-hidden="true"><path d="M0 28 C65 20, 80 65, 145 57 S220 92, 275 70 S350 118, 405 100 S485 130, 600 145" /><path className="fill" d="M0 28 C65 20, 80 65, 145 57 S220 92, 275 70 S350 118, 405 100 S485 130, 600 145 L600 180 L0 180 Z" /></svg><i className="op-point"><b>7 490 ₽</b></i></div><div className="op-chart-labels"><span>JUN</span><span>JUL</span><span>AUG</span><span>NOW</span></div></div>;
}

export default function OzonPriceTrackerPage() {
  return <div className="site-shell op-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <main className="page-content op-page" id="main-content">
      <section className="op-hero"><div className="op-hero-copy"><p className="eyebrow">A Dey Intelligence product · Chrome extension</p><h1>Know when the<br /><em>price is right.</em></h1><p className="op-lede">Ozon Price Tracker gives every price a history—so you can spot real drops, set your target, and buy with context instead of urgency.</p><div className="hero-actions"><a className="button button-primary" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a><span className="op-available"><i /> Published product</span></div><div className="op-proof"><span><b>Private by design</b> Stored on your device</span><span><b>Watch automatically</b> Target-price alerts</span><span><b>Always portable</b> Import and export</span></div></div><div className="op-hero-art"><div className="op-badge">PRICE<br /><strong>DROP</strong><small>−18%</small></div><div className="op-receipt"><small>PRICE CHECK · TODAY</small><strong>7 490 ₽</strong><span>Previous price <s>9 090 ₽</s></span><div><i />Target reached</div></div><div className="op-ring ring-one" /><div className="op-ring ring-two" /></div></section>
      <section className="op-ticker" aria-label="Product benefits"><span>TRACK</span><i>↓</i><span>COMPARE</span><i>↓</i><span>WAIT</span><i>↓</i><span>SAVE</span><i>↓</i><span>TRACK</span></section>
      <section id="how-it-works" className="op-showcase ruled"><div className="op-section-copy"><p className="eyebrow">Your prices, in perspective</p><h2>A dashboard built<br />for better timing.</h2><p>Save a product once. The tracker turns future checks into a readable history and keeps the next useful action close.</p></div><DashboardVisual /></section>
      <section className="op-history ruled"><ChartVisual /><div className="op-section-copy"><p className="eyebrow">Context beats urgency</p><h2>Today’s price is only<br />one point on the line.</h2><p>Marketplace discounts can be noisy. A visible history makes it easier to separate a meaningful drop from a familiar price wearing a new badge.</p><div className="op-stat-row"><span><strong>90 days</strong>Clear price context</span><span><strong>1 target</strong>A decision made early</span></div></div></section>
      <section className="op-features ruled"><div className="op-section-copy"><p className="eyebrow">Quietly useful</p><h2>Everything needed.<br />Nothing in the way.</h2></div><div className="op-feature-grid">{features.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="op-local ruled"><div className="op-local-mark"><span>LOCAL</span><strong>FIRST</strong><small>PRICE DATA</small></div><div><p className="eyebrow">Your watchlist belongs to you</p><h2>Private history.<br />Portable backup.</h2><p>Tracked products and their price history live in your browser’s local database. Export a backup when you want one, import it when you need it, and keep control of the record behind your decisions.</p><div className="op-local-tags"><span>IndexedDB</span><span>JSON backup</span><span>No account required</span></div></div></section>
      <section className="op-final"><p className="eyebrow">A clearer way to wait</p><h2>Stop checking.<br />Start tracking.</h2><p>Let the price come to you—and know exactly what changed when it does.</p><div className="hero-actions"><Link className="button button-primary" href="/projects">View all work <span aria-hidden="true">→</span></Link><Link className="text-action" href="/openhighlights">Explore OpenHighlights <span aria-hidden="true">↗</span></Link></div></section>
      <SiteFooter />
    </main>
  </div>;
}
