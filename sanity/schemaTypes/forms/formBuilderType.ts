import { ComposeIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const formBuilder = defineType({
  name: "formBuilder",
  title: "Form Builder",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "category",
      title: "Form Category",
      type: "string",
      options: {
        list: ["Contact", "Volunteer", "Qardh", "AESP"],
      },
    }),

    defineField({
      name: "title",
      title: "Form Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Form Slug",
      type: "slug",
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
    }),
    defineField({
      name: "description",
      title: "Form Description",
      type: "text",
    }),
    defineField({
      name: "fields",
      title: "Form Fields",
      type: "array",
      of: [
        defineField({
          name: "field",
          title: "Field",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "name",
              title: "Field Name",
              type: "string",
              description: "Use this for form submission keys",
              validation: (Rule) => Rule.required(),
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
              title: "Placeholder",
              type: "string",
            }),
            defineField({
              name: "required",
              title: "Required?",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "options",
              title: "Options (for Select, Radio or Checkbox)",
              type: "array",
              of: [{ type: "string" }],
              hidden: ({ parent }) =>
                !["select", "checkbox", "radio"].includes(parent?.type),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "string",
    }),
  ],
});
