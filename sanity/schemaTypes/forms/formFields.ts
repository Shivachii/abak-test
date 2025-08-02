import { defineType, defineField } from "sanity";
import { formFieldNameOptions } from "../../constants/sharedFormConstants";

// Enhanced form field object type
export const formField = defineType({
  name: "formField",
  title: "Form Field",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Field Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "name",
      title: "Field Name (Key)",
      type: "string",
      description: "Used as the key in form submissions.",
      validation: (Rule) => Rule.required(),
      options: {
        list: formFieldNameOptions,
      },
    }),

    defineField({
      name: "inputType",
      title: "Input Type",
      type: "string",
      initialValue: "text",
      options: {
        layout: "dropdown",
        list: [
          { title: "Text", value: "text" },
          { title: "Email", value: "email" },
          { title: "Textarea", value: "textarea" },
          { title: "Select", value: "select" },
          { title: "Checkbox", value: "checkbox" },
          { title: "Radio", value: "radio" },
          { title: "Date", value: "date" },
          { title: "Phone", value: "tel" },
          { title: "Number", value: "number" },
          { title: "File upload", value: "file" },
          { title: "Checkbox Group", value: "checkboxGroup" },
          { title: "Address", value: "address" },
          { title: "Person Details", value: "personDetails" },
          { title: "Financial Details", value: "financialDetails" },
          { title: "Academic Details", value: "academicDetails" },
          { title: "Document Checklist", value: "documentChecklist" },
          { title: "Signature", value: "signature" },
          { title: "Currency", value: "currency" },
          { title: "Yes/No", value: "yesNo" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Basic field properties
    defineField({
      name: "placeholder",
      title: "Placeholder Text",
      type: "string",
    }),

    defineField({
      name: "required",
      title: "Is this field required?",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "description",
      title: "Field Description/Help Text",
      type: "text",
    }),

    // Options for select, radio, checkbox
    defineField({
      name: "options",
      title: "Options (for Select, Radio, or Checkbox)",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) =>
        Boolean(
          !["select", "checkbox", "radio", "checkboxGroup", "yesNo"].includes(
            parent?.inputType || ""
          )
        ),
    }),

    // File upload specific
    defineField({
      name: "multiple",
      title: "Allow multiple files?",
      type: "boolean",
      initialValue: false,
      hidden: ({ parent }) => parent.inputType !== "file",
    }),

    defineField({
      name: "maxFiles",
      title: "Max number of files",
      type: "number",
      description: "Leave empty for unlimited",
      hidden: ({ parent }) => parent.inputType !== "file" || !parent.multiple,
    }),

    defineField({
      name: "acceptedFileTypes",
      title: "Accepted File Types",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) => Boolean(parent?.inputType !== "file"),
      options: {
        list: [
          { title: "PDF", value: ".pdf" },
          { title: "Images", value: "image/*" },
          { title: "Word Documents", value: ".doc,.docx" },
          { title: "Excel", value: ".xls,.xlsx" },
          { title: "All Files", value: "*" },
        ],
      },
    }),

    // Conditional logic
    defineField({
      name: "conditionalLogic",
      title: "Conditional Logic",
      type: "object",
      fields: [
        defineField({
          name: "enabled",
          title: "Enable Conditional Logic",
          description:
            "Example : If user selects Yes in a field whether another question should pop up",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "conditions",
          title: "Show this field when:",
          type: "array",
          hidden: ({ parent }) => Boolean(!parent?.enabled),
          of: [
            defineField({
              name: "condition",
              type: "object",
              fields: [
                defineField({
                  name: "fieldName",
                  title: "Field Name",
                  type: "string",
                  description: "The field name to check",
                }),
                defineField({
                  name: "operator",
                  title: "Operator",
                  type: "string",
                  options: {
                    list: [
                      { title: "Equals", value: "equals" },
                      { title: "Not Equals", value: "notEquals" },
                      { title: "Contains", value: "contains" },
                      { title: "Greater Than", value: "greaterThan" },
                      { title: "Less Than", value: "lessThan" },
                      { title: "Is Empty", value: "isEmpty" },
                      { title: "Is Not Empty", value: "isNotEmpty" },
                    ],
                  },
                }),
                defineField({
                  name: "value",
                  title: "Value",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Validation rules
    defineField({
      name: "validation",
      title: "Validation Rules",
      type: "object",
      fields: [
        defineField({
          name: "minLength",
          title: "Minimum Length",
          type: "number",
          hidden: ({ parent }) =>
            Boolean(
              !["text", "textarea", "email"].includes(parent?.inputType || "")
            ),
        }),
        defineField({
          name: "maxLength",
          title: "Maximum Length",
          type: "number",
          hidden: ({ parent }) =>
            Boolean(
              !["text", "textarea", "email"].includes(parent?.inputType || "")
            ),
        }),

        defineField({
          name: "customMessage",
          title: "Custom Validation Message",
          type: "string",
        }),
      ],
    }),

    // Layout and styling
    defineField({
      name: "layout",
      title: "Field Layout",
      type: "object",
      fields: [
        defineField({
          name: "width",
          title: "Field Width",
          type: "string",
          options: {
            list: [
              { title: "Full Width", value: "full" },
              { title: "Half Width", value: "half" },
              { title: "Third Width", value: "third" },
              { title: "Quarter Width", value: "quarter" },
            ],
          },
          initialValue: "full",
        }),
      ],
    }),

    // Specific field configurations
    defineField({
      name: "personDetails",
      title: "Person Details Configuration",
      type: "object",
      hidden: ({ parent }) => Boolean(parent?.inputType !== "personDetails"),
      fields: [
        defineField({
          name: "includeFields",
          title: "Include Fields",
          type: "array",
          of: [{ type: "string" }],
          options: {
            list: [
              { title: "Full Name", value: "fullName" },
              { title: "Place of Residence", value: "placeOfResidence" },
              { title: "Occupation", value: "occupation" },
              { title: "Contact Number", value: "contactNumber" },
              { title: "Email Address", value: "email" },
              { title: "Relationship", value: "relationship" },
            ],
          },
        }),
      ],
    }),

    defineField({
      name: "addressConfig",
      title: "Address Configuration",
      type: "object",
      hidden: ({ parent }) => Boolean(parent?.inputType !== "address"),
      fields: [
        defineField({
          name: "includeFields",
          title: "Include Fields",
          type: "array",
          of: [{ type: "string" }],
          options: {
            list: [
              { title: "Street Address", value: "street" },
              { title: "City", value: "city" },
              { title: "State/County", value: "state" },
              { title: "Postal Code", value: "postalCode" },
              { title: "Country", value: "country" },
            ],
          },
        }),
      ],
    }),

    defineField({
      name: "currencyConfig",
      title: "Currency Configuration",
      type: "object",
      hidden: ({ parent }) => Boolean(parent?.inputType !== "currency"),
      fields: [
        defineField({
          name: "currency",
          title: "Currency",
          type: "string",
          options: {
            list: [
              { title: "USD", value: "USD" },
              { title: "KES", value: "KES" },
              { title: "EUR", value: "EUR" },
              { title: "GBP", value: "GBP" },
            ],
          },
          initialValue: "KES",
        }),
        defineField({
          name: "showSymbol",
          title: "Show Currency Symbol",
          type: "boolean",
          initialValue: true,
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "label",
      subtitle: "inputType",
      required: "required",
    },
    prepare({ title, subtitle, required }) {
      return {
        title: title || "Untitled Field",
        subtitle: `${subtitle || "text"}${required ? " (Required)" : ""}`,
      };
    },
  },
});
