import { defineField, defineType, defineArrayMember } from "sanity";
import { PiggyBank } from "lucide-react";

export const bankInfo = defineType({
  name: "bankInfo",
  title: "Bank Info",
  type: "document",
  icon: PiggyBank,

  fields: [
    defineField({
      name: "bank",
      title: "Bank Name",
      type: "string",
      description: "The official name of the bank",
      validation: (Rule) => Rule.required().error("Bank name is required"),
    }),
    defineField({
      name: "branch",
      title: "Branch Name (Optional)",
      type: "string",
      description: "Specific branch if applicable (optional)",
    }),
    defineField({
      name: "accountName",
      title: "Account Holder Name",
      type: "string",
      description: "Name of the person or organization holding the account",
      validation: (Rule) =>
        Rule.required().error("Account holder name is required"),
    }),
    defineField({
      name: "accounts",
      title: "Account Numbers",
      type: "array",
      description: "Add one or more accounts associated with this bank",
      of: [
        defineArrayMember({
          type: "object",
          name: "bankAccount",
          title: "Bank Account",
          fields: [
            defineField({
              name: "label",
              title: "Currency / Label (e.g., KES, USD)",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Currency label is required"),
            }),
            defineField({
              name: "number",
              title: "Account Number",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Account number is required"),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "number",
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.min(1).error("At least one account number is required"),
    }),
  ],

  preview: {
    select: {
      title: "bank",
      subtitle: "accountName",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Unnamed Bank",
        subtitle: subtitle
          ? `Account Holder: ${subtitle}`
          : "No account holder",
      };
    },
  },
});
