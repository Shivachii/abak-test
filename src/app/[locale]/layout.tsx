import ScrollToTop from "@/components/Buttons/ScrollToTop";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "sonner";
import {
  CheckCircle2,
  Info,
  AlertTriangle,
  XCircle,
  Loader2,
} from "lucide-react";
import { sanityFetch, SanityLive } from "../../../sanity/lib/live";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "../../i18n/routing";
import { getFooterData, getSidebarData } from "../../../sanity/lib/fetchNavbar";
import { NAVBAR_QUERY } from "../../../sanity/lib/componentQueries";
import { processNavbarDataServer } from "@/hooks/navbarDataFetcher/processNavbarData.server";
// import StickyDonateForm from "@/components/Forms/StickyDonation";

export default async function FrontendLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const { data } = await sanityFetch({
    query: NAVBAR_QUERY,
    params: { lang: locale },
  });

  // ✅ Correct: process only the navLinks and ctaButtons fields
  const { navLinks, ctaButtons, siteSettings } = data;

  const processedNavbar = processNavbarDataServer(
    { navLinks, ctaButtons },
    locale
  );

  const footerData = await getFooterData((await params).locale);
  const sidebarData = await getSidebarData((await params).locale);

  return (
    <section>
      {" "}
      <Navbar
        navLinks={processedNavbar.navLinks}
        ctaButtons={processedNavbar.ctaButtons}
        siteSettings={siteSettings}
        sidebarData={sidebarData}
      />
      {children}
      <Toaster
        position="top-right"
        richColors
        icons={{
          success: <CheckCircle2 className="text-green-600" />,
          info: <Info className="text-blue-600" />,
          warning: <AlertTriangle className="text-yellow-600" />,
          error: <XCircle className="text-red-600" />,
          loading: <Loader2 className="animate-spin text-gray-500" />,
        }}
      />
      {/* <StickyDonateForm /> */}
      <ScrollToTop />
      <SanityLive />
      <Footer data={footerData} />
    </section>
  );
}
