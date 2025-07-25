import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const mubaligheenTrainingPageType = defineType({
  name: "mubaligheenTrainingPage",
  title: "Mubaligheen Training Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "content",
      title: "Main Content",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "symposium",
      title: "Symposium Section",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "media",
      title: "Images",
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
      title: "SEO Metadata",
      type: "seo",
      description:
        "Customize page metadata for search engines and social media.",
      fieldset: "seo",
    }),

    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Main heading of the page.",
      fieldset: "content",
      validation: (Rule) => Rule.required().max(100),
    }),

    defineField({
      name: "intro",
      title: "Introduction",
      type: "text",
      description: "Short introductory paragraph for the training page.",
      fieldset: "content",
      rows: 3,
      validation: (Rule) => Rule.required().min(20),
    }),

    defineField({
      name: "whyImportant",
      title: "Why Training is Important",
      type: "string",
      description: "State why Mubaligheen training is essential.",
      fieldset: "content",
      validation: (Rule) => Rule.required().max(200),
    }),

    defineField({
      name: "description",
      title: "Detailed Description",
      type: "text",
      description: "Comprehensive details about the training program.",
      fieldset: "content",
      rows: 5,
      validation: (Rule) => Rule.required().min(50),
    }),

    defineField({
      name: "trainingAreas",
      title: "Training Focus Areas",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Key subject areas covered in the training (e.g., theology, communication, leadership).",
      fieldset: "content",
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "cta",
      title: "Call to Action",
      type: "string",
      description:
        "Encouragement or support message (e.g., 'Support a trainee today!').",
      fieldset: "content",
      validation: (Rule) => Rule.required().max(150),
    }),

    defineField({
      name: "symposiumTitle",
      title: "Symposium Title",
      type: "string",
      description: "Title or heading for the symposium section.",
      fieldset: "symposium",
    }),

    defineField({
      name: "symposiumBody",
      title: "Symposium Description",
      type: "text",
      description: "Detailed explanation about the symposium initiative.",
      fieldset: "symposium",
      rows: 4,
    }),

    defineField({
      name: "image1",
      title: "Training Image",
      type: "image",
      description: "An image that visually represents the training.",
      options: { hotspot: true },
      fieldset: "media",
    }),

    defineField({
      name: "image2",
      title: "Symposium Image",
      type: "image",
      description: "An image related to the symposium section.",
      options: { hotspot: true },
      fieldset: "media",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
      media: "image1",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Training Page",
        subtitle: subtitle ? `Language: ${subtitle}` : "No language selected",
        media,
      };
    },
  },
});
