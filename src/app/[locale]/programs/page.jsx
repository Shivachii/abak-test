import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner/Banner";
import { sanityFetch } from "../../../../sanity/lib/live";
import { PROJECTS_PAGE_QUERY } from "../../../../sanity/lib/queries/pageQueries/pageQueries";
import { generatePageMetadata } from "@/hooks/seo/metadata";

export async function generateMetadata({ params }) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "projectsPage",
  });
}

export default async function ProjectsPage({ params }) {
  const { data } = await sanityFetch({
    query: PROJECTS_PAGE_QUERY,
    params: { lang: params.locale },
  });

  return (
    <section className="w-full max-w-7xl mx-auto">
      <Banner backgroundImage="/banners/projects.jpg" />
      <div className="px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 my-8">
          {data?.projects?.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-secondary">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
                <Link href={project.href}>
                  <Button variant="outline" className="mt-2">
                    {data.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
