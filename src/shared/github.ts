import { z } from "zod";

export const githubUserSchema = z.object({
    id: z.number(),
    login: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    avatarUrl: z.string(),
    htmlUrl: z.string(),
});

export type GitHubUser = z.infer<typeof githubUserSchema>;

export const githubRepositorySchema = z.object({
    id: z.number(),
    name: z.string(),
    fullName: z.string(),
    private: z.boolean(),
    htmlUrl: z.string(),
    description: z.string().nullable(),
    language: z.string().nullable(),
    updatedAt: z.string(),
});

export type GitHubRepository = z.infer<typeof githubRepositorySchema>;
