import { defineType, defineField } from "sanity";

export const navLinkType = defineType({
  name: "navLink",
  title: "Nav Link",
  type: "document",
  fields: [
    defineField({ name: "key", title: "Key", type: "slug" }), // e.g., about, contact
    defineField({
      name: "href",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "key.current",
      subtitle: "href",
    },
  },
});
