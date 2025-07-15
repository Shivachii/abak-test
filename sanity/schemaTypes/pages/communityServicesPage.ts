import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const communityServicesPageType = defineType({
  name: "communityServicesPage",
  title: "Community Services Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "translationId", type: "string", hidden: true }),
    defineField({
      name: "lang",
      type: "string",
      title: "Language",
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
    defineField({ name: "title", type: "string" }),
    defineField({ name: "subtitle", type: "text" }),
    defineField({
      name: "groups",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "title", type: "string" }),
                    defineField({ name: "description", type: "text" }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
  },
});
