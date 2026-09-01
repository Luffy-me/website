import type { Metadata } from "next";
import Link from "next/link";
import { MobileNavigation } from "../MobileNavigation";
import { SiteFooter } from "../SiteFooter";
import { SiteSidebar } from "../SiteSidebar";
import { currentlyReading, finishedBooks } from "../reading-data";

export const metadata: Metadata = {
  title: "Reading — Dey Intelligence",
  description: "Books Abhishek Dey is currently reading and has recently finished.",
  alternates: { canonical: "/reading" },
  openGraph: { url: "/reading" },
};

export default function ReadingPage() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="reading" /><MobileNavigation active="reading" />
    <main className="page-content" id="main-content"><section className="reading-hero"><p className="eyebrow">A personal shelf</p><h1>Reading</h1><p>Books shaping the questions I&apos;m thinking through, one page at a time.</p></section>{currentlyReading && <section className="reading-section ruled" aria-labelledby="currently-reading"><p className="eyebrow">On the desk</p><h2 id="currently-reading">Currently reading</h2><article className="current-book"><div className="book-cover">{currentlyReading.coverUrl ? <img src={currentlyReading.coverUrl} alt={`Cover of ${currentlyReading.title} by ${currentlyReading.author}`} /> : <span aria-hidden="true">{currentlyReading.title}</span>}</div><div><p className="book-author">{currentlyReading.author}</p><h3>{currentlyReading.title}</h3><p>{currentlyReading.note}</p></div></article></section>}{finishedBooks.length > 0 && <section className="reading-section ruled" aria-labelledby="finished-books"><p className="eyebrow">Shelf</p><h2 id="finished-books">Recently finished</h2><div className="finished-books">{finishedBooks.map((book) => <article className="finished-book" key={`${book.title}-${book.author}`}><p className="book-author">{book.author}{book.finishedAt && <> · Finished {book.finishedAt}</>}</p><h3>{book.href ? <a href={book.href}>{book.title} <span aria-hidden="true">↗</span></a> : book.title}</h3><p>{book.note}</p></article>)}</div></section>}<p className="reading-back"><Link href="/">← Back home</Link></p><SiteFooter /></main>
  </div>;
}
