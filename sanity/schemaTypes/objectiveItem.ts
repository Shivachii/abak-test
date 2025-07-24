import { BookOpenIcon } from "lucide-react";
import { defineType, defineField } from "sanity";

export const objectiveItem = defineType({
  name: "objectiveItem",
  title: "Objective",
  type: "object",
  icon: BookOpenIcon,
  fields: [
    defineField({
      name: "title",
      title: "Objective Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Value (for tab id)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image (optional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Content Blocks",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "object",
          name: "listItem",
          title: "List Item with Icon",
          fields: [
            { name: "icon", type: "string", title: "Icon name (lucide-react)" },
            { name: "text", type: "string", title: "Text" },
          ],
        },
        {
          type: "image",
          name: "customImage",
          title: "Image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
});
