import { defineType, defineField } from "sanity";

export const sponsorshipCategory = defineType({
  name: "sponsorshipCategory",
  title: "Sponsorship Category",
  type: "object",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name of Support Category",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "maxAmount",
          title: "Maximum Amount (Optional)",
          type: "number",
        }),
      ],
      preview: {
        select: {
          title: "name",
          maxAmount: "maxAmount",
        },
        prepare({ title, maxAmount }) {
          return {
            title: title || "Untitled Category",
            subtitle: maxAmount ? `Max: ${maxAmount}` : "No limit",
          };
        },
      },
    }),
  ],
});
