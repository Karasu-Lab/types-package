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

export interface AppTokenPayload {
    method?: string;
    path?: string;
    bodySha256?: string;
    [key: string]: unknown;
}
