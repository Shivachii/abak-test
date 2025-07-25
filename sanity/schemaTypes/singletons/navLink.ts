import { defineType, defineField } from "sanity";

export const navLinkType = defineType({
  name: "navLink",
  title: "Navigation Link",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Link Key",
      type: "slug",
      description:
        "Unique identifier for internal reference (e.g., 'about', 'contact')",
      validation: (Rule) => Rule.required().error("Link key is required"),
    }),

    defineField({
      name: "href",
      title: "Destination URL",
      type: "string",
      description:
        "Path or external URL this link points to (e.g., '/about' or 'https://example.com')",
      validation: (Rule) =>
        Rule.required().error("Destination URL is required"),
    }),
  ],

  preview: {
    select: {
      title: "key.current",
      subtitle: "href",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Unnamed Nav Link",
        subtitle: subtitle || "No URL",
      };
    },
  },
});
