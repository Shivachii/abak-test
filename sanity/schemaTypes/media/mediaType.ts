import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const mediaType = defineType({
  name: "media",
  title: "Media",
  type: "document",
  icon: TagIcon,

  fieldsets: [
    {
      name: "meta",
      title: "Media Metadata",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "file",
      title: "Media File",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      fieldset: "meta",
      validation: (Rule) => Rule.required().error("Media title is required"),
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      fieldset: "meta",
      options: { source: "title" },
      description: "Used in URLs. Auto-generated from title.",
    }),

    defineField({
      name: "description",
      type: "text",
      title: "Description",
      fieldset: "meta",
      description: "Optional short description of this media item.",
    }),

    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      fieldset: "file",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
          { title: "Audio", value: "audio" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("Please select a media type"),
    }),

    defineField({
      name: "mediaFile",
      title: "Upload File",
      type: "file",
      fieldset: "file",
      options: {
        accept: "image/*,video/*,audio/*",
      },
      validation: (Rule) =>
        Rule.required().error("You must upload a media file"),
    }),
  ],

  preview: {
    select: {
      title: "title",
      mediaType: "mediaType",
      file: "mediaFile.asset.originalFilename",
    },
    prepare({ title, mediaType, file }) {
      return {
        title: title || "Untitled Media",
        subtitle: `${mediaType?.toUpperCase() || "Unknown"} - ${file || "No file uploaded"}`,
        media: TagIcon,
      };
    },
  },
});
