import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "meta",
      title: "SEO & Language",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "content",
      title: "Main Page Content",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "contact",
      title: "Contact Information",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    defineField({
      name: "translationId",
      title: "Translation ID",
      type: "string",
      hidden: true,
      fieldset: "meta",
    }),
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      fieldset: "meta",
      description: "Choose the language of this page version.",
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
      title: "SEO Metadata",
      type: "seo",
      fieldset: "meta",
      description:
        "Used by search engines. Set the meta title, description, and keywords.",
    }),

    defineField({
      name: "headline",
      title: "Page Headline",
      type: "string",
      fieldset: "content",
      description: "Main heading at the top of the page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Introductory Text",
      type: "text",
      fieldset: "content",
      rows: 3,
      description:
        "Optional welcome paragraph or description above the contact form.",
    }),

    defineField({
      name: "infoTitle",
      title: "Contact Section Title",
      type: "string",
      fieldset: "contact",
      description: "Heading for the section containing contact details.",
    }),
    defineField({
      name: "infoNote",
      title: "Contact Section Note",
      type: "text",
      fieldset: "contact",
      rows: 2,
      description: "Optional note (e.g. working hours, response time, etc.).",
    }),

    defineField({
      name: "addressTitle",
      title: "Address Label",
      type: "string",
      fieldset: "contact",
      description: "Heading for the address field (e.g. 'Visit Us').",
    }),
    defineField({
      name: "address",
      title: "Physical Address",
      type: "string",
      fieldset: "contact",
      description: "Full address including city and postal code.",
    }),

    defineField({
      name: "emailTitle",
      title: "Email Section Title",
      type: "string",
      fieldset: "contact",
      description: "Label shown above email addresses (e.g. 'Get in Touch').",
    }),
    defineField({
      name: "emails",
      title: "Email Addresses",
      type: "array",
      fieldset: "contact",
      of: [defineArrayMember({ type: "string" })],
      description: "List of email addresses users can use to contact you.",
      validation: (Rule) =>
        Rule.unique().error("Each email address must be unique."),
    }),

    defineField({
      name: "phoneTitle",
      title: "Phone Section Title",
      type: "string",
      fieldset: "contact",
      description: "Label shown above phone numbers (e.g. 'Call Us').",
    }),
    defineField({
      name: "phones",
      title: "Phone Numbers",
      type: "array",
      fieldset: "contact",
      of: [defineArrayMember({ type: "string" })],
      description: "Include mobile, landline, or WhatsApp numbers.",
      validation: (Rule) =>
        Rule.unique().error("Each phone number must be unique."),
    }),
  ],

  preview: {
    select: {
      title: "headline",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Contact Page",
        subtitle: subtitle?.toUpperCase(),
      };
    },
  },
});
