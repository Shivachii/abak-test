import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const videosPageType = defineType({
  name: "videoPage",
  title: "Videos Gallery Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "seo",
      title: "SEO and Language",
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
      title: "SEO Metadata",
      type: "seo",
      description:
        "Customize how this page appears in search engines and when shared on social platforms.",
      fieldset: "seo",
    }),
  ],

  preview: {
    select: {
      lang: "lang",
    },
    prepare({ lang }) {
      return {
        title: "Videos Gallery Page",
        subtitle: lang ? `Language: ${lang}` : "No language selected",
      };
    },
  },
});
