import { z } from "zod";

export const permissionSummarySchema = z.object({
    publicId: z.string(),
    numericId: z.number(),
    resource: z.string(),
    action: z.string(),
});

export type PermissionSummary = z.infer<typeof permissionSummarySchema>;

export const apiKeySummarySchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    start: z.string().nullable(),
    createdAt: z.string(),
    lastRequest: z.string().nullable(),
    permissions: z.array(permissionSummarySchema),
});

export type ApiKeySummary = z.infer<typeof apiKeySummarySchema>;

export const apiKeyCreatedSchema = apiKeySummarySchema.extend({
    key: z.string(),
});

export type ApiKeyCreated = z.infer<typeof apiKeyCreatedSchema>;
