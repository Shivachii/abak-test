import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const projectsPageType = defineType({
  name: "projectsPage",
  title: "Projects Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "content",
      title: "Page Content",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "projects",
      title: "Projects List",
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
        "Controls how this page appears in search engines and social sharing.",
      fieldset: "seo",
    }),

    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Main heading of the Projects page.",
      fieldset: "content",
      validation: (Rule) => Rule.required().max(100),
    }),

    defineField({
      name: "description",
      title: "Page Description",
      type: "text",
      description:
        "Introductory paragraph explaining the purpose of the Projects page.",
      rows: 3,
      fieldset: "content",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description:
        "Text for the main call-to-action button (e.g., 'Explore Projects').",
      fieldset: "content",
      validation: (Rule) => Rule.required().max(50),
    }),

    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      description: "List of projects featured on this page.",
      fieldset: "projects",
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          title: "Project",
          fields: [
            defineField({
              name: "title",
              title: "Project Title",
              type: "string",
              validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
              name: "description",
              title: "Project Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required().min(20),
            }),
            defineField({
              name: "image",
              title: "Project Image",
              type: "image",
              options: { hotspot: true },
              description: "Visual representation of the project.",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "Project Link (Optional)",
              type: "string",
              description: "Link to project page or external resource.",
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
      media: "projects.0.image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Projects Page",
        subtitle: subtitle?.toUpperCase(),
        media,
      };
    },
  },
});
