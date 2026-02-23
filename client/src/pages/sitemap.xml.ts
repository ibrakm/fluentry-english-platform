// This file generates sitemap.xml dynamically
// Vercel will serve this at /sitemap.xml

const BASE_URL = "https://fluentry-english-platform.vercel.app";

const pages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/courses", priority: "0.9", changefreq: "weekly" },
  { path: "/pricing", priority: "0.95", changefreq: "weekly" },
  { path: "/free-test", priority: "0.95", changefreq: "weekly" },
  { path: "/free-resources", priority: "0.9", changefreq: "weekly" },
  { path: "/book-lesson", priority: "0.95", changefreq: "daily" },
  { path: "/audio-audit", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.85", changefreq: "weekly" },
  { path: "/blog/best-techniques-improve-english-speaking", priority: "0.8", changefreq: "monthly" },
  { path: "/blog/business-english-email-writing-guide", priority: "0.8", changefreq: "monthly" },
  { path: "/blog/common-mistakes-moroccan-learners", priority: "0.8", changefreq: "monthly" },
  { path: "/blog/how-to-think-in-english", priority: "0.8", changefreq: "monthly" },
  { path: "/blog/ielts-speaking-test-success-guide", priority: "0.8", changefreq: "monthly" },
  { path: "/blog/improve-english-pronunciation-arabic-speakers", priority: "0.8", changefreq: "monthly" },
  { path: "/articles/the-unspoken-passport", priority: "0.8", changefreq: "monthly" },
];

export default function handler(req: any, res: any) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${pages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
  res.write(sitemap);
  res.end();
}
