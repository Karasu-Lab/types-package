import { z } from "zod";

export const githubWebhookInstallationSchema = z.object({
    id: z.number(),
});

export type GitHubWebhookInstallation = z.infer<
    typeof githubWebhookInstallationSchema
>;

export const githubWebhookRepositorySchema = z.object({
    id: z.number(),
    full_name: z.string(),
});

export type GitHubWebhookRepository = z.infer<
    typeof githubWebhookRepositorySchema
>;

export const githubPushWebhookPayloadSchema = z.object({
    ref: z.string(),
    before: z.string(),
    after: z.string(),
    installation: githubWebhookInstallationSchema,
    repository: githubWebhookRepositorySchema,
});

export type GitHubPushWebhookPayload = z.infer<
    typeof githubPushWebhookPayloadSchema
>;

export const githubInstallationWebhookActionSchema = z.enum([
    "created",
    "deleted",
    "suspend",
    "unsuspend",
    "new_permissions_accepted",
]);

export type GitHubInstallationWebhookAction = z.infer<
    typeof githubInstallationWebhookActionSchema
>;

export const githubInstallationWebhookPayloadSchema = z.object({
    action: githubInstallationWebhookActionSchema,
    installation: githubWebhookInstallationSchema.extend({
        account: z.object({
            id: z.number(),
            login: z.string(),
            type: z.string(),
        }),
    }),
    repository: githubWebhookRepositorySchema.optional(),
});

export type GitHubInstallationWebhookPayload = z.infer<
    typeof githubInstallationWebhookPayloadSchema
>;

export const githubInstallationRepositoriesWebhookActionSchema = z.enum([
    "added",
    "removed",
]);

export type GitHubInstallationRepositoriesWebhookAction = z.infer<
    typeof githubInstallationRepositoriesWebhookActionSchema
>;

export const githubInstallationRepositoriesWebhookPayloadSchema = z.object({
    action: githubInstallationRepositoriesWebhookActionSchema,
    installation: githubWebhookInstallationSchema,
    repositories_added: z.array(githubWebhookRepositorySchema),
    repositories_removed: z.array(githubWebhookRepositorySchema),
});

export type GitHubInstallationRepositoriesWebhookPayload = z.infer<
    typeof githubInstallationRepositoriesWebhookPayloadSchema
>;

export const githubBotWebhookPayloadSchema = z.union([
    githubPushWebhookPayloadSchema,
    githubInstallationWebhookPayloadSchema,
    githubInstallationRepositoriesWebhookPayloadSchema,
]);

export type GitHubBotWebhookPayload = z.infer<
    typeof githubBotWebhookPayloadSchema
>;
