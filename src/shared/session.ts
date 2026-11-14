export type SessionSource = string;

export interface SessionWithSource {
    session: { id: string; [key: string]: unknown };
    user: { id: string; [key: string]: unknown };
    source: SessionSource | null;
}

export interface SessionDeviceSource {
    sessionId: string;
    userId: string;
    source: SessionSource;
}

export interface AuthSession {
    id: string;
    userId: string;
    ipAddress: string | null;
    userAgent: string | null;
    createdAt: string;
    updatedAt: string;
    expiresAt: string;
}

export interface ActiveSession extends AuthSession {
    source: SessionSource | null;
    current: boolean;
}
