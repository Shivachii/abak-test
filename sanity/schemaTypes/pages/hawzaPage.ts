import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const hawzaPage = defineType({
  name: "hawzaPage",
  title: "Hawza Page",
  type: "document",
  icon: DocumentTextIcon,
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
      name: "title",
      type: "string",
      title: "Page Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "text",
      title: "Subtitle",
    }),
    defineField({
      name: "about",
      type: "object",
      title: "About Section",
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "subtitle", type: "string", title: "Subtitle" }),
        defineField({
          name: "description",
          type: "text",
          title: "Description",
        }),
      ],
    }),
    defineField({
      name: "establishment",
      type: "object",
      title: "Establishment",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Mission, Vision & Goal Title",
        }),
        defineField({
          name: "vision",
          type: "object",
          title: "Vision",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
          ],
        }),
        defineField({
          name: "mission",
          type: "object",
          title: "Mission",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
          ],
        }),
        defineField({
          name: "impact",
          type: "object",
          title: "Impact",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "admissionsSection",
      type: "object",
      title: "Admissions Section",
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
              fields: [
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "studentsSection",
      type: "object",
      title: "Students Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Students Section Title",
        }),
        defineField({
          name: "students",
          type: "array",
          title: "Student Profiles",
          of: [
            defineField({
              name: "studentProfile",
              type: "object",
              fields: [
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "curriculumSection",
      type: "object",
      title: "Curriculum Section",
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
              fields: [
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "Facilities",
      type: "object",
      title: "Facilities Section",
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
              fields: [
                defineField({ name: "title", type: "string", title: "Title" }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Description",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "scholarshipSection",
      title: "Scholarship Section",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({ name: "intro", type: "text", title: "Introduction" }),
        defineField({ name: "details", type: "text", title: "Details" }),
        defineField({ name: "impact", type: "text", title: "Impact" }),
        defineField({
          name: "types",
          type: "array",
          title: "Scholarship Types",
          of: [
            defineField({
              name: "scholarshipType",
              type: "object",
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
    defineField({
      name: "support",
      type: "object",
      title: "Support Section",
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({
          name: "description",
          type: "text",
          title: "Description",
        }),
        defineField({
          name: "bank_details",
          type: "array",
          title: "Bank Details",
          of: [
            defineField({
              name: "bankDetail",
              type: "object",
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
      title: "name",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled",
        subtitle: subtitle?.toUpperCase(),
      };
    },
  },
});
