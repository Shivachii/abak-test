import Link from "next/link";
import Image from "next/image";
import { RECENT_EVENTS_QUERY } from "../../../sanity/lib/queries";
import { sanityFetch } from "../../../sanity/lib/live";
import { formatDate } from "@/helpers/formatDate";

export default async function RecentEvents({ locale }) {
  const { data } = await sanityFetch({
    query: RECENT_EVENTS_QUERY,
    params: { lang: locale },
  });

  const events = data ?? [];

  if (!events?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <Link
          key={event._id}
          href={`/events/${event.slug?.current}`}
          className="group block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
        >
          {event.bannerImage && (
            <div className="relative h-48">
              <Image
                src={event.bannerImage}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {event.date ? formatDate(event.date) : "Date not available"}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {event.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
