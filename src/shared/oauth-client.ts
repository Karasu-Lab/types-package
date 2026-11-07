import { z } from "zod";

export const oauthClientTypeSchema = z.enum(["web", "device"]);

export type OAuthClientType = z.infer<typeof oauthClientTypeSchema>;

export const oauthClientSummarySchema = z.object({
    client_id: z.string(),
    client_name: z.string().optional(),
    logo_uri: z.string().optional(),
    redirect_uris: z.array(z.string()),
    scope: z.string().optional(),
    grant_types: z.array(z.string()).optional(),
    token_endpoint_auth_method: z.string().optional(),
    description: z.string().nullable().optional(),
    icon_url: z.string().nullable().optional(),
    resource: z.string().nullable().optional(),
    public: z.boolean().optional(),
});

export type OAuthClientSummary = z.infer<typeof oauthClientSummarySchema>;

export const oauthClientCreatedSchema = oauthClientSummarySchema.extend({
    client_secret: z.string().optional(),
});

export type OAuthClientCreated = z.infer<typeof oauthClientCreatedSchema>;

export const oauthClientInfoSchema = z.object({
    client_id: z.string(),
    name: z.string(),
    author_id: z.string().nullable(),
    icon_url: z.string().nullable(),
    description: z.string().nullable(),
    resource: z.string().nullable(),
    public: z.boolean(),
});

export type OAuthClientInfo = z.infer<typeof oauthClientInfoSchema>;

export const oauthClientInfoResponseSchema = oauthClientInfoSchema.extend({
    client_secret: z.string().optional(),
    scope_bitmask: z.string().optional(),
});

export type OAuthClientInfoResponse = z.infer<
    typeof oauthClientInfoResponseSchema
>;

export const upsertOAuthClientInfoBodySchema = z.object({
    name: z.string().trim().min(1).max(255),
    icon_url: z.string().max(2048).nullable().optional(),
    description: z.string().max(2000).nullable().optional(),
    resource: z.string().max(2048).nullable().optional(),
    public: z.boolean().optional(),
});

export type UpsertOAuthClientInfoBody = z.infer<
    typeof upsertOAuthClientInfoBodySchema
>;
