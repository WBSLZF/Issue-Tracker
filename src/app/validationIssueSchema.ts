import { z } from "zod";

export const validateIssueSchema = z.object({
  title: z.string().min(1, "Title should not be empty").max(255),
  description: z
    .string()
    .min(1, { message: "Description should not be empty" })
    .max(65535),
});

export const valiedateAssigneeSchema = z.object({
  assignedToUserId: z
    .string()
    .min(1, { message: "AssignedToUserId should not be empty" })
    .max(65535)
    .optional()
    .nullable(),
  title: z.string().min(1, "Title should not be empty").max(255).optional(),
  description: z
    .string()
    .min(1, { message: "Description should not be empty" })
    .max(65535)
    .optional(),
});
