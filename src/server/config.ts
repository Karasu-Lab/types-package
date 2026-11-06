import { z } from "zod";

export const authConfigSchema = z.object({
    webauthn: z.object({
        rpId: z.string(),
        rpName: z.string(),
        expectedOrigins: z.array(z.string()),
    }),
    trustedOrigins: z.array(z.string()),
    turnstileHostnames: z.array(z.string()),
});

export type AuthConfig = z.infer<typeof authConfigSchema>;
