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
  ],
});
