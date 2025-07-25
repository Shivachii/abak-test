import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,

  fieldsets: [
    {
      name: "i18n",
      title: "Language & Localization",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "details",
      title: "Event Details",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "media",
      title: "Media & Gallery",
      options: { collapsible: true, collapsed: true },
    },
  ],

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
      fieldset: "i18n",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Swahili", value: "sw" },
          { title: "Arabic", value: "ar" },
          { title: "Persian", value: "fa" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("Please select a language"),
    }),

    defineField({
      name: "parent",
      title: "Parent Event",
      type: "reference",
      to: [{ type: "parentEvent" }],
      fieldset: "i18n",
      validation: (Rule) => Rule.required().error("Parent event is required"),
      description: "This links to the base event record for this translation.",
    }),

    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      fieldset: "details",
      validation: (Rule) => Rule.required().min(3).error("Title is required"),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "details",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),

    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      fieldset: "details",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      description: "The date the event will take place.",
    }),

    defineField({
      name: "location",
      title: "Event Location",
      type: "string",
      fieldset: "details",
      description: "Venue or location of the event (if applicable).",
    }),

    defineField({
      name: "description",
      title: "Event Description",
      type: "text",
      fieldset: "details",
      description: "Short summary or overview of the event.",
    }),

    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      fieldset: "media",
      options: {
        hotspot: true,
      },
      description: "Display image used in event listings and headers.",
    }),

    defineField({
      name: "gallery",
      title: "Select Gallery",
      type: "reference",
      to: [{ type: "gallery" }],
      fieldset: "media",
      description: "Optional image gallery associated with this event.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      media: "bannerImage",
      lang: "lang",
    },
    prepare({ title, date, media, lang }) {
      const subtitle = date
        ? `📅 ${new Date(date).toLocaleDateString()}`
        : "📅 Date not set";
      return {
        title: `${title || "Untitled Event"} (${lang || "N/A"})`,
        subtitle,
        media,
      };
    },
  },
});
