import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const communityServicesPageType = defineType({
  name: "communityServicesPage",
  title: "Community Services Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "settings",
      title: "SEO & Language",
      options: { collapsible: true, collapsed: false },
    },
    // {
    //   name: "content",
    //   title: "Page Content",
    //   options: { collapsible: true, collapsed: false },
    // },
    {
      name: "intro",
      title: "Intro Section",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "groups",
      title: "Service Groups",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    // === SETTINGS ===
    defineField({
      name: "translationId",
      title: "Translation Group ID",
      type: "string",
      hidden: true,
      fieldset: "settings",
    }),
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      fieldset: "settings",
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
      fieldset: "settings",
      description:
        "Control how this page appears in search engines and link previews.",
    }),

    // === INTRO SECTION ===
    defineField({
      name: "title",
      type: "string",
      title: "Main Heading (H1)",
      fieldset: "intro",
      description:
        "This is the primary heading for the Community Services page.",
      validation: (Rule) => Rule.required().error("A main title is required."),
    }),
    defineField({
      name: "subtitle",
      type: "text",
      title: "Introductory Text",
      fieldset: "intro",
      rows: 3,
      description:
        "Brief paragraph that introduces the community service efforts.",
      validation: (Rule) =>
        Rule.max(300).warning("Keep this short and impactful."),
    }),

    // === SERVICE GROUPS ===
    defineField({
      name: "groups",
      type: "array",
      title: "Service Groups",
      fieldset: "groups",
      description:
        "Each group highlights a set of related services with an optional banner image.",
      of: [
        {
          type: "object",
          title: "Service Group",
          fields: [
            defineField({
              name: "image",
              title: "Group Banner Image",
              type: "image",
              options: { hotspot: true },
              description:
                "Optional header image for this group (e.g., community outreach photo).",
            }),
            defineField({
              name: "items",
              title: "Services in This Group",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Service",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Service Title",
                      type: "string",
                      description: "E.g., 'Food Relief Program'.",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "description",
                      title: "Service Description",
                      type: "text",
                      rows: 4,
                      description:
                        "Provide a clear, concise overview of this service.",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: {
              image: "image",
              services: "items",
            },
            prepare({ image, services }) {
              const count = services?.length || 0;
              return {
                title: `Service Group (${count} service${
                  count === 1 ? "" : "s"
                })`,
                subtitle: count
                  ? "Click to edit services"
                  : "No services added yet",
                media: image,
              };
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Community Services Page",
        subtitle: `Language: ${subtitle?.toUpperCase()}`,
      };
    },
  },
});
