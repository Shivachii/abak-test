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
          { title: "Persian", value: "fa" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "navLinks",
      title: "Nav Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
            defineField({
              name: "children",
              title: "Dropdown Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                    }),
                    defineField({
                      name: "href",
                      title: "Link",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description (optional)",
                      type: "string",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "ctaButtons",
      title: "Call To Action Buttons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
            defineField({
              name: "style",
              title: "Button Style",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                ],
                layout: "radio",
              },
            }),
          ],
        },
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
        title: `Navbar (${title.toUpperCase()})`,
      };
    },
  },
});
