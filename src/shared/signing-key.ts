import { z } from "zod";

export const signingKeyStatusResponseSchema = z.object({
    id: z.string(),
    publicKeyId: z.string(),
    name: z.string(),
    enabled: z.boolean(),
    registeredOnGitHub: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type SigningKeyStatusResponse = z.infer<
    typeof signingKeyStatusResponseSchema
>;

export const generateSigningKeyRequestSchema = z.object({
    name: z.string().trim().min(1).max(255),
});

export type GenerateSigningKeyRequest = z.infer<
    typeof generateSigningKeyRequestSchema
>;

export const generateSigningKeyResponseSchema =
    signingKeyStatusResponseSchema.extend({
        publicKey: z.string(),
        privateKey: z.string(),
    });

export type GenerateSigningKeyResponse = z.infer<
    typeof generateSigningKeyResponseSchema
>;

export const rotateSigningKeyResponseSchema =
    signingKeyStatusResponseSchema.extend({
        publicKey: z.string(),
        privateKey: z.string(),
    });

export type RotateSigningKeyResponse = z.infer<
    typeof rotateSigningKeyResponseSchema
>;

export const renameSigningKeyRequestSchema = z.object({
    name: z.string().trim().min(1).max(255),
});

export type RenameSigningKeyRequest = z.infer<
    typeof renameSigningKeyRequestSchema
>;

export const setSigningKeyEnabledRequestSchema = z.object({
    enabled: z.boolean(),
});

export type SetSigningKeyEnabledRequest = z.infer<
    typeof setSigningKeyEnabledRequestSchema
>;
