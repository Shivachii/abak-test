import { z } from "zod";
export const formSchema = z.object({
  name: z.string().min(2),
  dob: z.string().min(4),
  gender: z.enum(["Male", "Female"]),
  idNumber: z.string().min(4),
  nationality: z.string().min(2),

  email: z.string().email(),
  phone: z.string().min(10),
  city: z.string().min(2),
  county: z.string().min(2),

  education: z.string().min(2),
  institution: z.string().min(2),
  year: z.string().min(2),

  message: z.string().min(10),
});
