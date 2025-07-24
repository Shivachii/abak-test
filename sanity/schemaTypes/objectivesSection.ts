import { Layers3 } from "lucide-react";
import { defineType, defineField } from "sanity";

export const objectivesSection = defineType({
  name: "objectivesSection",
  title: "Objectives Section",
  type: "document",
  icon: Layers3,
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "objectives",
      title: "Objectives",
      type: "array",
      of: [{ type: "objectiveItem" }],
    }),
  ],
});
