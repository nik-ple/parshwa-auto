import z from "zod";

export const leadFormSchema = z.object({
  name:  z.string().min(2,  "Name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  brand: z.string().min(1,  "Please select a brand"),
  model: z.string().min(1,  "Model is required"),
  year:  z.string().min(1,  "Year is required"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;