import { DocumentTextIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "intro",
      title: "Intro Section",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "mission",
      title: "Mission Section",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "vision",
      title: "Vision Section",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "seo",
      title: "SEO & Language",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    // Language & Translation Group
    defineField({
      name: "translationId",
      type: "string",
      hidden: true,
      fieldset: "seo",
    }),
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
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
    // SEO Section
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seo",
      fieldset: "seo",
      description:
        "Search engine optimization: meta title, description, and keywords.",
    }),

    // Intro Section
    defineField({
      name: "name",
      title: "Page Title",
      type: "string",
      fieldset: "intro",
      description: "Main heading shown on the About page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "who",
      title: "Subtitle / Who We Are",
      type: "string",
      fieldset: "intro",
      description: "Brief tagline or section header below the page title.",
    }),
    defineField({
      name: "description",
      title: "Intro Description",
      type: "text",
      rows: 4,
      fieldset: "intro",
      description:
        "Introductory paragraph giving a brief overview of the organization.",
    }),

    // Mission Section
    defineField({
      name: "missionTitle",
      title: "Mission Title",
      type: "string",
      fieldset: "mission",
      description: "Title for the mission section (e.g., 'Our Mission').",
    }),
    defineField({
      name: "mission",
      title: "Mission Description",
      type: "text",
      rows: 4,
      fieldset: "mission",
      description: "Short explanation of your organization's mission.",
    }),

    // Vision Section
    defineField({
      name: "visionTitle",
      title: "Vision Title",
      type: "string",
      fieldset: "vision",
      description: "Title for the vision section (e.g., 'Our Vision').",
    }),
    defineField({
      name: "vision",
      title: "Vision Description",
      type: "text",
      rows: 4,
      fieldset: "vision",
      description: "Short explanation of your long-term vision.",
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
        subtitle: subtitle
          ? `Language: ${subtitle.toUpperCase()}`
          : "No language set",
      };
    },
  },
});
