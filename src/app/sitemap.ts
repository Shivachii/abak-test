import { MetadataRoute } from "next";
import { client } from "../../sanity/lib/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const locales = ["en", "sw", "ar"];
const defaultLocale = "en";

const staticPaths = [
  "", // home
  "about",
  "contact",
  "events",
  "programs",
  "donate",
  "volunteer",
  "governing-oblectives",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const now = new Date().toISOString();

    const staticRoutes = locales.flatMap((locale) =>
      staticPaths.map((path) => {
        const localizedPath =
          locale === defaultLocale ? path : `${locale}/${path}`;
        const fullPath = `${baseUrl}/${localizedPath}`.replace(/\/+$/, "");

        return {
          url: fullPath,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        };
      })
    );

    // Dynamic routes from Sanity
    const [galleries, publications, media] = await Promise.all([
      client.fetch(`*[_type == "galleryType"]{slug}`),
      client.fetch(`*[_type == "publicationsType"]{slug}`),
      client.fetch(`*[_type == "mediaType"]{slug}`),
    ]);

    const dynamicItems = [...galleries, ...publications, ...media];

    const dynamicRoutes = locales.flatMap((locale) =>
      dynamicItems
        .filter((item) => item.slug?.current)
        .map((item) => {
          const slug = item.slug.current;
          const localizedPath =
            locale === defaultLocale
              ? `posts/${slug}`
              : `${locale}/posts/${slug}`;
          return {
            url: `${baseUrl}/${localizedPath}`.replace(/\/+$/, ""),
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.6,
          };
        })
    );

    return [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
