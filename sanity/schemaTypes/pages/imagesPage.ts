import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const imagePageType = defineType({
  name: "imagesPage",
  title: "Images Gallery Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "seo",
      title: "Seo & Language",
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
      title: "Page Language",
      type: "string",
      fieldset: "seo",
      description: "Select the language this gallery page is written in.",
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
        "Controls how this page appears in search engines and social media links.",
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
      lang: "lang",
      seoTitle: "seo.title",
    },
    prepare({ lang, seoTitle }) {
      return {
        title: seoTitle || "Images Gallery Page",
        subtitle: lang
          ? `Language: ${lang.toUpperCase()}`
          : "No language selected",
      };
    },
  },
});
