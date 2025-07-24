import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const eventsPageType = defineType({
  name: "eventsPage",
  title: "Events Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "translationId",
      title: "Translation ID",
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
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Page Subtitle ",
      type: "string",
    }),
    // defineField({
    //   name: "eventsSection",
    //   title: "Events Section",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "event" }],
    //     },
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: "title",
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
