import UnderlineLink from "@/components/Animations/Underline";

const announcements = [
  {
    title: "Monthly Donation Drive – Support Our Mission",
    description:
      "ABAK needs $10,000 monthly to sustain its educational, religious, and humanitarian programs. Help us spread the message of AhlulBayt (a.s).",
    cta: "Donate Now",
    href: "donate",
  },
  {
    title: "Ramadhan Food Relief Program",
    description:
      "Join our cause to distribute food packages to hundreds of underprivileged families this Ramadhan across Kenya.",
    cta: "Support the Campaign",
    href: "programs",
  },
  {
    title: "Upcoming Muharram Programs",
    description:
      "Commemorate the legacy of Imam Hussain (a.s) with us. Find event schedules and locations for this year's Muharram gatherings.",
    cta: "View Schedule",
    href: "events",
  },
];

export default function AnnouncementsSection() {
  return (
    <section className="w-full bg-tertiary/10 px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            Key Announcements & Causes
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mt-2">
            Help Us Make a Difference
          </p>
          <p className="mt-2 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Your support enables us to continue providing education, aid, and
            spiritual guidance. Stay informed and get involved in our latest
            initiatives.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-tertiary rounded-lg shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
              <UnderlineLink linkText={item.cta} href={item.href} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
