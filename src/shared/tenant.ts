import { z } from "zod";

export const tenantOrganizationSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type TenantOrganization = z.infer<typeof tenantOrganizationSchema>;

export const createTenantOrganizationRequestSchema = z.object({
    name: z.string().trim().min(1).max(255),
});

export type CreateTenantOrganizationRequest = z.infer<
    typeof createTenantOrganizationRequestSchema
>;

export const tenantMemberRoleSchema = z.enum(["owner", "admin", "member"]);

export type TenantMemberRole = z.infer<typeof tenantMemberRoleSchema>;

export const tenantMemberSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    userId: z.string(),
    role: tenantMemberRoleSchema,
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type TenantMember = z.infer<typeof tenantMemberSchema>;

export const tenantInvitationStatusSchema = z.enum([
    "pending",
    "accepted",
    "expired",
    "revoked",
]);

export type TenantInvitationStatus = z.infer<
    typeof tenantInvitationStatusSchema
>;

export const tenantInvitationSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    email: z.string(),
    role: tenantMemberRoleSchema,
    status: tenantInvitationStatusSchema,
    expiresAt: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type TenantInvitation = z.infer<typeof tenantInvitationSchema>;

export const createTenantInvitationRequestSchema = z.object({
    email: z.string().trim().min(1).max(255),
    role: tenantMemberRoleSchema,
});

export type CreateTenantInvitationRequest = z.infer<
    typeof createTenantInvitationRequestSchema
>;
