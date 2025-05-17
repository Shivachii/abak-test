import UnderlineLink from "@/components/Animations/Underline";

export default function ProgramsObjectives() {
  const objectives = [
    {
      title: "Propagation of Islam",
      description:
        "Preaching the teachings of Ahlul Bayt (a.s) through sermons, literature, events, and interfaith dialogue.",
    },
    {
      title: "Organizing Shia Communities",
      description:
        "Empowering communities through leadership training, mentorship, youth camps, student support, and economic upliftment.",
    },
    {
      title: "Training of Mubaligheen",
      description:
        "Establishing institutions to train Islamic preachers and scholars to serve society with deep knowledge and purpose.",
    },
    {
      title: "Content Development",
      description:
        "Producing sermons, articles, documentaries, and drama-based content to promote Islamic values and culture.",
    },
    {
      title: "Educational Institutions",
      description:
        "Setting up schools and seminaries (Hawza) with Islamic-integrated curricula to nurture future generations of informed Muslims.",
    },
    {
      title: "Community Services",
      description:
        "Offering medical aid, counseling, relief programs, mobile clinics, and disaster response mechanisms for societal welfare.",
    },
  ];

  return (
    <section className="w-full px-4 py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            Our Mission in Action
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mt-2">
            Our Objectives
          </p>
          <p className="mt-2 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            ABAK carries out a variety of structured programs and goals aimed at
            promoting Islamic knowledge, social welfare, and communal
            development.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {objectives.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border-l-4 border-tertiary p-5 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-start md:justify-end">
          <UnderlineLink
            linkText="Learn more about our objectives"
            href="programs-and-objectives"
          />
        </div>
      </div>
    </section>
  );
}
