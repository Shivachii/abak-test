import { defineType, defineField } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Contact Site Settings",
  type: "document", // singleton
  fields: [
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        defineField({
          name: "socialLink",
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "url", title: "URL" },
          ],
        }),
      ],
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Info",
      type: "object",
      fields: [
        { name: "email", type: "string", title: "Email" },
        { name: "phone", type: "string", title: "Phone" },
      ],
    }),
  ],
  preview: {
    select: {
      email: "contactInfo.email",
      phone: "contactInfo.phone",
    },
    prepare({ email, phone }) {
      return {
        title: "Site Settings",
        subtitle: `Email: ${email ?? "—"} | Phone: ${phone ?? "—"}`,
      };
    },
  },
});
