import { defineType, defineField } from "sanity";

export const navigationGroup = defineType({
  name: "navigationGroup",
  title: "Navigation Group",
  type: "document",

  fieldsets: [
    {
      name: "linkInfo",
      title: "Link Information",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "labeling",
      title: "Label & Description",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "key",
      title: "Unique Key",
      type: "slug",
      description:
        "A short unique identifier like 'home', 'about', or 'contact'. Used internally.",
      fieldset: "linkInfo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL / Path",
      type: "string",
      description:
        "The full or relative URL this navigation item should link to.",
      fieldset: "linkInfo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "defaultLabel",
      title: "Default Label (English)",
      type: "string",
      description:
        "Default English label for this navigation item (used as fallback).",
      fieldset: "labeling",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "defaultDescription",
      title: "Default Description (optional)",
      type: "text",
      description:
        "Optional description used in tooltips, accessibility, or dropdowns.",
      fieldset: "labeling",
    }),
  ],

  preview: {
    select: {
      title: "defaultLabel",
      subtitle: "href",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "No Label",
        subtitle: subtitle || "No URL",
      };
    },
  },
});
