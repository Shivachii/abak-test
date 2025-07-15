// schemas/contactPage.ts
import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
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
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
    }),
    defineField({
      name: "infoTitle",
      title: "Info Section Title",
      type: "string",
    }),
    defineField({
      name: "infoNote",
      title: "Info Note",
      type: "text",
    }),
    defineField({
      name: "addressTitle",
      type: "string",
    }),
    defineField({
      name: "address",
      type: "string",
    }),
    defineField({
      name: "emailTitle",
      type: "string",
    }),
    defineField({
      name: "emails",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "phoneTitle",
      type: "string",
    }),
    defineField({
      name: "phones",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
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
