export const locales = ["en", "sw", "ar"] as const;
export type Locale = (typeof locales)[number];
