import { defineField, defineType } from "sanity";

export const objectivesSettings = defineType({
  name: "objectivesSettings",
  title: "Objectives Settings",
  type: "document",
  // __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Our Objectives",
    }),
    defineField({
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "defaultTab",
      title: "Default Active Tab",
      type: "reference",
      to: [{ type: "objective" }],
      description: "Which objective should be active by default",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Objectives Section Settings",
      };
    },
  },
});
