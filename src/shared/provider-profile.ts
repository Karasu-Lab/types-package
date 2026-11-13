import { z } from "zod";

export const providerProfileSchema = z.object({
    name: z.string().nullable(),
    email: z.string().nullable(),
    avatarUrl: z.string().nullable(),
});

export type ProviderProfile = z.infer<typeof providerProfileSchema>;

export enum ProviderStreamEvent {
    Profile = "profile",
}

export type ProviderStreamEvents = {
    [ProviderStreamEvent.Profile]: {
        providerId: string;
        profile: ProviderProfile | null;
    };
};
