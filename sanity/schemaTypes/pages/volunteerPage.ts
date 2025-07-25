import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const volunteerPageType = defineType({
  name: "volunteerPage",
  title: "Volunteer Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "intro",
      title: "Page Introduction",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "opportunities",
      title: "Opportunities Section",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "seo",
      title: "SEO & Language",
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
      description: "Choose the language for this version of the page.",
      fieldset: "seo",
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
      name: "seo",
      title: "SEO Metadata",
      type: "seo",
      description:
        "Customize how this page appears in search results and social sharing.",
      fieldset: "seo",
    }),

    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description:
        "The main heading displayed at the top of the volunteer page.",
      fieldset: "intro",
      validation: (Rule) => Rule.required().max(100),
    }),

    defineField({
      name: "subtitle",
      title: "Page Subtitle",
      type: "text",
      description: "An introductory message encouraging users to volunteer.",
      fieldset: "intro",
      rows: 3,
      validation: (Rule) => Rule.required().min(20),
    }),

    defineField({
      name: "opportunityTitle",
      title: "Opportunities Section Title",
      type: "string",
      description: "The heading for the section listing volunteering roles.",
      fieldset: "opportunities",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "opportunities",
      title: "Volunteer Opportunities",
      type: "array",
      of: [{ type: "string" }],
      description: "List the types of roles volunteers can take on.",
      fieldset: "opportunities",
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Volunteer Page",
        subtitle: subtitle ? `Language: ${subtitle}` : "No language set",
      };
    },
  },
});
