import { z } from "zod";

export const avatarUserSchema = z.object({
    id: z.string(),
    image: z.string(),
});

export type AvatarUser = z.infer<typeof avatarUserSchema>;

export const userinfoAvatarClaimsSchema = z.object({
    sub: z.string(),
    picture: z.string(),
});

export type UserinfoAvatarClaims = z.infer<typeof userinfoAvatarClaimsSchema>;

export const deviceSessionAvatarEntrySchema = z.object({
    user: avatarUserSchema,
});

export type DeviceSessionAvatarEntry = z.infer<
    typeof deviceSessionAvatarEntrySchema
>;
