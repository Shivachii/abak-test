import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const hawzaPage = defineType({
  name: "hawzaPage",
  title: "Hawza Page",
  type: "document",
  icon: DocumentTextIcon,

  fieldsets: [
    {
      name: "seo",
      title: "SEO & Language",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "about",
      title: "About Section",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "establishment",
      title: "Establishment",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "admissions",
      title: "Admissions",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "students",
      title: "Students",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "curriculum",
      title: "Curriculum",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "facilities",
      title: "Facilities",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "scholarship",
      title: "Scholarship",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "support",
      title: "Support",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    defineField({ name: "translationId", type: "string", hidden: true }),

    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      fieldset: "seo",

      description: "Select the language for this page version.",
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
      fieldset: "seo",
      description:
        "Configure how this page appears in search engines and when shared.",
    }),

    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      description: "Main heading displayed on the Hawza page.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      type: "text",
      title: "Page Subtitle",
      description: "Optional short subtitle or tagline.",
    }),

    // About Section
    defineField({
      name: "about",
      type: "object",
      title: "About Section",
      fieldset: "about",
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "subtitle", type: "string", title: "Subtitle" }),
        defineField({
          name: "description",
          type: "text",
          title: "Description",
          rows: 4,
        }),
      ],
    }),

    // Establishment Section
    defineField({
      name: "establishment",
      type: "object",
      title: "Establishment Section",
      fieldset: "establishment",
      fields: [
        defineField({ name: "title", type: "string", title: "Section Title" }),
        ...["vision", "mission", "impact"].map((key) =>
          defineField({
            name: key,
            type: "object",
            title: key.charAt(0).toUpperCase() + key.slice(1),
            fields: [
              defineField({ name: "title", type: "string", title: "Title" }),
              defineField({
                name: "description",
                type: "text",
                title: "Description",
                rows: 4,
              }),
            ],
          })
        ),
      ],
    }),

    // Admissions Section
    defineField({
      name: "admissionsSection",
      type: "object",
      title: "Admissions Section",
      fieldset: "admissions",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Admissions Title",
        }),
        defineField({
          name: "admissions",
          type: "array",
          title: "Admissions Criteria",
          of: [
            defineField({
              name: "admissionItem",
              type: "object",
              title: "Admission Item",
              fields: [
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                  rows: 3,
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Students Section
    defineField({
      name: "studentsSection",
      type: "object",
      title: "Students Section",
      fieldset: "students",
      fields: [
        defineField({ name: "title", type: "string", title: "Section Title" }),
        defineField({
          name: "students",
          type: "array",
          title: "Student Profiles",
          of: [
            defineField({
              name: "studentProfile",
              type: "object",
              title: "Student Profile",
              fields: [
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                  rows: 3,
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Curriculum Section
    defineField({
      name: "curriculumSection",
      type: "object",
      title: "Curriculum Section",
      fieldset: "curriculum",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Curriculum Title",
        }),
        defineField({
          name: "curriculum",
          type: "array",
          title: "Curriculum Items",
          of: [
            defineField({
              name: "curriculumItem",
              type: "object",
              title: "Curriculum Item",
              fields: [
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                  rows: 3,
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Facilities Section
    defineField({
      name: "Facilities",
      type: "object",
      title: "Facilities Section",
      fieldset: "facilities",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Facilities Title",
        }),
        defineField({
          name: "facilities",
          type: "array",
          title: "Facilities",
          of: [
            defineField({
              name: "facilityItem",
              type: "object",
              title: "Facility Item",
              fields: [
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                  rows: 3,
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Scholarship Section
    defineField({
      name: "scholarshipSection",
      title: "Scholarship Section",
      type: "object",
      fieldset: "scholarship",
      fields: [
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({
          name: "intro",
          type: "text",
          title: "Introduction",
          rows: 3,
        }),
        defineField({
          name: "details",
          type: "text",
          title: "Details",
          rows: 3,
        }),
        defineField({ name: "impact", type: "text", title: "Impact", rows: 3 }),
        defineField({
          name: "types",
          type: "array",
          title: "Scholarship Types",
          of: [
            defineField({
              name: "scholarshipType",
              type: "object",
              title: "Type",
              fields: [
                defineField({
                  name: "icon",
                  type: "string",
                  title: "Icon (lucide name)",
                  options: {
                    list: ["GraduationCap", "BookOpenCheck", "Globe"],
                  },
                }),
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                  rows: 3,
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "image",
          type: "image",
          title: "Scholarship Image",
          options: { hotspot: true },
        }),
      ],
    }),

    // Support Section
    defineField({
      name: "support",
      type: "object",
      title: "Support Section",
      fieldset: "support",
      fields: [
        defineField({ name: "title", type: "string", title: "Support Title" }),
        defineField({
          name: "description",
          type: "text",
          title: "Support Description",
          rows: 3,
        }),
        defineField({
          name: "bank_details",
          type: "array",
          title: "Bank Details",
          of: [
            defineField({
              name: "bankDetail",
              type: "object",
              title: "Bank Detail",
              fields: [
                defineField({ name: "label", type: "string", title: "Label" }),
                defineField({ name: "value", type: "string", title: "Value" }),
              ],
            }),
          ],
        }),
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
        title: title || "📚 Untitled Hawza Page",
        subtitle: subtitle
          ? `Language: ${subtitle.toUpperCase()}`
          : "🌍 No language set",
      };
    },
  },
});
