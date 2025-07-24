// sanity/lib/processNavbar.server.ts
import { getLocalizedString, getLinkHref } from "@/helpers/navbarFetchHelper";

interface SanityLocalizedLink {
  _type: string;
  label: Record<string, string>;
  description?: Record<string, string>;
  linkType: "internal" | "external";
  internalLink?: {
    key?: string;
    href?: string;
  } | null;
  externalUrl?: string | null;
}

interface SanityNavItem {
  link: SanityLocalizedLink;
  children?: SanityLocalizedLink[] | null;
}

interface SanityCTAButton {
  link: SanityLocalizedLink;
  style: "primary" | "secondary";
}

interface LinkItem {
  label: string;
  href: string;
  description?: string;
  children?: LinkItem[];
}

interface CTAButton {
  label: string;
  href: string;
  style: "primary" | "secondary";
}

export interface ProcessedNavbarData {
  navLinks: LinkItem[];
  ctaButtons: CTAButton[];
}

export function processNavbarDataServer(
  data: { navLinks?: SanityNavItem[]; ctaButtons?: SanityCTAButton[] },
  locale: string
): ProcessedNavbarData {
  const navLinks = (data.navLinks || [])
    .map((item): LinkItem | null => {
      if (!item?.link) return null;

      const label = getLocalizedString(item.link.label, locale);
      const description = getLocalizedString(item.link.description, locale);
      const href = getLinkHref(item.link, locale);
      if (!label) return null;

      const children = (item.children || [])
        .map((child): LinkItem | null => {
          const childLabel = getLocalizedString(child.label, locale);
          const childDescription = getLocalizedString(
            child.description,
            locale
          );
          const childHref = getLinkHref(child, locale);
          if (!childLabel) return null;

          return {
            label: childLabel,
            description: childDescription || undefined,
            href: childHref,
          };
        })
        .filter((c): c is LinkItem => !!c);

      return {
        label,
        href,
        description: description || undefined,
        children: children.length > 0 ? children : undefined,
      };
    })
    .filter((l): l is LinkItem => !!l);

  const ctaButtons = (data.ctaButtons || [])
    .map((cta): CTAButton | null => {
      if (!cta?.link) return null;
      const label = getLocalizedString(cta.link.label, locale);
      const href = getLinkHref(cta.link, locale);
      if (!label) return null;

      return {
        label,
        href,
        style: cta.style,
      };
    })
    .filter((c): c is CTAButton => !!c);

  return { navLinks, ctaButtons };
}
