import { z } from "zod";

export const pendingAddAccountSchema = z.object({
    previousSessionToken: z.string().nullable(),
    switchToNewAccount: z.boolean(),
});

export type PendingAddAccount = z.infer<typeof pendingAddAccountSchema>;
