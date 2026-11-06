import { z } from "zod";

export const sessionSourceSchema = z.enum([
    "browser",
    "desktop",
    "mobile",
    "app",
    "api-key",
]);

export type SessionSource = z.infer<typeof sessionSourceSchema>;

export const sessionDeviceSourceSchema = z.object({
    sessionId: z.string(),
    userId: z.string(),
    source: sessionSourceSchema,
});

export type SessionDeviceSource = z.infer<typeof sessionDeviceSourceSchema>;

export const authSessionSchema = z.object({
    id: z.string(),
    userId: z.string(),
    ipAddress: z.string().nullable(),
    userAgent: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    expiresAt: z.string(),
});

export type AuthSession = z.infer<typeof authSessionSchema>;

export const activeSessionSchema = authSessionSchema.extend({
    source: sessionSourceSchema.nullable(),
    current: z.boolean(),
});

export type ActiveSession = z.infer<typeof activeSessionSchema>;
