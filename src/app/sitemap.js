// app/sitemap.ts

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://www.cosmicforge-healthnet.com";

export default function sitemap() {
  const now = new Date();

  // List your key static routes here
  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/features", changeFrequency: "monthly", priority: 0.85 },
    { path: "/compliance", changeFrequency: "monthly", priority: 0.7 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
    { path: "/refund", changeFrequency: "yearly", priority: 0.5 },
    { path: "/use-case", changeFrequency: "monthly", priority: 0.6 },
    { path: "/use-cases/doctors", changeFrequency: "monthly", priority: 0.6 },
    { path: "/use-cases/patients", changeFrequency: "monthly", priority: 0.6 },
    { path: "/integrations", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.6 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.6 },
    { path: "/refund", changeFrequency: "monthly", priority: 0.6 },
    { path: "/security", changeFrequency: "monthly", priority: 0.6 },
    { path: "/status", changeFrequency: "daily", priority: 0.6 },
    // { path: "/telemedicine", changeFrequency: "monthly", priority: 0.8 },
    // { path: "/labs", changeFrequency: "monthly", priority: 0.75 },
    // { path: "/pharmacy", changeFrequency: "monthly", priority: 0.75 },
    // { path: "/ai-tools", changeFrequency: "monthly", priority: 0.75 },
    // { path: "/medical-tour", changeFrequency: "monthly", priority: 0.7 },
    // { path: "/shop", changeFrequency: "weekly", priority: 0.7 },
    // add any other top-level pages you have
  ];

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
