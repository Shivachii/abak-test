"use client";
import Link from "next/link";
import { NavbarLogo, NavbarLogoSmall } from "../Logos/Logo";
import {
  ChevronDown,
  FacebookIcon,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { LanguagePicker } from "../Buttons/LocaleSwitcher";
import { useTranslations } from "next-intl";

interface LinksProps {
  name: string;
  href: string;
  description?: string;
}

export default function Navbar() {
  const t = useTranslations("nav");
  const NavLinks: LinksProps[] = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("ourWork"), href: "#" },
    { name: t("hawza"), href: "/islamic-learning/hawza-seyyidah" },
    { name: t("resources"), href: "#" },
    { name: t("contact"), href: "/contact" },
  ];

  const resourceLinks: LinksProps[] = [
    {
      name: t("resourcesDropdown.publications"),
      href: "/resources/publications",
    },
    {
      name: t("resourcesDropdown.audioVisual"),
      href: "/resources/audio-visual",
    },
  ];

  // const islamicLearningLinks: LinksProps[] = [
  //   {
  //     name: t("islamicLearningDropdown.hawza"),
  //     href: "/islamic-learning/hawza-seyyidah",
  //   },
  //   {
  //     name: t("islamicLearningDropdown.quranReflections"),
  //     href: "/islamic-learning/quran-reflections",
  //   },
  // ];

  const ourWorkLinks: LinksProps[] = [
    {
      name: t("ourWorkDropdown.objectives"),
      href: "/governing-objectives",
      description: t("ourWorkDropdown.objectivesDesc"),
    },
    {
      name: t("ourWorkDropdown.programs"),
      href: "/programs",
      description: t("ourWorkDropdown.programsDesc"),
    },
    {
      name: t("ourWorkDropdown.events"),
      href: "/events",
      description: t("ourWorkDropdown.eventsDesc"),
    },
  ];
  const pathname = usePathname();
  return (
    <header className="w-full">
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-secondary text-white text-sm">
        <div className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/+254704788924"
            target="_blank"
            aria-label="Facebook"
          >
            <FacebookIcon size={18} className="hover:text-primary transition" />
          </Link>
          <Link
            href="https://twitter.com/Ahlul_Bayt_Ke"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter size={18} className="hover:text-primary transition" />
          </Link>
          <Link
            href="https://www.instagram.com/ahlulbaytassembly/"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram size={18} className="hover:text-primary transition" />
          </Link>
          <Link
            href="https://www.youtube.com/@AhlulBaytAssemblyKenya"
            target="_blank"
            aria-label="YouTube"
          >
            <Youtube size={18} className="hover:text-primary transition" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="mailto:info@ahlulbaytassembly.org"
            className="flex items-center gap-1"
          >
            <Mail size={18} className="text-primary" />
            info@ahlulbaytassembly.org
          </Link>
          <Link href="tel:+254704788924" className="flex items-center gap-1">
            <Phone size={18} className="text-primary" />
            +254 704 788924
          </Link>
          <Link
            href={"/volunteer"}
            className="bg-primary text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-primary/90 transition"
          >
            {t("volunteer")}
          </Link>
          {/* <Link
            href={"/donate"}
            className="bg-primary text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-primary/90 relative "
          >
            {t("donate")}
          </Link> */}
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
          {NavLinks.map((link, i) => (
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
                  <span>{link.name}</span>
                  {(link.name === t("ourWork") ||
                    link.name === t("resources")) && (
                    <ChevronDown
                      width={15}
                      height={15}
                      className="rotate-180 transition-all group-hover:rotate-0 duration-300"
                    />
                  )}
                </p>
              </Link>

              {/* {link.name === t("islamicLearning") && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -left-9 top-8 text-black z-50">
                  {islamicLearningLinks.map((subLink, a) => (
                    <Link
                      href={subLink.href}
                      key={a}
                      className={`flex flex-col py-1 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100 ${
                        pathname === subLink.href
                          ? "bg-slate-100"
                          : "text-black"
                      }`}
                    >
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <span
                          className={`whitespace-nowrap ${
                            pathname === subLink.href
                              ? "text-primary font-semibold"
                              : "text-black"
                          }`}
                        >
                          {subLink.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )} */}

              {link.name === t("ourWork") && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -left-9 top-8 text-black z-50">
                  {ourWorkLinks.map((subLink, y) => (
                    <Link
                      href={subLink.href}
                      key={y}
                      className={`flex flex-col py-1 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100 ${
                        pathname === subLink.href
                          ? "bg-slate-100"
                          : "text-black"
                      }`}
                    >
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <span
                          className={`whitespace-nowrap ${
                            pathname === subLink.href
                              ? "text-primary font-semibold"
                              : "text-black"
                          }`}
                        >
                          {subLink.name}
                        </span>
                        <span className="text-[12px] text-gray-500 tracking-tight">
                          {subLink.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {link.name === t("resources") && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -left-9 top-7 text-black z-50">
                  {resourceLinks.map((subLink, v) => (
                    <Link
                      href={subLink.href}
                      key={v}
                      className={`flex flex-col py-1 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100 ${
                        pathname === subLink.href
                          ? "bg-slate-100"
                          : "text-black"
                      }`}
                    >
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <span
                          className={`whitespace-nowrap ${
                            pathname === subLink.href
                              ? "text-primary font-semibold"
                              : "text-black"
                          }`}
                        >
                          {subLink.name}
                        </span>
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
