import { ComposeIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const formBuilder = defineType({
  name: "formBuilder",
  title: "Form Builder",
  type: "document",
  icon: ComposeIcon,

  fieldsets: [
    {
      name: "general",
      title: "Form Overview",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "fields",
      title: "Form Fields",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "documents",
      title: "Required Documents",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "financial",
      title: "Financial Support Categories",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "messages",
      title: "Submission Feedback",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "settings",
      title: "Advanced Settings",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Form Title",
      type: "string",
      fieldset: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Short Tagline",
      type: "text",
      fieldset: "general",
      rows: 2,
      description: "A brief sentence that explains this form's purpose.",
    }),

    defineField({
      name: "description",
      title: "Form Description",
      type: "text",
      fieldset: "general",
      rows: 3,
      description: "More detailed information or instructions for the form.",
    }),

    defineField({
      name: "groupIntoSections",
      title: "Group Fields into Sections?",
      type: "boolean",
      fieldset: "fields",
      initialValue: false,
      description:
        "Enable to organize the form into multiple sections (steps).",
    }),

    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      fieldset: "fields",
      hidden: ({ document }) => !document?.groupIntoSections,
      of: [
        defineField({
          name: "section",
          title: "Section",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Section Description",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "fields",
              title: "Fields in This Section",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "formField" }],
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: "title",
              fieldCount: "fields.length",
            },
            prepare({ title, fieldCount }) {
              return {
                title: title || "Untitled Section",
                subtitle: `${fieldCount || 0} fields`,
              };
            },
          },
        }),
      ],
    }),

    defineField({
      name: "fields",
      title: "Form Fields",
      type: "array",
      fieldset: "fields",
      hidden: ({ document }) => Boolean(document?.groupIntoSections),
      of: [
        {
          type: "reference",
          to: [{ type: "formField" }],
        },
      ],
    }),

    // defineField({
    //   name: "requiredDocuments",
    //   title: "Required Documents",
    //   type: "array",
    //   fieldset: "general",
    //   of: [{ type: "requiredDocument" }],
    // }),

    defineField({
      name: "successMessage",
      title: "Submission Confirmation",
      type: "string",
      fieldset: "messages",
      description:
        "What to show the user after successfully submitting the form.",
    }),

    // --- Advanced settings hidden by default ---
    defineField({
      name: "layout",
      title: "Frontend Layout",
      type: "string",
      fieldset: "settings",
      options: {
        list: [
          { title: "Single Page", value: "single" },
          { title: "Dialog (Popup)", value: "dialog" },
          { title: "Multi-Step", value: "multiStep" },
        ],
        layout: "radio",
      },
      initialValue: "single",
    }),

    defineField({
      name: "category",
      title: "Form Type",
      type: "string",
      fieldset: "settings",
      options: {
        list: ["Contact", "Volunteer", "Qardh", "AESP", "Hawza"],
      },
      description: "Used for frontend filtering and logic.",
    }),

    defineField({
      name: "slug",
      title: "Slug (URL ID)",
      type: "slug",
      fieldset: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Form",
        subtitle: subtitle ? `Category: ${subtitle}` : "No category",
      };
    },
  },
});
