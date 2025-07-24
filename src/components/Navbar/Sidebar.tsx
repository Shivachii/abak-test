"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarLogoSmall } from "../Logos/Logo";
import { LanguagePicker } from "../Buttons/LocaleSwitcher";
import { getIcon } from "@/helpers/iconPicker";
import { Mail, Menu, Phone, SidebarClose } from "lucide-react";

interface SidebarProps {
  data: {
    quickLinks: {
      label: string;
      href: string;
      children?: { label: string; href: string }[];
    }[];
    contactInfo: {
      email: string;
      phone: string;
    };
    socialLinks: {
      platform: string;
      url: string;
    }[];
  };
}

const Sidebar = ({ data }: SidebarProps) => {
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

  const { contactInfo: contact, socialLinks: socials, quickLinks } = data;

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
            <ul className="flex flex-col space-y-4">
              {quickLinks.map((link, i) => {
                const hasChildren = link.children && link.children.length > 0;

                return (
                  <motion.li
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    key={link.label}
                  >
                    {hasChildren ? (
                      <Accordions link={link} toggleSidebar={toggleSidebar} />
                    ) : (
                      <Link
                        href={link.href}
                        onClick={toggleSidebar}
                        className={`hover:underline font-semibold text-gray-800 ${
                          pathName === link.href ? "text-primary font-bold" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </ul>
            <motion.li
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              {/* <Link
                href={"/contact"}
                onClick={toggleSidebar}
                className={`hover:underline font-semibold text-gray-800 ${
                  pathName === "/contact" ? "text-primary font-bold" : ""
                }`}
              >
                {t("contact")}
              </Link> */}
            </motion.li>
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="mt-auto">
          <div className="flex flex-col space-y-4 py-2 text-sm">
            <p className="font-bold">OFFICIAL INFO</p>
            <ul className="flex flex-col space-y-3">
              <li>
                {contact.email ? (
                  <Link
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-1 hover:text-primary transition"
                  >
                    <Mail size={18} className="text-primary" />
                    {contact.email}
                  </Link>
                ) : null}
              </li>
              <li>
                {contact?.phone ? (
                  <Link
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-1 hover:text-primary transition"
                  >
                    <Phone size={18} className="text-primary" />
                    {contact.phone}
                  </Link>
                ) : null}
              </li>
            </ul>
            <hr />
            <div className="w-full pt-4">
              <div className="flex space-x-4 items-center">
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
                        <Icon
                          size={18}
                          className="hover:text-primary transition"
                        />
                      </Link>
                    )
                  );
                })}
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

type AccordionProps = {
  toggleSidebar: () => void;
  link: {
    label: string;
    href: string;
    children?: {
      label: string;
      description?: string;
      href: string;
    }[];
  };
};

function Accordions({ link, toggleSidebar }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const hasChildren = link.children && link.children.length > 0;

  return (
    <div className="mb-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold text-gray-800 flex justify-between items-center"
      >
        {link.label}
        <span>{open ? "−" : "+"}</span>
      </button>

      <motion.ul
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        className="overflow-hidden flex flex-col pl-4 space-y-2 mt-2 text-sm"
      >
        {hasChildren &&
          link.children!.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                onClick={toggleSidebar}
                className={`hover:underline text-gray-800 ${
                  pathname === child.href ? "text-primary font-bold" : ""
                }`}
              >
                {child.label}
              </Link>
            </li>
          ))}
      </motion.ul>
    </div>
  );
}
