import { SanityLocalizedLink } from "@/hooks/navbarDataFetcher/types";

export function getLocalizedString(
  localized: Record<string, string> | null | undefined,
  locale: string,
  fallback = ""
): string {
  if (!localized || typeof localized !== "object") return fallback;
  return localized[locale] || fallback || Object.values(localized)[0] || "";
}

export function getLinkHref(link: SanityLocalizedLink, locale: string): string {
  if (!link) return `# Missing ${locale}`;

  if (link.linkType === "external" && link.externalUrl) {
    return link.externalUrl;
  }

  if (link.linkType === "internal" && link.internalLink?.href) {
    const href = link.internalLink.href;
    return href.startsWith("/") ? href : `/${href}`;
  }

  // Fallback for internal links without proper href
  if (link.linkType === "internal" && link.internalLink?.key) {
    return `/${link.internalLink.key}`;
  }

  return "#";
}
