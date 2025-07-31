// schemas/donatePage.ts
import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const donatePageType = defineType({
  name: "donatePage",
  title: "Donate Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "intro",
      title: "Intro Section",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "methods",
      title: "Ways to Donate",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "bank",
      title: "Bank Transfer Info",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "seo",
      title: "SEO & Language",
      options: { collapsible: true, collapsed: true },
    },
  ],

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
      description: "Select the language for this version of the page.",
      fieldset: "seo",
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
      name: "seo",
      title: "SEO",
      type: "seo",
      fieldset: "seo",
      description: "Search engine metadata (title, description, keywords).",
    }),

    // Intro Section
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      fieldset: "intro",
      description: "Main heading displayed at the top of the donate page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Intro Description",
      type: "text",
      rows: 4,
      fieldset: "intro",
      description:
        "Short paragraph introducing the purpose of the donate page.",
    }),

    // Donation Methods
    defineField({
      name: "waysTitle",
      title: "Donation Methods Title",
      type: "string",
      fieldset: "methods",
      description: "Section title above the list of donation options.",
    }),
    defineField({
      name: "methods",
      title: "Donation Methods",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      fieldset: "methods",
      description: "List donation options such as M-Pesa, Cash, Cheque, etc.",
      validation: (Rule) =>
        Rule.min(1).error("At least one donation method is required."),
    }),

    // Bank Transfer Info
    defineField({
      name: "bankInfo",
      title: "Bank Transfer Information",
      type: "object",
      fieldset: "bank",
      description: "Reference to stored bank account details for transfers.",
      fields: [
        defineField({
          name: "bankDetails",
          title: "Bank Details Reference",
          type: "reference",
          to: [{ type: "bankInfo" }],
          description: "Select an existing bank info record.",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Donate Page",
        subtitle: `Language: ${subtitle?.toUpperCase()}`,
      };
    },
  },
});
