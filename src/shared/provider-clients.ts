import type { ProviderStreamEvents } from "./provider-profile";

export interface ProviderClient {
    providerId: string;
    clientId: string | null;
    iconPath: string;
}

export const ProviderStreamClientsEvent = "clients" as const;

export type ProviderStreamEventsWithClients = ProviderStreamEvents & {
    clients: {
        clients: ProviderClient[];
    };
};
