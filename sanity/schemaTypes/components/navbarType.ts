import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const navbarType = defineType({
  name: "navbar",
  title: "Navbar",
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
          { title: "Swahili", value: "sw" },
          { title: "Arabic", value: "ar" },
          { title: "Farsi", value: "fa" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "navLinks",
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
              title: "Dropdown Items",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "localizedLink" }],
                },
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
      name: "ctaButtons",
      title: "Call To Action Buttons",
      type: "array",
      of: [
        defineField({
          name: "cta",
          title: "CTA Button",
          type: "object",
          fields: [
            defineField({
              name: "link",
              title: "Button Link",
              type: "reference",
              to: [{ type: "localizedLink" }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "style",
              title: "Button Style",
              type: "string",
              options: {
                list: [
                  { title: "Primary (Yellow)", value: "primary" },
                  { title: "Secondary (Green)", value: "secondary" },
                ],
                layout: "radio",
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "siteSettings",
      title: "Navbar Contact Details",
      type: "reference",
      to: [{ type: "siteSettings" }],
    }),
  ],

  preview: {
    select: {
      title: "lang",
    },
    prepare({ title }) {
      return {
        title: `Navbar (${title?.toUpperCase?.()})`,
      };
    },
  },
});
