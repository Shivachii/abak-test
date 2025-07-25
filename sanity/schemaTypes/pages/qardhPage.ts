import { defineField, defineType, defineArrayMember } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const qardhPageType = defineType({
  name: "qardhPage",
  title: "Qardh Hassanah Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "intro",
      title: "Page Introduction",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "sections",
      title: "Content Sections",
      options: { collapsible: true, collapsed: false },
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
      title: "Page Language",
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
    // SEO
    defineField({
      name: "seo",
      title: "SEO Metadata",
      type: "seo",
      description:
        "Customize how this page appears in search engines and link previews.",
      fieldset: "seo",
    }),
    // Intro Section
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Main heading for the Qardh Hassanah page.",
      fieldset: "intro",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Page Subtitle",
      type: "string",
      description: "Short subtitle or tagline shown under the main title.",
      fieldset: "intro",
    }),
    defineField({
      name: "summaryTitle",
      title: "Summary Heading",
      type: "string",
      description: "Title for the brief summary/introduction section.",
      fieldset: "intro",
    }),
    defineField({
      name: "summary",
      title: "Summary Description",
      type: "text",
      rows: 4,
      description: "Brief overview of the Qardh Hassanah initiative.",
      fieldset: "intro",
    }),

    // Sections
    defineField({
      name: "objectivesTitle",
      title: "Objectives Section Title",
      type: "string",
      fieldset: "sections",
    }),
    defineField({
      name: "objectives",
      title: "List of Objectives",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      fieldset: "sections",
    }),

    defineField({
      name: "benefitsTitle",
      title: "Key Benefits Section Title",
      type: "string",
      fieldset: "sections",
    }),
    defineField({
      name: "benefits",
      title: "Key Benefits",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      fieldset: "sections",
    }),

    defineField({
      name: "governanceTitle",
      title: "Governance Section Title",
      type: "string",
      fieldset: "sections",
    }),
    defineField({
      name: "governance",
      title: "Governance Description",
      type: "text",
      rows: 4,
      fieldset: "sections",
    }),

    defineField({
      name: "eligibilityTitle",
      title: "Eligibility Section Title",
      type: "string",
      fieldset: "sections",
    }),
    defineField({
      name: "eligibility",
      title: "Eligibility Description",
      type: "text",
      rows: 4,
      fieldset: "sections",
    }),

    defineField({
      name: "loanProcessTitle",
      title: "Loan Process Section Title",
      type: "string",
      fieldset: "sections",
    }),
    defineField({
      name: "loanProcessSteps",
      title: "Loan Process Steps",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      fieldset: "sections",
    }),

    defineField({
      name: "challengesTitle",
      title: "Challenges Section Title",
      type: "string",
      fieldset: "sections",
    }),
    defineField({
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      fieldset: "sections",
    }),

    defineField({
      name: "futureTitle",
      title: "Future Plans Section Title",
      type: "string",
      fieldset: "sections",
    }),
    defineField({
      name: "future",
      title: "Future Plans",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      fieldset: "sections",
    }),

    defineField({
      name: "applyTitle",
      title: "Application Section Title",
      type: "string",
      description:
        "Title for the application section (e.g., 'Apply for a Loan').",
      fieldset: "sections",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Qardh Page",
        subtitle: subtitle
          ? `Language: ${subtitle.toUpperCase()}`
          : "No language selected",
      };
    },
  },
});
