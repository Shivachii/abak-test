import { defineField, defineType } from "sanity";

export const objectivesType = defineType({
  name: "objective",
  title: "Objectives",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used for internal referencing (e.g., propagation-of-islam)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tabName",
      title: "Tab Display Name",
      type: "string",
      description:
        "Short name displayed in tabs (can be different from full title)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which this objective appears in tabs",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "contentType",
      title: "Content Type",
      type: "string",
      options: {
        list: [
          { title: "Simple List", value: "simple-list" },
          { title: "Strategies Implementation", value: "strategies" },
          { title: "Support Areas", value: "support-areas" },
          { title: "Learning Features", value: "learning-features" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    // Content fields based on type
    defineField({
      name: "simpleItems",
      title: "Simple Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Heart", value: "Heart" },
                  { title: "Users", value: "Users" },
                  { title: "BookOpen", value: "BookOpen" },
                  { title: "GraduationCap", value: "GraduationCap" },
                  { title: "Stethoscope", value: "Stethoscope" },
                  { title: "DollarSign", value: "DollarSign" },
                  { title: "MessageCircle", value: "MessageCircle" },
                  { title: "Home", value: "Home" },
                  { title: "Camera", value: "Camera" },
                  { title: "Video", value: "Video" },
                  { title: "Mic", value: "Mic" },
                  { title: "Edit", value: "Edit" },
                  { title: "Globe", value: "Globe" },
                  { title: "Smartphone", value: "Smartphone" },
                  { title: "BookOpenCheck", value: "BookOpenCheck" },
                  { title: "CheckCircle", value: "CheckCircle" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "icon",
            },
          },
        },
      ],
      hidden: ({ document }) => document?.contentType !== "simple-list",
    }),
    defineField({
      name: "strategiesTitle",
      title: "Strategies Section Title",
      type: "string",
      initialValue: "Strategies for Implementation",
      hidden: ({ document }) => document?.contentType !== "strategies",
    }),
    defineField({
      name: "strategies",
      title: "Strategy Items",
      type: "array",
      of: [
        {
          type: "text",
          title: "Strategy",
        },
      ],
      hidden: ({ document }) => document?.contentType !== "strategies",
    }),
    defineField({
      name: "supportAreas",
      title: "Support Areas",
      type: "array",
      of: [
        {
          type: "object",
          name: "supportSection",
          title: "Support Section",
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [
                {
                  type: "text",
                  title: "Support Item",
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "items.0",
            },
          },
        },
      ],
      hidden: ({ document }) => document?.contentType !== "support-areas",
    }),
    defineField({
      name: "learningFeatures",
      title: "Learning Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "GraduationCap", value: "GraduationCap" },
                  { title: "BookOpenCheck", value: "BookOpenCheck" },
                  { title: "Users", value: "Users" },
                  { title: "Award", value: "Award" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "description",
              subtitle: "icon",
            },
          },
        },
      ],
      hidden: ({ document }) => document?.contentType !== "learning-features",
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Right", value: "right" },
          { title: "Left", value: "left" },
          { title: "Hidden on Mobile", value: "hidden-mobile" },
        ],
      },
      initialValue: "right",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tabName",
      media: "image",
      order: "order",
    },
    prepare(selection) {
      const { title, subtitle, media, order } = selection;
      return {
        title: title,
        subtitle: `Tab: ${subtitle} | Order: ${order}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
