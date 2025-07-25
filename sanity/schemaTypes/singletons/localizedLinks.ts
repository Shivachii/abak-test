import { defineType, defineField } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const localizedLink = defineType({
  name: "localizedLink",
  title: "Localized Link",
  type: "document",
  icon: LinkIcon,

  fieldsets: [
    {
      name: "label",
      title: "Link Label (Multilingual)",
      options: { collapsible: false },
    },
    {
      name: "description",
      title: "Description (Optional)",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    defineField({
      name: "label",
      title: "Label (Multilingual)",
      type: "object",
      fieldset: "label",
      fields: [
        {
          name: "en",
          title: "English",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("English label is required"),
        },
        { name: "sw", title: "Swahili", type: "string" },
        { name: "ar", title: "Arabic", type: "string" },
        { name: "fa", title: "Farsi", type: "string" },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description (Optional)",
      type: "object",
      fieldset: "description",
      fields: [
        { name: "en", title: "English", type: "text" },
        { name: "sw", title: "Swahili", type: "text" },
        { name: "ar", title: "Arabic", type: "text" },
        { name: "fa", title: "Farsi", type: "text" },
      ],
    }),

    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
        layout: "radio",
      },
      initialValue: "internal",
      validation: (Rule) =>
        Rule.required().error("Please select the link type"),
    }),

    defineField({
      name: "internalLink",
      title: "Internal Page",
      type: "reference",
      to: [{ type: "navLink" }],
      hidden: ({ parent }) => parent?.linkType !== "internal",
    }),

    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }).error("Please enter a valid external URL"),
    }),
  ],

  preview: {
    select: {
      title: "label.en",
      subtitle: "linkType",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Unnamed Link",
        subtitle: `Type: ${subtitle === "internal" ? "Internal Page" : "External URL"}`,
        media: LinkIcon,
      };
    },
  },
});
