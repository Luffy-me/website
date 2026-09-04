import type { Metadata } from "next";
import Link from "next/link";
import { MobileNavigation } from "../MobileNavigation";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import { profile } from "../site-config";
import { academicPapers, blogPosts } from "../writing-data";

export const metadata: Metadata = {
  title: "Writing & Research — Dey Intelligence",
  description: "Notes, public academic papers, and research reviews by Abhishek Dey.",
  alternates: { canonical: "/writing" },
  openGraph: { url: "/writing" },
};

function displayDate(value: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${value}T00:00:00Z`));
}

export default function WritingPage() {
  const papersSchema = academicPapers.length > 0 ? { "@context": "https://schema.org", "@graph": academicPapers.map((paper) => ({ "@type": "ScholarlyArticle", headline: paper.title, description: paper.summary, datePublished: paper.publishedAt, ...(paper.updatedAt ? { dateModified: paper.updatedAt } : {}), author: { "@id": `${profile.siteUrl}/about#person`, "@type": "Person", name: profile.name }, url: paper.href, ...(paper.doi ? { sameAs: paper.doi } : {}), ...(paper.publication ? { isPartOf: { "@type": "Periodical", name: paper.publication } } : {}) })) } : undefined;
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="writing & research" /><MobileNavigation active="writing & research" />
    <main className="page-content" id="main-content">{papersSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(papersSchema) }} />}
      <section className="writing-hero"><p className="eyebrow">Ideas in public</p><h1>Writing &amp; research</h1><p>Notes on building useful AI systems, software, economics, and the research that informs the work.</p></section>
      <section className="writing-section ruled" aria-labelledby="notes-heading"><div className="writing-section-heading"><div><p className="eyebrow">Blog</p><h2 id="notes-heading">Notes</h2></div><p>Short essays, product thinking, and working observations.</p></div>{blogPosts.length > 0 ? <div className="writing-list">{blogPosts.map((post) => <article className="writing-entry" key={post.slug}><div className="writing-entry-meta"><span>{post.topic}</span><time dateTime={post.publishedAt}>{displayDate(post.publishedAt)}</time></div><h3><Link href={post.href ?? `/writing/${post.slug}`}>{post.title} <span aria-hidden="true">→</span></Link></h3><p>{post.summary}</p></article>)}</div> : <p className="writing-empty">New notes will appear here. Add a post in <code>app/writing-data.ts</code> when it is ready to publish.</p>}</section>
      <section className="writing-section ruled" aria-labelledby="papers-heading"><div className="writing-section-heading"><div><p className="eyebrow">Public record</p><h2 id="papers-heading">Academic papers &amp; reviews</h2></div><p>Published papers, preprints, literature reviews, and conference work.</p></div>{academicPapers.length > 0 ? <div className="writing-list">{academicPapers.map((paper) => <article className="writing-entry" key={paper.href}><div className="writing-entry-meta"><span>{paper.publication ?? "Public paper"}</span><time dateTime={paper.publishedAt}>{displayDate(paper.publishedAt)}</time></div><h3><a href={paper.href}>{paper.title} <span aria-hidden="true">↗</span></a></h3><p>{paper.summary}</p></article>)}</div> : <p className="writing-empty">Your public papers and academic reviews will appear here. Add each item in <code>app/writing-data.ts</code> with its public link.</p>}</section>
      <SiteFooter />
    </main>
  </div>;
}
