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
  title: "ABAK | AhlulBayt Assembly of Kenya",
  description:
    "Spreading the message of the Ahlul Bayt (a.s) through education, outreach, and community service.",
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
    <html lang={locale} className="scroll-smooth">
      <body className="font-inter antialiased">
        {" "}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
