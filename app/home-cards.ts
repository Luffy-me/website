import { projects } from "./projects-data";
import { academicPapers } from "./writing-data";

export type CardItem = {
  id: string;
  group: "research" | "projects";
  code: string;
  kind: string;
  caption: string;
  title: string;
  sub: string;
  meta: string;
  mark: string;
  markColor: string;
  logo?: string;
  status: string;
  body: string;
  points: readonly string[];
  href?: string;
  linkLabel?: string;
  stampable?: boolean;
};

const pad = (n: number) => String(n).padStart(2, "0");
const isPublic = (href: string) => /^https?:\/\//.test(href);

function splitTitle(title: string) {
  const match = title.match(/^(.*?)(?::|\s—\s)\s*(.+)$/);
  return match ? { head: match[1].trim(), tail: match[2].trim() } : { head: title, tail: "" };
}

export const researchCards: CardItem[] = academicPapers.map((paper, i) => {
  const { head, tail } = splitTitle(paper.title);
  const isSsrn = paper.venue === "SSRN";
  return {
    id: `r${i + 1}`,
    group: "research",
    code: `R.${pad(i + 1)}`,
    kind: `${paper.publicationType.split("/")[0].trim()} · ${paper.venue}`,
    caption: head,
    title: head,
    sub: tail || paper.venue,
    meta: `${paper.status} · ${paper.year}`,
    mark: paper.mark,
    markColor: "#141414",
    status: paper.status,
    body: paper.description,
    points: paper.researchAreas,
    href: isPublic(paper.href) ? paper.href : undefined,
    linkLabel: isPublic(paper.href) ? `Read on ${paper.venue}` : undefined,
    stampable: isSsrn,
  };
});

const presentation: Record<string, { mark: string; color: string; kind: string; logo?: string }> = {
  uniassist: { mark: "UA", color: "#141414", kind: "Telegram assistant", logo: "/images/uniassist/logo.svg" },
  "ozon-price-tracker": { mark: "OPT", color: "#f26a21", kind: "Chrome extension" },
  openhighlights: { mark: "OH", color: "#1f7a4d", kind: "Chrome extension" },
  "save-image-as": { mark: "PNG", color: "#2f6fed", kind: "Chrome extension", logo: "/images/save-image-as/icon128.png" },
};

export const projectCards: CardItem[] = projects.map((project, i) => {
  const p = presentation[project.slug];
  return {
    id: `p${i + 1}`,
    group: "projects",
    code: `P.${pad(i + 1)}`,
    kind: p.kind,
    caption: project.name,
    title: project.name,
    sub: project.summary,
    meta: `${project.technologies.slice(0, 2).join(" · ")} · ${project.status}`,
    mark: p.mark,
    markColor: p.color,
    logo: p.logo,
    status: project.status,
    body: project.currentStatus,
    points: project.capabilities,
    href: project.links?.live ?? project.href,
    linkLabel: project.links?.live ? "Chrome Web Store" : "Project page",
  };
});
