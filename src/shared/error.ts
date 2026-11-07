import { z } from "zod";

export const issueSchema = z.object({
    code: z.string(),
    path: z.array(z.union([z.string(), z.number()])),
    message: z.string(),
});

export type IssueData = z.infer<typeof issueSchema>;

export const apiErrorBodySchema = z.object({
    error: z.string(),
    issues: z.array(issueSchema).optional(),
});

export type ApiErrorBody = z.infer<typeof apiErrorBodySchema>;
