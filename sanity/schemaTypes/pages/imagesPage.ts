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
