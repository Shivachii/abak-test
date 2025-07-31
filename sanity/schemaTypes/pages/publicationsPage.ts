import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const publicationsPageType = defineType({
  name: "publicationsPage",
  title: "Publications Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "language",
      title: "Language Settings",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "seo",
      title: "SEO Settings",
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
      description: "Select the language for this version of the page.",
      fieldset: "language",
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
        "Customize how this page appears in search results and link previews.",
      fieldset: "seo",
    }),
  ],

  preview: {
    select: {
      title: "lang",
    },
    prepare({ title }) {
      return {
        title: "Publications Page",
        subtitle: title
          ? `Language: ${title.toUpperCase()}`
          : "No language selected",
      };
    },
  },
});
