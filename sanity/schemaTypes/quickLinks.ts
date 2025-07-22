import { LinkIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const translatedLinkType = defineType({
  name: "translatedLink",
  title: "Translated Link Group",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "translationId",
      title: "Translation ID",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "object",
              fields: [
                { name: "en", title: "English", type: "string" },
                { name: "sw", title: "Swahili", type: "string" },
                { name: "ar", title: "Arabic", type: "string" },
                { name: "fa", title: "Farsi", type: "string" },
              ],
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label.en",
              subtitle: "href",
            },
            prepare({ title, subtitle }) {
              return {
                title: title || "Untitled link",
                subtitle,
              };
            },
          },
        },
      ],
    }),
  ],
});
