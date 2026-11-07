import { z } from "zod";

export const signingKeyMaterialResponseSchema = z.object({
    userId: z.string(),
    privateKey: z.string(),
    publicKey: z.string(),
    committerName: z.string(),
    committerEmail: z.string(),
});

export type SigningKeyMaterialResponse = z.infer<
    typeof signingKeyMaterialResponseSchema
>;
