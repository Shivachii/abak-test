"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const objectives = [
  {
    name: "Propagation of Islam",
    href: "/governing-objectives/propagation-of-islam",
  },
  {
    name: "Organization of Shia Communities",
    href: "/governing-objectives/organization-of-shia-communities",
  },
  {
    name: "Training of Mubaligheen",
    href: "/governing-objectives/training-of-mubaligheen",
  },
  {
    name: "Support for Mubaligheen",
    href: "/governing-objectives/support-for-mubaligheen",
  },
  {
    name: "Content Creation",
    href: "/governing-objectives/content-creation",
  },
  {
    name: "Learning Institutions",
    href: "/governing-objectives/learning-institutions",
  },
  {
    name: "Community Services",
    href: "/governing-objectives/community-services",
  },
  { name: "Hawza Seminary", href: "/governing-objectives/hawza-seminary" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-5 hidden lg:block w-72 bg-white border-r h-fit p-4 rounded-md shadow-md m-4">
      <h3 className="text-secondary text-sm  font-semibold uppercase mb-4">
        ABAK&apos;S KEY OBJECTIVES
      </h3>
      <ul className="space-y-3 text-sm font-medium">
        {objectives.map((objective) => (
          <li key={objective.name}>
            <Link
              href={objective.href}
              className={`block transition-colors ${
                pathname === objective.href
                  ? "text-primary font-semibold"
                  : "text-gray-600"
              } hover:text-primary`}
            >
              {objective.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
