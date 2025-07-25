import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const navbarType = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  icon: MenuIcon,

  fieldsets: [
    {
      name: "language",
      title: "Language Settings",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "navigation",
      title: "Navigation Links",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "cta",
      title: "Call To Action Buttons",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "contact",
      title: "Navbar Contact Details",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      description: "Select the language for this navbar version.",
      fieldset: "language",
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
      fieldset: "navigation",
      description:
        "List of top-level navigation links, optionally with dropdowns.",
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
              description: "Top-level link for this nav group.",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "children",
              title: "Dropdown Items",
              type: "array",
              description: "Optional dropdown links under this main link.",
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
      fieldset: "cta",
      description:
        "Buttons that appear in the navbar, like 'Donate' or 'Apply'.",
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
              description: "Reference to the destination page.",
            }),
            defineField({
              name: "style",
              title: "Button Style",
              type: "string",
              description: "Select a visual style for this button.",
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
      fieldset: "contact",
      to: [{ type: "siteSettings" }],
      description:
        "Reference to site-wide contact information (phone, email, etc.).",
    }),
  ],

  preview: {
    select: {
      title: "lang",
      navCount: "navLinks.length",
      ctaCount: "ctaButtons.length",
    },
    prepare({ title, navCount, ctaCount }) {
      const langMap: Record<string, string> = {
        en: "English",
        sw: "Swahili",
        ar: "Arabic",
        fa: "Farsi",
      };
      return {
        title: `Navbar (${langMap[title] || title})`,
        subtitle: `${navCount || 0} nav link(s), ${ctaCount || 0} CTA(s)`,
      };
    },
  },
});
