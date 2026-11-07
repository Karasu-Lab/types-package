import { z } from "zod";

export const startNpmSetupRequestSchema = z.object({
    organizationId: z.string().min(1),
    name: z.string().trim().min(1).max(255),
});

export type StartNpmSetupRequest = z.infer<typeof startNpmSetupRequestSchema>;

export const npmSetupRepositorySchema = z.object({
    id: z.number(),
    name: z.string(),
    fullName: z.string(),
    htmlUrl: z.string(),
});

export type NpmSetupRepository = z.infer<typeof npmSetupRepositorySchema>;

export const npmSetupResultSchema = z.object({
    npmRepository: npmSetupRepositorySchema,
    templateRepository: npmSetupRepositorySchema,
});

export type NpmSetupResult = z.infer<typeof npmSetupResultSchema>;
