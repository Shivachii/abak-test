import { SettingsIcon } from "lucide-react";
import { defineType, defineField, defineArrayMember } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Contact & Site Settings",
  type: "document",
  icon: SettingsIcon,

  fields: [
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      description: "Add links to your official social media platforms.",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          title: "Social Link",
          fields: [
            defineField({
              name: "platform",
              title: "Platform Name",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Platform is required"),
            }),
            defineField({
              name: "url",
              title: "Platform URL",
              type: "url",
              validation: (Rule) =>
                Rule.required()
                  .uri({
                    scheme: ["https"],
                  })
                  .error("A valid HTTPS URL is required"),
            }),
          ],
          preview: {
            select: {
              title: "platform",
              subtitle: "url",
            },
          },
        }),
      ],
    }),

    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        defineField({
          name: "email",
          title: "Email Address",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Email address is required"),
        }),
        defineField({
          name: "phone",
          title: "Phone Number",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Phone number is required"),
        }),
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
        subtitle: `Email: ${email || "—"} | Phone: ${phone || "—"}`,
      };
    },
  },
});
