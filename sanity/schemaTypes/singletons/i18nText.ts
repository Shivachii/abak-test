import { defineType } from "sanity";

export const i18nText = defineType({
  name: "i18nText",
  title: "Localized Text",
  type: "object",
  fields: [
    { name: "en", title: "English", type: "string" },
    { name: "ar", title: "Arabic", type: "string" },
    { name: "sw", title: "Swahili", type: "string" },
    { name: "fa", title: "Farsi", type: "string" },
  ],
});
