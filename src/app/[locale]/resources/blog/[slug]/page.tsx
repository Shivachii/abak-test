import UpcomingPostsComingSoon from "@/components/Posts/ComingSoon";

interface ComingSoonProps {
  params: {
    slug: string;
  };
}

export default function ComingSoonPage({ params }: ComingSoonProps) {
  const { slug } = params;

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <UpcomingPostsComingSoon slug={slug} />
    </section>
  );
}
