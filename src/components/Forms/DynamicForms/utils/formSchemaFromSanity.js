import { z } from "zod";

export function formSchemaFromSanity(fields) {
  const shape = {};

  for (const field of fields) {
    const isRequired = field.required ?? false;
    const rules = field.validation ?? {};
    let schema;

    switch (field.inputType) {
      case "email":
        if (isRequired) {
          schema = z
            .string()
            .min(1, rules.customMessage || "Email is required")
            .email("Invalid email address");
        } else {
          schema = z
            .string()
            .email("Invalid email address")
            .or(z.literal(""))
            .optional();
        }
        break;

      case "number":
        schema = z.coerce.number();
        if (isRequired) {
          schema = schema.min(0, rules.customMessage || "Number is required");
        } else {
          schema = schema.optional();
        }
        break;

      case "tel":
        schema = z.string();
        if (isRequired) {
          schema = schema
            .min(1, rules.customMessage || "Phone number is required")
            .regex(
              /^\+?[0-9\s\-]{7,15}$/,
              rules.customMessage || "Invalid phone number"
            );
        } else {
          schema = z
            .string()
            .regex(
              /^\+?[0-9\s\-]{7,15}$/,
              rules.customMessage || "Invalid phone number"
            )
            .or(z.literal(""))
            .optional();
        }
        break;

      case "checkbox":
        const isCheckboxGroup =
          Array.isArray(field.options) && field.options.length > 0;

        if (isCheckboxGroup) {
          // Multiple checkboxes (e.g., select hobbies)
          schema = z.array(z.string());

          if (isRequired) {
            schema = schema.min(
              1,
              rules.customMessage || "Please select at least one option"
            );
          } else {
            schema = schema.optional();
          }
        } else {
          // Single checkbox (e.g., Agree to Terms)
          schema = z.boolean();

          if (isRequired) {
            schema = schema.refine(
              (val) => val === true,
              rules.customMessage || "This field is required"
            );
          } else {
            schema = schema.optional();
          }
        }
        break;

      case "file":
        schema = z.any();
        if (isRequired) {
          schema = schema.refine(
            (val) => val != null,
            rules.customMessage || "File is required"
          );
        } else {
          schema = schema.optional();
        }
        break;

      case "date":
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isRequired) {
          schema = z
            .string()
            .min(1, rules.customMessage || "Date is required")
            .refine(
              (val) => {
                const date = new Date(val);
                return !isNaN(date.getTime()) && date <= today;
              },
              {
                message: "Date cannot be in the future",
              }
            );
        } else {
          schema = z
            .string()
            .refine(
              (val) => {
                if (val === "") return true;
                const date = new Date(val);
                return !isNaN(date.getTime()) && date <= today;
              },
              {
                message: "Date cannot be in the future",
              }
            )
            .optional();
        }
        break;

      case "radio":
      case "select":
        schema = z.string();
        if (isRequired) {
          schema = schema.min(
            1,
            rules.customMessage || "Please select an option"
          );
        } else {
          schema = schema.optional();
        }
        break;

      default: // text, textarea, etc.
        schema = z.string();
        if (rules.minLength) {
          schema = schema.min(
            rules.minLength,
            rules.customMessage || `Minimum ${rules.minLength} characters`
          );
        }
        if (rules.maxLength) {
          schema = schema.max(
            rules.maxLength,
            rules.customMessage || `Maximum ${rules.maxLength} characters`
          );
        }
        if (isRequired) {
          schema = schema.min(
            1,
            rules.customMessage || "This field is required"
          );
        } else {
          schema = schema.optional();
        }
        break;
    }

    shape[field.name] = schema;
  }

  return z.object(shape);
}
