import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const publicationsType = defineType({
  name: "publications",
  title: "Publications",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "details",
      title: "Publication Details",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "details",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "details",
      options: {
        source: "title",
        maxLength: 96,
      },
      description: "URL-friendly identifier generated from the title",
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      fieldset: "details",
      description: "Optional summary or excerpt of the publication",
    }),
    defineField({
      name: "pdfFile",
      title: "Upload PDF File",
      type: "file",
      fieldset: "details",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required().error("PDF file is required"),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Publication",
        subtitle: subtitle || "No description provided",
      };
    },
  },
});
