import { z } from "zod";

export const appAuthConfigSchema = z.object({
    registrationPath: z
        .string()
        .startsWith("/")
        .default("/.well-known/app-public-key"),
    resolutionTtlMs: z.number().int().positive().default(60_000),
});

export type AppAuthConfig = z.infer<typeof appAuthConfigSchema>;

export const appRegistrationSchema = z.object({
    appId: z.string(),
    publicKey: z.string().min(1),
});

export type AppRegistration = z.infer<typeof appRegistrationSchema>;

export const appTokenPayloadSchema = z.object({
    sub: z.string().min(1),
    jti: z.string().min(1),
    exp: z.number(),
    method: z.string(),
    path: z.string(),
    bodySha256: z.string(),
});

export type AppTokenPayload = z.infer<typeof appTokenPayloadSchema>;

export const oauthTokenClaimsSchema = z.object({
    sub: z.string().min(1),
    scope: z.string().optional(),
});

export type OAuthTokenClaims = z.infer<typeof oauthTokenClaimsSchema>;
