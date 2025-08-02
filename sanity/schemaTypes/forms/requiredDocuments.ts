import { defineField, defineType } from "sanity";

export const requiredDocument = defineType({
  name: "requiredDocument",
  title: "Required Document",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Document Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "required",
      title: "Is Required?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name",
      required: "required",
    },
    prepare({ title, required }) {
      return {
        title: title || "Untitled Document",
        subtitle: required ? "Required" : "Optional",
      };
    },
  },
});
