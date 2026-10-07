"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CardItem } from "./home-cards";

function Card({ item, onOpen }: { item: CardItem; onOpen: (item: CardItem, trigger: HTMLElement) => void }) {
  const place = useCallback((event: React.PointerEvent<HTMLButtonElement>, snap: boolean) => {
    const el = event.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${Math.round(event.clientX - r.left + 14)}px`);
    el.style.setProperty("--y", `${Math.round(event.clientY - r.top + 12)}px`);
    if (snap) {
      el.dataset.snap = "1";
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => { delete el.dataset.snap; }));
    }
  }, []);
  const flip = item.group === "projects";
  return (
    <button
      type="button"
      className={`card ${flip ? "card-flip" : "card-tile"}`}
      aria-haspopup="dialog"
      onPointerEnter={(e) => place(e, true)}
      onPointerMove={(e) => place(e, false)}
      onClick={(e) => onOpen(item, e.currentTarget)}
    >
      {flip ? (
        <span className="flip-scene">
          <span className="flip-inner">
            <span className="tile flip-face">
              <TileFace item={item} />
            </span>
            <span className="flip-face flip-back">
              {item.logo
                ? <Image className="flip-logo-img" src={item.logo} alt="" width={128} height={128} />
                : <span className="flip-logo" style={{ background: item.markColor }}>{item.mark}</span>}
              <span className="flip-name">{item.title}</span>
              {!item.logo && <span className="mono muted">Logo placeholder</span>}
            </span>
          </span>
        </span>
      ) : (
        <span className="tile tile-research"><TileFace item={item} /></span>
      )}
      <span className="pill mono" aria-hidden="true"><span>Open</span><svg width="5" height="7" viewBox="0 0 5 7" fill="currentColor"><path d="M0 0l5 3.5L0 7z" /></svg></span>
      <span className="cap">{item.caption}</span>
      <span className="mono muted card-meta">{item.meta}</span>
    </button>
  );
}

function TileFace({ item }: { item: CardItem }) {
  return (
    <>
      <span className="mono tile-top"><span>{item.kind}</span><span>{item.code}</span></span>
      <span className="tile-mark">{item.mark}</span>
      <span className="mono tile-status"><span className="dot" /><span>{item.status}</span></span>
    </>
  );
}

function Detail({ item, onClose, returnTo }: { item: CardItem; onClose: () => void; returnTo: HTMLElement | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const [stamp, setStamp] = useState(false);
  useEffect(() => {
    const root = ref.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    root?.querySelector<HTMLElement>("[data-close]")?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab" || !root) return;
      const nodes = Array.from(root.querySelectorAll<HTMLElement>("a[href],button:not([tabindex='-1'])"));
      if (!nodes.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      returnTo?.focus();
    };
  }, [onClose, returnTo]);
  const external = item.href && /^https?:\/\//.test(item.href);
  return (
    <div className="detail" role="dialog" aria-modal="true" aria-label={item.title} ref={ref}>
      <div className="detail-bar">
        <button type="button" className="closebtn" data-close onClick={onClose}>
          <span className="mono">Close</span>
          <span className="closebtn-x"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M1 1l10 10M11 1L1 11" /></svg></span>
        </button>
      </div>
      <div className="detail-body">
        <div className="detail-copy">
          <div className="mono dim">{item.code} · {item.kind}</div>
          <h3>{item.title}</h3>
          <p className="detail-sub">{item.sub}</p>
          <p className="detail-text">{item.body}</p>
          <ul className="mono detail-points">{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="mono detail-status"><span className="dot" /><span>{item.status}</span></div>
          {item.href && (external
            ? <a className="detail-link mono" href={item.href} target="_blank" rel="noreferrer">{item.linkLabel} →</a>
            : <Link className="detail-link mono" href={item.href}>{item.linkLabel} →</Link>)}
        </div>
        <div className="detail-art">
          <button type="button" tabIndex={-1} aria-hidden="true" className="detail-glyph" onClick={() => item.stampable && setStamp((s) => !s)}>{item.mark}</button>
          {stamp && item.stampable && (
            <span className="stamp" aria-hidden="true">
              <span className="stamp-big">Closed as duplicate</span>
              <span className="mono">Duplicate of: just ask the chatbot</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ id, code, count, kicker, title, items, minCol, onOpen }: { id: string; code: string; count: string; kicker: string; title: string; items: CardItem[]; minCol: number; onOpen: (item: CardItem, trigger: HTMLElement) => void }) {
  return (
    <section id={id} className="showcase" aria-labelledby={`${id}-h`}>
      <div className="mono section-bar"><span>{code}</span><span>{count}</span></div>
      <div className="section-head">
        <div className="mono muted">{kicker}</div>
        <h2 id={`${id}-h`}>{title}</h2>
      </div>
      <div className="card-grid" style={{ "--min": `${minCol}px` } as React.CSSProperties}>
        {items.map((item) => <Card key={item.id} item={item} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

export function HomeShowcase({ research, projects }: { research: CardItem[]; projects: CardItem[] }) {
  const [open, setOpen] = useState<{ item: CardItem; el: HTMLElement } | null>(null);
  const onOpen = useCallback((item: CardItem, el: HTMLElement) => setOpen({ item, el }), []);
  const onClose = useCallback(() => setOpen(null), []);
  return (
    <>
      <Section id="research" code="S.01" count={`${research.length} papers`} kicker="Preprints and submissions" title="Research" items={research} minCol={340} onOpen={onOpen} />
      <Section id="projects" code="S.02" count={`${projects.length} products`} kicker="Tools I build and ship" title="Projects" items={projects} minCol={260} onOpen={onOpen} />
      {open && <Detail item={open.item} onClose={onClose} returnTo={open.el} />}
    </>
  );
}
