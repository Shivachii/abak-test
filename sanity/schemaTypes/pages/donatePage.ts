// schemas/donatePage.ts
import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const donatePageType = defineType({
  name: "donatePage",
  title: "Donate Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "translationId",
      type: "string",
      hidden: true,
    }),
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
      name: "title",
      title: "Page Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Intro Description",
      type: "text",
    }),
    defineField({
      name: "waysTitle",
      title: "Ways to Donate Title",
      type: "string",
    }),
    defineField({
      name: "methods",
      title: "Donation Methods (list items)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "bankInfo",
      title: "Bank Transfer Info",
      type: "object",
      fields: [
        { name: "bank", type: "string", title: "Bank" },
        { name: "branch", type: "string", title: "Branch" },
        { name: "accountName", type: "string", title: "Account Name" },
        {
          name: "accounts",
          type: "array",
          title: "Account Numbers",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "label", type: "string", title: "Currency" },
                { name: "number", type: "string", title: "Account Number" },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "lang" },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Donate Page",
        subtitle: subtitle?.toUpperCase(),
      };
    },
  },
});
