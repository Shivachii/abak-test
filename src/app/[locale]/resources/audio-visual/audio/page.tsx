import React from "react";

const audios = [
  {
    title: "Surah Yaseen Recitation",
    speaker: "Shaykh Ali",
    url: "/audios/surah-yaseen.mp3",
  },
  {
    title: "The Life of Lady Fatima (a.s)",
    speaker: "Ustadh Ahmed",
    url: "/audios/lady-fatima.mp3",
  },
  {
    title: "Lessons from Karbala",
    speaker: "Sayyid Hassan",
    url: "/audios/karbala-lessons.mp3",
  },
  {
    title: "Tafsir of Surah Al-Kahf",
    speaker: "Imam Yusuf",
    url: "/audios/tafsir-al-kahf.mp3",
  },
];

export default function AudioPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-secondary text-gray-800 mb-10">
        Islamic Audio Lectures & Recitations
      </h1>
      <p className="text-lg mb-8 text-justify mt-4 text-gray-600 max-w-2xl mx-auto">
        Welcome to our Audio Library – a collection of spiritually enriching
        recitations, lectures, and reflections. Listen in to deepen your
        understanding and stay connected to our message wherever you are.
      </p>

      <div className="space-y-8">
        {audios.map((audio, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="mb-4 sm:mb-0">
              <h2 className="text-lg font-semibold text-gray-800">
                {audio.title}
              </h2>
              <p className="text-sm text-gray-500">by {audio.speaker}</p>
            </div>
            <audio controls className="w-full sm:w-64 mt-2 sm:mt-0">
              <source src={audio.url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </section>
  );
}
