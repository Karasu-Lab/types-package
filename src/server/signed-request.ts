import { z } from "zod";

export const signedAuthRequestSchema = z.object({
    method: z.string(),
    url: z.string(),
    headers: z.record(z.string(), z.string()),
    body: z.string().optional(),
});

export type SignedAuthRequest = z.infer<typeof signedAuthRequestSchema>;

export const signedAuthRequestOptionsSchema = z.object({
    method: z.string().optional(),
    body: z.string().optional(),
    cookie: z.string().nullable().optional(),
    origin: z.string().optional(),
    timestamp: z.number().optional(),
});

export type SignedAuthRequestOptions = z.infer<
    typeof signedAuthRequestOptionsSchema
>;
