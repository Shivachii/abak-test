import { defineType, defineField } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const parentEvent = defineType({
  name: "parentEvent",
  title: "Parent Event",
  type: "document",
  icon: CalendarIcon,

  fieldsets: [
    {
      name: "main",
      title: "Parent Event Details",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Event Group Title",
      type: "string",
      fieldset: "main",
      validation: (Rule) => Rule.required().error("Group title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "main",
      options: { source: "title" },
      description: "Auto-generated URL-friendly identifier from the title",
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "description",
      title: "Group Description (Optional)",
      type: "text",
      fieldset: "main",
      description: "Provide a short summary of this event group",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Group",
        subtitle: subtitle || "No description",
        media: CalendarIcon,
      };
    },
  },
});
