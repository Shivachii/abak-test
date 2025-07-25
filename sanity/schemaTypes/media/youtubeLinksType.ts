import { defineType, defineField } from "sanity";
import { VideoIcon } from "@sanity/icons";

export const youtubevideoGallery = defineType({
  name: "youtubevideoGallery",
  title: "YouTube Video Gallery",
  type: "document",
  icon: VideoIcon,

  fieldsets: [
    {
      name: "videosFieldset",
      title: "YouTube Videos",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      fieldset: "videosFieldset",
      description: "Add one or more YouTube videos by title and embed URL.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Video Title",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Video title is required"),
            }),
            defineField({
              name: "url",
              title: "YouTube Embed URL",
              type: "url",
              description: "Paste the full YouTube embed URL (https://...)",
              validation: (Rule) =>
                Rule.required()
                  .uri({ scheme: ["https"], allowRelative: false })
                  .error("A valid YouTube URL is required"),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "url",
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error("At least one video must be added to the gallery"),
    }),
  ],

  preview: {
    select: {
      videos: "videos",
    },
    prepare({ videos }) {
      const count = videos?.length || 0;
      return {
        title: "YouTube Video Gallery",
        subtitle: `${count} video${count === 1 ? "" : "s"} added`,
      };
    },
  },
});
