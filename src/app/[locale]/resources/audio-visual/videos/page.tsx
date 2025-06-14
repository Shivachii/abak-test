import React from "react";

const videos = [
  {
    title: "MARADHI, USAFIRI NA FUNGA YA SAUM || SHEIKH JUMA SHUGHULI",
    url: "https://www.youtube.com/embed/5-SX4r6dY1Q?si=EsT5XY55WGHL8c5x",
  },
  {
    title: "The philosophy of Hajj | Jummah Khutba | Sheikh Ali Samojah",
    url: "https://www.youtube.com/embed/tcsPcgErsNk?si=GbiUySpQc9lqz3Lh",
  },
  {
    title: " RAMADHAN 2023 || NANI MWENYE KUFUNGA? || SH. ALI SAMOJAH",
    url: "https://www.youtube.com/embed/m_1_ByGLULs?si=e0DBVpOpScFq3aAZ",
  },
  {
    title:
      " Friday Khutba: Sheikh Ali Samoja || Month of Ramadhan and Importance of Saum",
    url: "https://www.youtube.com/embed/U-0Pu91-PmU?si=rhYq_KV-T6t20v0W",
  },
  {
    title: "ELIMU YA MAHUSIANO BAINA YA MME NA MKE || SHEIKH ALI SAMOJAH",
    url: "https://www.youtube.com/embed/n8JEhKFbyVg?si=kSTbLe6nPlG7iP2A",
  },
];

export default function VideosPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-secondary text-gray-800 mb-8">
        Video Content
      </h1>
      <p className="text-lg mb-8 text-justify mt-4 text-gray-600 max-w-2xl mx-auto">
        Welcome to our Video Gallery – a growing archive of talks, lectures, and
        highlights from our programs and events. Watch and engage with
        insightful content that reflects our mission and community efforts.
      </p>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 ">
        {videos.map((video, index) => (
          <div
            key={index}
            className=" rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {video.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
