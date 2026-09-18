export type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type BlogPost = {
  slug: string;
  href?: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  topic: string;
  sections: readonly ArticleSection[];
  references?: readonly { label: string; href: string }[];
};

export type AcademicPaper = {
  title: string;
  publicationType: string;
  year: string;
  description: string;
  researchAreas: readonly string[];
  status: string;
  href: string;
};

// Add a post here to publish a complete, indexable article at /writing/[slug].
// Keep each post focused on one topic, begin with a direct answer in `summary`,
// and include sources in `references` when you make research-based claims.
export const blogPosts: BlogPost[] = [
  {
    slug: "education-in-russia-scholarship-journey",
    href: "/education-in-russia-scholarship-journey",
    title: "My Education in Russia Scholarship Journey",
    summary: "How I received a Russian Government Scholarship, began my master’s degree in Chelyabinsk, and learned what funded study in Russia actually covers.",
    publishedAt: "2026-09-12",
    updatedAt: "2026-09-12",
    topic: "Education in Russia",
    sections: [],
  },
  {
    slug: "south-ural-state-university-experience-review",
    href: "/south-ural-state-university-experience-review",
    title: "South Ural State University Experience: My Honest Review",
    summary: "An Indian master's student shares an honest South Ural State University review covering academics, professors, scholarships, Russian life, work, and Chelyabinsk.",
    publishedAt: "2026-09-04",
    topic: "Student experience",
    sections: [],
  },
];

// Add public papers, reviews, preprints, or conference material here.
// Use a direct PDF, DOI, SSRN, Google Scholar, or publisher link in `href`.
export const academicPapers: AcademicPaper[] = [
  {
    title: "Beyond the Agent Label: Evidence Maturity, Human Monitoring, and Governance of Agentic AI in Higher Education — A Critical Integrative Review",
    publicationType: "Preprint / Review Article",
    year: "2026",
    description: "A critical integrative review examining the evidence maturity of agentic AI systems in higher education, focusing on governance frameworks, meaningful human oversight, and responsible AI deployment.",
    researchAreas: ["Artificial Intelligence", "AI Governance", "Educational Technology", "Higher Education"],
    status: "Preprint",
    // TODO: Replace with the public EdArXiv or OSF URL.
    href: "ADD_EDARXIV_OR_OSF_LINK",
  },
  {
    title: "Exchange-Rate Pass-Through and Food Inflation in Russia: Evidence from Monthly Data",
    publicationType: "Research Article",
    year: "2026",
    description: "An empirical economics study investigating the relationship between exchange-rate movements and food inflation in Russia using monthly macroeconomic data.",
    researchAreas: ["Economics", "International Finance", "Inflation", "Macroeconomics"],
    // Update this label when the paper's publication state is confirmed.
    status: "Published / Submitted",
    // TODO: Replace with the journal page or DOI URL.
    href: "ADD_JOURNAL_OR_DOI_LINK",
  },
];
