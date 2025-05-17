"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { GlobeIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const locales = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "ar", label: "Arabic" },
];

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left text-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none"
      >
        <GlobeIcon className="w-4 h-4 mr-2 " />
        {locales.find((l) => l.code === currentLocale)?.label}
        <ChevronDownIcon className="ml-2 w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="py-1">
            {locales.map(({ code, label }) => (
              <li key={code}>
                <button
                  onClick={() => switchLocale(code)}
                  className={`block px-4 py-2 text-sm w-full text-left ${
                    code === currentLocale
                      ? "bg-gray-100 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
