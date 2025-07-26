import { ComposeIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";
import { formFieldNameOptions } from "../../constants/sharedFormConstants";

export const formBuilder = defineType({
  name: "formBuilder",
  title: "Form Builder",
  type: "document",
  icon: ComposeIcon,

  fieldsets: [
    {
      name: "general",
      title: "Form Information",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "fields",
      title: "Form Fields",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "messages",
      title: "Submission Feedback",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    defineField({
      name: "category",
      title: "Form Category",
      type: "string",
      fieldset: "general",
      options: {
        list: ["Contact", "Volunteer", "Qardh", "AESP", "Hawza"],
      },
      description:
        "Used to categorize this form (for internal or frontend use).",
    }),

    defineField({
      name: "title",
      title: "Form Title",
      type: "string",
      fieldset: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Form Slug",
      type: "slug",
      fieldset: "general",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Form Tagline",
      type: "text",
      fieldset: "general",
      description: "A short tagline or sentence about this form.",
    }),

    defineField({
      name: "description",
      title: "Form Description",
      type: "text",
      fieldset: "general",
      description: "More detailed information or context for the form.",
    }),

    defineField({
      name: "fields",
      title: "Form Fields",
      type: "array",
      fieldset: "fields",
      of: [
        defineField({
          name: "field",
          title: "Field",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Field Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "name",
              title: "Field Name (Key)",
              type: "string",
              description: "Used as the key in form submissions.",
              validation: (Rule) => Rule.required(),
              options: {
                list: formFieldNameOptions,
              },
            }),
            defineField({
              name: "inputType",
              title: "Input Type",
              type: "string",
              initialValue: "text",
              options: {
                layout: "dropdown",
                list: [
                  { title: "Text", value: "text" },
                  { title: "Email", value: "email" },
                  { title: "Textarea", value: "textarea" },
                  { title: "Select", value: "select" },
                  { title: "Checkbox", value: "checkbox" },
                  { title: "Radio", value: "radio" },
                  { title: "Date", value: "date" },
                  { title: "Phone", value: "tel" },
                  { title: "Number", value: "number" },
                  { title: "File upload", value: "file" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "placeholder",
              title: "Placeholder Text",
              type: "string",
            }),
            defineField({
              name: "required",
              title: "Is this field required?",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "options",
              title: "Options (for Select, Radio, or Checkbox)",
              type: "array",
              of: [{ type: "string" }],
              hidden: ({ parent }) =>
                !["select", "checkbox", "radio"].includes(parent?.inputType),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "inputType",
            },
            prepare({ title, subtitle }) {
              return {
                title: title || "Untitled Field",
                subtitle: `Input Type: ${subtitle || "text"}`,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "layout",
      title: "Form Layout",
      type: "string",
      fieldset: "general",
      options: {
        list: [
          { title: "Single Page", value: "single" },
          { title: "Dialog", value: "dialog" },
          { title: "Multi Step", value: "multiStep" },
        ],
        layout: "radio",
      },
      initialValue: "single",
      description: "How the form should be displayed in the frontend.",
    }),

    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "string",
      fieldset: "messages",
      description: "Displayed to users after successful submission.",
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
