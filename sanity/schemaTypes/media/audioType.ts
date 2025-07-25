import { AudioLinesIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const audioType = defineType({
  name: "audio",
  title: "Audio",
  type: "document",
  icon: AudioLinesIcon,

  fieldsets: [
    {
      name: "info",
      title: "Basic Information",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "media",
      title: "Media Assets",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Audio Title",
      type: "string",
      fieldset: "info",
      validation: (Rule) => Rule.required().min(3).max(100),
      description: "Enter a descriptive title for this audio.",
    }),

    defineField({
      name: "author",
      title: "Author / Speaker",
      type: "string",
      fieldset: "info",
      validation: (Rule) => Rule.required(),
      description:
        "Name of the person or organization who produced this audio.",
    }),

    defineField({
      name: "audioFile",
      title: "Audio File",
      type: "file",
      fieldset: "media",
      options: {
        accept: "audio/*",
      },
      validation: (Rule) => Rule.required(),
      description: "Upload a valid audio file (e.g., MP3, WAV).",
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      fieldset: "media",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: "Used for visual representation in listings and previews.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "author",
      media: "thumbnail",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Audio",
        subtitle: subtitle ? `By ${subtitle}` : "No author",
        media,
      };
    },
  },
});
