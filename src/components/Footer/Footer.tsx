import Link from "next/link";
import {
  FacebookIcon,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import { NavbarLogoSmall } from "../Logos/Logo";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Logo + Mission */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <NavbarLogoSmall />
          </Link>
          <p className="text-sm leading-relaxed text-white">
            ABAK (AhlulBayt Assembly of Kenya) is committed to spreading the
            noble teachings of Islam through education, community service, and
            interfaith unity.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-2 text-tertiary">
            Quick Links
          </h4>
          {[
            { name: "About", href: "/about" },
            { name: "Programs", href: "/programs" },
            { name: "Events", href: "/events" },
            { name: "Blog", href: "/blog" },
            { name: "Donate", href: "/donate" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-amber-300 transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg mb-2 text-tertiary">
            Contact Us
          </h4>
          <p className="text-sm text-white space-y-2">
            <Link
              href="mailto:ahlulbaytassembly9@gmail.com"
              className="flex gap-1 items-center"
            >
              <Mail className="text-primary" size={18} />
              ahlulbaytassembly9@gmail.com
            </Link>
            <Link className="flex gap-1 items-center" href="tel:254704 788924">
              <Phone className="text-primary" size={18} />
              +254 704 788924
            </Link>
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              href="https://www.facebook.com/+254704788924"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon className="hover:text-amber-300" />
            </Link>
            <Link
              href="https://twitter.com/Ahlul_Bayt_Ke"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter className="hover:text-amber-300" />
            </Link>
            <Link
              href="https://www.instagram.com/ahlulbaytassembly/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="hover:text-amber-300" />
            </Link>
            <Link
              href="https://www.youtube.com/@AhlulBaytAssemblyKenya"
              target="_blank"
              aria-label="YouTube"
            >
              <Youtube className="hover:text-amber-300" />
            </Link>
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
