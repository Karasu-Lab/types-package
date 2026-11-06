import { z } from "zod";

export const locales = ["ja", "en", "cn"] as const;

export const localeSchema = z.enum(locales);

export type Locale = z.infer<typeof localeSchema>;
