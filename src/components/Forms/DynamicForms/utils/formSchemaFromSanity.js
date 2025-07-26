import { z } from "zod";

export function formSchemaFromSanity(fields) {
  const shape = {};

  for (const field of fields) {
    const isRequired = field.required ?? false;
    let schema;

    switch (field.inputType) {
      case "email":
        schema = z.string();
        if (isRequired) {
          schema = schema
            .min(1, "Email is required")
            .email("Invalid email address");
        } else {
          schema = schema.email("Invalid email address").or(z.literal(""));
        }
        break;

      case "number":
        schema = z.coerce.number();
        if (isRequired) {
          schema = schema.min(0, "Number is required");
        } else {
          schema = schema.optional();
        }
        break;

      case "tel":
        schema = z.string();
        if (isRequired) {
          schema = schema
            .min(1, "Phone number is required")
            .regex(/^\+?[0-9\s\-]{7,15}$/, "Invalid phone number");
        } else {
          schema = schema
            .regex(/^\+?[0-9\s\-]{7,15}$/, "Invalid phone number")
            .or(z.literal(""));
        }
        break;

      case "checkbox":
        schema = z.boolean();
        if (isRequired) {
          schema = schema.refine(
            (val) => val === true,
            "This field is required"
          );
        } else {
          schema = schema.optional();
        }
        break;

      case "file":
        schema = z.any();
        if (isRequired) {
          schema = schema.refine((val) => val != null, "File is required");
        } else {
          schema = schema.optional();
        }
        break;

      case "date":
        schema = z.string();
        if (isRequired) {
          schema = schema.min(1, "Date is required");
        } else {
          schema = schema.optional();
        }
        break;

      case "radio":
      case "select":
        schema = z.string();
        if (isRequired) {
          schema = schema.min(1, "Please select an option");
        } else {
          schema = schema.optional();
        }
        break;

      default: // text, textarea
        schema = z.string();
        if (isRequired) {
          schema = schema.min(1, "This field is required");
        } else {
          schema = schema.optional();
        }
    }

    shape[field.name] = schema;
  }

  return z.object(shape);
}
