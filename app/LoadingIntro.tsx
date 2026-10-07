"use client";

import { useEffect } from "react";

// The intro is driven entirely by CSS, gated on <html data-intro="play">, which an inline
// script in the layout sets on the first visit to "/" in a session. Once it has finished
// (or the visitor navigates away) the flag is switched to "skip" so it never replays.
export function LoadingIntro() {
  useEffect(() => {
    const root = document.documentElement;
    try { sessionStorage.setItem("introSeen", "1"); } catch {}
    const t = window.setTimeout(() => { root.dataset.intro = "skip"; }, 6200);
    return () => { window.clearTimeout(t); root.dataset.intro = "skip"; };
  }, []);
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-panel loader-top" />
      <div className="loader-panel loader-bottom" />
      <div className="mono pct" />
      <div className="loader-word">Dey Intelligence</div>
    </div>
  );
}
