import { z } from "zod";

export const DEFAULT_VERSION_NAMING_PATTERN = "{version}-{shortCommitHash}";

export const versionNamingPatternSchema = z.string().min(1);

export type VersionNamingPattern = z.infer<typeof versionNamingPatternSchema>;

export const versionNamingDeclarationSchema = z.object({
    pattern: versionNamingPatternSchema.default(DEFAULT_VERSION_NAMING_PATTERN),
});

export type VersionNamingDeclaration = z.infer<
    typeof versionNamingDeclarationSchema
>;
