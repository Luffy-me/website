import type { MetadataRoute } from "next";
import { projects } from "./projects-data";
import { profile } from "./site-config";
import { blogPosts } from "./writing-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/about", "/writing", ...projects.map((project) => `/projects/${project.slug}`)];
  const articles = blogPosts.map((post) => ({ url: `${profile.siteUrl}/writing/${post.slug}`, lastModified: new Date(post.updatedAt ?? post.publishedAt) }));
  return [...staticRoutes.map((route) => ({ url: `${profile.siteUrl}${route}` })), ...articles];
}
