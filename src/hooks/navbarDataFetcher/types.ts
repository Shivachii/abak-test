// Updated types to match actual Sanity data structure
export interface SanityLocalizedLink {
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

export interface SanityNavItem {
  link: SanityLocalizedLink;
  children?: SanityLocalizedLink[] | null;
}

export interface SanityCTAButton {
  link: SanityLocalizedLink;
  style: "primary" | "secondary";
}

// Updated types to match actual Sanity data structure
export interface SanityLocalizedLink {
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

export interface SanityNavItem {
  link: SanityLocalizedLink;
  children?: SanityLocalizedLink[] | null;
}

export interface SanityCTAButton {
  link: SanityLocalizedLink;
  style: "primary" | "secondary";
}

export interface LinkItem {
  label: string;
  href: string;
  description?: string;
  children?: LinkItem[];
}

export interface CTAButton {
  label: string;
  href: string;
  style: "primary" | "secondary";
}

// Enhanced data processing interface
export interface ProcessedNavbarData {
  navLinks: LinkItem[];
  ctaButtons: CTAButton[];
}
