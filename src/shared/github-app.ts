import { z } from "zod";

export const githubAppInstallationTargetTypeSchema = z.enum([
    "user",
    "organization",
]);

export type GitHubAppInstallationTargetType = z.infer<
    typeof githubAppInstallationTargetTypeSchema
>;

export const githubAppInstallationTargetSchema = z.object({
    type: githubAppInstallationTargetTypeSchema,
    id: z.number(),
    login: z.string(),
});

export type GitHubAppInstallationTarget = z.infer<
    typeof githubAppInstallationTargetSchema
>;

export const githubAppInstallationStatusSchema = z.enum([
    "active",
    "suspended",
    "deleted",
]);

export type GitHubAppInstallationStatus = z.infer<
    typeof githubAppInstallationStatusSchema
>;

export const githubAppInstallationSchema = z.object({
    id: z.number(),
    target: githubAppInstallationTargetSchema,
    status: githubAppInstallationStatusSchema,
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type GitHubAppInstallation = z.infer<typeof githubAppInstallationSchema>;

export const githubAppInstallationStateSchema = z.object({
    installed: z.boolean(),
    installation: githubAppInstallationSchema.nullable(),
});

export type GitHubAppInstallationState = z.infer<
    typeof githubAppInstallationStateSchema
>;
