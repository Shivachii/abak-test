export const locales = ["en", "sw", "ar", "fa"] as const;
export type Locale = (typeof locales)[number];
