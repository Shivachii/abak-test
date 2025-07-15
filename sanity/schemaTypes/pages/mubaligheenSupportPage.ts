// schemas/mubaligheenSupportPage.ts
import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const mubaligheenSupportPageType = defineType({
  name: "mubaligheenSupportPage",
  title: "Mubaligheen Support Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "translationId", type: "string", hidden: true }),
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Swahili", value: "sw" },
          { title: "Arabic", value: "ar" },
          { title: "Persian", value: "fa" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "intro", type: "text" }),
    defineField({ name: "whySupport", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "supportAreas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "cta", type: "string" }),
    defineField({
      name: "image",
      type: "image",
      title: "Support Image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
  },
});
