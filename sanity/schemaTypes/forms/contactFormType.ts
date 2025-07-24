import { defineType, defineField } from "sanity";

export const contactFormType = defineType({
  name: "contactForm",
  title: "Contact Form Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Form Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Form Description",
      type: "text",
    }),
    defineField({
      name: "fields",
      title: "Fields",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "name", type: "string", title: "Field Name" },
            {
              name: "type",
              type: "string",
              title: "Type",
              options: {
                list: ["text", "email", "textarea"],
              },
            },
            {
              name: "required",
              type: "boolean",
              title: "Required",
              initialValue: true,
            },
          ],
        },
      ],
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "string",
    }),
  ],
});
