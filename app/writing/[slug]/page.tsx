import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { MobileNavigation } from "../../MobileNavigation";
import { SiteFooter } from "../../SiteFooter";
import { SiteSidebar } from "../../SiteSidebar";
import { profile } from "../../site-config";
import { blogPosts } from "../../writing-data";

type PageProps = { params: Promise<{ slug: string }> };

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

function displayDate(value: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T00:00:00Z`));
}

export function generateStaticParams() {
  return blogPosts.filter((post) => !post.href).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const path = post.href ?? `/writing/${post.slug}`;
  return {
    title: `${post.title} — Dey Intelligence`,
    description: post.summary,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: post.title, description: post.summary, publishedTime: post.publishedAt, modifiedTime: post.updatedAt },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  if (post.href) redirect(post.href);
  const url = `${profile.siteUrl}/writing/${post.slug}`;
  const personId = `${profile.siteUrl}/about#person`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    mainEntityOfPage: url,
    author: { "@id": personId, "@type": "Person", name: profile.name, url: `${profile.siteUrl}/about` },
    publisher: { "@type": "Organization", name: profile.brand, url: profile.siteUrl },
  };
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="writing & research" /><MobileNavigation active="writing & research" />
    <main className="page-content" id="main-content"><article className="writing-article"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Link className="back-link" href="/writing">← Writing &amp; research</Link><header><p className="eyebrow">{post.topic}</p><h1>{post.title}</h1><p className="article-summary">{post.summary}</p><p className="article-byline">By <Link href="/about">{profile.name}</Link> · <time dateTime={post.publishedAt}>{displayDate(post.publishedAt)}</time>{post.updatedAt && <> · Updated <time dateTime={post.updatedAt}>{displayDate(post.updatedAt)}</time></>}</p></header><div className="article-body">{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>{post.references && post.references.length > 0 && <section className="article-references"><h2>Sources</h2><ul>{post.references.map((reference) => <li key={reference.href}><a href={reference.href}>{reference.label} <span aria-hidden="true">↗</span></a></li>)}</ul></section>}</article><SiteFooter /></main>
  </div>;
}
