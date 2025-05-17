import VolunteerDialog from "@/components/Forms/Volunteer";

export default function VolunteerPage() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Become a Volunteer
        </h1>
        <p className="text-gray-700 text-lg">
          Join hands with ABAK to serve the community, spread knowledge, and
          make a lasting impact. Your time and skills are valuable in building a
          better future.
        </p>
      </div>

      <div className="bg-secondary/10 border border-secondary p-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-secondary">
          Volunteer Opportunities
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Teaching and Mentorship</li>
          <li>Event Support and Logistics</li>
          <li>Media & Content Creation</li>
          <li>Community Outreach Programs</li>
        </ul>
      </div>

      <section className="text-center">
        <VolunteerDialog />
      </section>
    </section>
  );
}
