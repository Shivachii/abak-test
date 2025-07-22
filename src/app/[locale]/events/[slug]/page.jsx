import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../../../../sanity/lib/live";
import { EVENTS_SLUGS_QUERY } from "../../../../../sanity/lib/queries";
import { client } from "../../../../../sanity/lib/client";
import EventCarousel from "@/components/ImageViewer/EventsImages";

export async function generateMetadata({ params }) {
  const event = await sanityFetch({
    query: `*[_type == "event" && slug.current == $slug][0]{ title }`,
    params: { slug: params.slug },
  });

  return {
    title: event?.title || "Event",
  };
}

export async function generateStaticParams() {
  const slugs = await client.fetch(EVENTS_SLUGS_QUERY);
  return slugs.map((slug) => ({ slug: slug.slug }));
}

export default async function EventPage({ params }) {
  const { slug, locale } = params;

  const { data } = await sanityFetch({
    query: `*[_type == "event" && lang == $lang && slug.current == $slug][0]{
      title,
      date,
      location,
      description,
      "imageUrl": images,
      "bannerImage": bannerImage.asset->url,
      "gallery": gallery->{
        title,
        "mediaItems": media[] {
          _key,
          _type,
          ...select(
            _type == "image" => {
              "url": asset->url,
              "assetId": asset->_ref,
              "type": "image"
            },
            _type == "file" => {
              "url": asset->url,
              "assetId": asset->_ref,
              "type": "file",
              caption
            }
          )
        }
      }
    }`,
    params: { slug, lang: locale },
  });

  const event = data;

  if (!event) return notFound();

  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Banner Image */}
      {event.bannerImage && (
        <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src={event.bannerImage}
            alt={event.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              {event.title}
            </h1>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Meta Info */}
        <div className="mb-6 space-y-1 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Date:</strong>{" "}
            {new Date(event.date).toDateString()}
          </p>
          <p>
            <strong className="text-foreground">Location:</strong>{" "}
            {event.location}
          </p>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
          {event.description?.split("\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>

        {Array.isArray(event.gallery?.mediaItems) &&
          event.gallery.mediaItems.length > 0 && (
            <EventCarousel mediaItems={event.gallery.mediaItems} />
          )}
      </div>
    </div>
  );
}
