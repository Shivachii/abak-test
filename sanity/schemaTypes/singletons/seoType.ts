import { defineType, defineField } from "sanity";
import { Earth, FileText } from "lucide-react";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  icon: Earth,
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description:
        "Make it as enticing as possible to convert users in social feeds and Google searches.Keep between 50–65 characters for best display in search results.",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(65)
          .warning("Ideal meta titles are 50–65 characters long."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description:
        "As with the title, make sure your meta descriptions are clear, concise, and reflective of the content users will find on your page. Recommended length: 120–155 characters.",
      validation: (Rule) =>
        Rule.required()
          .min(50)
          .max(155)
          .warning("Ideal meta descriptions are 120–155 characters long."),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Add relevant keywords (e.g., 'NGO', 'community work') for this page (5–10 max).",
      validation: (Rule) =>
        Rule.max(10).warning("Use a maximum of 10 well-targeted keywords."),
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Preferred URL for this page (optional).",
    }),
    defineField({
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
      description: "Used for social media sharing. Falls back to Meta Title.",
      validation: (Rule) =>
        Rule.max(70).warning("Try to keep it under 70 characters."),
    }),
    defineField({
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
      description:
        "Used for social media sharing. Falls back to Meta Description.",
      validation: (Rule) =>
        Rule.max(200).warning("Try to keep it under 200 characters."),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
      description: "Used for social media previews (Facebook, LinkedIn, etc.)",
    }),
    defineField({
      name: "twitterCard",
      title: "Twitter Card Type",
      type: "string",
      options: {
        list: [
          { title: "Summary", value: "summary" },
          { title: "Summary with Large Image", value: "summary_large_image" },
        ],
        layout: "radio",
      },
      initialValue: "summary_large_image",
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      description: "Prevent search engines from indexing this page.",
    }),
    defineField({
      name: "noFollow",
      title: "No Follow",
      type: "boolean",
      initialValue: false,
      description: "Prevent search engines from following links on this page.",
    }),
  ],
  preview: {
    select: {
      title: "metaTitle",
      subtitle: "metaDescription",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled SEO",
        subtitle: subtitle || "No meta description set",
        media: FileText,
      };
    },
  },
});
