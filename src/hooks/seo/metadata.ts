import { Metadata } from "next";
import { sanityFetch } from "../../../sanity/lib/live";

export async function generatePageMetadata({
  lang,
  type,
}: {
  lang: string;
  type: string;
}): Promise<Metadata> {
  const query = `
  {
    "page": *[_type == $type && lang == $lang][0] {
      seo {
        metaTitle,
        metaDescription,
        keywords,
        canonicalUrl,
        ogTitle,
        ogDescription,
        twitterCard,
        ogImage {
          asset->{
            url
          }
        },
        noIndex,
        noFollow
      }
    },
    "site": *[_type == "siteSettings" && lang == $lang][0] {
      seo {
        metaTitle,
        metaDescription,
        keywords,
        canonicalUrl,
        ogTitle,
        ogDescription,
        twitterCard,
        ogImage {
          asset->{
            url
          }
        },
        noIndex,
        noFollow
      }
    }
  }
`;

  const result = await sanityFetch({
    query,
    params: { lang, type },
  });

  const { page, site } = result.data;
  const seo = {
    ...site?.seo,
    ...page?.seo,
  };

  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalUrl || undefined,
    },
    openGraph: {
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: seo.ogImage?.asset?.url
        ? [{ url: seo.ogImage.asset.url }]
        : "/logo.jpg",
      type: "website",
      locale: lang,
    },
    twitter: {
      card: seo.twitterCard || "summary_large_image",
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: seo.ogImage?.asset?.url ? [seo.ogImage.asset.url] : undefined,
    },
    robots: {
      index: seo.noIndex !== true,
      follow: seo.noFollow !== true,
    },
  };
}
