import { z } from "zod";

export const cdnFileSchema = z.object({
    path: z.string(),
    sha256: z.string(),
    contentType: z.string(),
    size: z.number(),
    uploaderId: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type CdnFile = z.infer<typeof cdnFileSchema>;

export const cdnFileRowSchema = z.object({
    path: z.string(),
    sha256: z.string(),
    content_type: z.string(),
    size: z.number(),
    uploader_id: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
});

export type CdnFileRow = z.infer<typeof cdnFileRowSchema>;

export interface InspectedObject {
    sha256: string;
    size: number;
    contentType: string;
    body: ArrayBuffer;
    httpMetadata: { contentType?: string } | undefined;
}
