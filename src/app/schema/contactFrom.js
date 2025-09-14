const { default: z } = require("zod");

const RoleEnum = z.enum([
  "Doctor",
  "Patient",
  "Pharmacy",
  "Laboratory",
  "Other",
]);

export const contactFormSchema = z.object({
  fullname: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  role: RoleEnum,
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
