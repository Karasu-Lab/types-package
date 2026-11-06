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

export const xboxTokenResponseSchema = z.object({
    Token: z.string().optional(),
    DisplayClaims: z
        .object({
            xui: z.array(z.record(z.string(), z.string())).optional(),
        })
        .optional(),
});

export type XboxTokenResponse = z.infer<typeof xboxTokenResponseSchema>;

export const xboxErrorResponseSchema = z.object({
    XErr: z.union([z.number(), z.string()]).optional(),
    Message: z.string().optional(),
});

export type XboxErrorResponse = z.infer<typeof xboxErrorResponseSchema>;

export const microsoftTokenResponseSchema = z.object({
    access_token: z.string(),
    refresh_token: z.string().optional(),
    expires_in: z.number().optional(),
});

export type MicrosoftTokenResponse = z.infer<
    typeof microsoftTokenResponseSchema
>;

export const xboxProfileResponseSchema = z.object({
    profileUsers: z
        .array(
            z.object({
                settings: z
                    .array(
                        z.object({
                            id: z.string().optional(),
                            value: z.string().nullable().optional(),
                        }),
                    )
                    .optional(),
            }),
        )
        .optional(),
});

export type XboxProfileResponse = z.infer<typeof xboxProfileResponseSchema>;

export const minecraftLoginResponseSchema = z.object({
    access_token: z.string().min(1),
});

export type MinecraftLoginResponse = z.infer<
    typeof minecraftLoginResponseSchema
>;

export const minecraftProfileResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    skins: z
        .array(
            z.object({
                state: z.string().optional(),
                url: z.string().optional(),
            }),
        )
        .optional(),
});

export type MinecraftProfileResponse = z.infer<
    typeof minecraftProfileResponseSchema
>;

export const xboxLinkStatePayloadSchema = z.object({
    userId: z.string().min(1),
    exp: z.number(),
});

export type XboxLinkStatePayload = z.infer<typeof xboxLinkStatePayloadSchema>;
