import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const mubaligheenSupportPageType = defineType({
  name: "mubaligheenSupportPage",
  title: "Mubaligheen Support Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "content",
      title: "Page Content",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "media",
      title: "Media",
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
      type: "string",
      hidden: true,
    }),

    defineField({
      name: "lang",
      title: "Page Language",
      type: "string",
      fieldset: "seo",
      description: "Select the language for this page version.",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Swahili", value: "sw" },
          { title: "Arabic", value: "ar" },
          { title: "Persian", value: "fa" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("Please select a language."),
    }),
    defineField({
      name: "seo",
      title: "SEO Metadata",
      type: "seo",
      fieldset: "seo",
      description:
        "Controls how this page appears in search results and social sharing.",
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Main heading/title of the support page.",
      fieldset: "content",
      validation: (Rule) =>
        Rule.required().max(100).warning("Keep titles short and clear."),
    }),

    defineField({
      name: "intro",
      title: "Introduction",
      type: "text",
      description: "Brief introductory paragraph about the support initiative.",
      fieldset: "content",
      validation: (Rule) =>
        Rule.required().min(20).error("Intro must be at least 20 characters."),
    }),

    defineField({
      name: "whySupport",
      title: "Why Support?",
      type: "string",
      description:
        "Briefly explain the purpose or importance of this support effort.",
      fieldset: "content",
      validation: (Rule) =>
        Rule.required().max(200).warning("Keep this concise and impactful."),
    }),

    defineField({
      name: "description",
      title: "Detailed Description",
      type: "text",
      description:
        "Provide a more in-depth explanation of the support initiative.",
      fieldset: "content",
      rows: 5,
      validation: (Rule) =>
        Rule.required()
          .min(50)
          .error("Description must be at least 50 characters."),
    }),

    defineField({
      name: "supportAreas",
      title: "Areas of Support",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Mention areas where support is needed (e.g., transport, housing, education).",
      fieldset: "content",
      validation: (Rule) =>
        Rule.required().min(1).warning("List at least one area of support."),
    }),

    defineField({
      name: "cta",
      title: "Call to Action",
      type: "string",
      description:
        "Closing message to encourage support (e.g., 'Support a Mubaligh today!').",
      fieldset: "content",
      validation: (Rule) =>
        Rule.required()
          .max(150)
          .warning("Keep the call to action motivating and direct."),
    }),

    defineField({
      name: "image",
      title: "Support Image",
      type: "image",
      description: "Optional image to accompany the support message.",
      fieldset: "media",
      options: { hotspot: true },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Mubaligheen Support Page",
        subtitle: subtitle
          ? `Language: ${subtitle.toUpperCase()}`
          : "No language set",
        media,
      };
    },
  },
});
