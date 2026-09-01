export const profile = {
  name: "Abhishek Dey",
  brand: "Dey Intelligence",
  role: "AI Engineer & Product Builder",
  description: "Portfolio of Abhishek Dey, an AI engineer and product builder creating reliable AI systems, developer tools, and research-driven software.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dey-intelligence.com",
  currentFocusUpdated: "September 1, 2026",
  links: { github: undefined, linkedin: undefined, email: undefined, resume: undefined },
} as const;

export const hasWriting = false;

export const navigationItems = [
  { href: "/projects", label: "Work", image: "/images/nav-projects.png" },
  ...(hasWriting ? [{ href: "/writing", label: "Writing", image: "/images/nav-blog.png" }] : []),
  { href: "/about", label: "About", image: "/images/nav-floppy.png" },
  ...(profile.links.resume ? [{ href: profile.links.resume, label: "Resume", image: "/images/nav-search.png" }] : []),
];
