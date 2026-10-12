"use client";

import { useState } from "react";

export function HeroKicker() {
  const [swap, setSwap] = useState(false);
  return (
    <button type="button" className="mono rise hero-kicker" style={{ "--d": "3.9s" } as React.CSSProperties} onClick={() => setSwap((s) => !s)} aria-label="AI engineer and economics researcher">
      {swap ? "Economics engineer · AI researcher" : "AI engineer · Economics researcher"}
    </button>
  );
}
