import { z } from "zod";

export const authConfigSchema = z.object({
    webauthn: z.object({
        rpId: z.string(),
        rpName: z.string(),
        expectedOrigins: z.array(z.string()),
    }),
    trustedOrigins: z.array(z.string()),
    turnstileHostnames: z.array(z.string()),
    batchWorks: z.object({
        maxConcurrency: z.number().int().positive(),
    }),
});

export type AuthConfig = z.infer<typeof authConfigSchema>;
