import { z } from "zod";

export const accountSummarySchema = z.object({
    uid: z.string(),
    sessionToken: z.string(),
    displayName: z.string().nullable(),
    email: z.string().nullable(),
    photoURL: z.string().nullable(),
    addedAt: z.string(),
});

export type AccountSummary = z.infer<typeof accountSummarySchema>;

export const listAccountsResultSchema = z.object({
    activeUid: z.string().nullable(),
    accounts: z.array(accountSummarySchema),
});

export type ListAccountsResult = z.infer<typeof listAccountsResultSchema>;

export const sessionUserSchema = z.object({
    id: z.string(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    image: z.string().nullable(),
});

export type SessionUser = z.infer<typeof sessionUserSchema>;

export const deviceSessionSchema = z.object({
    session: z.object({
        token: z.string(),
        createdAt: z.string(),
    }),
    user: z.object({
        id: z.string(),
        name: z.string().nullable(),
        email: z.string().nullable(),
        image: z.string().nullable(),
    }),
});

export type DeviceSession = z.infer<typeof deviceSessionSchema>;

export const sessionTokenBodySchema = z.object({
    sessionToken: z.string().min(1),
});

export type SessionTokenBody = z.infer<typeof sessionTokenBodySchema>;
