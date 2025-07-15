// schemas/qardhPage.ts
import { defineField, defineType, defineArrayMember } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const qardhPageType = defineType({
  name: "qardhPage",
  title: "Qardh Hassanah Page",
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
      type: "string",
      title: "Page Title",
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Page Subtitle",
    }),
    defineField({
      name: "summaryTitle",
      type: "string",
    }),
    defineField({
      name: "summary",
      type: "text",
    }),
    defineField({
      name: "objectivesTitle",
      type: "string",
      title: "Objectives Title",
    }),
    defineField({
      name: "objectives",
      type: "array",
      title: "Objectives",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "benefitsTitle",
      type: "string",
      title: "Key Benefits Title",
    }),
    defineField({
      name: "benefits",
      type: "array",
      title: "Key Benefits",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "governanceTitle",
      type: "string",
    }),
    defineField({
      name: "governance",
      type: "text",
    }),
    defineField({
      name: "eligibilityTitle",
      type: "string",
    }),
    defineField({
      name: "eligibility",
      type: "text",
    }),
    defineField({
      name: "loanProcessTitle",
      type: "string",
    }),
    defineField({
      name: "loanProcessSteps",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "challengesTitle",
      type: "string",
    }),
    defineField({
      name: "challenges",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "futureTitle",
      type: "string",
    }),
    defineField({
      name: "future",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "applyTitle",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
  },
});
