import type { MetadataRoute } from "next";
import { projects } from "./projects-data";
import { profile } from "./site-config";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/projects", "/about", ...projects.map((project) => `/projects/${project.slug}`)].map((route) => ({ url: `${profile.siteUrl}${route}`, lastModified: new Date("2026-09-01") })); }
