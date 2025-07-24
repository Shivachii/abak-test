import UnderlineLink from "@/components/Animations/Underline";
import { EventsProps } from "../../../lib/types/sanityPageTypes/types";
import RecentEvents from "@/components/EventsViewer/EventsViewer";

export default function Events({
  data,
  locale,
}: EventsProps & { locale: string }) {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-3xl font-bold text-primary mt-2">{data.title}</p>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <RecentEvents locale={locale} />

        <div className="flex justify-end my-4">
          <UnderlineLink linkText={data.linkText} href="events" />
        </div>
      </div>
    </section>
  );
}
