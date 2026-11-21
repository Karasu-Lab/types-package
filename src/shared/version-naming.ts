import { z } from "zod";

export const versionNamingPatternSchema = z.string().min(1);

export type VersionNamingPattern = z.infer<typeof versionNamingPatternSchema>;

export const versionNamingDeclarationSchema = z.object({
    pattern: versionNamingPatternSchema.default("{version}-{shortCommitHash}"),
});

export type VersionNamingDeclaration = z.infer<
    typeof versionNamingDeclarationSchema
>;
