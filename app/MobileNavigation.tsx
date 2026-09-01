"use client";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { navigationItems, profile } from "./site-config";
export function MobileNavigation({ active }: { active: string }) { const [open, setOpen] = useState(false); const close = () => setOpen(false); return <header className="mobile-header"><div className="mobile-bar"><Link href="/" className="brand" onClick={close}><img src="/images/nav-floppy.png" alt="" /><span>{profile.name}</span></Link><div className="mobile-actions"><ThemeToggle /><button className="menu-button" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}><span aria-hidden="true">{open ? "×" : "☰"}</span></button></div></div><nav id="mobile-navigation" className={open ? "mobile-menu is-open" : "mobile-menu"} aria-label="Primary navigation">{navigationItems.map((item) => <Link key={item.href} href={item.href} className={active === item.label.toLowerCase() ? "active" : undefined} onClick={close}>{item.label}</Link>)}</nav></header>; }
