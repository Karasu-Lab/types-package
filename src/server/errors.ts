import type { ZodError } from "zod";
import { apiErrorBodySchema, type IssueData } from "../shared/error";

export class Issue {
    readonly code: string;
    readonly path: (string | number)[];
    readonly message: string;

    constructor(code: string, path: (string | number)[], message: string) {
        this.code = code;
        this.path = path;
        this.message = message;
    }

    static fromZodError(error: ZodError): Issue[] {
        return error.issues.map(
            (issue) =>
                new Issue(
                    issue.code,
                    issue.path.map((segment) =>
                        typeof segment === "symbol" ? String(segment) : segment,
                    ),
                    issue.message,
                ),
        );
    }

    toJSON(): IssueData {
        return { code: this.code, path: this.path, message: this.message };
    }
}

export class HttpError extends Error {
    readonly status: number;
    readonly body: Record<string, unknown>;
    readonly headers?: Record<string, string>;
    readonly issues: Issue[];

    constructor(
        status: number,
        body: Record<string, unknown>,
        headers?: Record<string, string>,
        issues: Issue[] = [],
    ) {
        const message = apiErrorBodySchema.safeParse(body);
        super(message.success ? message.data.error : `HTTP ${status}`);
        this.name = "HttpError";
        this.status = status;
        this.body = body;
        this.headers = headers;
        this.issues = issues;
    }
}

export class BadRequestError extends HttpError {
    constructor(message = "Bad Request") {
        super(400, { error: message });
        this.name = "BadRequestError";
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message = "Unauthorized") {
        super(401, { error: message });
        this.name = "UnauthorizedError";
    }
}

export class NotFoundError extends HttpError {
    constructor(body: string | Record<string, unknown> = "Not Found") {
        super(404, typeof body === "string" ? { error: body } : body);
        this.name = "NotFoundError";
    }
}

export class RateLimitedError extends HttpError {
    constructor(retryAfterSeconds: number) {
        super(
            429,
            { code: "rate_limited", retryAfterSeconds },
            { "Retry-After": String(retryAfterSeconds) },
        );
        this.name = "RateLimitedError";
    }
}

export class UnknownPermissionError extends Error {
    constructor() {
        super("Unknown permission");
        this.name = "UnknownPermissionError";
    }
}
