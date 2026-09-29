import { profile } from "./site-config";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p><strong>{profile.brand}</strong> · A personal research and product studio by {profile.name}.</p>
      <p>© 2026 {profile.name}</p>
      <a
        href="https://www.producthunt.com/products/openhighlights-keep-what-matters?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-openhighlights-keep-what-matters"
        target="_blank"
        rel="noopener noreferrer"
        style={{ flexBasis: "100%", marginTop: "0.75rem" }}
      >
        {/* Product Hunt serves this badge dynamically. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="OpenHighlights — Keep what matters - Highlight, save, and revisit anything you read online | Product Hunt"
          width="250"
          height="54"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1263212&amp;theme=light&amp;t=1790600113553"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </a>
    </footer>
  );
}
