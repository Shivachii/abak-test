import { defineType, defineField } from "sanity";
import { MenuIcon } from "@sanity/icons";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: MenuIcon,
  fields: [
    defineField({
      name: "lang",
      title: "Language",
      type: "string",

      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Arabic", value: "ar" },
          { title: "Swahili", value: "sw" },
          { title: "Farsi", value: "fa" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Footer Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "link", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "siteSettings",
      title: "Footer Contact Details",
      type: "reference",
      to: [{ type: "siteSettings" }],
    }),
  ],
  preview: {
    select: {
      title: "lang",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      const langMap: Record<string, string> = {
        en: "English",
        sw: "Swahili",
        ar: "Arabic",
        fa: "Farsi",
      };
      return {
        title: `Footer (${langMap[title] || title})`,
        subtitle: subtitle
          ? subtitle.slice(0, 60) + (subtitle.length > 60 ? "…" : "")
          : "No description",
      };
    },
  },
});
