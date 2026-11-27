import { z } from "zod";

export const providerProfileSchema = z.object({
    name: z.string().nullable(),
    email: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    accountId: z.string().nullable().optional(),
});

export type ProviderProfile = z.infer<typeof providerProfileSchema>;

export interface ProviderClient {
    providerId: string;
    clientId: string | null;
    iconPath: string;
}

export enum ProviderStreamEvent {
    Clients = "clients",
    Profile = "profile",
    LinkState = "link-state",
}

export type ProviderStreamEvents = {
    [ProviderStreamEvent.Clients]: {
        clients: ProviderClient[];
    };
    [ProviderStreamEvent.Profile]: {
        providerId: string;
        profile: ProviderProfile | null;
    };
    [ProviderStreamEvent.LinkState]: {
        providerId: string;
        providerUserId: string;
        linkable: boolean;
    };
};
