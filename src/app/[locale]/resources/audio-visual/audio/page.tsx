import React from "react";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import { getAllAudioQuery } from "../../../../../../sanity/lib/queries";
import Image from "next/image";
import { AUDIO_PAGE_QUERY } from "../../../../../../sanity/lib/queries/pageQueries/pageQueries";
import { generatePageMetadata } from "@/hooks/seo/metadata";

type AudioItem = {
  _id: string;
  title: string;
  author: string;
  audioUrl: string;
  thumbnailUrl: string;
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "audioPage",
  });
}

export default async function AudioPage({
  params,
}: {
  params: { locale: string };
}) {
  const audios = await sanityFetch({
    query: getAllAudioQuery,
  });

  const { data: pageData } = await sanityFetch({
    query: AUDIO_PAGE_QUERY,
    params: { lang: params.locale },
  });

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-secondary text-gray-800 mb-10">
        {pageData?.title || "Islamic Audio Lectures & Recitations"}
      </h1>
      <p className="text-lg mb-8 text-justify mt-4 text-gray-600 max-w-2xl mx-auto">
        {pageData?.description ||
          "Welcome to our Audio Library – a collection of spiritually enriching recitations, lectures, and reflections. Listen in to deepen your understanding and stay connected to our message wherever you are."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {audios.data.map((audio: AudioItem) => (
          <div
            key={audio._id}
            className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full group"
          >
            {/* Thumbnail */}
            <div className="w-full flex justify-center pt-5">
              <Image
                src={audio.thumbnailUrl}
                alt={`Thumbnail for ${audio.title}`}
                width={96}
                height={96}
                className="rounded-md object-cover object-center w-72 h-72 "
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5 flex-1 space-y-3">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {audio.title}
                </h2>
                <p className="text-sm text-gray-500">by {audio.author}</p>
              </div>

              <audio
                controls
                className="w-full rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary mt-auto"
              >
                <source src={audio.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
