import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const audioVisualPageType = defineType({
  name: "audiovisualPage",
  title: "Audio and Visual Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "seo",
      title: "SEO & Language",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "content",
      title: "Page Content",
      options: { collapsible: true, collapsed: false },
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
      description: "Select the language for this version of the page.",
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
      title: "SEO Settings",
      type: "seo",
      description:
        "Customize how this page appears in search engines and social sharing.",
      fieldset: "seo",
    }),

    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Main heading shown at the top of the page.",
      fieldset: "content",
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(100)
          .warning("Keep it clear and descriptive"),
    }),

    defineField({
      name: "description",
      title: "Page Description",
      type: "text",
      description:
        "A short paragraph displayed on the page to introduce its content.",
      fieldset: "content",
      rows: 3,
      validation: (Rule) =>
        Rule.required()
          .min(20)
          .max(300)
          .warning("Aim for clarity and inspiration"),
    }),
  ],

  preview: {
    select: {
      title: "title",
      lang: "lang",
    },
    prepare({ title, lang }) {
      return {
        title: title || "Untitled AV Page",
        subtitle: lang
          ? `Language: ${lang.toUpperCase()}`
          : "No language selected",
      };
    },
  },
});
