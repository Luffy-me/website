export const profile = {
  name: "Abhishek Dey",
  brand: "Dey Intelligence",
  role: "AI Engineer & Product Builder",
  description: "Portfolio of Abhishek Dey, an AI engineer and product builder creating reliable AI systems, developer tools, and research-driven software.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dey-intelligence.com",
  currentFocusUpdated: "September 1, 2026",
  links: {
    github: "https://github.com/Luffy-me",
    linkedin: "https://www.linkedin.com/in/abhishekdeyint",
    email: "hello.deyabhishek@gmail.com",
    phone: "+79128083769",
    resume: undefined,
  },
} as const;

export const hasWriting = true;

export const navigationItems = [
  { href: "/projects", label: "Work" },
  ...(hasWriting ? [{ href: "/writing", label: "Writing & Research" }] : []),
  { href: "/about", label: "About" },
  ...(profile.links.resume ? [{ href: profile.links.resume, label: "Resume" }] : []),
];
