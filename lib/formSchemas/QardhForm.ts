import { z } from "zod";

export const QardhSchema = z.object({
  fullName: z.string().min(2),
  dob: z.string().min(4),
  gender: z.enum(["Male", "Female"]),
  placeOfBirth: z.string().min(2),
  nationality: z.string().min(2),
  religion: z.string().optional(),
  address: z.string().min(2),
  contact: z.string().min(10),
  // Add all other fields from academic, family, financial, summary, documents...
});

export const qardhDefaultValues = {
  fullName: "",
  dob: "",
  gender: "Male",
  placeOfBirth: "",
  nationality: "",
  religion: "",
  address: "",
  contact: "",
  // Add all default values
};
