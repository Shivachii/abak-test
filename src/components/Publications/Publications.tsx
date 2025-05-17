import { DownloadIcon } from "lucide-react";
import { publicationsQuery } from "../../../sanity/lib/queries";
import { sanityFetch } from "../../../sanity/lib/live";
import Link from "next/link";

type Publication = {
  _id: string;
  title: string;
  description: string;
  pdfUrl?: string;
  slug: {
    current: string;
  };
};

export default async function Publications() {
  const publications = await sanityFetch({ query: publicationsQuery });

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.data.map((pub: Publication) => (
          <div
            key={pub._id}
            className=" rounded-lg shadow-sm border p-6 bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-secondary">
              {pub.title}
            </h3>
            <p className="text-gray-700 mt-2">{pub.description}</p>

            {pub.pdfUrl ? (
              <Link
                href={pub.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-abakGreen hover:underline font-medium"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                View PDF
              </Link>
            ) : (
              <p className="text-sm text-gray-500 mt-4">PDF not available</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
