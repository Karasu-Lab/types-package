import { z } from "zod";

export const minecraftProfileSchema = z.object({
    id: z.string(),
    name: z.string(),
    skinTextureUrl: z.string().nullable(),
});

export type MinecraftProfile = z.infer<typeof minecraftProfileSchema>;

export const xboxProfileSchema = z.object({
    gamertag: z.string().nullable(),
    avatarUrl: z.string().nullable(),
});

export type XboxProfile = z.infer<typeof xboxProfileSchema>;

export const xboxTokenSchema = z.object({
    token: z.string(),
    userHash: z.string(),
    xuid: z.string().nullable(),
    gamertag: z.string().nullable(),
});

export type XboxToken = z.infer<typeof xboxTokenSchema>;

export const xboxLinkTokensSchema = z.object({
    accessToken: z.string(),
    refreshToken: z.string().nullable(),
    accessTokenExpiresAt: z.date().nullable(),
});

export type XboxLinkTokens = z.infer<typeof xboxLinkTokensSchema>;

export const xboxLinkExchangeSchema = z.object({
    tokens: xboxLinkTokensSchema.nullable(),
    error: z.string().nullable(),
    errorDescription: z.string().nullable(),
});

export type XboxLinkExchange = z.infer<typeof xboxLinkExchangeSchema>;

export const firebaseUserInputSchema = z.object({
    email: z.string().optional(),
    emailVerified: z.boolean().optional(),
    displayName: z.string().optional(),
});

export type FirebaseUserInput = z.infer<typeof firebaseUserInputSchema>;

export const rateLimitVerdictSchema = z.object({
    allowed: z.boolean(),
    retryAfterSeconds: z.number(),
});

export type RateLimitVerdict = z.infer<typeof rateLimitVerdictSchema>;
