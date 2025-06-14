"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Menu,
  SidebarClose,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { NavbarLogoSmall } from "../Logos/Logo";
import { LanguagePicker } from "../Buttons/LocaleSwitcher";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const t = useTranslations("sidebar");
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  if (!isMounted) return null;

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const mainsideLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("objectives"), href: "/governing-objectives" },
    { name: t("hawza"), href: "/islamic-learning/hawza-seyyidah" },
    { name: t("programs"), href: "/programs" },
    { name: t("events"), href: "/events" },
  ];

  return (
    <>
      <div className="flex gap-4 items-center">
        <LanguagePicker />
        {/* Hamburger Button */}
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="p-4"
        >
          <Menu />
        </button>
      </div>

      {/* Sidebar */}
      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-80 h-full overflow-y-auto bg-white shadow-lg z-50 p-4 flex flex-col justify-between"
      >
        {/* Header with Logo */}
        <div className="flex justify-between items-center mb-4">
          <Link href="/">
            <NavbarLogoSmall />
          </Link>
          <button onClick={toggleSidebar} aria-label="Close Sidebar">
            <SidebarClose />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8 mb-5">
          <ul className="flex flex-col space-y-4">
            {mainsideLinks.map((link, i) => (
              <motion.li
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                key={link.name}
              >
                <Link
                  href={link.href}
                  onClick={toggleSidebar}
                  className={`hover:underline font-semibold text-gray-800 ${
                    pathName === link.href ? "text-primary font-bold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <Accodrions toggleSidebar={toggleSidebar} />

            <motion.li
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={"/contact"}
                onClick={toggleSidebar}
                className={`hover:underline font-semibold text-gray-800 ${
                  pathName === "/contact" ? "text-primary font-bold" : ""
                }`}
              >
                {t("contact")}
              </Link>
            </motion.li>
          </ul>
        </nav>

        <div className="flex items-center justify-center py-2 my-4">
          <Link
            href={"/donate"}
            className="bg-primary px-2 py-1 rounded-md animate-bounce duration-1000 transition-all hover:bg-primary/90 text-white font-bold flex items-center justify-center h-10 w-80"
          >
            {t("donate")}
          </Link>
        </div>

        {/* Footer Section */}
        <div className="mt-auto">
          <div className="flex flex-col space-y-4 py-2 text-sm">
            <p className="font-bold">OFFICIAL INFO</p>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="mailto:ahlulbaytassembly9@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="text-primary" size={20} />
                  ahlulbaytassembly9@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+254704788924"
                  className="flex items-center gap-2"
                >
                  <Phone className="text-primary" size={20} />
                  +254 704 788924
                </Link>
              </li>
            </ul>
            <hr />
            <div className="w-full pt-4">
              <div className="flex space-x-4 items-center">
                {[
                  {
                    href: "https://facebook.com/yourpage",
                    icon: (
                      <Facebook
                        fill="#fff"
                        strokeWidth={0}
                        width={20}
                        height={20}
                      />
                    ),
                  },
                  {
                    href: "https://linkedin.com/company/yourpage",
                    icon: (
                      <Linkedin
                        fill="#fff"
                        strokeWidth={0}
                        width={20}
                        height={20}
                      />
                    ),
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.href}
                    className="bg-maroon rounded-full p-2 flex justify-center items-center"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;

function Accodrions({ toggleSidebar }: { toggleSidebar: () => void }) {
  const t = useTranslations("sidebar");

  const [openSection, setOpenSection] = useState<null | string>(null);

  const pathName = usePathname();

  return (
    <>
      {/* Islamic Learning Accordion */}
      {/* <div className="">
        <button
          onClick={() =>
            setOpenSection(openSection === "learning" ? null : "learning")
          }
          className="text-left w-full font-semibold text-gray-800 flex justify-between items-center"
        >
          {t("islamicLearning")}
          <span>{openSection === "learning" ? "−" : "+"}</span>
        </button>
        <motion.ul
          initial={false}
          animate={{
            height: openSection === "learning" ? "auto" : 0,
            opacity: openSection === "learning" ? 1 : 0,
          }}
          className="overflow-hidden flex flex-col pl-4 space-y-3 mt-2 text-sm"
        >
          <li>
            <Link
              href="/islamic-learning/quran-reflections"
              onClick={toggleSidebar}
              className={`hover:underline \ text-gray-800 ${
                pathName === "/islamic-learning/quran-reflections"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("quranReflections")}
            </Link>
          </li>
          <li>
            <Link
              href="/islamic-learning/hawza-seyyidah"
              onClick={toggleSidebar}
              className={`hover:underline  text-gray-800 ${
                pathName === "/islamic-learning/hawza-seyyidah"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("hawza")}
            </Link>
          </li>
        </motion.ul>
      </div> */}

      {/* Resources Accordion */}
      <div className="">
        <button
          onClick={() =>
            setOpenSection(openSection === "resources" ? null : "resources")
          }
          className="text-left w-full font-semibold text-gray-800 flex justify-between items-center"
        >
          {t("resources")}
          <span>{openSection === "resources" ? "−" : "+"}</span>
        </button>
        <motion.ul
          initial={false}
          animate={{
            height: openSection === "resources" ? "auto" : 0,
            opacity: openSection === "resources" ? 1 : 0,
          }}
          className="overflow-hidden flex flex-col pl-4 space-y-3 mt-2 text-sm"
        >
          <li>
            <Link
              href="/resources/publications"
              onClick={toggleSidebar}
              className={`hover:underline  text-gray-800 ${
                pathName === "/resources/publications"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("publications")}
            </Link>
          </li>
          <li>
            <Link
              href="/resources/audio-visual"
              onClick={toggleSidebar}
              className={`hover:underline  text-gray-800 ${
                pathName === "/resources/audio-visual"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("audioVisual")}
            </Link>
          </li>
        </motion.ul>
      </div>
    </>
  );
}
