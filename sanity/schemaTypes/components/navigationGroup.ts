import { defineType, defineField } from "sanity";

export const navigationGroup = defineType({
  name: "navigationGroup",
  title: "Navigation Group",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Unique Key",
      type: "slug",
      description: "e.g. home, about, contact — used to reference links",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL / Path",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "defaultLabel",
      title: "Default Label (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "defaultDescription",
      title: "Default Description (optional)",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "defaultLabel",
      subtitle: "href",
    },
  },
});
