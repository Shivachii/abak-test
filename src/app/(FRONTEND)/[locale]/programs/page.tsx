import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hawza Seminary Development",
    description:
      "Establishing a post-secondary Islamic seminary to train future scholars and leaders grounded in Ahlul Bayt teachings.",
    image: "/hawza.jpg",
    href: "/our-work/hawza",
  },
  {
    title: "Mobile Clinics & Health Outreach",
    description:
      "Providing essential healthcare and wellness education to underserved communities through mobile medical camps.",
    image: "/mashallah.jpg",
    href: "/our-work/community-services",
  },
  {
    title: "Islamic Education Infrastructure",
    description:
      "Building schools that integrate Islamic values with Kenya's formal education system to nurture well-rounded students.",
    image: "/mosqueteachings.jpeg",
    href: "/our-work/learning-institutions",
  },
  {
    title: "Content Production Studio",
    description:
      "Producing high-quality Islamic content like video, audio, articles to educate, inspire, and combat misinformation.",
    image: "/dua.jpg",
    href: "/our-work/content-creation",
  },
];

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Our Projects
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          These initiatives reflect ABAK&apos;s ongoing efforts to build
          spiritual, educational, and social capacity across Kenya and beyond.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={project.image}
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
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
