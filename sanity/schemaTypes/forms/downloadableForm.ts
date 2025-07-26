import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const downloadableForm = defineType({
  name: "downloadableForm",
  title: "Downloadable Form",
  type: "document",
  icon: TextIcon,
  fieldsets: [
    {
      name: "media",
      title: "Media",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "fileDetails",
      title: "File Details",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Form Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Brief explanation of the form’s purpose or usage.",
    }),
    defineField({
      name: "file",
      title: "Form File (PDF, DOCX, etc.)",
      type: "file",
      fieldset: "fileDetails",
      options: {
        accept: ".pdf,.doc,.docx,.xls,.xlsx",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fileName",
      title: "Custom Display Name",
      type: "string",
      fieldset: "fileDetails",
      description: "If different from uploaded file name (optional)",
    }),
    defineField({
      name: "previewImage",
      title: "Preview Image",
      type: "image",
      fieldset: "media",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
      ],
      description: "Optional thumbnail or cover for the form.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Registration", value: "registration" },
          { title: "Application", value: "application" },
          { title: "Event", value: "event" },
          { title: "Other", value: "other" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "previewImage",
      subtitle: "category",
    },
  },
});
