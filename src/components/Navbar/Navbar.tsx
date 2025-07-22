"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react";

import Sidebar from "@/components/Navbar/Sidebar";
import { LanguagePicker } from "../Buttons/LocaleSwitcher";
import { NavbarLogo, NavbarLogoSmall } from "../Logos/Logo";

interface LinkItem {
  label: string;
  href: string;
  description?: string;
  children?: LinkItem[];
}

interface NavbarProps {
  data: {
    navLinks: LinkItem[];
    ctaButtons: {
      label: string;
      href: string;
      style: "primary" | "secondary";
    }[];
    siteSettings: {
      socialLinks: { platform: string; url: string }[];
      contactInfo: { email: string; phone: string };
    };
  };
}

export default function Navbar({ data }: NavbarProps) {
  const pathname = usePathname();
  const socials = data.siteSettings?.socialLinks || [];
  const contact = data.siteSettings?.contactInfo || {};

  return (
    <header className="w-full">
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-secondary text-white text-sm">
        <div className="flex items-center gap-4">
          {socials.map((social, i) => {
            const Icon =
              social.platform === "Facebook"
                ? FacebookIcon
                : social.platform === "Twitter"
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

        <div className="flex items-center gap-4">
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
          {data.ctaButtons.map((cta, index) => (
            <Link
              key={index}
              href={cta.href}
              className={`${
                cta.style === "primary"
                  ? "bg-primary text-gray-700"
                  : "bg-white text-primary border border-primary"
              } px-4 py-2 rounded-md shadow-md hover:opacity-90 transition`}
            >
              {cta.label}
            </Link>
          ))}
          <LanguagePicker />
        </div>
      </div>

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
          {data.navLinks.map((link, i) => (
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
                  {Array.isArray(link.children) && link.children.length > 0 && (
                    <ChevronDown
                      width={15}
                      height={15}
                      className="rotate-180 transition-all group-hover:rotate-0 duration-300"
                    />
                  )}
                </p>
              </Link>

              {link.children && link.children.length > 0 && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -left-9 top-8 text-black z-50">
                  {link.children.map((child, y) => (
                    <Link
                      href={child.href}
                      key={y}
                      className={`flex flex-col py-1 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100 ${
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
                          <span className="text-[12px] text-gray-500 tracking-tight">
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
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
