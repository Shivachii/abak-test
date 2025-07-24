import { defineType, defineField } from "sanity";

export const parentEvent = defineType({
  name: "parentEvent",
  title: "Parent Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Group Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Group Description (optional)",
      type: "text",
    }),
  ],
});
