import { z } from "zod";
import { versionNamingDeclarationSchema } from "./version-naming";

export const linkPackageRequestSchema = z.object({
    repository: z.string().trim().min(1),
});

export type LinkPackageRequest = z.infer<typeof linkPackageRequestSchema>;

export const linkedPackageSchema = z.object({
    repository: z.string(),
    submodulePath: z.string(),
    versionNaming: versionNamingDeclarationSchema,
    enabled: z.boolean(),
    lastPointer: z.string().nullable(),
});

export type LinkedPackage = z.infer<typeof linkedPackageSchema>;

export const setLinkedPackageEnabledRequestSchema = z.object({
    enabled: z.boolean(),
});

export type SetLinkedPackageEnabledRequest = z.infer<
    typeof setLinkedPackageEnabledRequestSchema
>;
