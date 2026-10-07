import type { Metadata } from "next";
import { MobileNavigation } from "../MobileNavigation";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import { profile } from "../site-config";
import "./uniassist.css";

// TODO: replace with the real bot link, e.g. https://t.me/your_bot_username
const telegramBotUrl = "https://t.me/TELEGRAM_BOT_LINK";
const title = "UniAssist — A Telegram assistant for international students";
const description = "UniAssist is an early-stage Telegram assistant that answers international students’ questions about university life using retrieval-augmented generation over verified university information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/uniassist" },
  openGraph: { type: "website", siteName: profile.brand, title, description, url: "/uniassist", images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Dey Intelligence — Abhishek Dey, AI Engineer & Product Builder" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v2.png"] },
};

const problems = [
  ["Admissions", "Requirements and procedures are spread across many pages and are hard to piece together."],
  ["Documents", "It is rarely clear which papers are needed, in what form, and who accepts them."],
  ["Deadlines", "Dates change, and an outdated answer can cost a student a whole term."],
  ["Campus life", "Everyday questions about housing, services, and student life have no single reliable home."],
];

const steps = [
  ["1", "Ask in Telegram", "Send your question to UniAssist in plain language, like you would message a friend."],
  ["2", "The bot retrieves verified info", "It looks up relevant passages from verified university information instead of guessing."],
  ["3", "Get a sourced answer", "You receive an answer grounded in that information, with its source."],
];

const features = [
  ["Lives in Telegram", "No new app or account to learn. Just open a chat and ask."],
  ["Grounded answers", "Retrieval-augmented generation (RAG) draws answers from verified university information."],
  ["Sourced responses", "Answers point back to where the information came from, so you can check it."],
  ["Made for international students", "Built around the questions newcomers ask about university life."],
  ["Plain-language help", "Ask in your own words and get a clear, readable reply."],
];

function TelegramButton({ label = "Open in Telegram" }: { label?: string }) {
  return <a className="button button-primary" href={telegramBotUrl} target="_blank" rel="noopener noreferrer">{label} <span aria-hidden="true">↗</span></a>;
}

export default function UniAssistPage() {
  return <div className="site-shell ua-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <main className="page-content ua-page" id="main-content">
      <section className="ua-hero" aria-labelledby="ua-title">
        <p className="eyebrow">A Dey Intelligence project · Telegram bot</p>
        <h1 id="ua-title">University answers you can trust, in Telegram.</h1>
        <p className="ua-lede">UniAssist helps international students get reliable answers about university life, drawn from verified information instead of guesses.</p>
        <div className="hero-actions"><TelegramButton /><a className="text-action" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div>
        <p className="ua-badge"><i aria-hidden="true" /> Early access · currently in testing</p>
      </section>

      <section className="ua-section ruled" aria-labelledby="ua-problem">
        <p className="eyebrow">The problem</p>
        <h2 id="ua-problem">Finding reliable, current university information is hard.</h2>
        <p className="ua-intro">International students often struggle to find information they can rely on and that is still up to date.</p>
        <ul className="ua-grid">{problems.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul>
      </section>

      <section id="how-it-works" className="ua-section ruled" aria-labelledby="ua-how">
        <p className="eyebrow">How it works</p>
        <h2 id="ua-how">Three steps from question to answer.</h2>
        <ol className="ua-steps">{steps.map(([number, name, body]) => <li key={number}><span className="ua-step-number" aria-hidden="true">{number}</span><h3>{name}</h3><p>{body}</p></li>)}</ol>
      </section>

      <section className="ua-section ruled" aria-labelledby="ua-features">
        <p className="eyebrow">Key features</p>
        <h2 id="ua-features">Simple by design.</h2>
        <ul className="ua-grid">{features.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul>
      </section>

      <section className="ua-section ruled" aria-labelledby="ua-status">
        <p className="eyebrow">Status</p>
        <h2 id="ua-status">Early access, currently testing with students.</h2>
        <p className="ua-intro">UniAssist is an early-stage project that I designed, built, and deployed myself as a solo developer. It is being tested with a small group of students, and it will keep changing based on what they find missing or wrong.</p>
        <p className="ua-intro">Tried it, or want to? Tell me what worked, what didn’t, and which questions it should answer. <a className="text-action" href={`mailto:${profile.links.email}?subject=UniAssist%20feedback`}>Send feedback <span aria-hidden="true">→</span></a></p>
      </section>

      <section className="ua-final" aria-labelledby="ua-final-title">
        <h2 id="ua-final-title">Ask your first question.</h2>
        <p>Open UniAssist in Telegram, or write to me with feedback or ideas.</p>
        <div className="hero-actions"><TelegramButton /><a className="text-action" href={`mailto:${profile.links.email}`}>{profile.links.email}</a></div>
      </section>
      <SiteFooter />
    </main>
  </div>;
}
