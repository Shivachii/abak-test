import Banner from "@/components/Banner/Banner";
import Publications from "@/components/Publications/Publications";

export default function PublicationsPage() {
  return (
    <section className="max-w-7xl mx-auto ">
      <Banner backgroundImage="/banners/publications.jpg" />

      <Publications />
    </section>
  );
}
