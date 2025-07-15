import { DocumentTextIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
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
    defineField({
      name: "name",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "who",
      title: "Subtitle / Who We Are",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Intro Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "missionTitle",
      title: "Mission Title",
      type: "string",
    }),
    defineField({
      name: "mission",
      title: "Mission Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "visionTitle",
      title: "Vision Title",
      type: "string",
    }),
    defineField({
      name: "vision",
      title: "Vision Description",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled",
        subtitle: subtitle?.toUpperCase(),
      };
    },
  },
});
