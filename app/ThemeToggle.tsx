"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const useDark = savedTheme === "dark";
    setDark(useDark);
    document.documentElement.style.colorScheme = useDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextTheme = !dark;
    setDark(nextTheme);
    document.documentElement.style.colorScheme = nextTheme ? "dark" : "light";
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return <button type="button" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={dark} onClick={toggleTheme}>{dark ? "☀" : "☾"}</button>;
}
