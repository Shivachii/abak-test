import { Calendar, MapPin } from "lucide-react";
import UnderlineLink from "@/components/Animations/Underline";
import { EventsProps } from "../../../../lib/sanityPageTypes/types";

export default function Events({ data }: EventsProps) {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-3xl font-bold text-primary mt-2">{data.title}</p>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(data.events) &&
            data.events.slice(0, 3).map((event, index) => (
              <div
                key={index}
                className="bg-white shadow-md border border-gray-100 rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {event.title}
                </h3>
                <div className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(event.date).toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            ))}
        </div>

        <div className="flex justify-end my-4">
          <UnderlineLink linkText={data.linkText} href="events" />
        </div>
      </div>
    </section>
  );
}
