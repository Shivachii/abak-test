import { sanityFetch } from "../../../../../../sanity/lib/live";
import { getAllGalleryMediaPaginatedQuery } from "../../../../../../sanity/lib/queries";
import AllGalleryMedia from "@/components/ImageViewer/AllGalleryMedia";

export default async function GalleryPage() {
  const { data } = await sanityFetch({
    query: getAllGalleryMediaPaginatedQuery(),
  });

  return <AllGalleryMedia galleries={data} />;
}
