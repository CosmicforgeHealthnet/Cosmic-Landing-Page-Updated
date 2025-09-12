const BASE_URL =
   process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://www.cosmicforge-healthnet.com";

export default function robots() {
   return {
      rules: [
         {
            userAgent: "*",
            allow: ["/"],
            // block private or dashboard routes if any:
            disallow: ["/admin", "/api", "/_next", "/private"],
         },
      ],
      sitemap: `${BASE_URL}/sitemap.xml`,
      host: BASE_URL,
   };
}
