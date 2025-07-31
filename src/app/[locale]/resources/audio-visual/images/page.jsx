import { sanityFetch } from "../../../../../../sanity/lib/live";
import { getAllGalleryMediaPaginatedQuery } from "../../../../../../sanity/lib/queries";
import AllGalleryMedia from "@/components/ImageViewer/AllGalleryMedia";
import { generatePageMetadata } from "@/hooks/seo/metadata";
import { IMAGES_PAGE_QUERY } from "../../../../../../sanity/lib/queries/pageQueries/pageQueries";

export async function generateMetadata({ params }) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "imagesPage",
  });
}

export default async function GalleryPage({ params }) {
  const { locale } = params;
  const { data } = await sanityFetch({
    query: getAllGalleryMediaPaginatedQuery(),
  });

  const pageResponse = await sanityFetch({
    query: IMAGES_PAGE_QUERY,
    params: { lang: locale },
  });

  const galleryPage = pageResponse?.data?.galleryPage;

  if (!galleryPage) {
    console.warn(`No galleryPage data found for locale: ${locale}`);
  }

  return (
    <AllGalleryMedia
      galleries={data}
      pageData={{
        pageTitle: galleryPage?.title || "Our Image Gallery",
        pageDescription:
          galleryPage?.description ||
          "Welcome to our Image Gallery – a curated collection of powerful photographs capturing the spirit of our events, community initiatives, and milestones. Explore these visuals for an inspiring glimpse into our journey and impact.",
      }}
    />
  );
}
