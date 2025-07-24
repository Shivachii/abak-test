import { defineType, defineField } from "sanity";
import { PanelLeftIcon } from "@sanity/icons";

export const sidebarType = defineType({
  name: "sidebar",
  title: "Sidebar Navigation",
  type: "document",
  icon: PanelLeftIcon,
  fields: [
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
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
      name: "sidebarLinks",
      title: "Navigation Links",
      type: "array",
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
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "children",
              title: "Accordion Links",
              type: "array",
              of: [
                defineField({
                  name: "childLink",
                  title: "Child Link",
                  type: "reference",
                  to: [{ type: "localizedLink" }],
                }),
              ],
            }),
          ],
          preview: {
            select: {
              linkEn: "link.label.en",
              linkSw: "link.label.sw",
              linkAr: "link.label.ar",
              linkFa: "link.label.fa",
              children: "children",
            },
            prepare({ linkEn, linkSw, linkAr, linkFa, children }) {
              const fallbackLabel =
                linkEn || linkSw || linkAr || linkFa || "No Label";

              return {
                title: fallbackLabel,
                subtitle: `${children?.length || 0} dropdown link(s)`,
              };
            },
          },
        }),
      ],
    }),

    defineField({
      name: "siteSettings",
      title: "Sidebar Contact Details",
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
        title: `Sidebar (${langMap[title] || title})`,
        subtitle: subtitle
          ? subtitle.slice(0, 60) + (subtitle.length > 60 ? "…" : "")
          : "No description",
      };
    },
  },
});
