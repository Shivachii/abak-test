import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
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
      name: "parent",
      title: "Parent Event",
      type: "reference",
      to: [{ type: "parentEvent" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    }),
    defineField({
      name: "location",
      title: "Event Location",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Event Description",
      type: "text",
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "Select Gallery",
      type: "reference",
      to: [{ type: "gallery" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "bannerImage",
      lang: "lang",
    },
    prepare(selection) {
      const { title, date, media, lang } = selection;
      return {
        title: `${title} (${lang})`,
        subtitle: date
          ? `Date: ${new Date(date).toLocaleDateString()}`
          : "No date provided",
        media,
      };
    },
  },
});
