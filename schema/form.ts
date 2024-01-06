import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(4, "Form name is required"),
  description: z.string().optional(),
  id: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  userId: z.string().optional(),
  published: z.boolean().optional(),
  content: z.string().optional(),
  visits: z.number().optional(),
  submissions: z.number().optional(),
  shareUrl: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
