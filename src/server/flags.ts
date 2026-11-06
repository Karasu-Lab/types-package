import { z } from "zod";

export const flagResponseSchema = z.discriminatedUnion("ok", [
    z.object({
        ok: z.literal(true),
        value: z.boolean(),
        type: z.literal("boolean"),
    }),
    z.object({ ok: z.literal(false), error: z.string() }),
]);

export type FlagResponse = z.infer<typeof flagResponseSchema>;
