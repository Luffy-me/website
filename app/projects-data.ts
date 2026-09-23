export type Project = {
  slug: "openhighlights";
  href?: string;
  name: string; summary: string; status: "Published" | "In development" | "Prototype"; capabilities: string[]; technologies: string[];
  problem: string; solution: string; architecture: string; technicalDecisions: string[]; challenges: string[]; currentStatus: string;
  links?: { live?: string; source?: string };
};

export const projects: Project[] = [
  { slug: "openhighlights", href: "/openhighlights", name: "OpenHighlights", summary: "A local-first reading library for the passages, notes, and documents you want to keep.", status: "In development", capabilities: ["Web highlights", "Notes and tags", "Local PDF library", "Markdown and JSON export"], technologies: ["Chrome extension", "Local-first storage", "PDF annotations", "Import and export"], problem: "Useful ideas disappear between tabs, bookmarks, and documents, while many reading tools require handing personal research to a cloud service.", solution: "OpenHighlights keeps highlights, notes, saved pages, and PDFs together in a private library stored on the user’s device.", architecture: "A Chrome extension captures and restores highlights on supported pages while keeping the library, attachments, offline snapshots, and PDF files in local browser storage.", technicalDecisions: ["Keep user data local by default.", "Support portable Markdown and JSON exports.", "Make web pages and PDFs part of the same searchable library.", "Preview imported data before adding it."], challenges: ["Restoring durable highlights when web pages change.", "Keeping imported reading history useful when source exports do not contain exact DOM anchors."], currentStatus: "In development for the Chrome Web Store." },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
