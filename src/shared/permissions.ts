import { z } from "zod";

export const permissionSummarySchema = z.object({
    publicId: z.string(),
    operation: z.string(),
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
});

export type ApiKeySummary = z.infer<typeof apiKeySummarySchema>;

export const apiKeyCreatedSchema = apiKeySummarySchema.extend({
    key: z.string(),
    permissions: z.array(permissionSummarySchema),
});

export type ApiKeyCreated = z.infer<typeof apiKeyCreatedSchema>;

export const apiKeyDetailSchema = apiKeySummarySchema.extend({
    permissions_bitmask: z.string(),
});

export type ApiKeyDetail = z.infer<typeof apiKeyDetailSchema>;
