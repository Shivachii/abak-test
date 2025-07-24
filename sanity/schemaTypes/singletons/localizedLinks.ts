import { defineType, defineField } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const localizedLink = defineType({
  name: "localizedLink",
  title: "Localized Link",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "label",
      title: "Label (Multilingual)",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "string" },
        { name: "sw", title: "Swahili", type: "string" },
        { name: "ar", title: "Arabic", type: "string" },
        { name: "fa", title: "Farsi", type: "string" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description (Optional)",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "text" },
        { name: "sw", title: "Swahili", type: "text" },
        { name: "ar", title: "Arabic", type: "text" },
        { name: "fa", title: "Farsi", type: "text" },
      ],
    }),
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
        layout: "radio",
      },
      initialValue: "internal",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "internalLink",
      title: "Internal Page",
      type: "reference",
      to: [{ type: "navLink" }],
      hidden: ({ parent }) => parent?.linkType !== "internal",
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external",
    }),
  ],
  preview: {
    select: {
      title: "label.en",
      subtitle: "linkType",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "No Label",
        subtitle: `Type: ${subtitle}`,
        media: LinkIcon,
      };
    },
  },
});
