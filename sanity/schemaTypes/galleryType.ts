import { VideoIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: VideoIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "previewImage",
      title: "Preview Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
    }),

    defineField({
      name: "media",
      title: "Media Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          preview: {
            select: {
              title: "caption",
              media: "asset",
            },
            prepare(selection) {
              const { title, media } = selection;
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
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title || "File (Video/Audio/Other)",
                media,
              };
            },
          },
        }),
      ],
    }),

    defineField({
      name: "tag",
      title: "Gallery Tags",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "tag" }] })],
    }),
  ],
});
