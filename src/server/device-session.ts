export interface DeviceSessionSource {
    cookieHeader: string | null;
    getSignedCookie: (name: string) => Promise<string | false | null>;
    findSessions: (
        tokens: string[],
    ) => Promise<
        ({ user: { id: string }; session: { expiresAt: Date } } | null)[]
    >;
}
