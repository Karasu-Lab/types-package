import { z } from "zod";
import { uploadIntentPayloadSchema } from "../shared/upload";

export const signedUploadIntentSchema = uploadIntentPayloadSchema.extend({
    exp: z.number().int(),
});

export type SignedUploadIntent = z.infer<typeof signedUploadIntentSchema>;

export const clientUploadIntentPayloadSchema = uploadIntentPayloadSchema.extend(
    {
        clientId: z.string(),
    },
);

export type ClientUploadIntentPayload = z.infer<
    typeof clientUploadIntentPayloadSchema
>;
