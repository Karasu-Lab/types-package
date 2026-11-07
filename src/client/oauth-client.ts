import { z } from "zod";
import type {
    OAuthClientSummary,
    OAuthClientType,
} from "../shared/oauth-client";

export const DEVICE_CODE_GRANT_TYPE =
    "urn:ietf:params:oauth:grant-type:device_code";

export function oauthClientType(
    client: Pick<OAuthClientSummary, "grant_types">,
): OAuthClientType {
    const grantTypes = client.grant_types ?? [];
    return grantTypes.includes(DEVICE_CODE_GRANT_TYPE) &&
        !grantTypes.includes("authorization_code")
        ? "device"
        : "web";
}

export function oauthClientIsPublic(
    client: Pick<OAuthClientSummary, "token_endpoint_auth_method" | "public">,
): boolean {
    return (
        client.public === true || client.token_endpoint_auth_method === "none"
    );
}

export const authorizedAppSummarySchema = z.object({
    id: z.string(),
    clientId: z.string(),
    clientName: z.string().optional(),
    createdAt: z.string(),
});

export type AuthorizedAppSummary = z.infer<typeof authorizedAppSummarySchema>;

export const authorizedAppDetailSchema = authorizedAppSummarySchema.extend({
    logoUri: z.string().optional(),
    scopes: z.array(z.string()),
});

export type AuthorizedAppDetail = z.infer<typeof authorizedAppDetailSchema>;

export const authorizedAppSchema = authorizedAppDetailSchema;

export type AuthorizedApp = z.infer<typeof authorizedAppSchema>;

export const permissionSectionSchema = z.object({
    key: z.string(),
    canRead: z.boolean(),
    canWrite: z.boolean(),
});

export type PermissionSection = z.infer<typeof permissionSectionSchema>;

export function groupScopesBySection(scopes: string[]): PermissionSection[] {
    const byKey = new Map<string, PermissionSection>();
    for (const scope of scopes) {
        const [mode, key] = scope.split(":");
        if (!key || (mode !== "read" && mode !== "write")) continue;
        const section = byKey.get(key) ?? {
            key,
            canRead: false,
            canWrite: false,
        };
        if (mode === "read") section.canRead = true;
        else section.canWrite = true;
        byKey.set(key, section);
    }
    return [...byKey.values()];
}
