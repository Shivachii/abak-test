import type { Metadata } from "next";
// import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

// const merriweather = Merriweather({
//   subsets: ["latin"],
//   variable: "--font-merriweather",
//   weight: ["400", "700"],
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["400", "600", "700"],
// });

export const metadata: Metadata = {
  title:
    "AhlulBayt Assembly of Kenya (ABAK) | Spreading the Light of the Ahlul Bayt (a.s)",
  description:
    "ABAK is dedicated to spreading the teachings of the Ahlul Bayt (a.s) in Kenya through education, humanitarian programs, media outreach, and community empowerment.",
  keywords: [
    "AhlulBayt Kenya",
    "ABAK",
    "Shi'a Muslim Kenya",
    "Islamic education Kenya",
    "Ahlul Bayt outreach",
    "Shia Islam East Africa",
    "Muslim community service Kenya",
  ],
  openGraph: {
    title: "AhlulBayt Assembly of Kenya (ABAK)",
    description:
      "Join ABAK in promoting the message of the Ahlul Bayt (a.s) through educational, charitable, and community-driven programs in Kenya.",
    url: "https://www.abak.or.ke",
    siteName: "AhlulBayt Assembly of Kenya",
    images: [
      {
        url: "https://www.abak.or.ke/opengraph-image.png", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "AhlulBayt Assembly of Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.abak.or.ke",
  },
};
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} className="scroll-smooth ">
      <body className="font-inter antialiased">
        {" "}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
