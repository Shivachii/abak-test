import { BookOpen } from "lucide-react";

const reflections = [
  {
    title: "Patience in the Face of Trials",
    verse: "Surah Al-Baqarah 2:153",
    reflection:
      "Indeed, Allah is with those who are patient. This verse reminds us that trials are not punishments but opportunities to grow spiritually.",
  },
  {
    title: "Trusting Allah's Plan",
    verse: "Surah Al-Tawbah 9:51",
    reflection:
      "Nothing will happen to us except what Allah has decreed. This helps believers let go of anxiety and embrace divine will.",
  },
  {
    title: "The Power of Forgiveness",
    verse: "Surah Al-Nur 24:22",
    reflection:
      "Do you not wish that Allah should forgive you? We’re encouraged to forgive others to receive divine mercy in return.",
  },
];

export default function QuranReflectionsPage() {
  return (
    <section className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-center px-4">
        <div className="z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Qur’an Reflections
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover deep reflections and lessons from the Holy Qur’an to guide
            your daily life.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 mx-auto py-16 px-4 gap-10">
        {reflections.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-primary bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-2 text-primary">
              <BookOpen size={20} />
              <h2 className="text-xl font-bold">{item.title}</h2>
            </div>
            <p className="text-gray-700 italic mb-2">{item.verse}</p>
            <p className="text-gray-800">{item.reflection}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
