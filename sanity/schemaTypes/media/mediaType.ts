import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const mediaType = defineType({
  name: "media",
  title: "Media",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
          { title: "Audio", value: "audio" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mediaFile",
      title: "Media File",
      type: "file",
      options: {
        accept: "image/*,video/*,audio/*",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
