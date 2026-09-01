export type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type BlogPost = {
  slug: string;
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
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  publication?: string;
  href: string;
  doi?: string;
};

// Add a post here to publish a complete, indexable article at /writing/[slug].
// Keep each post focused on one topic, begin with a direct answer in `summary`,
// and include sources in `references` when you make research-based claims.
export const blogPosts: BlogPost[] = [];

// Add public papers, reviews, preprints, or conference material here.
// Use a direct PDF, DOI, SSRN, Google Scholar, or publisher link in `href`.
export const academicPapers: AcademicPaper[] = [];
