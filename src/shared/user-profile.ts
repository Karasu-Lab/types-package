import { z } from "zod";

/** The public profile of a user, as exposed by api-auth.karasu256.com. */
export const userProfileSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;

export const updateUserProfileRequestSchema = z.object({
    name: z.string().nullable(),
});

export type UpdateUserProfileRequest = z.infer<
    typeof updateUserProfileRequestSchema
>;
