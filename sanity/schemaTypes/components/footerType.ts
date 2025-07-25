import { defineType, defineField } from "sanity";
import { MenuIcon } from "@sanity/icons";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: MenuIcon,

  fieldsets: [
    {
      name: "language",
      title: "Language Settings",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "description",
      title: "Footer Description",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "navigation",
      title: "Navigation Links",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "contact",
      title: "Footer Contact Details",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      description: "Choose the language this footer version is for.",
      fieldset: "language",
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
      fieldset: "description",
      description: "A short descriptive paragraph in the footer.",
      rows: 3,
    }),

    defineField({
      name: "footerLinks",
      title: "Navigation Links",
      type: "array",
      fieldset: "navigation",
      description: "Add navigation links grouped by main link references.",
      of: [
        defineField({
          name: "navLinkGroup",
          title: "Nav Link Group",
          type: "object",
          fields: [
            defineField({
              name: "link",
              title: "Main Link",
              type: "reference",
              to: [{ type: "localizedLink" }],
              description: "Reference to a translated link document.",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              linkEn: "link.label.en",
              linkSw: "link.label.sw",
              linkAr: "link.label.ar",
              linkFa: "link.label.fa",
            },
            prepare({ linkEn, linkSw, linkAr, linkFa }) {
              const fallbackLabel =
                linkEn || linkSw || linkAr || linkFa || "Unnamed Link";
              return {
                title: fallbackLabel,
              };
            },
          },
        }),
      ],
    }),

    defineField({
      name: "siteSettings",
      title: "Footer Contact Details",
      type: "reference",
      fieldset: "contact",
      to: [{ type: "siteSettings" }],
      description:
        "Reference to global contact information stored in site settings.",
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
          : "No description provided",
      };
    },
  },
});
