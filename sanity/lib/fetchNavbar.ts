import { client } from "./client";
import {
  NAVBAR_QUERY,
  FOOTER_QUERY,
  SIDEBAR_QUERY,
} from "./queries/componentQueries/componentQueries";
import { sanityFetch } from "./live";

export async function fetchNavbar(locale: string) {
  return await client.fetch(NAVBAR_QUERY, { lang: locale });
}

type FooterData = {
  description: string;
  quickLinks: { label: string; href: string }[];
  contactInfo: { email: string; phone: string };
  socialLinks: { platform: string; url: string }[];
};

export async function getFooterData(locale: string): Promise<FooterData> {
  const { data } = await sanityFetch({
    query: FOOTER_QUERY,
    params: { lang: locale },
  });

  const raw = data ?? {};

  const quickLinks =
    raw.footerLinks?.map((item: any) => {
      const label = item.link?.label?.[locale] ?? "Untitled";
      let href = "#";

      if (item.link?.linkType === "internal" && item.link?.internalLink?.href) {
        href = item.link.internalLink.href.startsWith("/")
          ? item.link.internalLink.href
          : `/${item.link.internalLink.href}`;
      } else if (item.link?.linkType === "external" && item.link?.externalUrl) {
        href = item.link.externalUrl;
      }

      return { label, href };
    }) ?? [];

  const contactInfo = raw.siteSettings?.contactInfo ?? {
    address: "",
    email: "",
    phone: "",
  };

  const socialLinks = raw.siteSettings?.socialLinks ?? [];

  return {
    description: raw.description ?? "",
    quickLinks,
    contactInfo,
    socialLinks,
  };
}

export type SidebarData = {
  quickLinks: { label: string; href: string }[];
  contactInfo: { email: string; phone: string };
  socialLinks: { platform: string; url: string }[];
};

export async function getSidebarData(locale: string): Promise<SidebarData> {
  const { data } = await sanityFetch({
    query: SIDEBAR_QUERY,
    params: { lang: locale },
  });

  const raw = data ?? {};

  const quickLinks =
    raw.sidebarLinks?.map((item: any) => {
      const label = item.link?.label?.[locale] ?? "Untitled";
      let href = "#";

      if (item.link?.linkType === "internal" && item.link?.internalLink?.href) {
        href = item.link.internalLink.href.startsWith("/")
          ? item.link.internalLink.href
          : `/${item.link.internalLink.href}`;
      } else if (item.link?.linkType === "external" && item.link?.externalUrl) {
        href = item.link.externalUrl;
      }

      return { label, href };
    }) ?? [];

  const contactInfo = raw.siteSettings?.contactInfo ?? {
    address: "",
    email: "",
    phone: "",
  };

  const socialLinks = raw.siteSettings?.socialLinks ?? [];

  return {
    quickLinks,
    contactInfo,
    socialLinks,
  };
}
