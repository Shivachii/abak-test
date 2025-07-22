import Link from "next/link";
import {
  FacebookIcon,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Twitter,
} from "lucide-react";
import { FooterLogo } from "../Logos/Logo";

import { getTranslations } from "next-intl/server";

interface FooterProps {
  data: {
    description: string;
    quickLinks: { label: string; href: string }[];
    siteSettings: {
      socialLinks: { platform: string; url: string }[];
      contactInfo: { email: string; phone: string };
    };
  };
}

export default async function Footer({ data }: FooterProps) {
  const t = await getTranslations("footer");

  const socials = data.siteSettings?.socialLinks || [];
  const contact = data.siteSettings?.contactInfo || {};

  return (
    <footer className="bg-secondary text-white px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Logo + Mission */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <FooterLogo />
          </Link>
          <p className="text-sm leading-relaxed text-white">
            {data.description}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-2 text-tertiary">
            {t("quickLinks")}
          </h4>
          {data.quickLinks?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-amber-300 transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg mb-2 text-tertiary">
            {t("contactUs")}
          </h4>
          <div className="text-sm space-y-2">
            <Link
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1"
            >
              <Mail size={18} className="text-primary" />
              {contact.email}
            </Link>
            <Link
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1"
            >
              <Phone size={18} className="text-primary" />
              {contact.phone}
            </Link>
          </div>

          <div className="flex gap-4 mt-2">
            {socials.map((social, i) => {
              const Icon =
                social.platform === "Facebook"
                  ? FacebookIcon
                  : social.platform === "Icon"
                    ? Twitter
                    : social.platform === "Instagram"
                      ? Instagram
                      : social.platform === "YouTube"
                        ? Youtube
                        : null;
              return (
                Icon && (
                  <Link
                    key={i}
                    href={social.url}
                    target="_blank"
                    aria-label={social.platform}
                  >
                    <Icon size={18} className="hover:text-primary transition" />
                  </Link>
                )
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-white/10 pt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AhlulBayt Assembly of Kenya (ABAK).
        All rights reserved.
      </div>
    </footer>
  );
}
