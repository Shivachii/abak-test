import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const eventsPageType = defineType({
  name: "eventsPage",
  title: "Events Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "content",
      title: "Page Content",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "featured",
      title: "Featured Events (Optional)",
      options: { collapsible: true, collapsed: true },
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
      title: "Translation ID (Internal)",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      fieldset: "seo",
      description: "Select the language for this Events page version.",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Swahili", value: "sw" },
          { title: "Arabic", value: "ar" },
          { title: "Persian", value: "fa" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("Please choose a language."),
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seo",
      fieldset: "seo",
      description:
        "Configure SEO metadata: page title, description, and keywords.",
    }),

    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      fieldset: "content",
      description: "Displayed as the main header of the Events page.",
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(80)
          .error("Title must be between 5 and 80 characters."),
    }),

    defineField({
      name: "subtitle",
      title: "Page Subtitle",
      type: "string",
      fieldset: "content",
      description: "Short subheading under the page title (optional).",
      validation: (Rule) =>
        Rule.max(120).warning("Keep subtitles brief and readable."),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "🌐 Untitled Events Page",
        subtitle: subtitle
          ? `Language: ${subtitle.toUpperCase()}`
          : "🌍 No language set",
      };
    },
  },
});
