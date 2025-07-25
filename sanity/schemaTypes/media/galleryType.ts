import { VideoIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: VideoIcon,

  fieldsets: [
    {
      name: "meta",
      title: "Gallery Metadata",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "media",
      title: "Media Content",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "title",
      type: "string",
      fieldset: "meta",
      title: "Gallery Title",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),

    defineField({
      name: "slug",
      type: "slug",
      fieldset: "meta",
      title: "Gallery Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),

    defineField({
      name: "description",
      type: "text",
      fieldset: "meta",
      title: "Gallery Description",
      description:
        "Optional description for the gallery (used for SEO or internal notes).",
    }),

    defineField({
      name: "previewImage",
      title: "Preview Image",
      type: "image",
      fieldset: "media",
      options: { hotspot: true },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
      description: "Thumbnail or cover image for the gallery.",
    }),

    defineField({
      name: "media",
      title: "Media Items",
      type: "array",
      fieldset: "media",
      of: [
        defineArrayMember({
          type: "image",
          preview: {
            select: {
              title: "caption",
              media: "asset",
            },
            prepare({ title, media }) {
              return {
                title: title || "Image",
                media,
              };
            },
          },
        }),
        defineArrayMember({
          type: "file",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
          preview: {
            select: {
              title: "caption",
              media: "asset",
            },
            prepare({ title, media }) {
              return {
                title: title || "File (Video/Audio/Other)",
                media,
              };
            },
          },
        }),
      ],
      description:
        "Upload images, videos, or other media related to the gallery.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "previewImage",
    },
    prepare({ title, media }) {
      return {
        title: title || "Untitled Gallery",
        subtitle: "Media Gallery",
        media,
      };
    },
  },
});
