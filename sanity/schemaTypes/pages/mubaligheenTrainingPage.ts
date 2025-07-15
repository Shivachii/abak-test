import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const mubaligheenTrainingPageType = defineType({
  name: "mubaligheenTrainingPage",
  title: "Mubaligheen Training Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "translationId",
      type: "string",
      hidden: true,
    }),
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
    defineField({ name: "whyImportant", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "trainingAreas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "symposiumTitle",
      type: "string",
    }),
    defineField({
      name: "symposiumBody",
      type: "text",
    }),
    defineField({ name: "cta", type: "string" }),
    defineField({
      name: "image1",
      type: "image",
      title: "Why Training Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "image2",
      type: "image",
      title: "Symposium Image",
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
