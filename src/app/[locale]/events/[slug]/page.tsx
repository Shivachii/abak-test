import Image from "next/image";
import { notFound } from "next/navigation";
import { EVENTS_SLUGS_QUERY } from "../../../../../sanity/lib/queries";
import { client } from "../../../../../sanity/lib/client";
import EventCarousel from "@/components/ImageViewer/EventsImages";
import { formatDate } from "@/helpers/formatDate";

export async function generateStaticParams() {
  const slugs = await client.fetch(EVENTS_SLUGS_QUERY);

  const locales = ["en", "ar", "sw", "fa"];
  return slugs.flatMap((slug: { slug: string }) =>
    locales.map((locale) => ({
      slug: slug.slug,
      locale,
    }))
  );
}

interface EventPageParams {
  slug: string;
  locale: string;
}

export default async function EventPage({
  params,
}: {
  params: Promise<EventPageParams>;
}) {
  const { slug, locale } = await params;

  const data = await client.fetch(
    `*[_type == "event" && lang == $lang && slug.current == $slug][0]{
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
    { slug, lang: locale }
  );

  const event = data;

  if (!event) return notFound();

  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Banner Image */}
      {event.bannerImage && (
        <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src={event.bannerImage}
            alt={event.title || "Event banner"}
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
        <div className="mb-6 space-y-1 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Date:</strong>{" "}
            {event.date ? formatDate(event.date) : "Date not available"}
          </p>
          <p>
            <strong className="text-foreground">Location:</strong>{" "}
            {event.location || "Location not available"}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
          {event.description?.split("\n").map((para: string, idx: number) => (
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
