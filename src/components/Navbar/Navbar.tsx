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
// import LocaleSwitcher from "../LocaleComps/LocaleSwitcher";
import LocaleSwitcher from "../Buttons/LocaleSwitcher";

interface LinksProps {
  name: string;
  href: string;
  description?: string;
}

const NavLinks: LinksProps[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Work",
    href: "#",
  },

  {
    name: "Islamic Learning",
    href: "#",
  },
  { name: "Resources", href: "/resources" },

  { name: "Contact Us", href: "/contact" },
  // {
  //   name: "Support Us",
  //   href: "#",
  // },
];

// const supportUsLinks: LinksProps[] = [
//   {
//     name: "Donate",
//     href: "/donate",
//     description:
//       "Contribute towards our $10,000 monthly goal and uplift communities.",
//   },
//   {
//     name: "Volunteer",
//     href: "/volunteer",
//     description:
//       "Join our mission—share your time, skills, and passion for meaningful impact.",
//   },
// ];

const resourceLinks: LinksProps[] = [
  {
    name: "Publications",
    href: "/resources/publications",
  },
  {
    name: "Media Gallery",
    href: "/resources/media-gallery",
  },
];

const islamicLearningLinks: LinksProps[] = [
  { name: "Hawza Seminary", href: "/islamic-learning/hawza-seminary" },
  {
    name: "Qur'an Reflections",
    href: "/islamic-learning/quran-reflections",
  },
];

const ourWorkLinks: LinksProps[] = [
  {
    name: "Objectives",
    href: "/governing-objectives",
    description: "Explore ABAK’s foundational goals and guiding principles.",
  },
  {
    name: "Programs",
    href: "/programs",
    description: "Learn about our ongoing initiatives and community impact.",
  },
  {
    name: "Events",
    href: "/events",
    description: "Stay informed about our past, current, and upcoming events.",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full">
      {/* TOP BAR: Only visible on md and above */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-secondary text-white text-sm">
        {/* Social Links */}
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

        {/* Contact Info & Donate */}
        <div className="flex items-center gap-4">
          <Link
            href="mailto:ahlulbaytassembly9@gmail.com"
            className="flex items-center gap-1"
          >
            <Mail size={18} className="text-primary" />
            ahlulbaytassembly9@gmail.com
          </Link>
          <Link href="tel:+254704788924" className="flex items-center gap-1">
            <Phone size={18} className="text-primary" />
            +254 704 788924
          </Link>
          <Link
            href={"/volunteer"}
            className="bg-primary text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-primary/90 transition"
          >
            Volunteer
          </Link>
          <Link
            href={"/donate"}
            className="bg-primary text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-primary/90 relative "
          >
            <span className="animate-pulse transition duration-700 bg-red-500 h-3 w-3 rounded-full absolute translate-x-14 -translate-y-3" />
            Donate
          </Link>
          <LocaleSwitcher />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between px-4 py-4 bg-white md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="hidden md:block">
            <NavbarLogo />
          </div>
          <div className="block md:hidden">
            <NavbarLogoSmall />
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 relative">
          {NavLinks.map((link, i) => (
            <div
              key={i}
              className="p-1 group relative rounded-sm  hover:bg-gray-100 transition-all "
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
                  {/* Display ChevronDown only for dropdown items */}
                  {(link.name === "Islamic Learning" ||
                    link.name === "Support Us" ||
                    link.name === "Our Work" ||
                    link.name === "Resources") && (
                    <ChevronDown
                      width={15}
                      height={15}
                      className="rotate-180 transition-all group-hover:rotate-0 duration-300"
                    />
                  )}
                </p>
              </Link>

              {/* Dropdown for "Support Us" */}
              {/* {link.name === "Support Us" && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -right-5 top-8 text-black z-50">
                  {supportUsLinks.map((subLink, x) => (
                    <Link
                      href={subLink.href}
                      key={x}
                      className={`flex flex-col py-1 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100  ${
                        pathname === subLink.href
                          ? "bg-slate-100 "
                          : "text-black"
                      }  hover:bg-slate-100`}
                    >
                      <div className="flex flex-col gap-1 cursor-pointer ">
                        <span
                          className={`whitespace-nowrap  ${
                            pathname === subLink.href
                              ? "text-primary font-semibold "
                              : "text-black"
                          }  hover:bg-slate-100`}
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
              )} */}

              {/* Dropdown for "Islamic Learning" */}
              {link.name === "Islamic Learning" && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -left-9 top-8 text-black z-50">
                  {islamicLearningLinks.map((subLink, a) => (
                    <Link
                      href={subLink.href}
                      key={a}
                      className={`flex flex-col py-1 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100  ${
                        pathname === subLink.href
                          ? "bg-slate-100 "
                          : "text-black"
                      }  hover:bg-slate-100`}
                    >
                      <div className="flex flex-col gap-1 cursor-pointer ">
                        <span
                          className={`whitespace-nowrap  ${
                            pathname === subLink.href
                              ? "text-primary font-semibold "
                              : "text-black"
                          }  hover:bg-slate-100`}
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

              {/* Dropdown for "Our Work" */}
              {link.name === "Our Work" && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -left-9 top-8 text-black z-50">
                  {ourWorkLinks.map((subLink, y) => (
                    <Link
                      href={subLink.href}
                      key={y}
                      className={`flex flex-col py-1 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100  ${
                        pathname === subLink.href
                          ? "bg-slate-100 "
                          : "text-black"
                      }  hover:bg-slate-100`}
                    >
                      <div className="flex flex-col gap-1 cursor-pointer ">
                        <span
                          className={`whitespace-nowrap  ${
                            pathname === subLink.href
                              ? "text-primary font-semibold "
                              : "text-black"
                          }  hover:bg-slate-100`}
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

              {/* Dropdown for "Resources" */}
              {link.name === "Resources" && (
                <div className="absolute hidden gap-1 w-max grid-cols-1 rounded-lg py-3 px-2 shadow-md transition-all group-hover:grid bg-white -left-9 top-7 text-black z-50">
                  {resourceLinks.map((subLink, v) => (
                    <Link
                      href={subLink.href}
                      key={v}
                      className={`flex flex-col py-1 pl-6 pr-8 rounded-sm items-start hover:bg-slate-100  ${
                        pathname === subLink.href
                          ? "bg-slate-100 "
                          : "text-black"
                      }  hover:bg-slate-100`}
                    >
                      <div className="flex flex-col gap-1 cursor-pointer ">
                        <span
                          className={`whitespace-nowrap  ${
                            pathname === subLink.href
                              ? "text-primary font-semibold "
                              : "text-black"
                          }  hover:bg-slate-100`}
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
            </div>
          ))}
        </nav>

        {/* Sidebar Toggle on Mobile */}
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
