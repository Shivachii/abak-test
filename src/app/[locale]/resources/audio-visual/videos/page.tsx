import React from "react";

const videos = [
  {
    title: "The power of Patience",
    url: "https://www.youtube.com/embed/KwzytY32xlk?si=hhgo19bgPywfl2NO",
  },
  {
    title: "Trusting in Allah",
    url: "https://www.youtube.com/embed/3MqN7Iptaj4?si=xfYmrjyAXMYU7k6b",
  },
  {
    title: "Surviving Hardship",
    url: "https://www.youtube.com/embed/f70tdacW5Lo?si=rG59oSSs94gAZNfA",
  },
  {
    title: "Dealing with difficulty - Haaram Relationships",
    url: "https://www.youtube.com/embed/raXRX96UOUw?si=n-POUQLuAUuYZfkK",
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
