"use client";

import UnderlineLink from "@/components/Animations/Underline";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Post = {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
};

interface LatestPostsProps {
  posts: Post[];
}

export default function LatestPosts({ posts }: LatestPostsProps) {
  const t = useTranslations("Posts");

  return (
    <section className="w-full px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-secondary text-sm md:text-base text-center font-bold tracking-widest uppercase">
            {t("latestPosts")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mt-2">
            {t("communityNewsUpdates")}
          </h3>
          <p className="mt-2 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="object-cover w-full h-52"
              />
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="my-2">
                  <UnderlineLink
                    linkText={t("readMore")}
                    href={`resources/blog/${post.slug}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
