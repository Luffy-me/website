"use client";

import { usePathname } from "next/navigation";
import { profile } from "./site-config";

export function WebsiteTranslator({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const pageUrl = new URL(pathname || "/", profile.siteUrl);
  const translationUrl = new URL("https://translate.google.com/translate");
  translationUrl.search = new URLSearchParams({ sl: "en", tl: "ru", u: pageUrl.href }).toString();

  return (
    <a
      className="translator-button notranslate"
      translate="no"
      href={translationUrl.href}
      aria-label="Translate this website page into Russian"
      title="Read this page in Russian"
      onClick={(event) => {
        // Preserve the current page, filters, and section when following the link.
        const currentPage = new URL(pageUrl.href);
        currentPage.search = window.location.search;
        currentPage.hash = window.location.hash;
        const destination = new URL(translationUrl.href);
        destination.searchParams.set("u", currentPage.href);
        event.currentTarget.href = destination.href;
      }}
    >
      {compact ? "EN→RU" : "Translate EN→RU"}
    </a>
  );
}
