import type { Metadata } from "next";
import "./globals.css";
import { profile } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: "Dey Intelligence — Abhishek Dey, AI Engineer", template: "%s" },
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: profile.brand, title: "Dey Intelligence — Abhishek Dey, AI Engineer", description: profile.description, images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Dey Intelligence — Abhishek Dey, AI Engineer & Product Builder" }] },
  twitter: { card: "summary_large_image", title: "Dey Intelligence — Abhishek Dey, AI Engineer", description: profile.description, images: ["/og-v2.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: "try { const saved = localStorage.getItem('theme'); const theme = saved === 'dark' || saved === 'light' ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = theme; document.documentElement.style.colorScheme = theme; } catch {}" }} /></head>
      <body>{children}</body>
    </html>
  );
}
