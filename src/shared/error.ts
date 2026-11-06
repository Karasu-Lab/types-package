import { z } from "zod";

export const apiErrorBodySchema = z.object({
    error: z.string(),
});

export type ApiErrorBody = z.infer<typeof apiErrorBodySchema>;
