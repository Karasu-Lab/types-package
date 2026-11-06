import { z } from "zod";

export const sha256Schema = z.string().regex(/^[0-9a-f]{64}$/);

export const imageContentTypeSchema = z.enum([
    "image/jpeg",
    "image/png",
    "image/webp",
]);

export type ImageContentType = z.infer<typeof imageContentTypeSchema>;

export const uploadVerifyRequestSchema = z.object({
    path: z.string(),
    sha256: z.string(),
    contentType: z.string(),
    size: z.number(),
    uploaderId: z.string().optional(),
});

export type UploadVerifyRequest = z.infer<typeof uploadVerifyRequestSchema>;

export const verifiedUploadSchema = z.object({
    url: z.string(),
    sha256: z.string(),
    contentType: z.string(),
    size: z.number(),
});

export type VerifiedUpload = z.infer<typeof verifiedUploadSchema>;

export const uploadStatusSchema = z.object({
    valid: z.literal(true),
    url: z.string(),
    sha256: z.string().optional(),
    contentType: z.string().optional(),
    size: z.number().optional(),
});

export type UploadStatus = z.infer<typeof uploadStatusSchema>;

export const firebasePhotoResultSchema = z.object({
    linked: z.boolean(),
    previousPhotoURL: z.string().nullable(),
});

export type FirebasePhotoResult = z.infer<typeof firebasePhotoResultSchema>;

export const uploadIntentPayloadSchema = z.object({
    userId: z.string().min(1),
    path: z.string().min(1),
    sha256: sha256Schema,
    contentType: z.string().min(1),
    size: z.number().int().positive(),
});

export type UploadIntentPayload = z.infer<typeof uploadIntentPayloadSchema>;

export const intentTokenBodySchema = z.object({
    intent: z.string().min(1),
});

export type IntentTokenBody = z.infer<typeof intentTokenBodySchema>;

export const iconFileValidationErrorSchema = z.enum([
    "unsupported_media_type",
    "payload_too_large",
]);

export type IconFileValidationError = z.infer<
    typeof iconFileValidationErrorSchema
>;

export const preparedIconUploadSchema = z.object({
    uploadUrl: z.string(),
    intent: z.string(),
});

export type PreparedIconUpload = z.infer<typeof preparedIconUploadSchema>;

export const completeIconUploadResultSchema = z.discriminatedUnion("ok", [
    z.object({ ok: z.literal(true), photoURL: z.string() }),
    z.object({
        ok: z.literal(false),
        error: z.enum(["invalid_intent", "upload_verification_failed"]),
    }),
]);

export type CompleteIconUploadResult = z.infer<
    typeof completeIconUploadResultSchema
>;
