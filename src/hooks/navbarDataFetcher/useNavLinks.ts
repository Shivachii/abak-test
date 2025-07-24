import { getLinkHref, getLocalizedString } from "@/helpers/navbarFetchHelper";
import { useLocale } from "next-intl";

// Updated types to match actual Sanity data structure
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

// Enhanced data processing interface
export interface ProcessedNavbarData {
  navLinks: LinkItem[];
  ctaButtons: CTAButton[];
}

// Process navigation links
export function useNavLinks(navLinks: SanityNavItem[] = []): LinkItem[] {
  const locale = useLocale();

  return navLinks
    .map((item): LinkItem | null => {
      if (!item?.link) return null;

      const { link, children = [] } = item;

      const label = getLocalizedString(link.label, locale);
      const description = getLocalizedString(link.description, locale);
      const href = getLinkHref(link, locale);

      // Skip items with no label
      if (!label) return null;

      const mappedChildren = (children || [])
        .map((child): LinkItem | null => {
          if (!child) return null;

          const childLabel = getLocalizedString(child.label, locale);
          const childDescription = getLocalizedString(
            child.description,
            locale
          );
          const childHref = getLinkHref(child, locale);

          // Skip children with no label
          if (!childLabel) return null;

          return {
            label: childLabel,
            description: childDescription || undefined,
            href: childHref,
          };
        })
        .filter((child): child is LinkItem => child !== null);

      return {
        label,
        description: description || undefined,
        href,
        children: mappedChildren.length > 0 ? mappedChildren : undefined,
      };
    })
    .filter((item): item is LinkItem => item !== null);
}

// Process CTA buttons
export function useCTAButtons(ctaButtons: SanityCTAButton[] = []): CTAButton[] {
  const locale = useLocale();

  return ctaButtons
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
    .filter((cta): cta is CTAButton => cta !== null);
}

// Combined hook for processing all navbar data
export function useNavbarData(data: {
  navLinks?: SanityNavItem[];
  ctaButtons?: SanityCTAButton[];
}): ProcessedNavbarData {
  const navLinks = useNavLinks(data.navLinks);
  const ctaButtons = useCTAButtons(data.ctaButtons);

  return {
    navLinks,
    ctaButtons,
  };
}
