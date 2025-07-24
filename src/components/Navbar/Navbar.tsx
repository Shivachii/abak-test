"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, ChevronDown } from "lucide-react";

import Sidebar from "@/components/Navbar/Sidebar";
import { LanguagePicker } from "../Buttons/LocaleSwitcher";
import { NavbarLogo, NavbarLogoSmall } from "../Logos/Logo";

import { CTAButton, LinkItem } from "@/hooks/navbarDataFetcher/types";
import { SidebarData } from "../../../sanity/lib/fetchNavbar";
import { getIcon } from "@/helpers/iconPicker";

interface NavbarProps {
  navLinks: LinkItem[];
  ctaButtons: CTAButton[];
  siteSettings: {
    socialLinks?: { platform: string; url: string }[];
    contactInfo?: { email: string; phone: string };
  };
  sidebarData: SidebarData;
}

export default function Navbar({
  navLinks,
  ctaButtons,
  siteSettings,
  sidebarData,
}: NavbarProps) {
  const pathname = usePathname();
  const socials = siteSettings?.socialLinks || [];
  const contact: { email: string; phone: string } =
    siteSettings?.contactInfo ?? { email: "", phone: "" };

  return (
    <header className="w-full">
      {/* Top bar with socials, contact, CTA buttons */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-secondary text-white text-sm">
        <div className="flex items-center gap-4">
          {socials.map((social, i) => {
            const Icon = getIcon(social.platform);

            return (
              Icon && (
                <Link
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.platform} page`}
                >
                  <Icon size={18} className="hover:text-primary transition" />
                </Link>
              )
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {contact?.email ? (
            <Link
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1 hover:text-primary transition"
            >
              <Mail size={18} className="text-primary" />
              {contact.email}
            </Link>
          ) : null}
          {contact?.phone ? (
            <Link
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1 hover:text-primary transition"
            >
              <Phone size={18} className="text-primary" />
              {contact.phone}
            </Link>
          ) : null}

          {/* Render processed CTA buttons */}
          {ctaButtons.map((cta, index) => (
            <Link
              key={index}
              href={cta.href}
              className={`px-4 py-2 rounded-md shadow-md hover:opacity-90 transition ${
                cta.style === "primary"
                  ? "bg-primary text-gray-700"
                  : "bg-white text-primary border border-primary"
              }`}
            >
              {cta.label}
            </Link>
          ))}

          <LanguagePicker />
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex items-center justify-between px-4 py-4 bg-white md:px-8">
        <Link href="/" className="flex items-center">
          <div className="hidden md:block">
            <NavbarLogo />
          </div>
          <div className="block md:hidden">
            <NavbarLogoSmall />
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 relative">
          {navLinks.map((link, i) => (
            <div
              key={i}
              className="p-1 group relative rounded-sm hover:bg-gray-100 transition-all"
            >
              <Link href={link.href} className="relative">
                <p
                  className={`flex cursor-pointer items-center gap-2 ${
                    pathname === link.href
                      ? "text-primary font-bold underline underline-offset-8 decoration-2 decoration-primary"
                      : "text-black"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.children && link.children.length > 0 && (
                    <ChevronDown
                      width={15}
                      height={15}
                      className="rotate-180 transition-all group-hover:rotate-0 duration-300"
                    />
                  )}
                </p>
              </Link>

              {/* Dropdown menu */}
              {link.children && link.children.length > 0 && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -left-9 top-8 text-black z-50 border border-gray-200">
                  {link.children.map((child, y) => (
                    <Link
                      href={child.href}
                      key={y}
                      className={`flex flex-col py-2 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100 transition-colors ${
                        pathname === child.href ? "bg-slate-100" : "text-black"
                      }`}
                    >
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <span
                          className={`whitespace-nowrap ${
                            pathname === child.href
                              ? "text-primary font-semibold"
                              : "text-black"
                          }`}
                        >
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="text-[12px] text-gray-500 tracking-tight max-w-[250px]">
                            {child.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="md:hidden">
          <Sidebar data={sidebarData} />
        </div>
      </div>
    </header>
  );
}
