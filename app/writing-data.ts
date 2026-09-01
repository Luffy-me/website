export type BlogPost = {
  title: string;
  summary: string;
  publishedAt: string;
  topic: string;
  href: string;
};

export type AcademicPaper = {
  title: string;
  summary: string;
  publishedAt: string;
  publication?: string;
  href: string;
};

// Add a post here to publish it in the Notes section. `href` can be an
// external URL or the path to a future page on this site.
export const blogPosts: BlogPost[] = [];

// Add public papers, reviews, preprints, or conference material here.
// Use a direct PDF, DOI, SSRN, Google Scholar, or publisher link in `href`.
export const academicPapers: AcademicPaper[] = [];
