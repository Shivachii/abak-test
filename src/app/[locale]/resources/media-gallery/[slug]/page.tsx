import { galleryQueryBySlug } from "../../../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import GalleryViewer from "@/components/Gallery/Gallery";

const GalleryPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const result = await sanityFetch({
    query: galleryQueryBySlug,
    params,
  });

  const gallery = result?.data;

  if (!gallery || !gallery.mediaItems?.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-red-500">Gallery not found</h1>
      </div>
    );
  }

  return <GalleryViewer gallery={gallery} />;
};
export default GalleryPage;
