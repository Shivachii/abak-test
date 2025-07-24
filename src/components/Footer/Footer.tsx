import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { FooterLogo } from "../Logos/Logo";
import { getTranslations } from "next-intl/server";
import { getIcon } from "@/helpers/iconPicker";

interface FooterProps {
  data: {
    description: string;
    quickLinks: { label: string; href: string }[];
    contactInfo: { email: string; phone: string };
    socialLinks: { platform: string; url: string }[];
  };
}

export default async function Footer({ data }: FooterProps) {
  const t = await getTranslations("footer");

  const {
    contactInfo: contact,
    socialLinks: socials,
    quickLinks,
    description,
  } = data;

  return (
    <footer className="bg-secondary text-white px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Logo + Mission */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <FooterLogo />
          </Link>
          <p className="text-sm leading-relaxed text-white">{description}</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-2 text-tertiary">
            {t("quickLinks")}
          </h4>
          {quickLinks?.map((link) => (
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
            {contact.email && (
              <Link
                href={`mailto:${contact.email}`}
                className="flex items-center gap-1"
              >
                <Mail size={18} className="text-primary" />
                {contact.email}
              </Link>
            )}
            {contact.phone && (
              <Link
                href={`tel:${contact.phone}`}
                className="flex items-center gap-1"
              >
                <Phone size={18} className="text-primary" />
                {contact.phone}
              </Link>
            )}
          </div>

          <div className="flex gap-4 mt-2">
            {socials.map((social, i) => {
              const Icon = getIcon(social.platform);
              return (
                Icon && (
                  <Link
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
