import { z } from "zod";

export const sessionSourceSchema = z.string().min(1);

export type SessionSource = z.infer<typeof sessionSourceSchema>;

export const sessionSourceBuildSchema = z
    .object({ providerId: z.string().min(1), sessionId: z.string().min(1) })
    .transform(
        ({ providerId, sessionId }): SessionSource =>
            `${providerId}-${sessionId}`,
    );

export const sessionSourceParseSchema = z
    .object({ source: sessionSourceSchema, sessionId: z.string().min(1) })
    .transform(({ source, sessionId }, ctx) => {
        const suffix = `-${sessionId}`;
        if (!source.endsWith(suffix) || source.length === suffix.length) {
            ctx.issues.push({
                code: "custom",
                message: "The source was not built for this session",
                input: source,
            });
            return z.NEVER;
        }
        return { providerId: source.slice(0, -suffix.length), sessionId };
    });

export const sessionWithSourceSchema = z.object({
    session: z.looseObject({ id: z.string().min(1) }),
    user: z.looseObject({ id: z.string().min(1) }),
    source: sessionSourceSchema.nullable(),
});

export type SessionWithSource = z.infer<typeof sessionWithSourceSchema>;

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
