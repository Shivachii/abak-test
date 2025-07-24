import { defineType, defineField } from "sanity";
import { VideoIcon } from "@sanity/icons";

export const youtubevideoGallery = defineType({
  name: "youtubevideoGallery",
  title: "YouTube Video Gallery",
  type: "document",
  icon: VideoIcon,
  fields: [
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Video Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "YouTube Embed URL",
              type: "url",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ["https"],
                  allowRelative: false,
                }),
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "url",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "YouTube Video Gallery",
        subtitle: "List of embedded YouTube videos",
      };
    },
  },
});
